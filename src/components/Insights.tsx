import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    cat: "Web Development",
    slug: "websites-that-collect-customers-not-compliments",
    date: "Apr 2026",
    read: "8 min",
    title:
      "Why most business websites collect compliments instead of customers — and the rebuild that fixes it.",
    excerpt:
      "The structural reasons sites fail to convert, and the conversion-led architecture we use instead.",
  },
  {
    cat: "Mobile Apps",
    slug: "apps-that-survive-the-first-week",
    date: "Mar 2026",
    read: "10 min",
    title:
      "Most apps get deleted in a week. Here's what the ones that survive get right.",
    excerpt:
      "A practical breakdown of speed, simplicity, and UX patterns that earn second opens.",
  },
  {
    cat: "Marketing",
    slug: "marketing-math-that-actually-grows",
    date: "Mar 2026",
    read: "7 min",
    title:
      "Traffic is vanity. The marketing math that actually grows a service business.",
    excerpt: "Why CAC, LTV and pipeline beat impressions and clicks.",
  },
  {
    cat: "Ecommerce",
    slug: "ecommerce-funnel-leaks",
    date: "Feb 2026",
    read: "6 min",
    title:
      "The leaks in your e-commerce funnel — and how to find them before competitors do.",
    excerpt: "From product page to checkout, patterns that kill revenue.",
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
      gsap.utils.toArray<HTMLElement>(".post").forEach((p, i) => {
        gsap.from(p, {
          y: 60,
          opacity: 0,
          duration: 1,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: p, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [filter]);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          SmartPixel Insights | Web Design, SEO & Business Growth Blog Chennai
        </title>

        <meta
          name="description"
          content="Read SmartPixel insights on website design, ecommerce, SEO, mobile apps and digital growth strategies for Chennai businesses."
        />

        <meta
          name="keywords"
          content="SmartPixel blog, website tips Chennai, SEO blog Chennai, ecommerce tips, app development insights, digital marketing blog"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://smartpixel.in/insights" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SmartPixel Insights | Growth Strategies & Digital Thinking"
        />

        <meta
          property="og:description"
          content="Practical insights on websites, apps, ecommerce and SEO from SmartPixel Chennai."
        />

        <meta
          property="og:url"
          content="https://smartpixel.in/insights"
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://smartpixel.in/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SmartPixel Insights Blog"
        />
        <meta
          name="twitter:description"
          content="Read premium website, SEO and growth content from SmartPixel."
        />
        <meta name="twitter:image" content="https://smartpixel.in/logo.png" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "SmartPixel Insights",
            url: "https://smartpixel.in/insights",
            publisher: {
              "@type": "Organization",
              name: "SmartPixel",
              logo: {
                "@type": "ImageObject",
                url: "https://smartpixel.in/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <section
        id="insights"
        ref={ref}
        className="bg-background py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
            <div>
              <p className="eyebrow mb-4 sm:mb-6">— Field Notes</p>

              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
                Practical thinking
                <br />
                from the{" "}
                <span className="italic text-accent">
                  studio floor
                </span>.
              </h2>
            </div>

            <a
              href="#"
              className="text-xs uppercase tracking-[0.25em] text-accent border-b border-accent pb-1"
            >
              All Writing →
            </a>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter articles">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`text-[11px] uppercase tracking-[0.25em] px-4 py-2 rounded-full border transition-colors ${
                  filter === f
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:text-accent hover:border-accent/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {visible.map((p, i) => (
              <a
                key={p.title}
                href={`/blog/${p.slug}`}
                className="post group bg-background p-8 sm:p-10 lg:p-12 min-h-[320px] sm:min-h-[420px] flex flex-col justify-between hover:bg-surface transition-colors duration-700 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                      {p.cat}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      N° 0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl leading-[1.15] mb-5 sm:mb-6 group-hover:text-accent transition-colors duration-500">
                    {p.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-10 sm:mt-12 pt-6 border-t border-border">
                  <span className="text-xs text-muted-foreground tracking-wider">
                    {p.date} · {p.read}
                  </span>
                  <span className="text-accent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-10 text-sm text-muted-foreground text-center">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Insights;