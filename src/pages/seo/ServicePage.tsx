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
  const url = `https://smartpixel.in/${p.slug}`;
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
        { name: "Home", url: "https://smartpixel.in/" },
        { name: "Services", url: "https://smartpixel.in/services" },
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
      ]}
      internalLinks={[
        { label: "All Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
      ]}
      faqs={p.faqs}
    />
  );
};

export default ServicePage;
