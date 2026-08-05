import { Link } from "react-router-dom";
import SeoPageLayout, { FaqItem } from "@/components/SeoPageLayout";

type Props = {
  area: string;
  slug: string; // e.g., "pallavaram"
  nearby?: { name: string; slug: string }[];
  landmark?: string;
  localNote?: string;
  /** Unique meta description for this area — avoids duplicate-description reports in Search Console. */
  metaDescription?: string;
  /** Unique H1 override where the area has a distinct search phrasing. */
  headline?: string;
  /** Area-specific FAQs. Rendered on-page and emitted as FAQPage schema by the layout. */
  faqs?: FaqItem[];
};

const nearbyDefault = [
  { name: "Pallavaram", slug: "pallavaram" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "Chrompet", slug: "chrompet" },
  { name: "Guindy", slug: "guindy" },
  { name: "T Nagar", slug: "t-nagar" },
  { name: "Saidapet", slug: "saidapet" },
  { name: "Nungambakkam", slug: "nungambakkam" },
  { name: "Chitlapakkam", slug: "chitlapakkam" },
];

const LocationPage = ({
  area,
  slug,
  nearby,
  landmark,
  localNote,
  metaDescription,
  headline,
  faqs,
}: Props) => {
  const url = `https://smartpixel.in/web-design-${slug}`;
  const adjacents = (nearby ?? nearbyDefault).filter((n) => n.slug !== slug).slice(0, 4);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SmartPixel",
    "image": "https://smartpixel.in/logo.png",
    "url": url,
    "telephone": "+91-9886069488",
    "email": "workwithsmartpixel@gmail.com",
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${area}, Chennai`,
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chrompet",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600044",
      "addressCountry": "IN",
    },
  };

  // Fallback FAQs only used if an area hasn't supplied its own set.
  const fallbackFaqs: FaqItem[] = [
    {
      q: `How much does a website cost in ${area}, Chennai?`,
      a: `A 5-page business site for a ${area} business starts at ₹10,000. Ecommerce and custom builds start at ₹25,000, quoted after we see your product count and payment/logistics requirements.`,
    },
    {
      q: `How long does it take to build a website in ${area}?`,
      a: `Most brochure sites go live in 5–10 working days once content and images are with us. Ecommerce and custom app projects take 3–6 weeks.`,
    },
    {
      q: `Do you meet clients in ${area} in person?`,
      a: `Yes. Our studio is in Chrompet, so ${area} kickoffs, photo shoots and review meetings can happen face to face rather than only over calls.`,
    },
  ];

  return (
    <SeoPageLayout
      title={`Web Design Company in ${area}, Chennai | SmartPixel`}
      description={
        metaDescription ??
        `SmartPixel is a web design company working with ${area}, Chennai businesses — fast websites, ecommerce stores, local SEO and WhatsApp automation, built from our Chrompet studio.`
      }
      canonical={url}
      h1={headline ?? `Web Design Company in ${area}, Chennai`}
      breadcrumbs={[
        { name: "Home", url: "https://smartpixel.in/" },
        { name: `Web Design ${area}`, url },
      ]}
      schema={[localBusiness]}
      ctaText={`Get a Free Quote for Your ${area} Business →`}
      intro={
        <>
          SmartPixel provides{" "}
          <Link to="/services/web-design-chennai" className="text-accent underline hover:text-accent/80 transition-colors">website development</Link>,{" "}
          <Link to="/seo-services-chennai" className="text-accent underline hover:text-accent/80 transition-colors">SEO services</Link> and{" "}
          <Link to="/whatsapp-automation-chennai" className="text-accent underline hover:text-accent/80 transition-colors">WhatsApp automation</Link>{" "}
          to businesses in <strong className="text-foreground/70">{area}, Chennai</strong>
          {landmark ? ` — including the stretch around ${landmark}` : ""}. We build fast,
          conversion-focused sites and measure them on enquiries, not page views.{" "}
          <Link to="/contact" className="text-accent underline hover:text-accent/80 transition-colors">Get a project estimate</Link>.
        </>
      }
      sections={[
        {
          h2: `Why Local Businesses in ${area} Work With Us`,
          body: (
            <>
              {localNote && <p className="leading-relaxed text-muted-foreground">{localNote}</p>}
              <p className="leading-relaxed text-muted-foreground">
                We work out of Chrompet, so {area} projects get in-person kickoffs and same-week
                reviews instead of month-long email threads. Every build ships with clean
                on-page SEO, Core Web Vitals headroom and a Google Business Profile that
                matches the site. See{" "}
                <Link to="/portfolio" className="text-accent underline hover:text-accent/80 transition-colors">real before/after case studies</Link>{" "}
                before you commit to anything.
              </p>
            </>
          ),
        },
        {
          h2: `What We Build for ${area} Businesses`,
          body: (
            <ul className="list-disc pl-5 space-y-2.5 text-muted-foreground">
              <li>
                <Link to="/services/web-design-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  Web design &amp; development
                </Link>{" "}
                — mobile-first layouts built around the enquiry, not the slideshow.
              </li>
              <li>
                <Link to="/ecommerce-website-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  Ecommerce stores
                </Link>{" "}
                — payment gateway, GST invoicing, inventory and a checkout that survives mobile data.
              </li>
              <li>
                <Link to="/seo-services-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  Local SEO
                </Link>{" "}
                — Google Business Profile, area landing pages and reviews aimed at "{area.toLowerCase()}" searches.
              </li>
              <li>
                <Link to="/whatsapp-automation-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  WhatsApp automation
                </Link>{" "}
                — enquiries answered instantly and logged instead of lost in a personal inbox.
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-accent underline hover:text-accent/80 transition-colors">
                  Mobile &amp; web applications
                </Link>{" "}
                — booking, ordering and internal tools when a website isn't enough.
              </li>
            </ul>
          ),
        },
        {
          h2: `Nearby Areas We Serve Around ${area}`,
          body: (
            <div className="flex flex-wrap gap-2.5">
              {adjacents.map((a) => (
                <Link
                  key={a.slug}
                  to={`/web-design-${a.slug}`}
                  className="text-xs px-3.5 py-1.5 rounded-full border border-border bg-surface/40 hover:border-accent/60 hover:text-accent transition-all duration-200"
                >
                  Web design in {a.name}
                </Link>
              ))}
            </div>
          ),
        },
      ]}
      internalLinks={[
        { label: "SEO Services Chennai", href: "/seo-services-chennai" },
        { label: "Ecommerce Chennai", href: "/ecommerce-website-chennai" },
        { label: "WhatsApp Automation", href: "/whatsapp-automation-chennai" },
        { label: "Portfolio", href: "/portfolio" },
      ]}
      faqs={faqs && faqs.length ? faqs : fallbackFaqs}
    />
  );
};

export default LocationPage;
