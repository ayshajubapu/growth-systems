// Per-route SEO metadata. Kept in one place so scripts/prerender.mjs can bake
// unique <title>/<meta description>/<link rel=canonical>/<og:*> into static HTML
// for every route at build time. Update this when you add/rename a route.

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const SITE = "https://smartpixel.in";

// Blog metadata lives in src/data/posts.ts (TypeScript, so it can't be imported
// from a plain node script). We read the slug/title/excerpt triples out of the
// source instead of maintaining a second hand-written list that goes stale.
function blogRoutes() {
  const file = resolve(dirname(fileURLToPath(import.meta.url)), "..", "src", "data", "posts.ts");
  const src = readFileSync(file, "utf8");
  const re = /slug:\s*"([^"]+)",[\s\S]{0,200}?title:\s*"((?:[^"\\]|\\.)*)",[\s\S]{0,200}?excerpt:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
  const out = [];
  const seen = new Set();
  let m;
  while ((m = re.exec(src))) {
    const [, slug, rawTitle, rawExcerpt] = m;
    if (seen.has(slug)) continue;
    seen.add(slug);
    const unescape = (s) => s.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    const title = unescape(rawTitle);
    const excerpt = unescape(rawExcerpt).replace(/\s+/g, " ").trim();
    out.push({
      path: `/blog/${slug}`,
      title: `${title} | SmartPixel`.slice(0, 90),
      description: excerpt.length > 158 ? `${excerpt.slice(0, 155).trimEnd()}…` : excerpt,
      ogType: "article",
    });
  }
  if (!out.length) throw new Error("[seo-routes] no blog posts parsed from src/data/posts.ts");
  return out;
}

/** @type {Array<{path:string,title:string,description:string,ogType?:string}>} */
export const routes = [

  {
    path: "/",
    title: "Web Design & Development Agency in Chennai | SmartPixel",
    description:
      "SmartPixel is a premier web design and development agency in Chrompet, Chennai. We build high-conversion websites, premium e-commerce stores, and high-performance mobile apps for scaling businesses.",
  },
  {
    path: "/services",
    title: "Services Overview — Web, App, E-commerce & SEO Chennai | SmartPixel",
    description:
      "Overview of SmartPixel's digital services in Chennai — web design, web apps, mobile apps, e-commerce, SEO, WhatsApp automation & digital marketing.",
  },
  {
    path: "/portfolio",
    title: "Portfolio — Case Studies & Client Work | SmartPixel Chennai",
    description:
      "Real before/after case studies of Chennai brands we've built: jewelry, real estate, D2C, education, water purifiers and more.",
  },
  {
    path: "/about",
    title: "About SmartPixel — Web & SEO Studio in Chrompet, Chennai",
    description:
      "SmartPixel is a Chennai-based studio building conversion-focused websites and SEO for small and mid-size Indian businesses. Meet the team.",
  },
  {
    path: "/contact",
    title: "Contact SmartPixel — Web Design & SEO Chennai",
    description:
      "Book a free 20-min strategy call with SmartPixel. Web design, SEO and app development studio in Chrompet, Chennai.",
  },
  {
    path: "/blog",
    title: "Blog — Web, SEO & Growth Insights for Chennai Businesses | SmartPixel",
    description:
      "Practical playbooks on SEO, web design, conversion, WhatsApp automation and D2C growth — written for Chennai founders.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | SmartPixel",
    description: "SmartPixel privacy policy — how we handle your data.",
  },
  {
    path: "/terms",
    title: "Terms of Service | SmartPixel",
    description: "SmartPixel terms of service.",
  },
  {
    path: "/backlinks",
    title: "Backlink Outreach Targets & Tracker | SmartPixel",
    description: "Internal outreach dashboard — target list, email template and status tracker.",
  },
  {
    path: "/seo-checklist",
    title: "SEO Checklist Auditor | SmartPixel",
    description: "Automated on-page SEO auditor — verifies robots, sitemap and canonicals per route.",
  },

  // ── Service pages ──
  {
    path: "/seo-services-chennai",
    title: "SEO Services in Chennai | Rank #1 on Google | SmartPixel",
    description:
      "Local SEO services in Chennai for small businesses. Rank on Google Maps and search results. Transparent reporting, real keyword rankings, lead-focused.",
  },
  {
    path: "/ecommerce-website-chennai",
    title: "Ecommerce Website Development in Chennai | Shopify, WooCommerce | SmartPixel",
    description:
      "Build an ecommerce website in Chennai with payment gateway, GST invoicing and inventory. Shopify and WooCommerce experts based in Chrompet.",
  },
  {
    path: "/whatsapp-automation-chennai",
    title: "WhatsApp Automation in Chennai | Chatbots & Lead Capture | SmartPixel",
    description:
      "WhatsApp automation for Chennai businesses — chatbots, auto-replies, booking flows and lead nurturing on the official WhatsApp Business API.",
  },
  {
    path: "/services/web-design-chennai",
    title: "Web Design Company in Chennai | High-Converting Websites | SmartPixel",
    description:
      "Web design company in Chennai building modern, mobile-first websites that convert. Fast delivery, SEO-ready, lead-focused. Based in Chrompet.",
  },
  {
    path: "/services/web-app-development",
    title: "Web App Development in Chennai | Custom SaaS & Dashboards | SmartPixel",
    description:
      "Custom web app development in Chennai — SaaS platforms, dashboards, internal tools and portals. React, Node.js and modern stacks.",
  },
  {
    path: "/services/mobile-app-development",
    title: "Mobile App Development in Chennai | iOS & Android | SmartPixel",
    description:
      "Native and cross-platform mobile app development in Chennai. iOS, Android and React Native builds for startups and SMBs.",
  },
  {
    path: "/services/digital-marketing-chennai",
    title: "Digital Marketing Agency in Chennai | Google Ads, Meta, SEO | SmartPixel",
    description:
      "Full-funnel digital marketing agency in Chennai — Google Ads, Meta ads, SEO and social. Transparent reporting focused on qualified leads.",
  },

  // ── Location pages ──
  ...[
    ["pallavaram", "Pallavaram"],
    ["tambaram", "Tambaram"],
    ["chrompet", "Chrompet"],
    ["guindy", "Guindy"],
    ["t-nagar", "T Nagar"],
    ["saidapet", "Saidapet"],
    ["nungambakkam", "Nungambakkam"],
    ["chitlapakkam", "Chitlapakkam"],
  ].map(([slug, name]) => ({
    path: `/web-design-${slug}`,
    title: `Web Design in ${name}, Chennai | Local Website Developer | SmartPixel`,
    description: `Web design services in ${name}, Chennai. Mobile-first, SEO-ready websites for local businesses. Fast delivery, on-site meetings available.`,
  })),

  // ── Blog posts: derived from src/data/posts.ts so the prerendered HTML can
  //    never drift from the published article list. ──
  ...blogRoutes(),
];

