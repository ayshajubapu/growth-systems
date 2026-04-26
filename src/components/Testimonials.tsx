import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    quote: "The training program they built for our mid-management cohort was the first L&D initiative that actually showed up in our quarterly reviews. Measurable, practical, and surprisingly engaging.",
    name: "Head of HR",
    role: "Mid-size FMCG Company",
    metric: "+42% retention",
  },
  {
    quote: "They redesigned our college portal and ran a full digital marketing push for our open-day campaign. Applications increased 38% year-on-year.",
    name: "Director of Admissions",
    role: "Private University",
    metric: "+38% applications",
  },
  {
    quote: "Finally an agency that doesn't split design, dev, and marketing across three vendors. One team, clean process, and results we can show the board.",
    name: "Founder",
    role: "B2B SaaS Startup",
    metric: "1 partner, 3 disciplines",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Section reveal + parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".voice-head > *", {
        y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });

      gsap.utils.toArray<HTMLElement>(".v-strip").forEach((el, i) => {
        gsap.fromTo(
          el,
          { xPercent: i % 2 === 0 ? -8 : 8 },
          {
            xPercent: i % 2 === 0 ? 8 : -8,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Auto-rotate featured + animate transitions
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!featuredRef.current) return;
    const tl = gsap.timeline();
    const words = featuredRef.current.querySelectorAll<HTMLElement>("[data-word]");
    tl.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.018 }
    );
    tl.fromTo(
      featuredRef.current.querySelector("[data-meta]"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );
    return () => { tl.kill(); };
  }, [active]);

  const current = quotes[active];

  return (
    <section
      id="voices"
      ref={ref}
      className="relative bg-surface py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24 border-y border-border overflow-hidden"
    >
      {/* Decorative background strips */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="v-strip absolute top-[12%] left-0 right-0 whitespace-nowrap font-display italic text-[12vw] leading-none text-foreground/[0.025]">
          voices · voices · voices · voices · voices
        </div>
        <div className="v-strip absolute bottom-[8%] left-0 right-0 whitespace-nowrap font-display italic text-[10vw] leading-none text-accent/[0.04]">
          authority · trust · proof · authority · trust
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full bg-accent/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-[1500px] mx-auto">
        <div className="voice-head flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— Voices</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Words from the teams<br/>we've <span className="italic text-accent">built alongside</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            We work with a small number of partners. The few who do, tend to stay.
          </p>
        </div>

        {/* FEATURED QUOTE — auto-rotating with cinematic word reveal */}
        <div ref={featuredRef} className="relative border-t border-b border-border py-14 sm:py-20 lg:py-28 mb-12 sm:mb-16">
          <span className="absolute -top-8 left-0 font-display text-[120px] sm:text-[180px] leading-none text-accent/20 select-none pointer-events-none">"</span>

          <blockquote className="relative font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.15] max-w-5xl">
            <span className="inline-block overflow-hidden">
              {current.quote.split(" ").map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                  <span data-word className="inline-block">{w}</span>
                </span>
              ))}
            </span>
          </blockquote>

          <div data-meta className="mt-10 sm:mt-14 flex flex-wrap items-end justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-5 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center font-display text-accent text-xl">
                {current.name.charAt(0)}
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl">{current.name}</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{current.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="num-display text-2xl sm:text-3xl text-accent">{current.metric}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">— Outcome</div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-10 flex items-center gap-3">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Voice ${i + 1}`}
                className="group relative h-px w-12 bg-border overflow-hidden"
              >
                <span
                  className={`absolute inset-y-0 left-0 bg-accent transition-all duration-700 ${i === active ? "w-full" : "w-0 group-hover:w-1/3"}`}
                />
              </button>
            ))}
            <span className="ml-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              0{active + 1} / 0{quotes.length}
            </span>
          </div>

          {/* Shimmer line */}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
        </div>

        {/* Compact ledger of all quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {quotes.map((q, i) => (
            <button
              key={q.role}
              onClick={() => setActive(i)}
              className={`text-left group relative bg-surface hover:bg-background transition-colors duration-700 p-6 sm:p-8 flex flex-col gap-4 ${i === active ? "bg-background" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">N° 0{i + 1}</span>
                <span className={`text-accent transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-30 group-hover:opacity-100"}`}>●</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{q.quote}</p>
              <div className="mt-2 pt-4 border-t border-border">
                <div className="font-display text-base">{q.name}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{q.role}</div>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
