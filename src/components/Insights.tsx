
import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// SEO Strategy: Target high-intent keywords inside search queries
const posts = [
  {
    cat: "Web Development",
    slug: "websites-that-collect-customers-not-compliments",
    date: "2026-04-15", // ISO format for schema robots
    dateDisplay: "Apr 2026",
    read: "8 min",
    title: "Why most business websites collect compliments instead of customers — and the rebuild that fixes it.",
    excerpt: "The structural reasons sites fail to convert, and the conversion-led architecture we use instead.",
    keywords: ["website design Chennai", "conversion rate optimization", "business website builder"],
  },
  {
    cat: "Mobile Apps",
    slug: "apps-that-survive-the-first-week",
    date: "2026-03-22",
    dateDisplay: "Mar 2026",
    read: "10 min",
    title: "Most apps get deleted in a week. Here's what the ones that survive get right.",
    excerpt: "A practical breakdown of speed, simplicity, and UX patterns that earn second opens.",
    keywords: ["app development insights", "mobile app UX design", "app performance metrics"],
  },
  {
    cat: "Marketing",
    slug: "marketing-math-that-actually-grows",
    date: "2026-03-05",
    dateDisplay: "Mar 2026",
    read: "7 min",
    title: "Traffic is vanity. The marketing math that actually grows a service business.",
    excerpt: "Why CAC, LTV and pipeline beat impressions and clicks.",
    keywords: ["digital marketing blog", "SEO blog Chennai", "customer acquisition cost"],
  },
  {
    cat: "Ecommerce",
    slug: "ecommerce-funnel-leaks",
    date: "2026-02-18",
    dateDisplay: "Feb 2026",
    read: "6 min",
    title: "The leaks in your e-commerce funnel — and how to find them before competitors do.",
    excerpt: "From product page to checkout, patterns that kill revenue.",
    keywords: ["ecommerce tips", "conversion funnel optimization", "online store sales"],
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
            toggleActions: "play none none none"
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [filter]);

  // Dynamic Schema Generator for Google Rich Snippets
  const schemaData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "SmartPixel Insights",
      "description": "Premium strategies on web design, SEO, ecommerce, and mobile applications from SmartPixel Chennai.",
      "url": "https://www.smartpixel.in/insights",
      "publisher": {
        "@type": "Organization",
        "name": "SmartPixel",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.smartpixel.in/logo.png"
        }
      },
      "blogPost": visible.map((p) => ({
        "@type": "BlogPosting",
        "headline": p.title,
        "description": p.excerpt,
        "datePublished": p.date,
        "url": `https://www.smartpixel.in/blog/${p.slug}`,
        "author": {
          "@type": "Organization",
          "name": "SmartPixel Team"
        },
        "keywords": p.keywords.join(", ")
      }))
    };
  }, [visible]);

  return (
    <>
      <Helmet>
        {/* Absolute Core SEO Headers */}
        <title>SmartPixel Insights | Web Design, SEO & Business Growth Blog Chennai</title>
        <meta name="description" content="Discover professional insights on high-converting website design, ecommerce growth, mobile apps, and modern SEO frameworks from SmartPixel Chennai." />
        <meta name="keywords" content="SmartPixel blog, website tips Chennai, SEO blog Chennai, ecommerce tips, app development insights, digital marketing blog, conversion rate optimization" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://www.smartpixel.in/insights" />

        {/* Open Graph / Social Media Visibility */}
        <meta property="og:title" content="SmartPixel Insights | Growth Strategies & Digital Engineering" />
        <meta property="og:description" content="Practical execution strategies regarding websites, custom apps, marketing infrastructure and product loops." />
        <meta property="og:url" content="https://www.smartpixel.in/insights" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="https://www.smartpixel.in/logo.png" />
        <meta property="og:site_name" content="SmartPixel" />

        {/* Dynamic JSON-LD Injection */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

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

          {/* Semantic Grid - Clean markup paths for Google Indexer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-xl overflow-hidden shadow-sm">
            {visible.map((p, i) => (
              <article
                key={p.title}
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

                  {/* High Semantic Anchor link for keyword distribution */}
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
    </>
  );
};

export default Insights;
