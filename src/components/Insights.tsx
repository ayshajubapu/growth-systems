import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    cat: "Training",
    date: "Apr 2026",
    read: "8 min",
    title: "Why corporate training fails at month three — and the curriculum fix that reverses it.",
    excerpt: "The structural reasons skill retention drops, and how modular design solves it.",
  },
  {
    cat: "Web Development",
    date: "Mar 2026",
    read: "10 min",
    title: "What colleges get wrong about their websites (and why it costs them applicants).",
    excerpt: "Institutional sites optimised for administrators, not students. Here's the difference.",
  },
  {
    cat: "Digital Marketing",
    date: "Mar 2026",
    read: "7 min",
    title: "Performance marketing for service businesses: why CAC math looks different here.",
    excerpt: "A practical breakdown for training providers, agencies, and professional services.",
  },
  {
    cat: "Design",
    date: "Feb 2026",
    read: "6 min",
    title: "The brand consistency problem most growing companies don't notice until it's expensive.",
    excerpt: "Design debt is real. How to audit and fix it before it undermines your credibility.",
  },
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
    <section id="insights" ref={ref} className="bg-background py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— Field Notes</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Practical thinking<br/>from the <span className="italic text-accent">studio floor</span>.
            </h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-[0.25em] text-accent border-b border-accent pb-1">All Writing →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {posts.map((p, i) => (
            <article key={p.title} className="post group bg-background p-8 sm:p-10 lg:p-12 min-h-[320px] sm:min-h-[420px] flex flex-col justify-between hover:bg-surface transition-colors duration-700 cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.cat}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">N° 0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl leading-[1.15] mb-5 sm:mb-6 group-hover:text-accent transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-10 sm:mt-12 pt-6 border-t border-border">
                <span className="text-xs text-muted-foreground tracking-wider">{p.date} · {p.read}</span>
                <span className="text-accent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
