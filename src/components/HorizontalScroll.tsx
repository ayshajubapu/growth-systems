import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgHero3D from "@/assets/sp-hero-3d.jpg";
import { Play, Trophy, Users, TrendingUp, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

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

      gsap.utils.toArray<HTMLElement>(".panel").forEach((panel) => {
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
      {/* ─────────────────────────────────────────────
          SEO — meta tags only here.
          Schema JSON-LD lives in index.html to ensure
          it is present before JS executes.
          Do NOT duplicate the ProfessionalService /
          LocalBusiness / FAQPage schemas here.
      ───────────────────────────────────────────── */}
      <Helmet>
        <title>Website Development Company in Chennai | SmartPixel – SEO, Ecommerce & Automation</title>

        <meta
          name="description"
          content="SmartPixel is a website development company in Chennai helping businesses in Pallavaram, Tambaram, Chrompet, Guindy and T Nagar grow with websites, ecommerce stores, SEO and WhatsApp automation."
        />

        <meta
          name="keywords"
          content="website development company in chennai, web design chennai, ecommerce website chennai, seo services chennai, whatsapp automation chennai, website developer chrompet, web design pallavaram, web design tambaram"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartPixel" />
        <link rel="canonical" href="https://smartpixel.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="Website Development Company in Chennai | SmartPixel" />
        <meta property="og:description" content="We build websites, ecommerce stores and automation systems that generate leads and grow your business across Chennai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartpixel.in/" />
        <meta property="og:image" content="https://smartpixel.in/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development Company in Chennai | SmartPixel" />
        <meta name="twitter:description" content="High-converting websites, SEO and automation systems for Chennai businesses." />
        <meta name="twitter:image" content="https://smartpixel.in/logo.png" />
      </Helmet>

      <div
        ref={trackRef}
        className={isDesktop ? "flex h-screen will-change-transform" : "flex flex-col"}
        style={isDesktop ? { width: "max-content" } : undefined}
      >

        {/* ── PANEL 1 — HERO ── */}
        <section
          className={`panel relative ${
            isDesktop ? "w-screen h-screen shrink-0" : "min-h-[100svh] w-full"
          } flex flex-col px-5 sm:px-10 lg:px-20 pt-28 pb-10 lg:py-0`}
        >
          {/* Atmosphere */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(0_0%_2%)]" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, hsl(var(--accent)) 0 1px, transparent 1px 9%)",
              }}
            />
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[55vmin] h-[55vmin] rounded-full opacity-[0.18] bg-accent blur-[120px]" />
          </div>

          {/* Content grid */}
          <div className="relative flex-1 flex items-center w-full">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full max-w-[1500px] mx-auto">

              {/* LEFT — copy */}
              <div className="lg:col-span-7 relative">
                {/* Vertical gold tick rail */}
                <div className="hidden lg:flex absolute -left-10 top-2 bottom-2 flex-col justify-between">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="block w-px h-1 bg-accent/40" />
                  ))}
                </div>

                <p data-reveal className="eyebrow mb-6 text-accent">
                  — Digital solutions that drive real growth
                </p>

                {/*
                  SEO FIX 1: Visually hidden H1 with primary keyword.
                  The display heading below keeps your design intact.
                  Google reads sr-only elements — this is the correct
                  approach when your design heading has no keyword.
                */}
                <h1 className="sr-only">
                  Website Development Company in Chennai | SmartPixel
                </h1>

                {/* Display heading — design-first, unchanged */}
                <p
                  data-reveal
                  aria-hidden="true"
                  className="font-display text-[10vw] sm:text-[8vw] lg:text-[5.6vw] xl:text-[5vw] leading-[1.02] tracking-tight text-balance"
                >
                  Your website
                  <br className="hidden sm:block" /> should be your{" "}
                  <span className="italic text-accent">best salesperson</span>.
                  <br />
                  <span className="text-muted-foreground">Most aren't.</span>
                </p>

                {/*
                  SEO FIX 2: Location keywords added naturally to the
                  subheading paragraph — this is what Google crawls and
                  uses to confirm your local relevance.
                */}
                <p
                  data-reveal
                  className="mt-6 lg:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
                >
                  We build websites, apps, and e-commerce stores for businesses
                  in <strong className="text-foreground/70">Chennai — Pallavaram, Tambaram, Chrompet,
                  Guindy and T Nagar</strong> — designed to convert visitors into
                  paying customers, not just collect compliments.
                </p>

                <div data-reveal className="mt-8 lg:mt-10 flex flex-wrap gap-3 sm:gap-4">
                  <a href="#contact" className="btn-gold">
                    Let's Talk About Your Project →
                  </a>
                  {/*
                    SEO FIX 3: Internal page links (not just anchors).
                    Each href is a real page Google can crawl independently
                    and rank for its own keyword.
                  */}
                  <a href="/our-work" className="btn-ghost">
                    See Our Work
                  </a>
                </div>

                {/*
                  SEO FIX 4: Internal service links.
                  Each anchor link = a crawlable URL Google can rank
                  for that specific keyword (e.g. "seo services chennai").
                  Add these pages to your React Router as real routes.
                */}
                <nav
                  data-reveal
                  aria-label="Our services"
                  className="mt-6 lg:mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground"
                >
                  <span className="uppercase tracking-widest mr-1 opacity-50">Services:</span>
                  <a href="/seo-services-chennai" className="hover:text-accent underline underline-offset-2 transition-colors">SEO</a>
                  <span className="opacity-30">·</span>
                  <a href="/ecommerce-website-chennai" className="hover:text-accent underline underline-offset-2 transition-colors">Ecommerce</a>
                  <span className="opacity-30">·</span>
                  <a href="/whatsapp-automation-chennai" className="hover:text-accent underline underline-offset-2 transition-colors">WhatsApp Automation</a>
                  <span className="opacity-30">·</span>
                  <a href="/web-design-pallavaram" className="hover:text-accent underline underline-offset-2 transition-colors">Pallavaram</a>
                  <span className="opacity-30">·</span>
                  <a href="/web-design-tambaram" className="hover:text-accent underline underline-offset-2 transition-colors">Tambaram</a>
                </nav>
              </div>

              {/* RIGHT — 3D logo render */}
              <div data-reveal className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
                <div className="relative w-full max-w-[520px] aspect-square">
                  <img
                    src={imgHero3D}
                  
                    alt="SmartPixel website development company in Chennai — 3D brand logo"
                    fetchPriority="high"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
                  <div className="absolute -inset-6 -z-10 bg-accent/15 blur-3xl rounded-full" />
                </div>

                <a
                  href="/our-work"
                  className="hidden lg:flex absolute -right-2 bottom-4 flex-col items-center gap-2 group"
                  aria-label="Watch SmartPixel showreel"
                >
                  <span className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Play size={16} className="ml-0.5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Watch
                    <br />
                    Showreel
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* TRUST STRIP */}
          <div
            data-reveal
            className="relative mt-8 lg:mt-0 lg:absolute lg:bottom-6 lg:left-20 lg:right-20 border-t border-white/10 pt-6 lg:pt-5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { v: "250+", l: "Projects Completed", I: Trophy },
                { v: "120+", l: "Happy Clients", I: Users },
                { v: "98%",  l: "Success Rate",       I: TrendingUp },
                { v: "5+",   l: "Years of Experience", I: Star },
              ].map(({ v, l, I }) => (
                <div key={l} className="flex flex-col items-center text-center">
                  <I size={20} className="text-accent mb-2" />
                  <div className="num-display text-3xl md:text-4xl text-accent">{v}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1.5">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PANEL 3 — WHY SMARTPIXEL ── */}
        <section
          className={`panel relative ${
            isDesktop ? "w-screen h-screen shrink-0" : "w-full"
          } grid md:grid-cols-2`}
        >
          <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-20">
            <p data-reveal className="eyebrow mb-6 lg:mb-8">— The Difference</p>
            {/*
              SEO FIX 6: H2 now contains "Chennai" naturally.
              Every H2 is a secondary ranking signal — don't waste them.
            */}
            <h2
              data-reveal
              className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8 lg:mb-10"
            >
              Chennai agencies promise.
              <br />We show up in your{" "}
              <span className="italic text-accent">analytics</span>.
            </h2>
            <p data-reveal className="text-muted-foreground max-w-md leading-relaxed">
              Here's what working with a <strong className="text-foreground/70">website development
              team in Chennai</strong> that takes ownership actually looks like.
            </p>
          </div>

          <div className="bg-surface flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-16 md:py-20 border-t md:border-t-0 md:border-l border-border">
            {[
              {
                k: "Unlimited Revisions",
                v: "We don't count rounds. You'll know when it's right — and so will we. Until then, we keep going.",
              },
              {
                k: "Fast Turnaround",
                v: "Updates every 24 to 48 hours. Silence is where projects go to die — you stay in the loop at every stage.",
              },
              {
                k: "One Team, Zero Handoffs",
                v: "No account managers who don't know the code. One team owns your project, and you talk to the people doing the work.",
              },
            ].map((a, i) => (
              <div
                key={a.k}
                data-reveal
                className={`py-6 md:py-7 ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs text-muted-foreground tracking-[0.3em]">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-2">{a.k}</h3>
                    <p className="text-sm text-muted-foreground">{a.v}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PANEL 4 — STATS ── */}
        <section
          className={`panel relative ${
            isDesktop ? "w-screen h-screen shrink-0" : "w-full"
          } flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-20 lg:py-0`}
        >
          <p data-reveal className="eyebrow mb-4">— By The Numbers</p>
          <h2
            data-reveal
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1] mb-10 lg:mb-12 max-w-2xl"
          >
            Small team.{" "}
            <span className="italic text-accent">Serious results.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-px sm:bg-border">
            {[
              { v: "15+",   l: "Clients trust us with their digital presence" },
              { v: "2 wks", l: "Average turnaround from brief to launch" },
              { v: "98%",   l: "Satisfaction rate across every project" },
              { v: "3×",    l: "Average conversion increase post-build" },
            ].map((r) => (
              <div
                key={r.l}
                data-reveal
                className="glass sm:bg-background sm:backdrop-blur-none sm:border-0 p-5 sm:p-8 lg:p-10 min-h-[140px] sm:min-h-[200px] flex flex-col justify-between"
              >
                <span className="num-display text-4xl sm:text-5xl md:text-6xl text-accent">{r.v}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wide mt-3 leading-relaxed">
                  — {r.l}
                </span>
              </div>
            ))}
          </div>
          <p data-reveal className="mt-8 lg:mt-12 text-muted-foreground max-w-xl text-sm sm:text-base">
            We don't take on more than we can do well. That's why the numbers look like this.
          </p>
        </section>

      </div>

      {/* ── MARQUEE — client ticker ── */}
      <div className="relative overflow-hidden border-y border-border bg-background py-5 lg:py-7">
        {/*
          SEO FIX 7: Descriptive label added to marquee.
          Google reads this text and it adds local relevance context.
          Changed from empty string to a real, crawlable label.
        */}
        <p className="text-center text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60 mb-3">
          Trusted by businesses across Chennai
        </p>
        <div className="flex whitespace-nowrap animate-marquee gap-12 text-muted-foreground mt-1">
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