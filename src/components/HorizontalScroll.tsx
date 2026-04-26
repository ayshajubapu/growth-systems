import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgTraining from "@/assets/service-training.jpg";
import imgDesign from "@/assets/service-design.jpg";
import imgWeb from "@/assets/service-web.jpg";
import imgMarketing from "@/assets/service-marketing.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    n: "01",
    title: "Corporate Training",
    tag: "Workforce & Campus",
    body: "Structured learning programs for corporate teams, colleges, and institutions. Curriculum that sticks — and outcomes that show up in performance reviews.",
    image: imgTraining,
  },
  {
    n: "02",
    title: "Design",
    tag: "Brand & Visual",
    body: "Identity systems, UI/UX, and marketing collateral built for clarity and recognition — for people who have to make decisions fast.",
    image: imgDesign,
  },
  {
    n: "03",
    title: "Web Development",
    tag: "Conversion-Led Builds",
    body: "Websites engineered around your buyer's journey. From institutional portals to startup landing pages — built to perform and convert.",
    image: imgWeb,
  },
  {
    n: "04",
    title: "Digital Marketing",
    tag: "Growth Systems",
    body: "SEO, paid media, social, and content — operated as a system. We build inbound pipelines and manage full-funnel growth for serious brands.",
    image: imgMarketing,
  },
];

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      const totalScroll = () => track.scrollWidth - window.innerWidth;

      const scrollTween = gsap.to(track, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => "+=" + totalScroll(),
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel) => {
        const reveals = panel.querySelectorAll<HTMLElement>("[data-reveal]");
        gsap.from(reveals, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left 70%",
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [isDesktop]);

  // Vertical reveals on mobile/tablet
  useEffect(() => {
    if (isDesktop) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isDesktop]);

  return (
    <section
      ref={containerRef}
      className={`relative bg-background ${isDesktop ? "horizontal-container h-screen overflow-hidden" : ""}`}
    >
      <div
        ref={trackRef}
        className={isDesktop ? "flex h-screen will-change-transform" : "flex flex-col"}
        style={isDesktop ? { width: "max-content" } : undefined}
      >
        {/* PANEL 1 — HERO */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "min-h-[92vh] w-full"} flex items-center px-6 sm:px-10 lg:px-24 py-24 lg:py-0`}>
          <div className="absolute inset-0 glow-bg pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full opacity-[0.04] bg-accent blur-3xl" />
          <div className="relative max-w-6xl">
            <p data-reveal className="eyebrow mb-8 lg:mb-10">— Start With Us / Est. Excellence</p>
            <h1 data-reveal className="font-display text-[12vw] sm:text-[10vw] md:text-[7.5vw] leading-[0.98] tracking-tight text-balance">
              We train teams, build brands,<br/>and grow businesses<br/>that <span className="italic text-accent">mean it</span>.
            </h1>
            <p data-reveal className="mt-8 lg:mt-12 text-base sm:text-lg text-muted-foreground max-w-2xl tracking-wide leading-relaxed">
              Corporate training programs, conversion-led web design, and performance digital marketing — for companies, colleges, and institutions ready to grow with intent.
            </p>
            <div data-reveal className="mt-10 lg:mt-14 flex flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="btn-gold">Request a Training Demo →</a>
              <a href="#work" className="btn-ghost">See Our Work</a>
            </div>
          </div>
          {isDesktop && (
            <div className="absolute bottom-10 right-10 text-xs uppercase tracking-[0.4em] text-muted-foreground rotate-90 origin-bottom-right">
              Scroll —
            </div>
          )}
        </section>

        {/* PANEL 2 — SERVICES */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-16 lg:py-12`}>
          <div className="flex items-end justify-between mb-8 lg:mb-10 flex-wrap gap-6">
            <div>
              <p data-reveal className="eyebrow mb-4 lg:mb-6">02 — Growth Systems</p>
              <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
                Three disciplines.<br/>One <span className="italic text-accent">compounding</span> system.
              </h2>
            </div>
            <p data-reveal className="hidden lg:block text-sm text-muted-foreground max-w-xs">
              Each engagement is custom-built around a single outcome — measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <article
                key={s.n}
                data-reveal
                className="service-card group relative bg-background transition-all duration-700 p-6 sm:p-7 min-h-[260px] lg:min-h-[300px] xl:min-h-[340px] flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Image reveal layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-40 group-hover:scale-100 transition-all duration-[1400ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40 opacity-100 group-hover:opacity-90 transition-opacity duration-700" />
                </div>

                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />

                <div className="flex items-start justify-between relative z-10">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground">{s.n}</span>
                  <span className="text-accent translate-x-0 group-hover:translate-x-1 transition-transform duration-500">→</span>
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent/80 mb-3">{s.tag}</p>
                  <h3 className="font-display text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PANEL 3 — AUDIENCE */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} grid md:grid-cols-2`}>
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-20">
            <p data-reveal className="eyebrow mb-6 lg:mb-8">03 — Built For</p>
            <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8 lg:mb-10">
              Built for the ones<br/>building <span className="italic text-accent">something real</span>.
            </h2>
            <p data-reveal className="text-muted-foreground max-w-md leading-relaxed">
              We partner with operators who treat training, design, and marketing as one connected growth system.
            </p>
          </div>
          <div className="bg-surface flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-16 md:py-20 border-t md:border-t-0 md:border-l border-border">
            {[
              { k: "Corporate Teams", v: "HR and L&D leaders who need training that delivers measurable skill uplift — not just attendance records." },
              { k: "Colleges & Universities", v: "Institutions building student-readiness programs, placement support, and campus digital infrastructure." },
              { k: "Growing Startups", v: "Founders who need a brand, a website, and a go-to-market engine — without hiring three separate agencies." },
              { k: "Institutions & NGOs", v: "Public bodies and non-profits investing in digital presence and community-facing communication systems." },
            ].map((a, i) => (
              <div key={a.k} data-reveal className={`py-6 md:py-7 ${i !== 0 ? "border-t border-border" : ""}`}>
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs text-muted-foreground tracking-[0.3em]">0{i + 1}</span>
                  <div>
                    <h4 className="font-display text-xl sm:text-2xl md:text-3xl mb-2">{a.k}</h4>
                    <p className="text-sm text-muted-foreground">{a.v}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PANEL 4 — NUMBERS */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-24 lg:py-0`}>
          <p data-reveal className="eyebrow mb-10 lg:mb-12">04 — Authority In Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {[
              { v: "₹5Cr+", l: "Client revenue generated" },
              { v: "3,200+", l: "Professionals trained" },
              { v: "60+", l: "Institutions partnered" },
              { v: "120+", l: "Brands & projects delivered" },
              { v: "10+", l: "Industries served" },
              { v: "9", l: "Years in practice" },
            ].map((r) => (
              <div key={r.l} data-reveal className="bg-background p-6 sm:p-10 lg:p-12 min-h-[22vh] md:min-h-[32vh] flex flex-col justify-between">
                <span className="num-display text-5xl sm:text-6xl md:text-7xl text-accent">{r.v}</span>
                <span className="text-xs sm:text-sm text-muted-foreground tracking-wide mt-4 md:mt-6">— {r.l}</span>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-10 lg:mt-14 text-muted-foreground max-w-xl">
            Numbers tell the truth. Our clients compound — quarter over quarter, year over year.
          </p>
        </section>
      </div>

      {/* Marquee strip — animated brand signature */}
      <div className="relative overflow-hidden border-y border-border bg-background py-6 lg:py-8">
        <div className="flex whitespace-nowrap animate-marquee gap-16 text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-16 shrink-0">
              {["Training", "Design", "Web", "Marketing", "Strategy", "Brand", "Systems", "Authority", "Velocity"].map((w) => (
                <span key={w} className="font-display text-3xl sm:text-4xl italic">
                  {w} <span className="text-accent not-italic">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
