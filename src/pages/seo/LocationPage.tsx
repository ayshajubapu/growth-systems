import { Link } from "react-router-dom";
import SeoPageLayout from "@/components/SeoPageLayout";

type Props = {
  area: string;
  slug: string; // e.g., "pallavaram"
  nearby?: { name: string; slug: string }[];
  landmark?: string;
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

const LocationPage = ({ area, slug, nearby, landmark }: Props) => {
  const url = `https://www.smartpixel.in/web-design-${slug}`;
  const adjacents = (nearby ?? nearbyDefault).filter((n) => n.slug !== slug).slice(0, 4);

  // OPTIMIZED: Enhanced structured data layout footprint for superior local indexing
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SmartPixel",
    "image": "https://www.smartpixel.in/logo.png",
    "url": url,
    "telephone": "+91-9886069488",
    "email": "workwithsmartpixel@gmail.com",
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${area}, Chennai`
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chrompet",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600044",
      "addressCountry": "IN"
    }
  };

  // OPTIMIZED: Dynamic structured FAQ markup injected straight into schema pipeline
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does a website cost in ${area}, Chennai?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Websites for ${area} businesses start from ₹10,000 for a basic 5-page site. Ecommerce and custom builds start from ₹40,000.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does it take to build a website in ${area}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most websites are delivered in 5–10 working days. Larger ecommerce or custom app projects take 3–6 weeks.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you visit clients in ${area} in person?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. We're based in Chrompet and happy to meet clients in ${area} for kickoff or strategy sessions.`
        }
      }
    ]
  };

  return (
    <SeoPageLayout
      title={`Website Development Company in ${area}, Chennai | SmartPixel`}
      description={`Looking for an expert website development company in ${area}, Chennai? SmartPixel delivers high-performance e-commerce setups, SEO tuning, and web designs for local businesses.`}
      canonical={url}
      h1={`Website Development in ${area}, Chennai`}
      breadcrumbs={[
        { name: "Home", url: "https://www.smartpixel.in/" },
        { name: `Web Design ${area}`, url },
      ]}
      schema={[localBusiness, faqSchema]}
      ctaText={`Get a Free Quote for Your ${area} Business →`}
      intro={
        <>
          SmartPixel provides{" "}
          <Link to="/services/web-design-chennai" className="text-accent underline hover:text-accent/80 transition-colors">website development</Link>,{" "}
          <Link to="/seo-services-chennai" className="text-accent underline hover:text-accent/80 transition-colors">SEO services</Link> and{" "}
          <Link to="/whatsapp-automation-chennai" className="text-accent underline hover:text-accent/80 transition-colors">WhatsApp automation</Link>{" "}
          to corporate brands and businesses in <strong className="text-foreground/70">{area}, Chennai</strong>.
          Whether you run an agency, service store, or retail business in {area}
          {landmark ? ` near ${landmark}` : ""}, we build fast, conversion-optimized storefronts 
          designed to convert traffic into real sales leads. Ready to scale?{" "}
          <Link to="/contact" className="text-accent underline hover:text-accent/80 transition-colors">Get an instant project estimate from SmartPixel Chennai</Link>.
        </>
      }
      sections={[
        {
          h2: `Digital Growth Solutions for ${area} Brands`,
          body: (
            <ul className="list-disc pl-5 space-y-2.5 text-muted-foreground">
              <li>
                <Link to="/services/web-design-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  Web Design & Development in {area}
                </Link>{" "}
                — High-end UI explicitly optimized for inbound sales inquiries.
              </li>
              <li>
                <Link to="/ecommerce-website-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  E-commerce Store Engineering
                </Link>{" "}
                — Fast product layouts equipped with secure payment gateways.
              </li>
              <li>
                <Link to="/seo-services-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  Local Search Engine Optimization (SEO)
                </Link>{" "}
                — Outrank local competition for queries containing "{area.toLowerCase()}".
              </li>
              <li>
                <Link to="/whatsapp-automation-chennai" className="text-accent underline hover:text-accent/80 transition-colors">
                  WhatsApp API Automation
                </Link>{" "}
                — Instantly capture, track, and route leads into automated conversations.
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-accent underline hover:text-accent/80 transition-colors">
                  Custom Mobile & Cloud Applications
                </Link>{" "}
                — Scalable software systems structured for business efficiency.
              </li>
            </ul>
          ),
        },
        {
          h2: `Why Local Businesses in ${area} Work With Us`,
          body: (
            <p className="leading-relaxed text-muted-foreground">
              We operate from nearby Chrompet, meaning we are close enough to sync face-to-face 
              while understanding the local commercial trends across the {area} market
              {landmark ? `, including high-activity hubs near ${landmark}` : ""}. Every single landing 
              page or product site we build features zero technical overhead, premium performance metrics, and responsive scaling 
              so local buyers find your company first. Review our{" "}
              <Link to="/portfolio" className="text-accent underline hover:text-accent/80 transition-colors">portfolio of local case studies</Link>{" "}
              or message us to lock in a consultation.
            </p>
          ),
        },
        {
          h2: `Nearby Regions We Serve Around ${area}`,
          body: (
            <div className="flex flex-wrap gap-2.5">
              {/* FIXED: Changed standard html anchor links to React Router Link components to preserve SPA state */}
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
      faqs={[
        {
          q: `How much does a website cost in ${area}, Chennai?`,
          a: `Websites for ${area} businesses start from ₹10,000 for a basic 5-page site. Ecommerce and custom builds start from ₹25,000.`,
        },
        {
          q: `How long does it take to build a website in ${area}?`,
          a: `Most websites are delivered in 5–10 working days. Larger ecommerce or custom app projects take 3–6 weeks.`,
        },
        {
          q: `Do you visit clients in ${area} in person?`,
          a: `Yes. We're based in Chrompet and happy to meet clients in ${area} for kickoff or strategy sessions.`,
        },
      ]}
    />
  );
};

export default LocationPage;