import { Link } from "react-router-dom";
import SeoPageLayout, { FaqItem } from "@/components/SeoPageLayout";
import { ReactNode } from "react";

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
  const url = `https://www.smartpixel.in/${p.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: p.serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: "SmartPixel",
      telephone: "+91-9886069488",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "City", name: "Chennai" },
    url,
    description: p.description,
  };

  return (
    <SeoPageLayout
      title={p.title}
      description={p.description}
      canonical={url}
      h1={p.h1}
      breadcrumbs={[
        { name: "Home", url: "https://www.smartpixel.in/" },
        { name: "Services", url: "https://www.smartpixel.in/services" },
        { name: p.crumbName, url },
      ]}
      schema={[serviceSchema]}
      intro={p.intro}
      sections={[
        {
          h2: `What's included in our ${p.serviceName.toLowerCase()}`,
          body: <ul className="list-disc pl-5 space-y-2">{p.what.map((w) => <li key={w}>{w}</li>)}</ul>,
        },
        {
          h2: `Why Chennai businesses choose this service`,
          body: <ul className="list-disc pl-5 space-y-2">{p.benefits.map((w) => <li key={w}>{w}</li>)}</ul>,
        },
        {
          h2: `Our process`,
          body: <ol className="list-decimal pl-5 space-y-2">{p.process.map((w) => <li key={w}>{w}</li>)}</ol>,
        },
        {
          h2: `Areas in Chennai we serve`,
          body: (
            <p>
              We deliver this service across Chennai — including{" "}
              <Link to="/web-design-pallavaram" className="text-accent underline">Pallavaram</Link>,{" "}
              <Link to="/web-design-tambaram" className="text-accent underline">Tambaram</Link>,{" "}
              <Link to="/web-design-chrompet" className="text-accent underline">Chrompet</Link>,{" "}
              <Link to="/web-design-guindy" className="text-accent underline">Guindy</Link> and{" "}
              <Link to="/web-design-t-nagar" className="text-accent underline">T Nagar</Link>.{" "}
              Pair it with our{" "}
              <Link to="/seo-services-chennai" className="text-accent underline">SEO services in Chennai</Link>{" "}
              or <Link to="/ecommerce-website-chennai" className="text-accent underline">ecommerce website development in Chennai</Link>{" "}
              for a full growth stack — or{" "}
              <Link to="/contact" className="text-accent underline">get a free quote from SmartPixel Chennai</Link>.
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
