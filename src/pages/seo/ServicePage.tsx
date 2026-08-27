import { Link } from "react-router-dom";
import SeoPageLayout, { FaqItem } from "@/components/SeoPageLayout";
import { ReactNode, useMemo } from "react";

export type ServiceProps = {
  slug: string;
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

  extraSections?: {
    h2: string;
    body: ReactNode;
  }[];

  extraLinks?: {
    label: string;
    href: string;
  }[];
};

const ServicePage = (p: ServiceProps) => {
  const cleanSlug = p.slug.startsWith("/")
    ? p.slug.slice(1)
    : p.slug;

  const url = `https://smartpixel.in/${cleanSlug}`;

  /*
   * Local service URL detection
   *
   * SEO:
   * /seo-services-pallavaram
   * /seo-services-tambaram
   *
   * AEO:
   * /aeo-services-pallavaram
   * /aeo-services-tambaram
   *
   * Web design:
   * /web-design-pallavaram
   *
   * Ecommerce:
   * /ecommerce-website-pallavaram
   *
   * WhatsApp:
   * /whatsapp-automation-pallavaram
   */
  const localizedLinks = useMemo(() => {
    const defaultPrefix = "web-design";

    let activePrefix = defaultPrefix;

    if (
      cleanSlug.includes("aeo") ||
      cleanSlug.includes("answer-engine")
    ) {
      activePrefix = "aeo-services";
    } else if (cleanSlug.includes("seo")) {
      activePrefix = "seo-services";
    } else if (
      cleanSlug.includes("ecommerce") ||
      cleanSlug.includes("e-commerce")
    ) {
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
      saidapet: `/${activePrefix}-saidapet`,
      nungambakkam: `/${activePrefix}-nungambakkam`,
      chitlapakkam: `/${activePrefix}-chitlapakkam`,
    };
  }, [cleanSlug]);

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

    areaServed: {
      "@type": "City",
      name: "Chennai",
    },

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
        {
          name: "Home",
          url: "https://smartpixel.in/",
        },
        {
          name: "Services",
          url: "https://smartpixel.in/services",
        },
        {
          name: p.crumbName,
          url,
        },
      ]}
      schema={[serviceSchema]}
      intro={p.intro}
      sections={[
        {
          h2: `What's included in our ${p.serviceName.toLowerCase()}`,
          body: (
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              {p.what.map((w) => (
                <li
                  key={w}
                  className="leading-relaxed"
                >
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
                <li
                  key={w}
                  className="leading-relaxed"
                >
                  {w}
                </li>
              ))}
            </ul>
          ),
        },

        {
          h2: "Our process",
          body: (
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground/90">
              {p.process.map((w) => (
                <li
                  key={w}
                  className="leading-relaxed"
                >
                  {w}
                </li>
              ))}
            </ol>
          ),
        },

        ...(p.extraSections ?? []),

        {
          h2: "Areas in Chennai we serve",
          body: (
            <p className="text-muted-foreground/90 leading-relaxed">
              We work with businesses across Chennai and surrounding
              areas. Our local service pages cover{" "}

              <Link
                to={localizedLinks.pallavaram}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Pallavaram
              </Link>
              ,{" "}

              <Link
                to={localizedLinks.tambaram}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Tambaram
              </Link>
              ,{" "}

              <Link
                to={localizedLinks.chrompet}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Chrompet
              </Link>
              ,{" "}

              <Link
                to={localizedLinks.guindy}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Guindy
              </Link>
              {" "}and{" "}

              <Link
                to={localizedLinks.tnagar}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                T Nagar
              </Link>
              .

              {" "}

              We also serve businesses in{" "}

              <Link
                to={localizedLinks.saidapet}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Saidapet
              </Link>
              ,{" "}

              <Link
                to={localizedLinks.nungambakkam}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Nungambakkam
              </Link>
              {" "}and{" "}

              <Link
                to={localizedLinks.chitlapakkam}
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                Chitlapakkam
              </Link>
              .

              {" "}

              For search visibility, see our{" "}

              <Link
                to="/seo-services-chennai"
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                SEO services in Chennai
              </Link>
              .

              {" "}

              For ecommerce projects, explore our{" "}

              <Link
                to="/ecommerce-website-chennai"
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                ecommerce website development
              </Link>
              {" "}or{" "}

              <Link
                to="/contact"
                className="text-accent underline font-medium hover:text-accent/80 transition-colors"
              >
                contact SmartPixel
              </Link>
              .
            </p>
          ),
        },
      ]}
      internalLinks={[
        {
          label: "Web design services for Chennai businesses",
          href: "/services/web-design-chennai",
        },

        {
          label: "SEO services in Chennai",
          href: "/seo-services-chennai",
        },

        {
          label: "Ecommerce website development Chennai",
          href: "/ecommerce-website-chennai",
        },

        {
          label: "WhatsApp automation in Chennai",
          href: "/whatsapp-automation-chennai",
        },

        {
          label: "Portfolio of Chennai case studies",
          href: "/portfolio",
        },

        {
          label: "Get a free quote from SmartPixel Chennai",
          href: "/contact",
        },

        ...(p.extraLinks ?? []),
      ]}
      faqs={p.faqs}
    />
  );
};

export default ServicePage;