import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    quote: "The training program they built for our mid-management cohort was the first L&D initiative that actually showed up in our quarterly reviews. Measurable, practical, and surprisingly engaging.",
    name: "Head of HR",
    role: "Mid-size FMCG Company",
  },
  {
    quote: "They redesigned our college portal and ran a full digital marketing push for our open-day campaign. Applications increased 38% year-on-year.",
    name: "Director of Admissions",
    role: "Private University",
  },
  {
    quote: "Finally an agency that doesn't split design, dev, and marketing across three vendors. One team, clean process, and results we can show the board.",
    name: "Founder",
    role: "B2B SaaS Startup",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".voice").forEach((el, i) => {
        gsap.from(el, {
          y: 80, opacity: 0, duration: 1.2, delay: i * 0.08, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="voices" ref={ref} className="bg-surface py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24 border-y border-border">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6 sm:gap-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {quotes.map((q, i) => (
            <figure
              key={q.role}
              className="voice group relative bg-surface hover:bg-background transition-colors duration-700 p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[400px] overflow-hidden"
            >
              <span className="font-display text-7xl text-accent/30 leading-none mb-6 select-none">"</span>
              <blockquote className="font-display text-xl sm:text-2xl leading-[1.4] text-foreground/90 flex-1">
                {q.quote}
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-border">
                <div className="font-display text-lg">{q.name}</div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{q.role}</div>
              </figcaption>
              <span className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">N° 0{i + 1}</span>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
