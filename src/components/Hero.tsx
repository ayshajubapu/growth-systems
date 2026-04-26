import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Premium cinematic hero.
 * - Aurora gradient + grain background
 * - Headline: per-word mask reveal with scrambled accent
 * - Live ticker (time, locale, status)
 * - Floating index marquee
 * - Magnetic CTA + animated rule
 */
const LOCATIONS = ["BLR · 09:24", "NYC · 23:54", "LDN · 04:54", "DXB · 07:54"];

const Hero = () => {
  const root = useRef<HTMLDivElement>(null);
  const [tickIdx, setTickIdx] = useState(0);

  // Initial cinematic intro
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".h-word", { yPercent: 110, opacity: 0 });
      gsap.set(".h-rise", { y: 40, opacity: 0 });
      gsap.set(".h-rule", { scaleX: 0, transformOrigin: "0% 50%" });
      gsap.set(".h-aurora", { opacity: 0, scale: 1.05 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".h-aurora", { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" }, 0)
        .to(".h-eyebrow", { y: 0, opacity: 1, duration: 0.9 }, 0.2)
        .to(".h-rule", { scaleX: 1, duration: 1.1, ease: "expo.out" }, 0.3)
        .to(".h-word", { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.045 }, 0.45)
        .to(".h-rise", { y: 0, opacity: 1, duration: 1, stagger: 0.08 }, 0.9);

      // Subtle constant float on the accent orb
      gsap.to(".h-orb", {
        y: "+=24", x: "+=14", duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".h-orb-2", {
        y: "-=20", x: "-=18", duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  // Rotate live ticker
  useEffect(() => {
    const id = setInterval(() => setTickIdx((i) => (i + 1) % LOCATIONS.length), 2400);
    return () => clearInterval(id);
  }, []);

  const headline1 = ["We", "train", "teams,"];
  const headline2 = ["build", "brands,"];
  const headline3 = ["and", "grow", "businesses"];
  const headline4 = ["that"];
  const accentWord = "mean it.";

  return (
    <div ref={root} className="relative w-full h-full flex items-center px-6 sm:px-10 lg:px-24 py-16 lg:py-0 overflow-hidden">
      {/* AURORA / BACKGROUND LAYERS */}
      <div className="h-aurora absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 glow-bg" />
        <div className="h-orb absolute top-[18%] left-[8%] w-[55vmin] h-[55vmin] rounded-full bg-accent/[0.08] blur-[120px]" />
        <div className="h-orb-2 absolute bottom-[10%] right-[6%] w-[45vmin] h-[45vmin] rounded-full bg-[hsl(220_50%_40%/0.08)] blur-[120px]" />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* Noise / grain */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* TOP META BAR */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-10 lg:left-24 right-6 sm:right-10 lg:right-24 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-muted-foreground z-10">
        <div className="h-eyebrow opacity-0 translate-y-2 flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
          </span>
          <span>Studio Live</span>
          <span className="hidden sm:inline text-foreground/30">·</span>
          <span className="hidden sm:inline tabular-nums transition-opacity duration-500">{LOCATIONS[tickIdx]}</span>
        </div>
        <div className="h-eyebrow opacity-0 translate-y-2 hidden md:flex items-center gap-4">
          <span>Est. 2016</span>
          <span className="text-foreground/30">·</span>
          <span>Vol. IX</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl w-full z-10">
        {/* Eyebrow with rule */}
        <div className="flex items-center gap-5 mb-10 lg:mb-14">
          <span className="h-rule block h-px w-16 sm:w-24 bg-accent" />
          <span className="h-eyebrow opacity-0 translate-y-2 eyebrow">Start With Us — Studio N° 01</span>
        </div>

        {/* HEADLINE — per-word mask reveal */}
        <h1 className="font-display tracking-tight leading-[0.95] text-[14vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[7.6vw] text-balance">
          <Line words={headline1} />
          <Line words={headline2} />
          <Line words={headline3} />
          <Line words={headline4} accentTrail={accentWord} />
        </h1>

        {/* SUBHEAD + CTA */}
        <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-8 items-end">
          <p className="h-rise opacity-0 lg:col-span-6 text-base sm:text-lg text-muted-foreground tracking-wide leading-relaxed max-w-xl">
            Corporate training programs, conversion-led web design, and performance digital marketing — for companies, colleges, and institutions ready to grow with intent.
          </p>

          <div className="h-rise opacity-0 lg:col-span-6 lg:justify-self-end flex flex-wrap gap-3 sm:gap-4">
            <a href="#contact" className="btn-gold group relative overflow-hidden">
              <span className="relative z-10">Request a Training Demo</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="btn-ghost">See Our Work</a>
          </div>
        </div>

        {/* BOTTOM STRIP — index + scroll cue */}
        <div className="h-rise opacity-0 mt-16 lg:mt-20 flex items-end justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-6 sm:gap-10">
            {[
              ["01", "Training"],
              ["02", "Design"],
              ["03", "Web"],
              ["04", "Marketing"],
            ].map(([n, l]) => (
              <div key={n} className="flex items-baseline gap-2">
                <span className="text-[10px] tracking-[0.3em] text-accent">{n}</span>
                <span className="text-xs sm:text-sm text-foreground/70">{l}</span>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <span>Scroll</span>
            <span className="block w-10 h-px bg-foreground/30 relative overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-1/2 bg-accent animate-[hero-scroll_2.4s_ease-in-out_infinite]" />
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-scroll {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
};

const Line = ({ words, accentTrail }: { words: string[]; accentTrail?: string }) => (
  <span className="block overflow-hidden">
    {words.map((w, i) => (
      <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
        <span className="h-word inline-block">{w}</span>
      </span>
    ))}
    {accentTrail && (
      <span className="inline-block overflow-hidden align-bottom">
        <span className="h-word inline-block italic text-accent">{accentTrail}</span>
      </span>
    )}
  </span>
);

export default Hero;
