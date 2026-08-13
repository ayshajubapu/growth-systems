import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";
import SeoPageLayout from "@/components/SeoPageLayout";
import NotFound from "@/pages/NotFound";
import { caseStudies, getCaseStudy, type CaseStudy as CaseStudyType } from "@/data/caseStudies";

const SITE = "https://smartpixel.in";

/* ────────────────────────────── Listing: /case-studies ───────────────────────────── */

const CaseStudiesIndex = () => {
  const canonical = `${SITE}/case-studies`;
  const title = "Case Studies — Real Client Projects | SmartPixel";
  const description =
    "Detailed write-ups of websites SmartPixel has designed, built and optimised — the brief, the architecture, the SEO work and what actually changed.";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: caseStudies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${SITE}/case-studies/${c.slug}`,
    })),
  };

  return (
    <main className="bg-background text-foreground min-h-screen antialiased">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <section className="px-5 sm:px-10 lg:px-20 py-16 w-full">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          <Link to="/" className="hover:text-accent font-semibold transition-colors">Home</Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-foreground/70 font-medium">Case Studies</span>
        </nav>

        <WeightedHeading
          text="Case Studies"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-foreground"
        />
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl font-light mb-12">
          Longer-form write-ups of client projects — what the business needed, how the site was structured, and the
          search work behind it. Shorter before/after snapshots live in the{" "}
          <Link to="/portfolio" className="text-accent underline font-medium">portfolio</Link>.
        </p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <li key={c.slug} className="border border-border rounded-xl overflow-hidden bg-surface/5">
              <Link to={`/case-studies/${c.slug}`} className="block group">
                <img
                  src={c.images[c.images.length - 1]?.src}
                  alt={c.images[c.images.length - 1]?.alt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto aspect-[16/10] object-cover object-top"
                />
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">{c.industry}</p>
                  <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {c.client}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{c.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
};

/* ────────────────────────── Detail: /case-studies/:slug ────────────────────────── */

const Detail = ({ study }: { study: CaseStudyType }) => {
  const url = `${SITE}/case-studies/${study.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    datePublished: study.publishedDate,
    dateModified: study.updatedDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${SITE}/#organization` },
    publisher: { "@id": `${SITE}/#organization` },
    about: {
      "@type": "Thing",
      name: `${study.client} — ${study.industry}`,
    },
  };

  const sections = [
    ...study.sections.map((s) => ({
      h2: s.h2,
      body: (
        <>
          {s.paragraphs?.map((p) => (
            <p key={p} className="leading-relaxed">{p}</p>
          ))}
          {s.bullets && (
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              {s.bullets.map((b) => (
                <li key={b} className="leading-relaxed">{b}</li>
              ))}
            </ul>
          )}
          {s.h2 === "Search Console performance" && study.metrics && (
            <ul className="grid gap-4 sm:grid-cols-2 mt-4 not-prose">
              {study.metrics.map((m) => (
                <li key={m.label} className="border border-border rounded-xl p-5 bg-surface/5">
                  <p className="text-3xl font-bold text-foreground">{m.value}</p>
                  <p className="text-sm font-medium text-foreground/80 mt-1">{m.label}</p>
                  <p className="text-xs text-muted-foreground mt-2">{m.source}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    })),
    {
      h2: "Before and after",
      body: (
        <div className="grid gap-6 sm:grid-cols-2">
          {study.images.map((img) => (
            <figure key={img.src} className="m-0">
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl border border-border object-cover object-top aspect-[16/10]"
              />
              {img.caption && (
                <figcaption className="text-xs text-muted-foreground mt-2">{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      ),
    },
    {
      h2: "Project details",
      body: (
        <dl className="grid gap-3 sm:grid-cols-2 text-sm">
          <div><dt className="font-semibold text-foreground">Client</dt><dd className="text-muted-foreground">{study.client}</dd></div>
          <div><dt className="font-semibold text-foreground">Industry</dt><dd className="text-muted-foreground">{study.industry}</dd></div>
          <div><dt className="font-semibold text-foreground">Location</dt><dd className="text-muted-foreground">{study.location}</dd></div>
          {study.liveUrl && (
            <div>
              <dt className="font-semibold text-foreground">Live site</dt>
              <dd>
                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                  {study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </dd>
            </div>
          )}
          <div className="sm:col-span-2">
            <dt className="font-semibold text-foreground">Technology and techniques</dt>
            <dd className="text-muted-foreground">{study.technology.join(" · ")}</dd>
          </div>
        </dl>
      ),
    },
    {
      h2: "Want something similar?",
      body: (
        <p className="leading-relaxed">
          This project combined{" "}
          {study.services.map((s, i) => (
            <span key={s.href}>
              {i > 0 && (i === study.services.length - 1 ? " and " : ", ")}
              <Link to={s.href} className="text-accent underline font-medium">{s.label}</Link>
            </span>
          ))}
          . If you run a business with inventory, locations or a long research cycle, the same structure applies —{" "}
          <Link to="/contact" className="text-accent underline font-medium">tell us what you're working on</Link>.
        </p>
      ),
    },
  ];

  return (
    <SeoPageLayout
      title={study.metaTitle}
      description={study.metaDescription}
      canonical={url}
      h1={study.title}
      breadcrumbs={[
        { name: "Home", url: `${SITE}/` },
        { name: "Case Studies", url: `${SITE}/case-studies` },
        { name: study.client, url },
      ]}
      schema={[articleSchema]}
      intro={<>{study.summary}</>}
      sections={sections}
      faqs={[]}
      internalLinks={[
        { label: "All case studies", href: "/case-studies" },
        { label: "Portfolio snapshots", href: "/portfolio" },
        { label: "Website design and build", href: "/services/web-design-chennai" },
        { label: "Search visibility work", href: "/seo-services-chennai" },
        { label: "Start a project", href: "/contact" },
      ]}
      ctaText="Start a project like this →"
    />
  );
};

const CaseStudyRoute = () => {
  const { slug } = useParams();
  if (!slug) return <CaseStudiesIndex />;
  const study = getCaseStudy(slug);
  if (!study) return <NotFound />;
  return <Detail study={study} />;
};

export default CaseStudyRoute;
