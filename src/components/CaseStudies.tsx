import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    client: "Halcyon Capital",
    industry: "Financial Services",
    before: "0.4% conversion",
    after: "3.2% conversion",
    metric: "+712%",
    body: "Rebuilt the digital brand and conversion architecture for a boutique wealth manager. New site, new pipeline within 90 days.",
  },
  {
    client: "Atelier Norra",
    industry: "Luxury Hospitality",
    before: "₹14L organic / mo",
    after: "₹1.2Cr organic / mo",
    metric: "+8.5x",
    body: "Topical SEO system and editorial content engine took a regional property group to category-leading visibility in 11 months.",
  },
  {
    client: "Kestrel Health",
    industry: "B2B SaaS",
    before: "₹38 CAC",
    after: "₹11 CAC",
    metric: "−71%",
    body: "Re-architected paid funnels and creative testing system. Tripled qualified pipeline while compressing acquisition cost.",
  },
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".case-card").forEach((c) => {
        gsap.from(c, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 82%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="bg-surface py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— Selected Work</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Before. <span className="italic text-accent">After.</span><br/>The difference is the work.
            </h2>
          </div>
        </div>

        <div className="space-y-px bg-border">
          {cases.map((c, i) => (
            <article key={c.client} className="case-card bg-background grid md:grid-cols-12 gap-6 md:gap-8 p-7 sm:p-10 lg:p-16 group hover:bg-surface transition-colors duration-700">
              <div className="md:col-span-3">
                <p className="text-xs text-muted-foreground tracking-[0.3em] mb-3 sm:mb-4">CASE 0{i + 1}</p>
                <h3 className="font-display text-2xl sm:text-3xl mb-2">{c.client}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.industry}</p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{c.body}</p>
              </div>
              <div className="md:col-span-4 grid grid-cols-2 gap-px bg-border">
                <div className="bg-background p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Before</p>
                  <p className="font-display text-lg sm:text-xl text-muted-foreground line-through decoration-1">{c.before}</p>
                </div>
                <div className="bg-background p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3">After</p>
                  <p className="font-display text-lg sm:text-xl">{c.after}</p>
                </div>
                <div className="bg-background p-5 sm:p-6 col-span-2 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Delta</span>
                  <span className="num-display text-3xl sm:text-4xl text-accent">{c.metric}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
