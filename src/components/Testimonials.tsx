import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    quote: "We'd had a website for years that looked fine and did almost nothing. SmartPixel rebuilt it from scratch with a completely different approach — focused on getting visitors to actually book a call. Within the first month, booked calls tripled.",
    name: "Junaid",
    role: "Travel Hub Tambaram",
    metric: "↑ 3× booked calls",
  },
  {
    quote: "Three weeks from kickoff to a live website — that alone was impressive. But what stayed with me was how differently they thought about the design. Less about what looked good, more about what would actually move someone from visitor to enquiry.",
    name: "Gagan",
    role: "LTS Learning Academy",
    metric: "↑ Meaningful enquiry growth",
  },
  {
    quote: "I'd worked with two agencies before SmartPixel and both times ended up managing three teams who didn't talk to each other. With SmartPixel it was one team, one conversation, no translation. The site they delivered actually generates business.",
    name: "Amit",
    role: "Surya Prakash Metals",
    metric: "↑ Website that prints money",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".voice-head > *", {
        y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.utils.toArray<HTMLElement>(".v-strip").forEach((el, i) => {
        gsap.fromTo(el,
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

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % quotes.length), 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!featuredRef.current) return;
    const tl = gsap.timeline();
    const words = featuredRef.current.querySelectorAll<HTMLElement>("[data-word]");
    tl.fromTo(words,
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
      className="relative bg-surface py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24 border-y border-border overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="v-strip absolute top-[12%] left-0 right-0 whitespace-nowrap font-display italic text-[12vw] leading-none text-foreground/[0.025]">
          clients · clients · clients · clients
        </div>
        <div className="v-strip absolute bottom-[8%] left-0 right-0 whitespace-nowrap font-display italic text-[10vw] leading-none text-accent/[0.04]">
          trust · proof · revenue · trust · proof
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full bg-accent/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-[1500px] mx-auto">
        <div className="voice-head flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— From The People We've Built For</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              The results speak.<br/>But we'll let our<br/><span className="italic text-accent">clients say it</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
            Real words from the founders, owners, and operators we've built alongside.
          </p>
        </div>

        <div ref={featuredRef} className="relative glass-strong p-7 sm:p-12 lg:p-16 mb-10 sm:mb-14">
          <span className="absolute -top-4 left-6 sm:left-10 font-display text-[100px] sm:text-[160px] leading-none text-accent/30 select-none pointer-events-none">"</span>

          <blockquote className="relative font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] max-w-5xl">
            <span className="inline-block overflow-hidden">
              {current.quote.split(" ").map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                  <span data-word className="inline-block">{w}</span>
                </span>
              ))}
            </span>
          </blockquote>

          <div data-meta className="mt-8 sm:mt-12 flex flex-wrap items-end justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-gold flex items-center justify-center font-display text-accent text-xl">
                {current.name.charAt(0)}
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl">{current.name}</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{current.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="num-display text-xl sm:text-2xl text-accent">{current.metric}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">— Outcome</div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Voice ${i + 1}`}
                className="group relative h-px w-10 sm:w-12 bg-border overflow-hidden"
              >
                <span
                  className={`absolute inset-y-0 left-0 bg-accent transition-all duration-700 ${i === active ? "w-full" : "w-0 group-hover:w-1/3"}`}
                />
              </button>
            ))}
            <span className="ml-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              0{active + 1} / 0{quotes.length}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-px sm:bg-border">
          {quotes.map((q, i) => (
            <button
              key={q.role}
              onClick={() => setActive(i)}
              className={`text-left group relative glass sm:bg-surface sm:backdrop-blur-none sm:border-0 hover:bg-background transition-all duration-700 p-5 sm:p-7 flex flex-col gap-3 ${i === active ? "ring-1 ring-accent/40" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">N° 0{i + 1}</span>
                <span className={`text-accent transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-30 group-hover:opacity-100"}`}>●</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{q.quote}</p>
              <div className="mt-2 pt-3 border-t border-border">
                <div className="font-display text-base">{q.name}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{q.role}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
