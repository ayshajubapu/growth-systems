import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    n: "01",
    title: "Search Authority",
    tag: "SEO / Topical Systems",
    body: "We architect topical authority models that compound over years — built around buyer intent, technical foundations, and editorial depth most agencies refuse to do.",
  },
  {
    n: "02",
    title: "Conversion Architecture",
    tag: "Web Development",
    body: "Websites engineered as revenue systems. Considered design, sub-second performance, and narrative structures that move buyers through commitment.",
  },
  {
    n: "03",
    title: "Brand Gravity",
    tag: "Social & Content",
    body: "Editorial content cycles that earn attention without begging for it. We build the gravity that turns audiences into communities — and communities into pipeline.",
  },
  {
    n: "04",
    title: "Paid Velocity",
    tag: "Performance Marketing",
    body: "Full-funnel paid systems with creative as the variable, not the constant. Attribution, testing, and operator-grade reporting — without the noise.",
  },
];

const ServicesDeep = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".deep-row").forEach((row) => {
        gsap.from(row, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 80%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="systems" ref={ref} className="bg-background py-32 lg:py-48 px-8 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-24 flex-wrap gap-8">
          <div>
            <p className="eyebrow mb-6">— Growth Systems</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] max-w-3xl">
              Not services.<br/><span className="italic text-accent">Systems.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Each discipline is engineered to compound the others. Strategy is the operating layer.
          </p>
        </div>

        <div className="border-t border-border">
          {items.map((it) => (
            <article key={it.n} className="deep-row group grid md:grid-cols-12 gap-8 py-12 lg:py-16 border-b border-border items-start">
              <div className="md:col-span-1 text-xs text-muted-foreground tracking-[0.3em] pt-2">{it.n}</div>
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">{it.tag}</p>
                <h3 className="font-display text-4xl md:text-5xl group-hover:translate-x-2 transition-transform duration-700">
                  {it.title}
                </h3>
              </div>
              <p className="md:col-span-5 md:col-start-7 text-muted-foreground text-lg leading-relaxed">
                {it.body}
              </p>
              <div className="md:col-span-1 md:col-start-12 flex justify-end pt-2">
                <span className="text-accent opacity-40 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDeep;
