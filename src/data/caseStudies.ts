// Structured, scalable case-study source of truth.
// Each entry becomes an indexable page at /case-studies/:slug and is also read
// by scripts/seo-routes.mjs so the prerenderer bakes real per-route metadata.
//
// RULE: only real, verifiable information goes in here. No invented metrics,
// rankings, revenue numbers or testimonials.

export type CaseStudyMetric = {
  label: string;
  value: string;
  /** Where the number came from — always shown next to the metric. */
  source: string;
};

export type CaseStudySection = {
  h2: string;
  /** Paragraphs rendered in order. */
  paragraphs?: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  industry: string;
  location: string;
  liveUrl?: string;
  summary: string;
  technology: string[];
  services: { label: string; href: string }[];
  sections: CaseStudySection[];
  metrics?: CaseStudyMetric[];
  images: { src: string; alt: string; caption?: string }[];
  publishedDate: string;
  updatedDate: string;
};

import vjBefore from "@/assets/cs-vjrealestate-before.png";
import vjAfter from "@/assets/cs-vjrealestate-after.png";

export const caseStudies: CaseStudy[] = [
  {
    slug: "vj-real-estate",
    title: "How SmartPixel Built an SEO-First Real Estate Website for VJ Real Estate",
    metaTitle: "VJ Real Estate Case Study — SEO-First Property Website | SmartPixel",
    metaDescription:
      "How SmartPixel designed and built an SEO-first luxury real estate website for VJ Real Estate: dynamic property pages, location pages, blog architecture and structured data.",
    client: "VJ Real Estate",
    industry: "Luxury real estate",
    location: "Pune, Maharashtra",
    liveUrl: "https://www.vjrealestate.co.in/",
    summary:
      "VJ Real Estate sells premium residential property in Pune, where buyers research online for months before they ever call an agent. We rebuilt the site around that research behaviour: every property, locality and buyer question gets its own crawlable page instead of living inside a filter that search engines cannot reach.",
    technology: [
      "React with TypeScript",
      "Server-friendly routing with per-route metadata",
      "Structured data (Organization, BreadcrumbList, Article)",
      "Responsive, mobile-first layout system",
      "Image optimisation and lazy loading",
    ],
    services: [
      { label: "web design and development", href: "/services/web-design-chennai" },
      { label: "our SEO work", href: "/seo-services-chennai" },
    ],
    sections: [
      {
        h2: "Project overview",
        paragraphs: [
          "VJ Real Estate is a Pune-based agency dealing in premium residential projects. The brief was not a visual refresh — it was visibility. Enquiries were coming almost entirely from referrals and paid channels, while organic search delivered very little.",
          "SmartPixel handled design, front-end development, information architecture, on-page SEO and the content structure for the property, locality and editorial sections.",
        ],
      },
      {
        h2: "The challenge",
        bullets: [
          "Property inventory lived inside a filtered listing view, so individual projects had no URL of their own to rank with.",
          "Locality-level demand (buyers searching by area, not by brand) had nowhere to land.",
          "There was no editorial layer answering the regulatory and investment questions Pune buyers actually search for.",
          "Metadata, headings and structured data were inconsistent across the site.",
        ],
      },
      {
        h2: "The solution",
        paragraphs: [
          "We designed the site as a set of connected, individually indexable page types rather than one heavy listing app. A buyer arriving from a locality search, a project-name search or a regulation question lands on a page written for exactly that intent, then moves deeper through contextual links.",
        ],
        bullets: [
          "Dynamic property pages — one clean URL per project, with its own heading, description and imagery.",
          "Location pages targeting the areas of Pune the agency actually operates in.",
          "A blog architecture for regulation, investment and buying-process content.",
          "Internal linking that connects properties, localities and articles in both directions.",
          "Consistent titles, meta descriptions and canonical tags across every template.",
          "Structured data so search engines can read the page type, breadcrumb trail and article metadata.",
        ],
      },
      {
        h2: "Website architecture",
        bullets: [
          "Home — positioning, featured projects and primary enquiry paths.",
          "Properties — index plus a dedicated page per project.",
          "Locations — a page per operating area, linked to the projects inside it.",
          "Insights — long-form articles on regulation, investment and buying decisions.",
          "Contact — a short, single-purpose enquiry flow reachable from every template.",
        ],
      },
      {
        h2: "SEO implementation",
        bullets: [
          "Search-friendly URLs: readable, lowercase, hyphenated, no query-string-only pages.",
          "Unique title and meta description per property, locality and article.",
          "Self-referencing canonical tags on every template.",
          "Breadcrumb structured data reflecting the visible navigation trail.",
          "Article structured data on editorial content.",
          "Heading hierarchy fixed to a single H1 with logical H2/H3 nesting.",
          "Mobile-first layout with reserved image dimensions to limit layout shift.",
          "Internal linking rules baked into the templates so new pages are never orphaned.",
        ],
      },
      {
        h2: "Content strategy",
        paragraphs: [
          "Rather than publishing generic property-marketing copy, we mapped the questions Pune buyers ask before they shortlist. The clearest example is the article on UDCPR 2026 — a regulation change that directly affects what can be built and bought — which now attracts search traffic that no listing page could.",
          "That article is a template for the rest of the editorial layer: pick a real question with genuine search demand, answer it fully, and link it to the property and locality pages that serve the same intent.",
        ],
      },
      {
        h2: "Search Console performance",
        paragraphs: [
          "The numbers below are for a single article, taken from the client's Google Search Console property. They describe that one URL — not the whole site — and no other performance claims are being made here.",
        ],
      },
      {
        h2: "What we learned",
        bullets: [
          "In real estate, the page that ranks is rarely the listing — it is the answer to the question asked before the listing.",
          "Regulatory and process content compounds; it stays relevant far longer than campaign copy.",
          "Giving every property and locality a real URL is the single highest-leverage structural fix on most property websites.",
          "Impressions arriving before clicks is normal; the fix is titles and descriptions written for the searcher, not for the brand.",
        ],
      },
    ],
    metrics: [
      {
        label: "Impressions — UDCPR 2026 article",
        value: "298",
        source: "Google Search Console, single URL, latest report shared by the client",
      },
      {
        label: "Clicks — UDCPR 2026 article",
        value: "12",
        source: "Google Search Console, single URL, latest report shared by the client",
      },
    ],
    images: [
      {
        src: vjBefore,
        alt: "VJ Real Estate website before the SmartPixel rebuild — traditional property listing layout with no individual project pages",
        caption: "Before — inventory locked inside a filtered listing view.",
      },
      {
        src: vjAfter,
        alt: "VJ Real Estate website after the SmartPixel rebuild — luxury property discovery layout with dynamic project pages, location pages and investment articles",
        caption: "After — dynamic property pages, locality pages and an editorial layer, all individually indexable.",
      },
    ],
    publishedDate: "2026-08-13",
    updatedDate: "2026-08-13",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
