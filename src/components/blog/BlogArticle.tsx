import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingDown,
  Zap,
  Clock,
  ChevronRight,
  Share2,
  Link2,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
  Home,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";
import {
  ORIGIN,
  author,
  catToService,
  getRelatedPosts,
  wordCount,
  type Post,
  type BodyBlock,
} from "@/data/posts";

// ── Utilities ──
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// Extract H2 headings from body for TOC
const extractToc = (body: BodyBlock[]) =>
  body
    .map((b) => ("h" in b && b.h ? { id: slugify(b.h), text: b.h } : null))
    .filter((x): x is { id: string; text: string } => !!x);

// Extract FAQ blocks for FAQPage schema
const extractFaqs = (body: BodyBlock[]) =>
  body.flatMap((b) => ("faq" in b && b.faq ? b.faq : []));

// ── Reading progress bar ──
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-accent transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </div>
  );
};

// ── Table of Contents (sticky, current-section highlight) ──
const TableOfContents = ({ items }: { items: { id: string; text: string }[] }) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  useEffect(() => {
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
        if (visible[0]) setActive((visible[0].target as HTMLElement).id);
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  if (!items.length) return null;
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="text-[10px] uppercase font-bold tracking-widest text-accent mb-4">On this page</p>
      <ul className="space-y-2 border-l border-border">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`block pl-4 -ml-px border-l-2 py-1 transition-colors leading-snug ${
                active === i.id
                  ? "border-accent text-accent font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ── Social share bar ──
const ShareBar = ({ url, title }: { url: string; title: string }) => {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const shares = [
    { label: "Share on LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: "Share on X", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}` },
    { label: "Share on Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { label: "Share on WhatsApp", icon: MessageCircle, href: `https://wa.me/?text=${enc(`${title} ${url}`)}` },
    { label: "Share via Email", icon: Mail, href: `mailto:?subject=${enc(title)}&body=${enc(url)}` },
  ];
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1.5">
        <Share2 size={12} /> Share
      </span>
      {shares.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={s.label}
          className="w-9 h-9 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent flex items-center justify-center transition-colors"
        >
          <s.icon size={14} />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="w-9 h-9 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent flex items-center justify-center transition-colors"
      >
        <Link2 size={14} />
      </button>
      {copied && (
        <span className="text-xs text-accent font-semibold" role="status">
          Copied
        </span>
      )}
    </div>
  );
};

// ── Interactive calculator (moved from BlogPost) ──
const LeadLeakCalculator = () => {
  const [adSpend, setAdSpend] = useState(30000);
  const [convRate, setConvRate] = useState(1);
  const metrics = useMemo(() => {
    const clicks = Math.floor(adSpend / 15);
    const current = Math.floor(clicks * (convRate / 100));
    const optimized = Math.floor(clicks * 0.035);
    const missed = Math.max(0, optimized - current);
    return { missed, leaked: missed * 3000 };
  }, [adSpend, convRate]);

  return (
    <aside className="my-10 p-6 sm:p-8 rounded-xl border border-accent/30 bg-surface/20 space-y-6 not-prose">
      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-widest text-accent font-bold flex items-center gap-1.5">
          <TrendingDown size={12} /> Pipeline leak diagnostic
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
          Calculate your missed lead losses
        </h3>
        <p className="text-sm text-muted-foreground">
          Adjust the sliders to see how much revenue leaves your funnel each month.
        </p>
      </div>
      <div className="space-y-4 bg-background/60 p-5 rounded-lg border border-border">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-foreground">
            <label htmlFor="leak-spend">MONTHLY AD SPEND</label>
            <span className="text-accent font-mono">₹{adSpend.toLocaleString("en-IN")}</span>
          </div>
          <input
            id="leak-spend"
            type="range"
            min={10000}
            max={200000}
            step={5000}
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-foreground">
            <label htmlFor="leak-cr">CURRENT CONVERSION RATE</label>
            <span className="text-foreground font-mono">{convRate}%</span>
          </div>
          <input
            id="leak-cr"
            type="range"
            min={0.5}
            max={2.5}
            step={0.1}
            value={convRate}
            onChange={(e) => setConvRate(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 rounded-lg border border-border bg-background/40">
          <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Missed leads / month</p>
          <p className="text-xl sm:text-2xl font-bold text-foreground font-display">{metrics.missed}</p>
        </div>
        <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
          <p className="text-[10px] uppercase font-bold text-accent mb-1">Value leaking / month</p>
          <p className="text-xl sm:text-2xl font-bold text-accent font-display">
            ₹{metrics.leaked.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-all"
      >
        Fix My Funnel <ArrowRight size={13} />
      </Link>
    </aside>
  );
};

// ── Inline CTA (used every 3–4 sections) ──
const InlineCTA = ({
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) => (
  <aside className="my-10 p-6 sm:p-8 rounded-xl border border-accent/30 bg-surface/20 not-prose">
    <div className="flex items-start gap-4">
      <div className="hidden sm:flex w-11 h-11 rounded-full bg-accent/15 items-center justify-center shrink-0">
        <Zap size={18} className="text-accent" />
      </div>
      <div className="flex-1 space-y-3">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
        {ctaLabel && ctaHref && (
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-colors"
          >
            {ctaLabel} <ArrowRight size={12} />
          </Link>
        )}
      </div>
    </div>
  </aside>
);

// ── Body block renderer ──
const RenderBlock = ({ block }: { block: BodyBlock }) => {
  if ("h" in block && block.h) {
    return (
      <h2 id={slugify(block.h)} className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight scroll-mt-24 mt-12 mb-4">
        {block.h}
      </h2>
    );
  }
  if ("h3" in block && block.h3) {
    return (
      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight mt-8 mb-3">
        {block.h3}
      </h3>
    );
  }
  if ("p" in block && block.p !== undefined) {
    return <p className="text-foreground/85 leading-relaxed text-base sm:text-[17px] my-4">{block.p}</p>;
  }
  if ("list" in block && block.list) {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag className={`my-5 space-y-2.5 text-foreground/85 text-base sm:text-[17px] ${block.ordered ? "list-decimal" : "list-none"} pl-0`}>
        {block.list.map((it, i) => (
          <li key={i} className="flex gap-3 pl-1">
            {block.ordered ? (
              <span className="font-display text-accent font-bold shrink-0 min-w-[1.5rem]">{i + 1}.</span>
            ) : (
              <CheckCircle size={16} className="text-accent shrink-0 mt-1.5" />
            )}
            <span className="leading-relaxed">{it}</span>
          </li>
        ))}
      </Tag>
    );
  }
  if ("table" in block && block.table) {
    return (
      <div className="my-8 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface/40">
            <tr>
              {block.table.head.map((h, i) => (
                <th key={i} className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider border-b border-border">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-surface/10" : ""}>
                {r.map((c, j) => (
                  <td key={j} className="px-4 py-3 text-foreground/80 border-b border-border/60 align-top">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if ("quote" in block && block.quote) {
    return (
      <blockquote className="my-8 pl-6 border-l-4 border-accent italic text-lg sm:text-xl text-foreground font-display leading-relaxed">
        &ldquo;{block.quote.text}&rdquo;
        {block.quote.source && <footer className="mt-2 text-sm not-italic text-muted-foreground font-sans">— {block.quote.source}</footer>}
      </blockquote>
    );
  }
  if ("callout" in block && block.callout) {
    return <InlineCTA {...block.callout} />;
  }
  if ("faq" in block && block.faq) {
    return (
      <div className="my-8 space-y-3">
        {block.faq.map((f, i) => (
          <details key={i} className="group border border-border rounded-lg bg-surface/10 open:bg-surface/20 transition-colors">
            <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-semibold text-foreground">
              <span>{f.q}</span>
              <ChevronRight size={16} className="text-accent transition-transform group-open:rotate-90 shrink-0" />
            </summary>
            <div className="px-5 pb-5 text-foreground/80 leading-relaxed text-sm sm:text-base">{f.a}</div>
          </details>
        ))}
      </div>
    );
  }
  if ("type" in block) {
    if (block.type === "calculator") return <LeadLeakCalculator />;
    if (block.type === "checklist") {
      return (
        <InlineCTA
          title="Deploy a high-ticket virtual showroom framework"
          body="We build real-time pricing feeds, dynamic gold calculators and private encrypted preview channels to secure luxury buyers."
          ctaLabel="Request the checklist"
          ctaHref="/contact"
        />
      );
    }
    if (block.type === "speed-audit") {
      return (
        <aside className="my-10 p-6 sm:p-8 rounded-xl border border-accent/30 bg-surface/20 not-prose">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-accent font-bold flex items-center gap-1.5">
              <Zap size={12} /> Free 24-hour audit
            </span>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
              Claim your screen-recorded conversion breakdown
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No automated PDF. A senior consultant records a 20-minute video walking through every leak — yours to keep whether you hire us or not.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-all"
              >
                Get free video audit <ArrowRight size={13} />
              </Link>
              <a
                href="https://wa.me/919886069488?text=Hi%20SmartPixel%2C%20I%27d%20like%20a%20website%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border bg-background hover:bg-surface/40 font-semibold rounded-lg text-xs text-foreground transition-all"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </aside>
      );
    }
  }
  return null;
};

// ── Related services block (based on category) ──
const RelatedServices = ({ post }: { post: Post }) => {
  const services = catToService[post.cat] ?? [];
  if (!services.length) return null;
  return (
    <section className="mt-16 pt-10 border-t border-border">
      <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-3">Related services</p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
        Ready to put this into practice?
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <Link
            key={s.href}
            to={s.href}
            className="group p-5 rounded-xl border border-border bg-surface/10 hover:border-accent hover:bg-surface/20 transition-colors flex items-start justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-foreground group-hover:text-accent transition-colors">{s.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.blurb}</p>
            </div>
            <ArrowRight size={16} className="text-accent shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    </section>
  );
};

// ── Related posts (same category) ──
const RelatedPosts = ({ post }: { post: Post }) => {
  const related = getRelatedPosts(post, 3);
  if (!related.length) return null;
  return (
    <section className="mt-14 pt-10 border-t border-border">
      <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-3">Keep reading</p>
      <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
        Related articles
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {related.map((r) => (
          <Link
            key={r.slug}
            to={`/blog/${r.slug}`}
            className="group p-5 rounded-xl border border-border bg-surface/10 hover:border-accent hover:bg-surface/20 transition-colors flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">{r.cat}</span>
            <p className="font-display font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
              {r.title}
            </p>
            <span className="mt-auto pt-4 text-xs text-muted-foreground flex items-center gap-2">
              <Clock size={11} /> {r.read}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ── Author box ──
const AuthorBox = () => (
  <aside className="mt-14 p-6 sm:p-8 rounded-2xl border border-border bg-surface/20 flex flex-col sm:flex-row gap-5 items-start">
    <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center font-display font-bold text-accent text-xl shrink-0">
      {author.avatarInitials}
    </div>
    <div className="flex-1 space-y-2">
      <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Written by</p>
      <p className="font-display text-xl font-bold text-foreground">
        {author.name}{" "}
        <span className="text-sm text-muted-foreground font-normal">· {author.yearsExperience}+ years</span>
      </p>
      <p className="text-sm text-muted-foreground">{author.role}</p>
      <p className="text-sm text-foreground/80 leading-relaxed pt-1">{author.bio}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/about" className="text-xs font-semibold text-accent hover:underline">
          More about SmartPixel →
        </Link>
        <Link to="/portfolio" className="text-xs font-semibold text-accent hover:underline">
          See our work →
        </Link>
      </div>
    </div>
  </aside>
);

// ── Main article ──
export default function BlogArticle({ post }: { post: Post }) {
  const canonicalUrl = `${ORIGIN}/blog/${post.slug}`;
  const toc = extractToc(post.body);
  const faqs = extractFaqs(post.body);
  const wc = wordCount(post);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublishedIso,
    dateModified: post.dateModifiedIso ?? post.datePublishedIso,
    wordCount: wc,
    keywords: post.keywords?.join(", "),
    inLanguage: "en-IN",
    articleSection: post.cat,
    author: { "@type": "Organization", name: author.name, url: ORIGIN },
    publisher: {
      "@type": "Organization",
      name: "SmartPixel",
      url: ORIGIN,
      logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${ORIGIN}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonicalUrl,
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".post-excerpt"] },
  };

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-accent-foreground antialiased">
      <Helmet>
        <title>{`${post.title} | SmartPixel Insights`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta property="article:published_time" content={post.datePublishedIso} />
        {post.dateModifiedIso && <meta property="article:modified_time" content={post.dateModifiedIso} />}
        <meta property="article:section" content={post.cat} />
        {post.keywords?.map((k) => (
          <meta key={k} property="article:tag" content={k} />
        ))}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <ReadingProgress />
      <Nav />
      <div className="pt-24" />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-16 pt-8">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <li>
            <Link to="/" className="hover:text-accent flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
          </li>
          <ChevronRight size={12} />
          <li>
            <Link to="/blog" className="hover:text-accent">
              Blog
            </Link>
          </li>
          <ChevronRight size={12} />
          <li className="text-foreground/70 truncate max-w-[240px] sm:max-w-none">{post.cat}</li>
          <ChevronRight size={12} />
          <li className="text-foreground font-semibold truncate max-w-[280px] sm:max-w-none">{post.title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="max-w-[900px] mx-auto px-5 sm:px-10 lg:px-16 pt-10 pb-10 border-b border-border">
        <div className="flex items-center gap-3 text-xs flex-wrap mb-6">
          <span className="px-3 py-1 rounded-full bg-accent/15 text-accent font-bold uppercase tracking-wider text-[10px]">
            {post.cat}
          </span>
          <span className="text-muted-foreground flex items-center gap-1.5">
            <Clock size={12} /> {post.read} read
          </span>
          <span className="text-muted-foreground/50">·</span>
          <time dateTime={post.datePublishedIso} className="text-muted-foreground">
            {post.date}
          </time>
        </div>
        <WeightedHeading
          text={post.title}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-foreground"
        />
        <p className="post-excerpt text-lg sm:text-xl font-light text-muted-foreground leading-relaxed mt-6 border-l-2 border-accent pl-5 italic">
          {post.excerpt}
        </p>
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center font-display font-bold text-accent">
              {author.avatarInitials}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{author.name}</p>
              <p className="text-xs text-muted-foreground">{author.role}</p>
            </div>
          </div>
          <ShareBar url={canonicalUrl} title={post.title} />
        </div>
      </header>

      {/* Body + TOC */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-16 py-14 grid lg:grid-cols-[1fr_260px] gap-12">
        <article className="max-w-[720px] w-full">
          <div className="prose prose-invert max-w-none">
            {post.body.map((b, i) => (
              <RenderBlock key={i} block={b} />
            ))}
          </div>

          {/* Closing CTA banner */}
          <div className="mt-14 p-8 rounded-2xl bg-foreground text-background text-center space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Ready to grow?</p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
              Let's build something that actually generates leads.
            </h3>
            <p className="text-background/70 max-w-md mx-auto text-sm">
              Book a free 20-minute strategy call with a senior consultant. No pitch — just a diagnostic.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-all"
              >
                Book strategy call <ArrowRight size={13} />
              </Link>
              <a
                href="https://wa.me/919886069488"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-background/30 hover:bg-background/10 font-semibold rounded-lg text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle size={13} /> WhatsApp us
              </a>
            </div>
          </div>

          <AuthorBox />
          <RelatedServices post={post} />
          <RelatedPosts post={post} />

          <div className="mt-14 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider hover:opacity-80">
              ← All articles
            </Link>
            <ShareBar url={canonicalUrl} title={post.title} />
          </div>
        </article>

        <aside className="hidden lg:block sticky top-24 self-start">
          <TableOfContents items={toc} />
          <div className="mt-10 p-5 rounded-xl border border-accent/30 bg-surface/20 space-y-3">
            <Shield size={16} className="text-accent" />
            <p className="text-sm font-semibold text-foreground leading-snug">Free website + SEO audit</p>
            <p className="text-xs text-muted-foreground">Screen-recorded, 20 minutes, no obligation.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
            >
              Book yours <ArrowRight size={11} />
            </Link>
          </div>
        </aside>
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
