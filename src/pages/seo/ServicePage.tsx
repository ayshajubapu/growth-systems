import { Link } from "react-router-dom";
import SeoPageLayout, { FaqItem } from "@/components/SeoPageLayout";
import { ReactNode, useMemo } from "react";

export type ServiceProps = {
  slug: string; // full path e.g. "seo-services-chennai" or "services/web-design-chennai"
  title: string;
  description: string;
  h1: string;
  serviceName: string;
  intro: ReactNode;
  what: string[];
  benefits: string[];
  process: string[];
  faqs: FaqItem[];
  crumbName: string;
};

const ServicePage = (p: ServiceProps) => {
  // Normalize path string generation trailing safety checks
  const cleanSlug = p.slug.startsWith("/") ? p.slug.slice(1) : p.slug;
  const url = `https://smartpixel.in/${cleanSlug}`;

  // Automatically calculate contextual neighborhood anchor points
  const localizedLinks = useMemo(() => {
    const defaultPrefix = "web-design";
    let activePrefix = defaultPrefix;

    if (cleanSlug.includes("seo")) {
      activePrefix = "seo-services";
    } else if (cleanSlug.includes("ecommerce") || cleanSlug.includes("e-commerce")) {
      activePrefix = "ecommerce-website";
    } else if (cleanSlug.includes("whatsapp")) {
      activePrefix = "whatsapp-automation";
    }

    return {
      pallavaram: `/${activePrefix}-pallavaram`,
      tambaram: `/${activePrefix}-tambaram`,
      chrompet: `/${activePrefix}-chrompet`,
      guindy: `/${activePrefix}-guindy`,
      tnagar: `/${activePrefix}-t-nagar`,
    };
  }, [cleanSlug]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": p.serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "SmartPixel",
      "telephone": "+91-9886069488",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN",
      },
    },
    "areaServed": { "@type": "City", "name": "Chennai" },
    "url": url,
    "description": p.description,
  };

  return (
    <SeoPageLayout
      title={p.title}
      description={p.description}
      canonical={url}
      h1={p.h1}
      breadcrumbs={[
        { name: "Home", url: "https://smartpixel.in/" },
        { name: "Services", url: "https://smartpixel.in/services" },
        { name: p.crumbName, url },
      ]}
      schema={[serviceSchema]}
      intro={p.intro}
      sections={[
        {
          h2: `What's included in our ${p.serviceName.toLowerCase()}`,
          body: (
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              {p.what.map((w) => (
                <li key={w} className="leading-relaxed">
                  {w}
                </li>
              ))}
            </ul>
          ),
        },
        {
          h2: `Why Chennai businesses choose this service`,
          body: (
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              {p.benefits.map((w) => (
                <li key={w} className="leading-relaxed">
                  {w}
                </li>
              ))}
            </ul>
          ),
        },
        {
          h2: `Our process`,
          body: (
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground/90">
              {p.process.map((w) => (
                <li key={w} className="leading-relaxed">
                  {w}
                </li>
              ))}
            </ol>
          ),
        },
        {
          h2: `Areas in Chennai we serve`,
          body: (
            <p className="text-muted-foreground/90 leading-relaxed">
              We deliver this service across Chennai. Mobile-speed-critical builds in{" "}
              <Link to={localizedLinks.pallavaram} className="text-accent underline font-medium hover:text-accent/80 transition-colors">Pallavaram</Link>,{" "}
              long-tail local search for retail and clinics in{" "}
              <Link to={localizedLinks.tambaram} className="text-accent underline font-medium hover:text-accent/80 transition-colors">Tambaram</Link>,{" "}
              in-person work from our studio in{" "}
              <Link to={localizedLinks.chrompet} className="text-accent underline font-medium hover:text-accent/80 transition-colors">Chrompet</Link>,{" "}
              credibility-led B2B sites in{" "}
              <Link to={localizedLinks.guindy} className="text-accent underline font-medium hover:text-accent/80 transition-colors">Guindy</Link>,{" "}
              showroom and boutique retail in{" "}
              <Link to={localizedLinks.tnagar} className="text-accent underline font-medium hover:text-accent/80 transition-colors">T Nagar</Link>,{" "}
              urgent-intent professional services in{" "}
              <Link to="/web-design-saidapet" className="text-accent underline font-medium hover:text-accent/80 transition-colors">Saidapet</Link>,{" "}
              premium brands on{" "}
              <Link to="/web-design-nungambakkam" className="text-accent underline font-medium hover:text-accent/80 transition-colors">Nungambakkam</Link>{" "}
              High Road, and hyper-local businesses in{" "}
              <Link to="/web-design-chitlapakkam" className="text-accent underline font-medium hover:text-accent/80 transition-colors">Chitlapakkam</Link>.{" "}
              Pair it with our{" "}
              <Link to="/seo-services-chennai" className="text-accent underline font-medium hover:text-accent/80 transition-colors">SEO services in Chennai</Link>{" "}
              or <Link to="/ecommerce-website-chennai" className="text-accent underline font-medium hover:text-accent/80 transition-colors">ecommerce website development in Chennai</Link>{" "}
              — or{" "}
              <Link to="/contact" className="text-accent underline font-medium hover:text-accent/80 transition-colors">get a free quote</Link>.
            </p>
          ),
        },
      ]}
      internalLinks={[
        { label: "Web design services for Chennai businesses", href: "/services/web-design-chennai" },
        { label: "SEO services in Chennai", href: "/seo-services-chennai" },
        { label: "Ecommerce website development Chennai", href: "/ecommerce-website-chennai" },
        { label: "WhatsApp automation in Chennai", href: "/whatsapp-automation-chennai" },
        { label: "Portfolio of Chennai case studies", href: "/portfolio" },
        { label: "Get a free quote from SmartPixel Chennai", href: "/contact" },
      ]}
      faqs={p.faqs}
    />
  );
};

export default ServicePage;