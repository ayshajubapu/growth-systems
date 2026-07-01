// Per-route SEO metadata. Kept in one place so scripts/prerender.mjs can bake
// unique <title>/<meta description>/<link rel=canonical>/<og:*> into static HTML
// for every route at build time. Update this when you add/rename a route.

export const SITE = "https://www.smartpixel.in";

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

  // ── Blog posts ──
  {
    path: "/blog/why-high-google-impressions-fail-to-generate-enquiries",
    title: "Why High Google Impressions Fail to Generate Enquiries | SmartPixel",
    description:
      "High impressions, no leads? The 3 conversion gaps between ranking and enquiries — and how to close them.",
    ogType: "article",
  },
  {
    path: "/blog/chennai-jewelry-showroom-digital-trust-architecture",
    title: "Chennai Jewelry Showroom Digital Trust Architecture | SmartPixel",
    description:
      "How Chennai jewelry brands build online trust: schema, hallmarks, video proof and localised SEO.",
    ogType: "article",
  },
  {
    path: "/blog/how-we-stopped-chennai-clinic-wasting-google-aids",
    title: "How We Stopped a Chennai Clinic Wasting Google Ads | SmartPixel",
    description:
      "Case study: cutting Google Ads waste for a Chennai clinic through negative keywords, landing pages and CRO.",
    ogType: "article",
  },
  {
    path: "/blog/how-we-stopped-chennai-clinic-wasting-google-ads",
    title: "How We Stopped a Chennai Clinic Wasting Google Ads | SmartPixel",
    description:
      "Case study: cutting Google Ads waste for a Chennai clinic through negative keywords, landing pages and CRO.",
    ogType: "article",
  },
  {
    path: "/blog/3-friction-points-killing-chennai-d2c-checkout",
    title: "3 Friction Points Killing Chennai D2C Checkout | SmartPixel",
    description:
      "The three checkout frictions dropping D2C conversions in Chennai — and the exact UX fixes we ship.",
    ogType: "article",
  },
];
