import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Posts synced to BlogPost.tsx — slugs must match exactly
const posts = [
  {
    cat: "Web",
    slug: "why-high-google-impressions-fail-to-generate-enquiries",
    date: "2026-07-02",
    dateDisplay: "Jul 2026",
    read: "8 min",
    title: "High Google Search Console impressions but zero enquiries? Here is the exact fix.",
    excerpt: "If your website ranks well on Google but your inbox remains completely quiet, you don't have a traffic problem — you have an interactive layout block.",
    keywords: ["website conversion Chennai", "Google Search Console", "conversion rate optimization"],
  },
  {
    cat: "Web",
    slug: "chennai-jewelry-showroom-digital-trust-architecture",
    date: "2026-06-29",
    dateDisplay: "Jun 2026",
    read: "9 min",
    title: "Why your Chennai jewelry showroom needs more than a 'pretty' website to sell online.",
    excerpt: "Beautiful photos aren't enough. Luxury buyers looking for wedding collections or solid gold investment pieces demand institutional trust models and direct showroom integrations.",
    keywords: ["jewellery website Chennai", "luxury ecommerce", "high ticket web design"],
  },
  {
    cat: "Marketing",
    slug: "how-we-stopped-chennai-clinic-wasting-google-ads",
    date: "2026-06-24",
    dateDisplay: "Jun 2026",
    read: "7 min",
    title: "How we stopped a Chennai clinic from wasting ₹40,000/month on dead-end Google ads.",
    excerpt: "Most local agencies pump your budget into broad keyword strings that generate expensive empty clicks. Shifting to hyper-localized landing hubs cuts lead acquisition costs by half.",
    keywords: ["Google Ads Chennai", "local lead generation", "digital marketing clinic"],
  },
  {
    cat: "Ecommerce",
    slug: "3-friction-points-killing-chennai-d2c-checkout",
    date: "2026-06-15",
    dateDisplay: "Jun 2026",
    read: "8 min",
    title: "3 Friction points killing 70% of checkout conversions for Chennai D2C brands.",
    excerpt: "Slow mobile load cycles on patchy data, hidden shipping surcharges at the final screen, and tedious registration walls drive massive cart abandonment.",
    keywords: ["ecommerce checkout optimization", "D2C conversion India", "cart abandonment fix"],
  },
];

const FILTERS = ["All", "Web", "Apps", "Marketing", "Ecommerce"] as const;
type Filter = (typeof FILTERS)[number];

const matches = (cat: string, f: Filter) => {
  if (f === "All") return true;
  if (f === "Web") return cat.toLowerCase().includes("web");
  if (f === "Apps") return cat.toLowerCase().includes("app");
  if (f === "Marketing") return cat.toLowerCase().includes("marketing");
  if (f === "Ecommerce") return cat.toLowerCase().includes("ecom");
  return true;
};

const Insights = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(() => posts.filter((p) => matches(p.cat, filter)), [filter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".post-card").forEach((p, i) => {
        gsap.from(p, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section
      id="insights"
      ref={ref}
      className="bg-background py-16 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-24"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Header Area */}
        <div className="flex items-end justify-between mb-12 sm:mb-16 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6 text-xs uppercase tracking-widest text-muted-foreground font-semibold">— Field Notes</p>
            <h2 id="insights-heading" className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-foreground">
              Practical thinking
              <br />
              from the{" "}
              <span className="italic text-accent font-normal">
                studio floor
              </span>.
            </h2>
          </div>

          <a
            href="/blog"
            title="Browse all blog entries"
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent border-b-2 border-accent pb-1 hover:opacity-80 transition-opacity"
          >
            All Writing →
          </a>
        </div>

        {/* Navigational Filter for Bots and Humans */}
        <nav className="w-full border-b border-border/60 pb-8 mb-12" aria-label="Blog categories">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 sm:gap-4">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`text-[11px] font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-full border transition-all duration-200 ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent shadow-md"
                    : "border-border bg-surface/5 text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </nav>

        {/* Semantic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-xl overflow-hidden shadow-sm">
          {visible.map((p, i) => (
            <article
              key={p.slug}
              className="post-card group bg-background p-8 sm:p-10 lg:p-12 min-h-[340px] sm:min-h-[400px] flex flex-col justify-between hover:bg-surface/30 transition-colors duration-500"
            >
              <div>
                <header className="flex items-center justify-between mb-8 sm:mb-10 select-none">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    {p.cat}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground" aria-hidden="true">
                    N° 0{i + 1}
                  </span>
                </header>

                <a href={`/blog/${p.slug}`} className="block focus:outline-none group" title={`Read: ${p.title}`}>
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-[1.2] mb-4 sm:mb-5 group-hover:text-accent transition-colors duration-300 text-foreground">
                    {p.title}
                  </h3>
                </a>

                <p className="text-muted-foreground text-sm leading-relaxed font-sans font-light">
                  {p.excerpt}
                </p>
              </div>

              <footer className="flex items-center justify-between mt-8 sm:mt-12 pt-5 border-t border-border/40">
                <time dateTime={p.date} className="text-xs text-muted-foreground font-medium tracking-wider">
                  {p.dateDisplay} · {p.read} read
                </time>
                <a
                  href={`/blog/${p.slug}`}
                  className="text-accent text-lg font-bold transform md:opacity-0 md:translate-x-[-4px] md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300"
                  aria-label={`Read article: ${p.title}`}
                >
                  →
                </a>
              </footer>
            </article>
          ))}
        </div>

        {/* Empty fallback state */}
        {visible.length === 0 && (
          <div className="py-20 text-center border border-dashed border-border rounded-xl">
            <p className="text-sm text-muted-foreground font-medium">
              No articles listed under this category yet. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Insights;