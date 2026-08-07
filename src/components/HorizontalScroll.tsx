import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Orb from "@/components/Orb";
import { Users, Star, TrendingUp, Trophy, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  "Al Miraj", "Travel Hub Tambaram", "Gulf To World", "Arabian Vibes",
  "Triumph Travel & Tourism", "LTS Learning Academy", "Surya Prakash Metals",
  "Priya Silver Jewellery", "Manohar Jewelleries", "Fotrio Edu", "Manha Hajj & Umrah",
];

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background">
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

      {/* ── HERO ── */}
      <section className="relative w-full flex flex-col px-5 sm:px-10 lg:px-20 pt-28 pb-12">
        <div className="absolute inset-0 pointer-events-none bg-background">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, hsl(var(--accent)) 0 1px, transparent 1px 9%)",
            }}
          />
        </div>

        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[min(90vw,760px)] aspect-square opacity-[0.55]">
            <Orb hue={210} hoverIntensity={0.4} rotateOnHover backgroundColor="#000000" />
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full">
          <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
            <h1
              data-reveal
              className="font-display text-[8.5vw] sm:text-[6.5vw] lg:text-[4.2vw] leading-[1.05] tracking-tight text-balance font-normal"
            >
              <span className="font-light text-muted-foreground text-sm sm:text-base uppercase tracking-[0.3em] block mb-3">
                Website Development Company in Chennai
              </span>
              We build high-converting websites that act as your{" "}
              <span className="font-normal italic text-accent">best salesperson</span>.
            </h1>

            <p data-reveal className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
              SmartPixel is a web design and optimization agency based in Chrompet, Chennai. We design
              fast, conversion-optimized storefronts and applications with an average turnaround of 2 weeks.
            </p>

            <p
              data-reveal
              className="mt-4 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-accent font-semibold bg-surface/80 px-3 py-1.5 rounded border border-border"
            >
              Serving: Chrompet · Tambaram · Pallavaram · Guindy · T Nagar · Saidapet
            </p>

            <div data-reveal className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <a href="/contact" className="btn-gold shadow-lg shadow-accent/10">
                Book 20-Min Strategy Call
              </a>
              <a
                href="https://wa.me/919886069488?text=Hi%20SmartPixel,%20I%27d%20like%20to%20inquire%20about%20your%20web%20development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded text-sm uppercase tracking-wider border border-foreground transition-all hover:opacity-90"
              >
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </div>

            <nav
              data-reveal
              aria-label="Our services"
              className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground"
            >
              <span className="uppercase tracking-widest mr-1 opacity-50">Expertise:</span>
              <a href="/seo-services-chennai" className="hover:text-accent underline underline-offset-2 transition-colors">SEO Audit</a>
              <span className="opacity-30">·</span>
              <a href="/ecommerce-website-chennai" className="hover:text-accent underline underline-offset-2 transition-colors">E-commerce Stores</a>
              <span className="opacity-30">·</span>
              <a href="/whatsapp-automation-chennai" className="hover:text-accent underline underline-offset-2 transition-colors">WhatsApp Automation</a>
            </nav>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div data-reveal className="relative mt-10 border-t border-foreground/10 pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "40+", l: "Clients", I: Users },
              { v: "98%", l: "Satisfaction", I: Star },
              { v: "3×", l: "Avg conversion lift", I: TrendingUp },
              { v: "2 wk", l: "Avg turnaround", I: Trophy },
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

      {/* ── WHY SMARTPIXEL ── */}
      <section className="relative w-full grid md:grid-cols-2 border-t border-border">
        <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-14">
          <p data-reveal className="eyebrow mb-5">— The Difference</p>
          <h2 data-reveal className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Chennai agencies promise.
            <br />We show up in your <span className="italic text-accent">analytics</span>.
          </h2>
          <p data-reveal className="text-muted-foreground max-w-md leading-relaxed">
            Here's what working with a <strong className="text-foreground/70">website development team in Chennai</strong>{" "}
            that takes ownership actually looks like.
          </p>
        </div>

        <div className="bg-surface flex flex-col justify-center px-5 sm:px-10 lg:px-24 py-12 border-t md:border-t-0 md:border-l border-border">
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
            <div key={a.k} data-reveal className={`py-5 ${i !== 0 ? "border-t border-border" : ""}`}>
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

      {/* ── MARQUEE ── */}
      <div className="relative overflow-hidden border-y border-border bg-background py-5">
        <p className="text-center text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60 mb-3">
          Trusted by businesses across World
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
