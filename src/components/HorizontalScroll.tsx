import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgWeb from "@/assets/sp-web.jpg";
import imgMobile from "@/assets/sp-mobile.jpg";
import imgMarketing from "@/assets/sp-marketing.jpg";
import imgDesign from "@/assets/sp-design.jpg";
import imgEcom from "@/assets/sp-ecom.jpg";
import imgHero from "@/assets/sp-hero.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    n: "01",
    title: "Web App Development",
    tag: "Custom Builds",
    body: "Web applications engineered for real traffic, real transactions, and real complexity — without the fragility of cut corners.",
    image: imgWeb,
  },
  {
    n: "02",
    title: "Mobile App Development",
    tag: "iOS & Android",
    badge: "Most Popular",
    body: "Native and cross-platform apps your customers will actually open again — built with respect for performance and user time.",
    image: imgMobile,
  },
  {
    n: "03",
    title: "Digital Marketing",
    tag: "Growth Systems",
    body: "Connected pipelines of SEO, paid media, and content that compound. We work on the numbers that keep businesses alive.",
    image: imgMarketing,
  },
  {
    n: "04",
    title: "Web Design",
    tag: "Brand & Experience",
    body: "Design that earns trust before a single word is read. Clean, fast, and built to hold up across every screen that matters.",
    image: imgDesign,
  },
  {
    n: "05",
    title: "E-Commerce Development",
    tag: "Online Stores",
    body: "A storefront that's open 24 hours and built to sell — Shopify, WooCommerce, and custom platforms that scale.",
    image: imgEcom,
  },
];

const clients = [
  "Al Miraj", "Travel Hub Tambaram", "Gulf To World", "Arabian Vibes",
  "Triumph Travel & Tourism", "LTS Learning Academy", "Surya Prakash Metals",
  "Priya Silver Jewellery", "Manohar Jewelleries", "Fotrio Edu", "Manha Hajj & Umrah",
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
        if (!reveals.length) return;
        gsap.set(reveals, { y: 60, opacity: 0 });
        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: scrollTween,
          start: "left 95%",
          end: "right left",
          once: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.to(reveals, {
              y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.08, overwrite: "auto",
            });
          },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, container);

    return () => ctx.revert();
  }, [isDesktop]);

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
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "min-h-[100svh] w-full"} flex items-center px-5 sm:px-10 lg:px-24 pt-28 pb-16 lg:py-0`}>
          {/* Hero background image */}
          <div className="absolute inset-0">
            <img
              src={imgHero}
              alt="Premium digital agency hero"
              className="w-full h-full object-cover opacity-30 lg:opacity-40"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          </div>
          <div className="absolute inset-0 glow-bg pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full opacity-[0.05] bg-accent blur-3xl" />

          <div className="relative max-w-6xl">
            <div data-reveal className="glass inline-flex items-center gap-2 px-3 py-1.5 mb-6 lg:mb-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              SmartPixel · Chrompet, Chennai
            </div>
            <h1 data-reveal className="font-display text-[10.5vw] sm:text-[8.5vw] md:text-[7vw] lg:text-[6.2vw] leading-[1] tracking-tight text-balance">
              Your website should be your<br className="hidden sm:block"/> <span className="italic text-accent">best salesperson</span>.<br/>
              <span className="text-muted-foreground">Most aren't.</span>
            </h1>
            <p data-reveal className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg text-muted-foreground max-w-2xl tracking-wide leading-relaxed">
              We build websites, apps, and e-commerce stores that actually earn their keep — designed to convert visitors into paying customers, not just collect compliments.
            </p>
            <div data-reveal className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-3 sm:gap-4">
              <a href="#contact" className="btn-gold">Let's Talk About Your Project →</a>
              <a href="#work" className="btn-ghost">See Our Work</a>
            </div>

            {/* Glass stat strip */}
            <div data-reveal className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 max-w-2xl">
              {[
                ["15+", "Trusted clients"],
                ["2 wks", "Avg launch"],
                ["3×", "Conv. lift"],
              ].map(([v, l]) => (
                <div key={l} className="glass px-4 py-3 sm:px-5 sm:py-4">
                  <div className="num-display text-xl sm:text-2xl text-accent">{v}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          {isDesktop && (
            <div className="absolute bottom-10 right-10 text-xs uppercase tracking-[0.4em] text-muted-foreground rotate-90 origin-bottom-right">
              Scroll —
            </div>
          )}
        </section>

        {/* PANEL 2 — SERVICES */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-16 lg:py-12`}>
          <div className="flex items-end justify-between mb-8 lg:mb-10 flex-wrap gap-6">
            <div>
              <p data-reveal className="eyebrow mb-4 lg:mb-6">— What We Build</p>
              <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1] max-w-3xl">
                One team. Every piece<br/>of the <span className="italic text-accent">puzzle</span>.
              </h2>
            </div>
            <p data-reveal className="hidden lg:block text-sm text-muted-foreground max-w-xs">
              From the first wireframe to your first sale — strategy, build, and growth, handled.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-px bg-transparent sm:bg-border">
            {services.map((s) => (
              <article
                key={s.n}
                data-reveal
                className="service-card group relative bg-background transition-all duration-700 p-5 sm:p-6 min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] flex flex-col justify-between cursor-pointer overflow-hidden border border-border sm:border-0"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-90 group-hover:scale-100 transition-all duration-[1400ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 opacity-100 group-hover:opacity-60 transition-opacity duration-700" />
                </div>

                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />

                <div className="flex items-start justify-between relative z-10">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground">{s.n}</span>
                  {s.badge ? (
                    <span className="glass-gold text-[9px] uppercase tracking-[0.25em] px-2 py-1 text-accent">{s.badge}</span>
                  ) : (
                    <span className="text-accent translate-x-0 group-hover:translate-x-1 transition-transform duration-500">→</span>
                  )}
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent/80 mb-2 sm:mb-3">{s.tag}</p>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] mb-2 sm:mb-3 leading-tight group-hover:text-accent group-hover:translate-x-1 transition-all duration-500">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PANEL 3 — WHY SMARTPIXEL */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} grid md:grid-cols-2`}>
          <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-20">
            <p data-reveal className="eyebrow mb-6 lg:mb-8">— The Difference</p>
            <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8 lg:mb-10">
              Agencies promise.<br/>We show up in your <span className="italic text-accent">analytics</span>.
            </h2>
            <p data-reveal className="text-muted-foreground max-w-md leading-relaxed">
              Here's what working with a team that takes ownership actually looks like.
            </p>
          </div>
          <div className="bg-surface flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-16 md:py-20 border-t md:border-t-0 md:border-l border-border">
            {[
              { k: "Unlimited Revisions", v: "We don't count rounds. You'll know when it's right — and so will we. Until then, we keep going." },
              { k: "Fast Turnaround", v: "Updates every 24 to 48 hours. Silence is where projects go to die — you stay in the loop at every stage." },
              { k: "One Team, Zero Handoffs", v: "No account managers who don't know the code. One team owns your project, and you talk to the people doing the work." },
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

        {/* PANEL 4 — STATS */}
        <section className={`panel relative ${isDesktop ? "w-screen h-screen shrink-0" : "w-full"} flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-20 lg:py-0`}>
          <p data-reveal className="eyebrow mb-4">— By The Numbers</p>
          <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1] mb-10 lg:mb-12 max-w-2xl">
            Small team. <span className="italic text-accent">Serious results.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-px sm:bg-border">
            {[
              { v: "15+", l: "Clients trust us with their digital presence" },
              { v: "2 wks", l: "Average turnaround from brief to launch" },
              { v: "98%", l: "Satisfaction rate across every project" },
              { v: "3×", l: "Average conversion increase post-build" },
            ].map((r) => (
              <div key={r.l} data-reveal className="glass sm:bg-background sm:backdrop-blur-none sm:border-0 p-5 sm:p-8 lg:p-10 min-h-[140px] sm:min-h-[200px] flex flex-col justify-between">
                <span className="num-display text-4xl sm:text-5xl md:text-6xl text-accent">{r.v}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wide mt-3 leading-relaxed">— {r.l}</span>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-8 lg:mt-12 text-muted-foreground max-w-xl text-sm sm:text-base">
            We don't take on more than we can do well. That's why the numbers look like this.
          </p>
        </section>
      </div>

      {/* Marquee — client ticker */}
      <div className="relative overflow-hidden border-y border-border bg-background py-5 lg:py-7">
        <p className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60">— Trusted across travel, education, retail & beyond</p>
        <div className="flex whitespace-nowrap animate-marquee gap-12 text-muted-foreground mt-3">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              {clients.map((w) => (
                <span key={w} className="font-display text-2xl sm:text-3xl italic">
                  {w} <span className="text-accent not-italic ml-12">·</span>
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
