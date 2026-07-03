import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Clock, Star, TrendingUp, Home, ChevronRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";
import { ORIGIN, posts, allCategories, type Category } from "@/data/posts";

const PAGE_SIZE = 6;

const BlogListing = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category | "All">("All");
  const [page, setPage] = useState(1);

  const cats = useMemo(() => ["All", ...allCategories()] as const, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCat = cat === "All" || p.cat === cat;
      if (!matchesCat) return false;
      if (!needle) return true;
      return (
        p.title.toLowerCase().includes(needle) ||
        p.excerpt.toLowerCase().includes(needle) ||
        (p.keywords ?? []).some((k) => k.toLowerCase().includes(needle))
      );
    });
  }, [q, cat]);

  const featured = useMemo(() => posts.find((p) => p.featured) ?? posts[0], []);
  const trending = useMemo(() => posts.filter((p) => p.trending).slice(0, 3), []);
  const recent = useMemo(
    () => [...posts].sort((a, b) => b.datePublishedIso.localeCompare(a.datePublishedIso)).slice(0, 4),
    [],
  );

  // Reset to page 1 whenever filter/search changes
  const listKey = `${cat}-${q}`;
  const pagedFiltered = useMemo(() => filtered.slice(0, page * PAGE_SIZE), [filtered, page]);
  const canLoadMore = pagedFiltered.length < filtered.length;

  // Reset paging on filter change
  useMemo(() => setPage(1), [listKey]);

  const canonicalUrl = `${ORIGIN}/blog`;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: ORIGIN,
    name: "SmartPixel",
    potentialAction: {
      "@type": "SearchAction",
      target: `${ORIGIN}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": canonicalUrl,
    url: canonicalUrl,
    name: "SmartPixel Insights",
    description:
      "Web, SEO, ecommerce, WhatsApp automation and growth playbooks for Chennai and Indian SMBs.",
    publisher: { "@type": "Organization", name: "SmartPixel", url: ORIGIN, logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` } },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${ORIGIN}/blog/${p.slug}`,
      datePublished: p.datePublishedIso,
      description: p.excerpt,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl },
    ],
  };

  return (
    <main className="bg-background text-foreground min-h-screen antialiased selection:bg-accent selection:text-accent-foreground">
      <Helmet>
        <title>Blog — Web, SEO & Growth Playbooks for Chennai SMBs | SmartPixel</title>
        <meta
          name="description"
          content="Practical, no-fluff articles on SEO, web design, WhatsApp automation and D2C growth — written by senior consultants for Chennai founders."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SmartPixel Insights — Web, SEO & Growth Playbooks" />
        <meta property="og:description" content="Consultant-grade playbooks on SEO, web design, WhatsApp automation and D2C growth for Chennai and Indian SMBs." />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Nav />
      <div className="pt-24" />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-8">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-accent flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
          </li>
          <ChevronRight size={12} />
          <li className="text-foreground font-semibold">Blog</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 pt-8 pb-14 border-b border-border">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-3 py-1 rounded-full">
            SmartPixel Insights
          </span>
          <WeightedHeading
            text="Playbooks, teardowns and real numbers for Indian SMB growth."
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mt-6"
          />
          <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mt-6 max-w-2xl">
            No fluff. No AI slop. Consultant-grade posts on SEO, web design, ecommerce and WhatsApp automation — written by the team that ships them for clients.
          </p>
        </div>

        {/* Search + categories */}
        <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-4 items-end">
          <label className="relative block max-w-md">
            <span className="sr-only">Search articles</span>
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles, keywords, topics..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-surface/20 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-sm placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <nav aria-label="Categories" className="mt-6 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c as Category | "All")}
              aria-pressed={cat === c}
              className={`text-[11px] uppercase tracking-widest font-bold px-4 py-2 rounded-full border transition-colors ${
                cat === c
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border text-muted-foreground hover:text-accent hover:border-accent/50 bg-surface/10"
              }`}
            >
              {c}
            </button>
          ))}
        </nav>
      </section>

      {/* Featured + trending sidebar */}
      {cat === "All" && !q && featured && (
        <section className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-14 grid lg:grid-cols-[2fr_1fr] gap-10">
          <Link
            to={`/blog/${featured.slug}`}
            className="group block p-8 sm:p-10 rounded-2xl border border-border bg-surface/20 hover:border-accent transition-colors"
          >
            <div className="flex items-center gap-3 text-xs mb-5">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground font-bold uppercase tracking-widest text-[10px] flex items-center gap-1">
                <Star size={10} /> Featured
              </span>
              <span className="text-muted-foreground">{featured.cat}</span>
              <span className="text-muted-foreground/50">·</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock size={11} /> {featured.read}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] text-foreground group-hover:text-accent transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed max-w-2xl">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
              Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <div className="space-y-6">
            {trending.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-4 flex items-center gap-1.5">
                  <TrendingUp size={12} /> Trending
                </p>
                <div className="space-y-3">
                  {trending.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/blog/${t.slug}`}
                      className="group block p-4 rounded-xl border border-border bg-surface/10 hover:border-accent/60 transition-colors"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">{t.cat}</p>
                      <p className="font-semibold text-foreground group-hover:text-accent transition-colors leading-snug text-sm">
                        {t.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-4">Latest</p>
              <div className="space-y-3">
                {recent.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/blog/${t.slug}`}
                    className="group flex items-start justify-between gap-3 py-2 border-b border-border/60 last:border-none"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{t.cat}</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                        {t.title}
                      </p>
                    </div>
                    <ArrowRight size={12} className="text-accent shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 py-10 pb-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            {q ? `Results for "${q}"` : cat === "All" ? "All articles" : cat}
          </h2>
          <span className="text-xs text-muted-foreground font-medium">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-border rounded-xl">
            <p className="text-muted-foreground">
              No articles match your search. Try a different keyword or category.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagedFiltered.map((p) => (
              <article
                key={p.slug}
                className="group p-6 rounded-xl border border-border bg-surface/10 hover:border-accent hover:bg-surface/20 transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-accent font-bold uppercase tracking-widest text-[10px]">{p.cat}</span>
                  <span className="text-muted-foreground/70 text-[11px]">{p.date}</span>
                </div>
                <Link to={`/blog/${p.slug}`} className="block flex-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-3 leading-relaxed">{p.excerpt}</p>
                </Link>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/60 text-xs">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Clock size={11} /> {p.read}
                  </span>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-accent uppercase tracking-wider"
                  >
                    Read <ArrowRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {canLoadMore && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-surface/10 hover:bg-accent hover:text-accent-foreground hover:border-accent font-semibold rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              Load more articles <ArrowRight size={12} />
            </button>
          </div>
        )}
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default BlogListing;
