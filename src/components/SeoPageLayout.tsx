import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { ReactNode } from "react";

export type FaqItem = { q: string; a: string };
export type Crumb = { name: string; url: string };

type Props = {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: ReactNode;
  sections: { h2: string; body: ReactNode }[];
  faqs: FaqItem[];
  breadcrumbs: Crumb[];
  schema?: object[];
  internalLinks?: { label: string; href: string }[];
  ctaText?: string;
};

const SeoPageLayout = ({
  title, description, canonical, h1, intro, sections, faqs, breadcrumbs, schema = [], internalLinks = [], ctaText = "Get a free quote →",
}: Props) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem", position: i + 1, name: b.name, item: b.url,
    })),
  };
  const faqSchema = faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        {schema.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <article className="px-5 sm:px-10 lg:px-20 py-16 max-w-[1100px] mx-auto">
        {/* Breadcrumb visible */}
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          {breadcrumbs.map((b, i) => (
            <span key={b.url}>
              {i > 0 && <span className="mx-2 text-accent">/</span>}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-foreground/70">{b.name}</span>
              ) : (
                <Link to={b.url.replace("https://www.smartpixel.in", "")} className="hover:text-accent">{b.name}</Link>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">{h1}</h1>
        <div className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-12 max-w-3xl">{intro}</div>

        {sections.map((s) => (
          <section key={s.h2} className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl mb-4">{s.h2}</h2>
            <div className="text-muted-foreground leading-relaxed space-y-3">{s.body}</div>
          </section>
        ))}

        {internalLinks.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl mb-4">Explore More</h2>
            <ul className="flex flex-wrap gap-2">
              {internalLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q} className="border border-border rounded-xl p-5">
                  <h3 className="font-medium text-foreground mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="border-t border-border pt-10">
          <Link to="/contact" className="btn-gold inline-block">{ctaText}</Link>
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default SeoPageLayout;
