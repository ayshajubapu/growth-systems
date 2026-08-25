import { Link } from "react-router-dom";
import SeoPageLayout, { FaqItem } from "@/components/SeoPageLayout";

type NearbyArea = {
  name: string;
  slug: string;
};

type Props = {
  area: string;
  slug: string;
  nearby?: NearbyArea[];
  landmark?: string;
  localNote?: string;
  metaDescription?: string;
  headline?: string;
  faqs?: FaqItem[];
};

const nearbyDefault: NearbyArea[] = [
  { name: "Pallavaram", slug: "pallavaram" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "Chrompet", slug: "chrompet" },
  { name: "Guindy", slug: "guindy" },
  { name: "T Nagar", slug: "t-nagar" },
  { name: "Saidapet", slug: "saidapet" },
  { name: "Nungambakkam", slug: "nungambakkam" },
  { name: "Chitlapakkam", slug: "chitlapakkam" },
];

/*
 * Area-specific content.
 *
 * IMPORTANT:
 * Keep these factual and natural.
 * Do not add invented claims such as:
 * "buyers use mid-range Android phones over patchy networks"
 * unless you have actual data proving it.
 */
const areaContent: Record<
  string,
  {
    landmark?: string;
    localNote: string;
    metaDescription: string;
    headline: string;
    faqs: FaqItem[];
  }
> = {
  pallavaram: {
    landmark: "Pallavaram GST Road and surrounding business areas",

    localNote:
      "SmartPixel serves businesses in Pallavaram and nearby South Chennai areas from our Chrompet studio. Pallavaram businesses often serve customers locally as well as across Chennai, so we focus on websites that make the business, services, location, contact options and next step clear from the first visit. Our websites are mobile-friendly, fast, SEO-ready and structured around enquiries and conversions.",

    metaDescription:
      "SmartPixel provides web design and website development for businesses in Pallavaram, Chennai. We build business websites, ecommerce stores and web applications with SEO-ready structures.",

    headline: "Web Design Company in Pallavaram, Chennai",

    faqs: [
      {
        q: "Do you provide website design services in Pallavaram?",
        a: "Yes. SmartPixel provides website design and development for businesses in Pallavaram, including company websites, ecommerce stores, landing pages and custom web applications. Our team is based in Chrompet, so we can work with Pallavaram businesses locally or remotely.",
      },
      {
        q: "Can you build a website for a business in Pallavaram?",
        a: "Yes. We build websites for local businesses that need a professional online presence, clearer enquiry paths and a website that works well on mobile devices. Each website is structured around the business's services, customers and goals rather than using a generic layout.",
      },
      {
        q: "Can you build an ecommerce website for a Pallavaram business?",
        a: "Yes. SmartPixel builds ecommerce websites with product catalogues, mobile-first shopping experiences, payment gateways, enquiry or checkout flows and inventory-related features. We can also structure product and category pages for search visibility.",
      },
      {
        q: "Do you provide SEO with website development in Pallavaram?",
        a: "Yes. Websites can be built with technical SEO foundations including clean URLs, page-level metadata, internal linking, structured data, sitemap support and location-relevant content. Ongoing local SEO can also be handled separately.",
      },
      {
        q: "Does SmartPixel work with businesses outside Pallavaram?",
        a: "Yes. SmartPixel is based in Chrompet and works with businesses across Pallavaram, Tambaram, Chrompet and other parts of Chennai. Projects can also be handled remotely for businesses elsewhere in India.",
      },
      {
        q: "Can you connect WhatsApp to a business website?",
        a: "Yes. WhatsApp can be integrated into business websites for enquiries, lead capture, customer communication and automated workflows. The setup can be tailored to how the business currently handles incoming enquiries.",
      },
    ],
  },

  chrompet: {
    landmark: "Chrompet and GST Road",

    localNote:
      "SmartPixel is based in Chrompet, making it convenient for businesses in the surrounding area to discuss website projects locally. We work on business websites, ecommerce platforms, web applications and SEO-focused website structures for businesses that want a stronger online presence.",

    metaDescription:
      "SmartPixel is a web design and development company based in Chrompet, Chennai. We build business websites, ecommerce stores, web apps and SEO-ready websites for local and international clients.",

    headline: "Web Design Company in Chrompet, Chennai",

    faqs: [
      {
        q: "Is SmartPixel based in Chrompet?",
        a: "Yes. SmartPixel is based in Chrompet, Chennai. We work with businesses in Chrompet and nearby areas as well as clients in other parts of India and internationally.",
      },
      {
        q: "What type of websites do you build in Chrompet?",
        a: "We build business websites, ecommerce stores, landing pages, custom web applications and websites structured for SEO and future content growth.",
      },
      {
        q: "Can I meet SmartPixel in Chrompet?",
        a: "Yes. Since our studio is in Chrompet, local clients can discuss project requirements and reviews in person when required.",
      },
      {
        q: "Do you work with clients outside Chennai?",
        a: "Yes. SmartPixel works remotely with clients across India and internationally. Our projects can be managed through online meetings, shared documents and regular project updates.",
      },
    ],
  },

  tambaram: {
    landmark: "Tambaram and the GST Road corridor",

    localNote:
      "Tambaram is an important commercial and residential area in Chennai's southern corridor, with businesses serving both nearby customers and customers searching online. Our approach is to create pages that clearly communicate the business offering, location, services and enquiry options rather than relying on location keywords alone.",

    metaDescription:
      "SmartPixel provides web design and development services for businesses in Tambaram, Chennai, including business websites, ecommerce, web apps and SEO-ready websites.",

    headline: "Web Design Company in Tambaram, Chennai",

    faqs: [
      {
        q: "Do you build websites for businesses in Tambaram?",
        a: "Yes. SmartPixel provides website design and development for Tambaram businesses, including company websites, ecommerce stores, landing pages and custom web applications.",
      },
      {
        q: "How much does a website cost in Tambaram?",
        a: "Website pricing depends on the scope and features. Business websites can start from ₹15,000, while ecommerce and custom applications are quoted after reviewing the required functionality.",
      },
      {
        q: "Can you help a Tambaram business with local SEO?",
        a: "Yes. We can structure the website for local search, improve on-page SEO, create relevant location pages, implement structured data and support Google Business Profile optimisation.",
      },
      {
        q: "How long does it take to build a website?",
        a: "A standard business website can generally be completed within around 1–2 weeks once the required content, images and approvals are available. Larger ecommerce and application projects take longer.",
      },
    ],
  },

  guindy: {
    landmark: "Guindy industrial and commercial area",

    localNote:
      "Businesses around Guindy often need websites that communicate their services clearly to customers, partners and B2B enquiries. SmartPixel builds professional websites with structured service pages, enquiry-focused calls to action, responsive layouts and SEO-ready architecture.",

    metaDescription:
      "SmartPixel provides professional web design and development services in Guindy, Chennai, including business websites, ecommerce, web applications and SEO-ready websites.",

    headline: "Web Design Company in Guindy, Chennai",

    faqs: [
      {
        q: "Do you provide web design services in Guindy?",
        a: "Yes. We build business websites, ecommerce websites, landing pages and custom web applications for businesses in Guindy and across Chennai.",
      },
      {
        q: "Can you build a B2B website for a Guindy company?",
        a: "Yes. We can structure B2B websites around services, industries served, product information, enquiries, case studies and lead-generation journeys.",
      },
      {
        q: "Do your websites include SEO?",
        a: "Our development process includes an SEO-ready technical structure. Additional local and ongoing SEO services can also be provided depending on the business goals.",
      },
    ],
  },

  "t-nagar": {
    landmark: "T Nagar commercial district",

    localNote:
      "T Nagar businesses operate in a highly competitive commercial environment, so their website needs to communicate what they offer quickly and make it easy for visitors to contact the business. We focus on clear service or product pages, mobile usability, strong calls to action and search-friendly content structures.",

    metaDescription:
      "SmartPixel provides web design services for businesses in T Nagar, Chennai, including business websites, ecommerce stores, landing pages and SEO-ready websites.",

    headline: "Web Design Company in T Nagar, Chennai",

    faqs: [
      {
        q: "Do you build ecommerce websites for T Nagar businesses?",
        a: "Yes. SmartPixel builds ecommerce websites with product catalogues, payment integrations, enquiry flows and other features required by retail businesses.",
      },
      {
        q: "Can you redesign an existing website?",
        a: "Yes. We can redesign an existing website to improve its visual presentation, mobile experience, content structure, performance and conversion flow.",
      },
      {
        q: "Do you provide SEO services in T Nagar?",
        a: "Yes. We provide technical, on-page and local SEO services designed around the business, its services and the search terms relevant to its target customers.",
      },
    ],
  },

  saidapet: {
    landmark: "Saidapet and surrounding commercial areas",

    localNote:
      "For businesses in Saidapet, a useful website should make the business offering and contact path immediately understandable. SmartPixel builds responsive websites with clear navigation, service-focused content, enquiry options and SEO-ready technical foundations.",

    metaDescription:
      "SmartPixel provides web design and development services in Saidapet, Chennai. We build business websites, ecommerce stores, web applications and SEO-ready websites.",

    headline: "Web Design Company in Saidapet, Chennai",

    faqs: [
      {
        q: "Can SmartPixel build a website for my Saidapet business?",
        a: "Yes. We build websites for businesses in Saidapet, including company websites, ecommerce stores, landing pages and custom web applications.",
      },
      {
        q: "Can my website be optimised for Google?",
        a: "Yes. We build websites with SEO-friendly structures including metadata, headings, internal links, responsive layouts and technical foundations that support search visibility.",
      },
      {
        q: "Do you offer website maintenance?",
        a: "Yes. Website support and maintenance can be provided after launch depending on the project and ongoing requirements.",
      },
    ],
  },

  nungambakkam: {
    landmark: "Nungambakkam commercial and business district",

    localNote:
      "Nungambakkam businesses often compete for customers who compare services online before making an enquiry. We focus on professional presentation, clear service information, strong calls to action, responsive design and content structures that can support organic search growth.",

    metaDescription:
      "SmartPixel provides website design and development services in Nungambakkam, Chennai, including business websites, ecommerce stores, web apps and SEO-ready websites.",

    headline: "Web Design Company in Nungambakkam, Chennai",

    faqs: [
      {
        q: "Do you provide website development in Nungambakkam?",
        a: "Yes. SmartPixel provides website design and development for businesses in Nungambakkam and across Chennai.",
      },
      {
        q: "Can you build a professional corporate website?",
        a: "Yes. We build corporate and professional websites with structured service pages, responsive layouts, enquiry forms, contact options and SEO-ready architecture.",
      },
      {
        q: "Can you improve an existing Nungambakkam website?",
        a: "Yes. We can redesign or rebuild existing websites to improve usability, content structure, performance, mobile experience and search-readiness.",
      },
    ],
  },

  chitlapakkam: {
    landmark: "Chitlapakkam residential and local business area",

    localNote:
      "Chitlapakkam businesses often depend on customers from the surrounding neighbourhood and nearby areas. A well-structured website can help visitors understand the services offered, find contact details and take action quickly. SmartPixel builds mobile-friendly websites with local search in mind.",

    metaDescription:
      "SmartPixel provides web design and development services for businesses in Chitlapakkam, Chennai, including business websites, ecommerce and SEO-ready websites.",

    headline: "Web Design Company in Chitlapakkam, Chennai",

    faqs: [
      {
        q: "Do you build websites for Chitlapakkam businesses?",
        a: "Yes. SmartPixel builds business websites, ecommerce websites, landing pages and custom web applications for businesses in Chitlapakkam and nearby Chennai areas.",
      },
      {
        q: "Can you optimise a Chitlapakkam website for local searches?",
        a: "Yes. We can optimise the website structure, content, metadata, internal links and local signals around the services and locations relevant to the business.",
      },
      {
        q: "How do I start a website project with SmartPixel?",
        a: "You can contact SmartPixel with your business details, required pages, features and goals. We can then discuss the scope and provide a project estimate.",
      },
    ],
  },
};

const getAreaData = (slug: string, area: string) => {
  const data = areaContent[slug];

  if (data) {
    return data;
  }

  return {
    landmark: undefined,

    localNote: `SmartPixel provides website design and development services for businesses in ${area}, Chennai. We build responsive business websites, ecommerce stores, web applications and SEO-ready websites with a focus on clear communication and enquiries.`,

    metaDescription: `SmartPixel provides web design and development services in ${area}, Chennai, including business websites, ecommerce stores, web applications and SEO-ready websites.`,

    headline: `Web Design Company in ${area}, Chennai`,

    faqs: [
      {
        q: `Do you provide website design services in ${area}?`,
        a: `Yes. SmartPixel provides website design and development for businesses in ${area}, including business websites, ecommerce stores, landing pages and custom web applications.`,
      },
      {
        q: `How much does a website cost in ${area}?`,
        a: `Website pricing depends on the number of pages, design requirements, features and integrations. Business websites can start from ₹15,000, while ecommerce and custom projects are quoted based on requirements.`,
      },
      {
        q: `Do you provide SEO with website development in ${area}?`,
        a: `Yes. Websites can be developed with an SEO-ready technical structure, including page metadata, headings, internal linking, responsive design and structured data where appropriate.`,
      },
    ],
  };
};

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
  const areaData = getAreaData(slug, area);

  const finalLandmark = landmark ?? areaData.landmark;
  const finalLocalNote = localNote ?? areaData.localNote;
  const finalMetaDescription =
    metaDescription ?? areaData.metaDescription;
  const finalHeadline = headline ?? areaData.headline;
  const finalFaqs =
    faqs && faqs.length > 0 ? faqs : areaData.faqs;

  const url = `https://smartpixel.in/web-design-${slug}`;

  const defaultAreas = nearby ?? nearbyDefault;

  const adjacentAreas = defaultAreas
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  /*
   * Canonical business entity.
   *
   * SmartPixel is already defined once globally in index.html as:
   * https://smartpixel.in/#organization
   *
   * Location pages should reference that entity rather than
   * creating a new LocalBusiness / ProfessionalService entity
   * for every location URL.
   */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://smartpixel.in/#organization",
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${area}, Chennai`,
    },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${finalHeadline} | SmartPixel`,
    description: finalMetaDescription,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://smartpixel.in/#website",
      name: "SmartPixel",
      url: "https://smartpixel.in/",
    },
    about: {
      "@id": "https://smartpixel.in/#organization",
    },
    breadcrumb: {
      "@id": `${url}#breadcrumb`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smartpixel.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Design",
        item: "https://smartpixel.in/services/web-design-chennai",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: finalHeadline,
        item: url,
      },
    ],
  };

  return (
    <SeoPageLayout
      title={`${finalHeadline} | SmartPixel`}
      description={finalMetaDescription}
      canonical={url}
      h1={finalHeadline}
      breadcrumbs={[
        {
          name: "Home",
          url: "https://smartpixel.in/",
        },
        {
          name: "Web Design",
          url: "https://smartpixel.in/services/web-design-chennai",
        },
        {
          name: finalHeadline,
          url,
        },
      ]}
      schema={[
        localBusinessSchema,
        webpageSchema,
        breadcrumbSchema,
      ]}
      ctaText={`Get a Free Quote for Your ${area} Business →`}
      intro={
        <>
          SmartPixel provides{" "}
          <Link
            to="/services/web-design-chennai"
            className="text-accent underline hover:text-accent/80 transition-colors"
          >
            website design & development
          </Link>
          ,{" "}
          <Link
            to="/seo-services-chennai"
            className="text-accent underline hover:text-accent/80 transition-colors"
          >
            SEO services
          </Link>{" "}
          and{" "}
          <Link
            to="/whatsapp-automation-chennai"
            className="text-accent underline hover:text-accent/80 transition-colors"
          >
            WhatsApp automation
          </Link>{" "}
          for businesses in{" "}
          <strong className="text-foreground/70">
            {area}, Chennai
          </strong>
          {finalLandmark
            ? `, including businesses around ${finalLandmark}`
            : ""}
          . We build responsive, conversion-focused websites designed
          to make it easier for customers to understand your business
          and get in touch.{" "}
          <Link
            to="/contact"
            className="text-accent underline hover:text-accent/80 transition-colors"
          >
            Get a project estimate
          </Link>
          .
        </>
      }
      sections={[
        {
          h2: `Why Businesses in ${area} Choose SmartPixel`,
          body: (
            <>
              <p className="leading-relaxed text-muted-foreground">
                {finalLocalNote}
              </p>

              <p className="leading-relaxed text-muted-foreground mt-4">
                SmartPixel is based in Chrompet, Chennai and works with
                businesses locally as well as clients across India and
                internationally. Our projects are built around the actual
                business goal — whether that is generating enquiries,
                presenting services, selling products or building a custom
                digital system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl border border-border bg-surface/40 p-5">
                  <strong className="block text-foreground text-xl">
                    20+
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    Websites delivered
                  </span>
                </div>

                <div className="rounded-xl border border-border bg-surface/40 p-5">
                  <strong className="block text-foreground text-xl">
                    4+
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    Countries served
                  </span>
                </div>

                <div className="rounded-xl border border-border bg-surface/40 p-5">
                  <strong className="block text-foreground text-xl">
                    2023
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    SmartPixel founded
                  </span>
                </div>
              </div>
            </>
          ),
        },

        {
          h2: `Website Services for ${area} Businesses`,
          body: (
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>
                <Link
                  to="/services/web-design-chennai"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  Business website design
                </Link>{" "}
                — responsive websites designed around your services,
                customers and enquiries.
              </li>

              <li>
                <Link
                  to="/ecommerce-website-chennai"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  Ecommerce website development
                </Link>{" "}
                — product catalogues, payment integration, checkout and
                ecommerce functionality.
              </li>

              <li>
                <Link
                  to="/seo-services-chennai"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  SEO services
                </Link>{" "}
                — technical SEO, on-page optimisation, internal linking
                and local search optimisation.
              </li>

              <li>
                <Link
                  to="/whatsapp-automation-chennai"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  WhatsApp automation
                </Link>{" "}
                — help businesses manage enquiries and customer
                communication more efficiently.
              </li>

              <li>
                <Link
                  to="/services/mobile-app-development"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  Mobile and web applications
                </Link>{" "}
                — custom digital systems for booking, ordering,
                management and business workflows.
              </li>
            </ul>
          ),
        },

        {
          h2: `Why SEO Matters for Businesses in ${area}`,
          body: (
            <>
              <p className="leading-relaxed text-muted-foreground">
                Customers often search for a service together with a
                location before deciding which business to contact. A
                location page can help when it represents a genuine service
                area and provides useful information rather than simply
                repeating the location name.
              </p>

              <p className="leading-relaxed text-muted-foreground mt-4">
                For {area} businesses, we focus on useful service
                information, clear contact options, relevant internal
                links, page-level metadata and a technically sound website
                structure. The goal is to build a useful page for
                customers first and search engines second.
              </p>
            </>
          ),
        },

        {
          h2: `Nearby Areas We Serve Around ${area}`,
          body: (
            <div className="flex flex-wrap gap-2.5">
              {adjacentAreas.map((item) => (
                <Link
                  key={item.slug}
                  to={`/web-design-${item.slug}`}
                  className="text-xs px-3.5 py-1.5 rounded-full border border-border bg-surface/40 hover:border-accent/60 hover:text-accent transition-all duration-200"
                >
                  Web design in {item.name}
                </Link>
              ))}
            </div>
          ),
        },
      ]}
      internalLinks={[
        {
          label: "Web Design Chennai",
          href: "/services/web-design-chennai",
        },
        {
          label: "SEO Services Chennai",
          href: "/seo-services-chennai",
        },
        {
          label: "Ecommerce Website Development",
          href: "/ecommerce-website-chennai",
        },
        {
          label: "WhatsApp Automation",
          href: "/whatsapp-automation-chennai",
        },
        {
          label: "Portfolio",
          href: "/portfolio",
        },
        {
          label: "Contact SmartPixel",
          href: "/contact",
        },
      ]}
      faqs={finalFaqs}
    />
  );
};

export default LocationPage;