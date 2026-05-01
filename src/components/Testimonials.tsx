import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import p1 from "@/assets/portrait-1.jpg";
import p2 from "@/assets/portrait-2.jpg";
import p3 from "@/assets/portrait-3.jpg";
import p4 from "@/assets/portrait-4.jpg";
import p5 from "@/assets/portrait-5.jpg";
import p6 from "@/assets/portrait-6.jpg";
import p7 from "@/assets/portrait-7.jpg";
import p8 from "@/assets/portrait-8.jpg";
import p9 from "@/assets/portrait-9.jpg";
import p10 from "@/assets/portrait-10.jpg";
import p11 from "@/assets/portrait-11.jpg";
import p12 from "@/assets/portrait-12.jpg";

gsap.registerPlugin(ScrollTrigger);

/**
 * Arc / fan composition of portrait cards.
 * Each card has: image, x offset (vw-ish via %), y offset (px), rotation, width, z-index.
 * Layout designed so the row dips in the middle (arc) — exactly like the reference.
 */
type Card = {
  src?: string;
  /** ghost = empty rounded card (background filler at far edges) */
  ghost?: boolean;
  /** anonymous = blur this client's portrait for privacy */
  anonymous?: boolean;
  x: number; // percentage from left of container
  y: number; // px vertical offset (lower = pushed down)
  rot: number; // rotation degrees
  w: number; // px width on desktop
  z: number;
  delay: number;
};

// 12 portrait cards arranged in a downward-dipping arc.
// Toggle `anonymous: true` on any card to ship with a blurred face for privacy.
const cards: Card[] = [
  { src: p1,  x: 6,  y: 70,  rot: -3, w: 140, z: 4, delay: 0.05 },
  { src: p2,  x: 15, y: 20,  rot: -2, w: 140, z: 5, delay: 0.10 },
  { src: p3,  x: 24, y: 90,  rot:  2, w: 140, z: 4, delay: 0.15 },
  { src: p4,  x: 33, y: 35,  rot: -1, w: 150, z: 6, delay: 0.20 },
  { src: p5,  x: 42, y: 95,  rot:  1, w: 150, z: 5, delay: 0.25 },
  { src: p6,  x: 50, y: 50,  rot: -2, w: 160, z: 7, delay: 0.30 },
  { src: p7,  x: 58, y: 95,  rot:  2, w: 150, z: 5, delay: 0.35 },
  { src: p8,  x: 67, y: 35,  rot: -1, w: 150, z: 6, delay: 0.40 },
  { src: p9,  x: 76, y: 90,  rot:  3, w: 140, z: 4, delay: 0.45 },
  { src: p10, x: 85, y: 25,  rot: -2, w: 140, z: 5, delay: 0.50, anonymous: true },
  { src: p11, x: 94, y: 80,  rot:  2, w: 140, z: 4, delay: 0.55 },
  { src: p12, x: 39, y: 165, rot: -2, w: 130, z: 3, delay: 0.60, anonymous: true },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Arc cards reveal — fall in from above with a subtle stagger
      gsap.set(".t-card", { y: -120, opacity: 0, rotate: 0 });
      gsap.utils.toArray<HTMLElement>(".t-card").forEach((el) => {
        const targetRot = parseFloat(el.dataset.rot || "0");
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.to(el, {
          y: 0,
          opacity: 1,
          rotate: targetRot,
          duration: 1.2,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            once: true,
          },
        });
      });

      // Headline + body reveal
      gsap.from(".t-reveal > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });

      // Subtle parallax drift on the whole arc
      gsap.to(".t-arc", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Client Testimonials | SmartPixel Chennai</title>
        <meta
          name="description"
          content="Trusted by leaders across travel, education, retail and more. Read what SmartPixel clients say about our websites, apps and growth systems."
        />
        <link rel="canonical" href="https://smartpixel.in/#testimonials" />
      </Helmet>

      <section
        id="voices"
        ref={ref}
        className="relative overflow-hidden bg-surface border-y border-border"
      >
        {/* faint vertical guide lines (like the reference) */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, hsl(var(--accent)) 0 1px, transparent 1px 140px)",
          }}
        />

        {/* ARC of portrait cards */}
        <div
          className="t-arc relative w-full mx-auto"
          style={{ height: "clamp(340px, 38vw, 520px)" }}
        >
          {cards.map((c, i) => {
            const heightRatio = 1.35; // portrait aspect
            return (
              <div
                key={i}
                className="t-card absolute will-change-transform"
                data-rot={c.rot}
                data-delay={c.delay}
                style={{
                  left: `${c.x}%`,
                  top: `${c.y}px`,
                  width: `clamp(70px, ${c.w / 14}vw, ${c.w}px)`,
                  zIndex: c.z,
                  transform: "translate(-50%, 0)",
                }}
              >
                <div
                  className="overflow-hidden rounded-2xl border border-border"
                  style={{
                    aspectRatio: `1 / ${heightRatio}`,
                    background: c.ghost
                      ? "linear-gradient(180deg, hsl(0 0% 100% / 0.04), hsl(0 0% 100% / 0.01))"
                      : "hsl(var(--background))",
                    boxShadow: c.ghost
                      ? "none"
                      : "0 20px 50px -20px hsl(0 0% 0% / 0.7)",
                  }}
                >
                  {!c.ghost && c.src && (
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={c.src}
                        alt={c.anonymous ? "Anonymous SmartPixel client" : "SmartPixel client"}
                        width={512}
                        height={768}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          c.anonymous ? "blur-md scale-110" : ""
                        }`}
                      />
                      {c.anonymous && (
                        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.2em] text-foreground/70 px-2 py-0.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10">
                          Private
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* gradient fade so the arc bleeds into the headline area */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(var(--surface)) 90%)",
            }}
          />
        </div>

        {/* HEADLINE BLOCK — centered, exactly like reference */}
        <div className="t-reveal relative z-10 max-w-4xl mx-auto px-6 text-center pb-24 sm:pb-32 -mt-10 sm:-mt-16">
          {/* pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-xs uppercase tracking-[0.3em] text-foreground mb-8">
            Testimonials
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            <span className="block text-foreground">Trusted by leaders</span>
            <span className="block text-muted-foreground italic">
              from various industries
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Learn why founders and operators trust SmartPixel to build
            websites, apps and growth systems that actually convert.
          </p>

          <div className="mt-10">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Read Success Stories
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
