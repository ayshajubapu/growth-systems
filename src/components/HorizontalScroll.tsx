import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { n: "01", title: "SEO", body: "Authority architectures that compound. Technical, editorial, and topical depth engineered for sustained organic dominance." },
  { n: "02", title: "Web Development", body: "Conversion-led websites built as systems. Performant, considered, and engineered for the buyer's journey." },
  { n: "03", title: "Social Marketing", body: "Brand presence that earns attention. Editorial content cycles that translate into communities and pipeline." },
  { n: "04", title: "Performance Marketing", body: "Paid systems built around attribution. Creative testing, funnels, and full-stack measurement." },
  { n: "05", title: "Content Strategy", body: "Narrative as infrastructure. Long-arc content that builds category authority and inbound demand." },
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
        {/* PANEL 1 — BRAND STATEMENT */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "min-h-[92vh] w-full"} flex items-center px-6 sm:px-10 lg:px-24 py-24 lg:py-0`}>
          <div className="absolute inset-0 glow-bg pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full opacity-[0.04] bg-accent blur-3xl" />
          <div className="relative max-w-6xl">
            <p data-reveal className="eyebrow mb-8 lg:mb-10">— Start With Us / Est. Excellence</p>
            <h1 data-reveal className="font-display text-[13vw] sm:text-[11vw] md:text-[8.5vw] leading-[0.95] tracking-tight text-balance">
              We build digital <span className="italic text-accent">systems</span><br/>that generate revenue.
            </h1>
            <p data-reveal className="mt-8 lg:mt-12 text-base sm:text-lg text-muted-foreground max-w-xl tracking-wide">
              Strategy. Design. Performance. A studio for brands unwilling to be ordinary.
            </p>
            <div data-reveal className="mt-10 lg:mt-14 flex flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="btn-gold">Request Strategy Call →</a>
              <a href="#work" className="btn-ghost">View Work</a>
            </div>
          </div>
          {isDesktop && (
            <div className="absolute bottom-10 right-10 text-xs uppercase tracking-[0.4em] text-muted-foreground rotate-90 origin-bottom-right">
              Scroll —
            </div>
          )}
        </section>

        {/* PANEL 2 — SERVICES */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-24 lg:py-0`}>
          <div className="flex items-end justify-between mb-12 lg:mb-16 flex-wrap gap-6">
            <div>
              <p data-reveal className="eyebrow mb-4 lg:mb-6">02 — Growth Systems</p>
              <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] max-w-3xl">
                Five disciplines.<br/>One <span className="italic text-accent">compounding</span> system.
              </h2>
            </div>
            <p data-reveal className="hidden lg:block text-sm text-muted-foreground max-w-xs">
              Each engagement is custom-built around a single outcome — measurable revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {services.map((s) => (
              <article
                key={s.n}
                data-reveal
                className="service-card group relative bg-background hover:bg-surface transition-all duration-700 p-6 sm:p-8 min-h-[240px] lg:min-h-[340px] flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />
                <div className="flex items-start justify-between relative z-10">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground">{s.n}</span>
                  <span className="text-accent translate-x-0 group-hover:translate-x-1 transition-transform duration-500">→</span>
                </div>
                <div className="relative z-10">
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
              Built for brands<br/>that want <span className="italic text-accent">growth</span><br/>— not just presence.
            </h2>
            <p data-reveal className="text-muted-foreground max-w-md leading-relaxed">
              We partner with operators who treat marketing as infrastructure, not decoration.
            </p>
          </div>
          <div className="bg-surface flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-16 md:py-20 border-t md:border-t-0 md:border-l border-border">
            {[
              { k: "Corporate Teams", v: "Mature brands seeking new growth velocity." },
              { k: "Startups", v: "Founders building category-defining narratives." },
              { k: "Ambitious Graduates", v: "Personal brands with executive ambition." },
            ].map((a, i) => (
              <div key={a.k} data-reveal className={`py-8 md:py-10 ${i !== 0 ? "border-t border-border" : ""}`}>
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs text-muted-foreground tracking-[0.3em]">0{i + 1}</span>
                  <div>
                    <h4 className="font-display text-2xl sm:text-3xl mb-2">{a.k}</h4>
                    <p className="text-sm text-muted-foreground">{a.v}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PANEL 4 — RESULTS */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-24 lg:py-0`}>
          <p data-reveal className="eyebrow mb-10 lg:mb-12">04 — Authority In Numbers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { v: "₹5Cr+", l: "Client revenue generated" },
              { v: "120+", l: "Brands partnered" },
              { v: "10+", l: "Industries served" },
            ].map((r) => (
              <div key={r.l} data-reveal className="bg-background p-8 sm:p-12 lg:p-16 min-h-[28vh] md:min-h-[40vh] flex flex-col justify-between">
                <span className="num-display text-6xl sm:text-7xl md:text-8xl text-accent">{r.v}</span>
                <span className="text-sm text-muted-foreground tracking-wide mt-6 md:mt-8">— {r.l}</span>
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
              {["Strategy", "SEO", "Web", "Performance", "Content", "Brand", "Systems", "Authority", "Velocity"].map((w) => (
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
