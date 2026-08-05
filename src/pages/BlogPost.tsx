import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";
import { ArrowRight, ChevronRight, Home, List, Zap, CheckCircle, MessageCircle, Search } from "lucide-react";
import { posts, getPost, getRelated, type Block, type Post } from "@/data/posts";

const ORIGIN = "https://smartpixel.in";
const AUTHOR_NAME = "Aysha";
const AUTHOR_TITLE = "Founder, SmartPixel — 4+ years shipping SEO & web systems for Indian SMBs";

// ─────────────────────────────────────────────────────────────────────────
// Shared JSON-LD
// ─────────────────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmartPixel",
  url: ORIGIN,
  logo: `${ORIGIN}/logo.png`,
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-9886069488", contactType: "customer service", areaServed: "IN", availableLanguage: ["en", "ta"] },
  ],
};

function buildArticleSchema(post: Post) {
  const canonical = `${ORIGIN}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublishedIso,
    dateModified: post.datePublishedIso,
    author: { "@type": "Person", name: post.author || AUTHOR_NAME, url: `${ORIGIN}/about` },
    publisher: {
      "@type": "Organization",
      name: "SmartPixel",
      logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: post.image ? `${ORIGIN}${post.image}` : `${ORIGIN}/og-banner.png`,
    articleSection: post.category,
    keywords: post.category,
  };
}

function buildFaqSchema(post: Post) {
  const faqBlock = post.body.find((b) => b.type === "faq");
  if (!faqBlock || faqBlock.type !== "faq") return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqBlock.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildBreadcrumbSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${ORIGIN}/blog` },
      { "@type": "ListItem", position: 3, name: post.category, item: `${ORIGIN}/blog?category=${encodeURIComponent(post.category)}` },
      { "@type": "ListItem", position: 4, name: post.title, item: `${ORIGIN}/blog/${post.slug}` },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────────
// Breadcrumb component (visual + accessible)
// ─────────────────────────────────────────────────────────────────────────
function Breadcrumbs({ post }: { post: Post }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-muted-foreground mb-8">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
            <Home size={12} /> Home
          </Link>
        </li>
        <ChevronRight size={12} className="opacity-40" />
        <li>
          <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
        </li>
        <ChevronRight size={12} className="opacity-40" />
        <li>
          <span className="text-accent/80">{post.category}</span>
        </li>
        <ChevronRight size={12} className="opacity-40" />
        <li className="text-foreground/80 line-clamp-1 max-w-[240px] sm:max-w-none" aria-current="page">
          {post.title}
        </li>
      </ol>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Reading progress bar
// ─────────────────────────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
      <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Inline CTA block variants
// ─────────────────────────────────────────────────────────────────────────
function InlineCta({ variant, text }: { variant: "audit" | "contact" | "whatsapp"; text?: string }) {
  if (variant === "whatsapp") {
    return (
      <aside className="my-10 p-6 sm:p-7 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-surface/20">
        <div className="flex items-start gap-3">
          <MessageCircle className="text-emerald-400 shrink-0 mt-1" size={22} />
          <div className="space-y-3">
            <p className="text-foreground font-medium leading-relaxed">
              {text || "Want us to set this up for your business? Ping our WhatsApp — we reply within an hour on working days."}
            </p>
            <a
              href="https://wa.me/919886069488?text=Hi%20SmartPixel%2C%20I%20read%20your%20blog%20and%20want%20to%20talk%20about%20automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-semibold rounded-lg text-xs uppercase tracking-wider hover:bg-emerald-500/90 transition-colors"
            >
              Message on WhatsApp <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </aside>
    );
  }
  if (variant === "audit") {
    return (
      <aside className="my-10 p-6 sm:p-7 rounded-xl border border-accent/25 bg-gradient-to-br from-accent/10 to-surface/20">
        <div className="flex items-start gap-3">
          <Zap className="text-accent shrink-0 mt-1" size={22} />
          <div className="space-y-3">
            <p className="text-foreground font-medium leading-relaxed">
              {text || "Want to know exactly where your website is losing customers? We run a free 24-hour technical + conversion audit."}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Claim your free audit <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </aside>
    );
  }
  return (
    <aside className="my-10 p-6 sm:p-7 rounded-xl border border-border bg-gradient-to-br from-surface/40 to-surface/10">
      <div className="flex items-start gap-3">
        <CheckCircle className="text-accent shrink-0 mt-1" size={22} />
        <div className="space-y-3">
          <p className="text-foreground font-medium leading-relaxed">
            {text || "Ready to grow your business? Let's build something amazing together."}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 transition-colors"
          >
            Talk to SmartPixel <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Body renderer
// ─────────────────────────────────────────────────────────────────────────
function BodyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="text-muted-foreground/95 leading-relaxed text-base sm:text-[17px]">{block.text}</p>;
    case "h2":
      return (
        <h2 id={block.id} className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight pt-4 scroll-mt-28">
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="font-display text-xl font-semibold text-foreground tracking-tight pt-2">{block.text}</h3>;
    case "ul":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2 text-muted-foreground/95 leading-relaxed text-base sm:text-[17px]">
              <span className="text-accent mt-2 shrink-0">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 pl-1 counter-reset-list">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground/95 leading-relaxed text-base sm:text-[17px]">
              <span className="text-accent font-semibold shrink-0 w-6">{i + 1}.</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="my-6 p-5 rounded-lg border-l-4 border-accent bg-accent/5">
          {block.label && (
            <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">{block.label}</p>
          )}
          <p className="text-foreground italic leading-relaxed">{block.text}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-4 italic text-foreground/90 my-6">
          "{block.text}"
          {block.cite && <cite className="block text-xs text-muted-foreground mt-2 not-italic">— {block.cite}</cite>}
        </blockquote>
      );
    case "faq":
      return (
        <section className="mt-12 pt-8 border-t border-border space-y-4" id="faq">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight scroll-mt-28">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 pt-2">
            {block.items.map((item, i) => (
              <details key={i} className="group rounded-lg border border-border bg-surface/20 p-5 open:bg-surface/40">
                <summary className="cursor-pointer font-semibold text-foreground list-none flex items-start justify-between gap-4">
                  <span>{item.q}</span>
                  <ChevronRight className="shrink-0 mt-1 text-muted-foreground group-open:rotate-90 transition-transform" size={16} />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      );
    case "cta":
      return <InlineCta variant={block.variant} text={block.text} />;
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Table of Contents (sticky, from H2s)
// ─────────────────────────────────────────────────────────────────────────
function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [headings]);
  if (headings.length === 0) return null;
  return (
    <nav aria-label="Table of contents" className="hidden xl:block sticky top-28 self-start w-64 shrink-0">
      <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-3 flex items-center gap-1.5">
        <List size={12} /> On this page
      </p>
      <ul className="space-y-1.5 text-sm border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block pl-3 py-1 -ml-px border-l transition-colors ${
                active === h.id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Author box
// ─────────────────────────────────────────────────────────────────────────
function AuthorBox() {
  return (
    <aside className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-5 items-start">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/40 flex items-center justify-center text-2xl font-bold text-accent-foreground shrink-0">
        A
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-foreground">{AUTHOR_NAME}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{AUTHOR_TITLE}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Writes about SEO, conversion design, WhatsApp automation and AI adoption for Indian small businesses. Based in Chrompet, Chennai.
        </p>
        <div className="pt-2 flex gap-4 text-xs">
          <Link to="/about" className="text-accent hover:underline">About SmartPixel</Link>
          <Link to="/contact" className="text-accent hover:underline">Work with us</Link>
        </div>
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Closing CTA + Related posts + Related services
// ─────────────────────────────────────────────────────────────────────────
function RelatedPosts({ slug }: { slug: string }) {
  const related = getRelated(slug, 3);
  return (
    <section className="mt-16 pt-10 border-t border-border">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6">Related reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {related.map((r) => (
          <Link
            key={r.slug}
            to={`/blog/${r.slug}`}
            className="group p-5 rounded-xl border border-border bg-surface/10 hover:border-accent/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">{r.category}</p>
              <h3 className="font-display text-base font-semibold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-3">
                {r.title}
              </h3>
            </div>
            <p className="text-xs text-muted-foreground mt-3">{r.read} read</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Context-driven links from an article to the location pages it is actually
// relevant to (per-slug first, category fallback). Strengthens topical authority
// between the blog and the area pages instead of linking everything to everything.
const LOCATION_LINKS_BY_SLUG: Record<string, { label: string; href: string }[]> = {
  "local-seo-checklist-for-small-businesses": [
    { label: "Local SEO & web design in Chitlapakkam", href: "/web-design-chitlapakkam" },
    { label: "Web design in Pallavaram", href: "/web-design-pallavaram" },
    { label: "Web design in Tambaram", href: "/web-design-tambaram" },
  ],
  "why-your-website-isnt-ranking-on-google": [
    { label: "Long-tail local SEO in Tambaram", href: "/web-design-tambaram" },
    { label: "Web design in Chrompet", href: "/web-design-chrompet" },
  ],
  "why-high-google-impressions-fail-to-generate-enquiries": [
    { label: "Long-tail local SEO in Tambaram", href: "/web-design-tambaram" },
    { label: "Retail web design in T Nagar", href: "/web-design-t-nagar" },
  ],
  "website-speed-hidden-sales-killer": [
    { label: "Mobile-speed builds in Pallavaram", href: "/web-design-pallavaram" },
    { label: "Retail web design in T Nagar", href: "/web-design-t-nagar" },
  ],
  "3-friction-points-killing-chennai-d2c-checkout": [
    { label: "Retail & checkout builds in T Nagar", href: "/web-design-t-nagar" },
    { label: "Mobile-speed builds in Pallavaram", href: "/web-design-pallavaram" },
  ],
  "chennai-jewelry-showroom-digital-trust-architecture": [
    { label: "Premium web design in Nungambakkam", href: "/web-design-nungambakkam" },
    { label: "Showroom web design in T Nagar", href: "/web-design-t-nagar" },
  ],
  "how-we-stopped-chennai-clinic-wasting-google-ads": [
    { label: "Clinic web design in Tambaram", href: "/web-design-tambaram" },
    { label: "Clinic & services web design in Chitlapakkam", href: "/web-design-chitlapakkam" },
  ],
  "whatsapp-automation-save-20-hours-per-week": [
    { label: "Professional services in Saidapet", href: "/web-design-saidapet" },
    { label: "Web design in Chrompet", href: "/web-design-chrompet" },
  ],
  "10-ways-to-automate-customer-communication": [
    { label: "Professional services in Saidapet", href: "/web-design-saidapet" },
    { label: "Neighbourhood businesses in Chitlapakkam", href: "/web-design-chitlapakkam" },
  ],
  "custom-website-vs-wordpress": [
    { label: "B2B web design in Guindy", href: "/web-design-guindy" },
    { label: "Premium web design in Nungambakkam", href: "/web-design-nungambakkam" },
  ],
  "15-signs-your-business-needs-a-new-website": [
    { label: "B2B web design in Guindy", href: "/web-design-guindy" },
    { label: "Web design in Chrompet", href: "/web-design-chrompet" },
  ],
};

const LOCATION_LINKS_BY_CATEGORY: Record<string, { label: string; href: string }[]> = {
  SEO: [
    { label: "Local SEO in Chitlapakkam", href: "/web-design-chitlapakkam" },
    { label: "Local SEO in Tambaram", href: "/web-design-tambaram" },
    { label: "Local SEO in Chrompet", href: "/web-design-chrompet" },
  ],
  "Web Development": [
    { label: "Web design in Chrompet", href: "/web-design-chrompet" },
    { label: "Web design in Guindy", href: "/web-design-guindy" },
    { label: "Web design in Pallavaram", href: "/web-design-pallavaram" },
  ],
  "WhatsApp Automation": [
    { label: "Saidapet professional services", href: "/web-design-saidapet" },
    { label: "Tambaram clinics & retail", href: "/web-design-tambaram" },
  ],
  "AI & Automation": [
    { label: "Guindy B2B & industrial", href: "/web-design-guindy" },
    { label: "Chrompet businesses", href: "/web-design-chrompet" },
  ],
};

function RelatedLocations({ slug, category }: { slug: string; category: string }) {
  const links =
    LOCATION_LINKS_BY_SLUG[slug] ||
    LOCATION_LINKS_BY_CATEGORY[category] || [
      { label: "Web design in Chrompet", href: "/web-design-chrompet" },
      { label: "Web design in T Nagar", href: "/web-design-t-nagar" },
    ];
  return (
    <section className="mt-6 p-6 rounded-xl border border-border bg-surface/10">
      <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-3">
        Where we do this in Chennai
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((s) => (
          <Link
            key={s.href}
            to={s.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs text-foreground hover:border-accent/40 hover:text-accent transition-colors"
          >
            {s.label} <ArrowRight size={11} />
          </Link>
        ))}
      </div>
    </section>
  );
}

function RelatedServices({ category }: { category: string }) {
  const map: Record<string, { label: string; href: string }[]> = {
    SEO: [
      { label: "SEO services in Chennai", href: "/seo-services-chennai" },
      { label: "Digital marketing", href: "/services/digital-marketing-chennai" },
      { label: "Our portfolio", href: "/portfolio" },
    ],
    "Web Development": [
      { label: "Web design Chennai", href: "/services/web-design-chennai" },
      { label: "Web app development", href: "/services/web-app-development" },
      { label: "Ecommerce websites", href: "/ecommerce-website-chennai" },
    ],
    "WhatsApp Automation": [
      { label: "WhatsApp automation Chennai", href: "/whatsapp-automation-chennai" },
      { label: "Digital marketing", href: "/services/digital-marketing-chennai" },
      { label: "Talk to us", href: "/contact" },
    ],
    "AI & Automation": [
      { label: "Web app development", href: "/services/web-app-development" },
      { label: "WhatsApp automation", href: "/whatsapp-automation-chennai" },
      { label: "Talk to us", href: "/contact" },
    ],
  };
  const services = map[category] || [
    { label: "Our services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact us", href: "/contact" },
  ];
  return (
    <section className="mt-10 p-6 rounded-xl border border-border bg-surface/10">
      <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-3">Explore related services</p>
      <div className="flex flex-wrap gap-2">
        {services.map((s) => (
          <Link
            key={s.href}
            to={s.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border bg-background/50 text-xs text-foreground hover:border-accent/40 hover:text-accent transition-colors"
          >
            {s.label} <ArrowRight size={11} />
          </Link>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <aside className="mt-12 p-8 sm:p-10 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-surface/30 to-surface/10 text-center space-y-4">
      <p className="text-[10px] uppercase tracking-widest font-bold text-accent">Ready when you are</p>
      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
        Ready to grow your business? Let's build something amazing together.
      </h3>
      <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
        Book a free 20-minute strategy call. We'll audit your website, look at your funnel, and tell you the two or three moves worth making next.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors">
          Book strategy call <ArrowRight size={14} />
        </Link>
        <a
          href="https://wa.me/919886069488?text=Hi%20SmartPixel%2C%20I%20want%20to%20grow%20my%20business"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background/60 text-foreground font-semibold rounded-lg text-sm hover:border-accent/40 transition-colors"
        >
          Message on WhatsApp
        </a>
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Blog listing (directory)
// ─────────────────────────────────────────────────────────────────────────
function BlogDirectory() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], []);
  const filtered = useMemo(
    () =>
      posts.filter((p) => {
        if (category !== "All" && p.category !== category) return false;
        if (q && !(p.title + " " + p.excerpt).toLowerCase().includes(q.toLowerCase())) return false;
        return true;
      }),
    [q, category],
  );

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${ORIGIN}/blog`,
    name: "SmartPixel Insights",
    description: "SEO, web, WhatsApp automation and AI insights for Indian SMBs.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${ORIGIN}/blog/${p.slug}`,
      datePublished: p.datePublishedIso,
      author: { "@type": "Person", name: p.author || AUTHOR_NAME },
    })),
  };

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-white antialiased">
      <Helmet>
        <title>Blog — SEO, Web, WhatsApp & AI Insights for Indian SMBs | SmartPixel</title>
        <meta name="description" content="Practical, consultant-grade playbooks on SEO, web design, WhatsApp automation and AI adoption — written for Indian small businesses." />
        <link rel="canonical" href={`${ORIGIN}/blog`} />
        <meta property="og:title" content="SmartPixel Blog — SEO, Web & Automation for Indian SMBs" />
        <meta property="og:description" content="Long-form playbooks on SEO, web performance, WhatsApp automation and AI." />
        <meta property="og:url" content={`${ORIGIN}/blog`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <section className="px-5 sm:px-10 lg:px-24 py-16 max-w-[1200px] mx-auto space-y-10">
        <div className="space-y-4 max-w-2xl border-b border-border/60 pb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-3 py-1 rounded-full inline-block">
            SmartPixel Insights
          </span>
          <WeightedHeading text="Real playbooks. No filler." className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight" />
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Consultant-grade writing on SEO, web performance, WhatsApp automation and AI for Indian SMBs. Written by practitioners, not content marketers.
          </p>
        </div>

        {/* Search + filters */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-surface/30 border border-border text-sm focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  category === c ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="group p-6 rounded-xl border border-border bg-gradient-to-b from-surface/20 to-surface/5 hover:border-accent/30 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-accent uppercase tracking-wider">{item.category}</span>
                  <span className="text-muted-foreground/70">{item.date}</span>
                </div>
                <Link to={`/blog/${item.slug}`} className="block group-hover:text-accent transition-colors">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">{item.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{item.excerpt}</p>
              </div>
              <div className="pt-6 border-t border-border/40 mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-foreground">
                <span>{item.read} read</span>
                <Link to={`/blog/${item.slug}`} className="inline-flex items-center gap-1 bg-surface/80 px-3 py-1.5 rounded-md border border-border group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  Read article <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-16">No articles match your search yet.</p>
          )}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Main entry
// ─────────────────────────────────────────────────────────────────────────
export default function BlogPost() {
  const { slug } = useParams<{ slug?: string }>();

  if (!slug) return <BlogDirectory />;

  const post = getPost(slug);
  if (!post) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Nav />
        <div className="pt-32 pb-24 px-6 text-center space-y-4 max-w-lg mx-auto">
          <p className="text-muted-foreground">That article was not found.</p>
          <Link to="/blog" className="text-accent font-semibold underline">Return to the blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const canonical = `${ORIGIN}/blog/${post.slug}`;
  const headings = post.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2").map((h) => ({ id: h.id, text: h.text }));
  const faqSchema = buildFaqSchema(post);

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-white antialiased">
      <Helmet>
        <title>{`${post.title} | SmartPixel`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.datePublishedIso} />
        <meta property="article:author" content={post.author || AUTHOR_NAME} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <script type="application/ld+json">{JSON.stringify(buildArticleSchema(post))}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(post))}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <ReadingProgress />
      <Nav />
      <div className="pt-24" />

      <div className="px-5 sm:px-10 lg:px-24 py-12 max-w-[1200px] mx-auto flex gap-10">
        <TableOfContents headings={headings} />

        <article className="min-w-0 flex-1 max-w-[780px]">
          <Breadcrumbs post={post} />

          <header className="space-y-4 mb-10 border-b border-border pb-8">
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-bold uppercase tracking-wider">{post.category}</span>
              <span className="text-muted-foreground font-medium">{post.date}</span>
              <span className="text-muted-foreground/30 select-none">•</span>
              <span className="text-muted-foreground font-medium">{post.read} read</span>
              <span className="text-muted-foreground/30 select-none">•</span>
              <span className="text-muted-foreground font-medium">By {post.author || AUTHOR_NAME}</span>
            </div>

            <WeightedHeading text={post.title} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground" />

            <p className="text-muted-foreground text-lg sm:text-xl font-light leading-relaxed border-l-2 border-accent pl-4 italic bg-surface/10 py-2 pr-2 rounded-r-md">
              {post.excerpt}
            </p>
          </header>

          <div className="space-y-6">
            {post.body.map((block, idx) => (
              <BodyBlock key={idx} block={block} />
            ))}
          </div>

          <AuthorBox />
          <RelatedServices category={post.category} />
          <RelatedLocations slug={post.slug} category={post.category} />
          <RelatedPosts slug={post.slug} />
          <ClosingCta />

          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider hover:text-accent/80 transition-colors">
              ← Back to all articles
            </Link>
          </div>
        </article>
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
