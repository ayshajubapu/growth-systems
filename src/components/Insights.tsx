import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  { cat: "Strategy", date: "Apr 2026", read: "8 min", title: "The compounding myth: why most brand systems plateau at month nine.", excerpt: "An operator's view on the structural reasons growth stalls — and the architectural fixes that restart it." },
  { cat: "SEO", date: "Mar 2026", read: "12 min", title: "Topical authority is not a content strategy. It's an org chart.", excerpt: "Why the brands winning search in 2026 organize editorial like a publishing house, not a marketing team." },
  { cat: "Performance", date: "Mar 2026", read: "6 min", title: "Creative is the only variable that still moves CAC.", excerpt: "The boring truth about paid media in a privacy-first world: it's a creative testing problem, not a targeting one." },
];

const Insights = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".post").forEach((p, i) => {
        gsap.from(p, {
          y: 60, opacity: 0, duration: 1, delay: i * 0.05, ease: "power3.out",
          scrollTrigger: { trigger: p, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="insights" ref={ref} className="bg-background py-32 lg:py-48 px-8 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-24 flex-wrap gap-8">
          <div>
            <p className="eyebrow mb-6">— Field Notes</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] max-w-3xl">
              Insights from<br/>the <span className="italic text-accent">workshop</span>.
            </h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-[0.25em] text-accent border-b border-accent pb-1">All Writing →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {posts.map((p, i) => (
            <article key={p.title} className="post group bg-background p-10 lg:p-12 min-h-[480px] flex flex-col justify-between hover:bg-surface transition-colors duration-700 cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.cat}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">N° 0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl leading-[1.15] mb-6 group-hover:text-accent transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
                <span className="text-xs text-muted-foreground tracking-wider">{p.date} · {p.read}</span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
