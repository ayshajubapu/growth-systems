import type { ReactNode } from "react";

export const ORIGIN = "https://smartpixel.in";

// ── Body block schema ──
export type BodyBlock =
  | { h: string }                                               // H2 (used for TOC)
  | { h3: string }                                              // H3
  | { p: ReactNode }                                            // paragraph
  | { list: string[]; ordered?: boolean }                       // list
  | { table: { head: string[]; rows: string[][] } }             // comparison
  | { quote: { text: string; source?: string } }                // pull quote
  | { callout: { title: string; body: string; ctaLabel?: string; ctaHref?: string } }
  | { faq: { q: string; a: string }[] }                         // FAQ (also emits FAQPage schema)
  | { type: "calculator" | "checklist" | "speed-audit" };       // legacy widgets

export type Category =
  | "SEO"
  | "Local SEO"
  | "Web Design"
  | "Web Performance"
  | "Ecommerce"
  | "WhatsApp Automation"
  | "Digital Marketing"
  | "Case Study";

export type Post = {
  slug: string;
  cat: Category;
  date: string;                 // display, e.g. "Jul 2026"
  datePublishedIso: string;     // ISO
  dateModifiedIso?: string;
  read: string;                 // "12 min"
  title: string;
  excerpt: string;
  keywords?: string[];
  featured?: boolean;
  trending?: boolean;
  body: BodyBlock[];
};

// ── Author (single-author studio for now) ──
export const author = {
  name: "SmartPixel Studio",
  role: "Web, SEO & App Studio — Chrompet, Chennai",
  bio: "SmartPixel is a Chennai-based studio building conversion-focused websites, SEO systems and mobile apps for Indian SMBs. We ship, measure and iterate — not just launch.",
  url: `${ORIGIN}/about`,
  avatarInitials: "SP",
  yearsExperience: 12,
};

// ── Category → service page mapping (for related-services block) ──
export const catToService: Record<Category, { label: string; href: string; blurb: string }[]> = {
  "SEO": [
    { label: "SEO Services Chennai", href: "/seo-services-chennai", blurb: "Local + technical SEO built for lead generation." },
    { label: "Digital Marketing Chennai", href: "/services/digital-marketing-chennai", blurb: "Full-funnel SEO, Ads and content." },
  ],
  "Local SEO": [
    { label: "SEO Services Chennai", href: "/seo-services-chennai", blurb: "Rank on Google Maps + local search." },
    { label: "Web Design Chennai", href: "/services/web-design-chennai", blurb: "Locally-optimised landing pages." },
  ],
  "Web Design": [
    { label: "Web Design Chennai", href: "/services/web-design-chennai", blurb: "Modern, mobile-first, lead-focused." },
    { label: "Web App Development", href: "/services/web-app-development", blurb: "Custom SaaS, dashboards, portals." },
  ],
  "Web Performance": [
    { label: "Web Design Chennai", href: "/services/web-design-chennai", blurb: "Fast, Core Web Vitals-friendly builds." },
    { label: "SEO Services Chennai", href: "/seo-services-chennai", blurb: "Speed feeds ranking. We audit both." },
  ],
  "Ecommerce": [
    { label: "Ecommerce Website Chennai", href: "/ecommerce-website-chennai", blurb: "Shopify + WooCommerce experts." },
    { label: "WhatsApp Automation", href: "/whatsapp-automation-chennai", blurb: "Recover carts, automate order updates." },
  ],
  "WhatsApp Automation": [
    { label: "WhatsApp Automation Chennai", href: "/whatsapp-automation-chennai", blurb: "Official WhatsApp Business API." },
    { label: "Digital Marketing", href: "/services/digital-marketing-chennai", blurb: "Ads → WhatsApp funnels." },
  ],
  "Digital Marketing": [
    { label: "Digital Marketing Chennai", href: "/services/digital-marketing-chennai", blurb: "Google Ads, Meta, SEO." },
    { label: "SEO Services Chennai", href: "/seo-services-chennai", blurb: "Long-term organic engine." },
  ],
  "Case Study": [
    { label: "Portfolio", href: "/portfolio", blurb: "More before/after case studies." },
    { label: "Book a Strategy Call", href: "/contact", blurb: "20-min free consultation." },
  ],
};

// ── Content shortcuts ──
const P = (text: ReactNode) => ({ p: text } as BodyBlock);
const H = (text: string) => ({ h: text } as BodyBlock);
const H3 = (text: string) => ({ h3: text } as BodyBlock);
const L = (items: string[], ordered = false) => ({ list: items, ordered } as BodyBlock);

// ==============================================================
// POSTS
// ==============================================================

export const posts: Post[] = [
  // ── 1. Featured pillar: Why website isn't ranking ─────────────
  {
    slug: "why-your-website-isnt-ranking-on-google",
    cat: "SEO",
    date: "Jul 2026",
    datePublishedIso: "2026-07-03",
    read: "12 min",
    title: "Why your website isn't ranking on Google (and the exact fixes we ship for Chennai SMBs)",
    excerpt: "After auditing 200+ Indian SMB sites, ranking failures cluster into six repeatable problems. Here is the diagnostic order we use — and how to fix each one.",
    keywords: ["website not ranking on google", "seo audit chennai", "google ranking fix"],
    featured: true,
    trending: true,
    body: [
      P("Every founder eventually opens Google, types their brand name plus their service — and finds a competitor sitting where they should be. Before you spend on ads or 'SEO packages', run this diagnostic. It is the same order our team uses on paid audits."),
      H("1. Google literally cannot crawl or index your site"),
      P("This is the most common cause and the most preventable. Open Google Search Console → Pages. If you see 'Discovered — currently not indexed' or 'Crawled — not indexed' on your money pages, ranking is impossible. No index, no rank."),
      L([
        "robots.txt is not blocking key routes (check /robots.txt)",
        "Every important page returns 200, not 301 chains or 404s",
        "A canonical tag points to itself, not the homepage",
        "sitemap.xml is submitted and lists every real URL",
        "The page is not a JS-only render with no static HTML fallback",
      ]),
      P("Single-page React apps still ship with this last bug in 2026. If your product/service pages only render after JS hydration, prerender them (we use a build-step prerender on every SmartPixel client project) or move to SSR."),
      H("2. Your page targets a keyword no one searches"),
      P("Founders name pages after internal jargon — 'Our Approach', 'Value Delivery Framework'. Google indexes them and no one ever types those queries. Every commercial page needs a keyword with real search volume and clear buying intent."),
      { callout: { title: "Quick test", body: "Take your page's H1. Paste it into Google. If autocomplete does not suggest it and 'People also ask' shows unrelated results, the keyword has no demand. Rewrite around a real query.", ctaLabel: "Get a Free Keyword Audit", ctaHref: "/contact" } },
      H("3. Search intent mismatch"),
      P("You wrote a 3,000-word guide targeting 'best CRM for small business' — but Google's top 10 for that query are all comparison lists with tables and vendor logos. Your long-form essay will not rank because it does not match what the query wants. Look at the current SERP first. Copy the format, then beat it on depth."),
      H("4. No topical authority around the page"),
      P("A single page targeting 'seo services chennai' with zero supporting content will not outrank a competitor who has 20 posts on local SEO, Google Business Profile, Chennai case studies and technical SEO. Google reads the neighbourhood, not just the page."),
      H3("How to build a topical cluster"),
      L([
        "Pick one pillar page — usually a service (e.g. /seo-services-chennai).",
        "Publish 8–12 supporting blog posts each targeting one long-tail question.",
        "Every supporting post links to the pillar with descriptive anchor text.",
        "The pillar links back down to each supporting post.",
      ], true),
      H("5. Backlinks: zero, spammy, or from the wrong neighbourhood"),
      P("For competitive commercial queries in India, on-page alone rarely wins. You need referring domains from real, topically-relevant sites — chamber of commerce listings, industry directories, guest posts on trade publications, PR mentions. Fiverr link packages will actively hurt you in 2026; Google's spam updates now demote them within weeks."),
      H("6. Slow, unstable, or unfriendly on mobile"),
      P("Core Web Vitals are a confirmed ranking factor. If your Largest Contentful Paint on a mid-range Android over 4G is above 2.5s, you are ranking below competitors who ship faster pages, all else equal. Check yours on PageSpeed Insights, use the 'field data' section — that is what Google actually uses."),
      { type: "speed-audit" },
      H("The order we fix things in"),
      P("Rankings do not move if you fix issues in the wrong order. This is the sequence that compounds fastest:"),
      L([
        "Fix indexation (Search Console errors, robots.txt, canonicals, sitemap).",
        "Fix technical performance (Core Web Vitals, mobile usability).",
        "Rewrite money pages to match search intent + real keywords.",
        "Build the topical cluster with 8–12 supporting posts.",
        "Only then invest in link building.",
      ], true),
      H("Frequently asked questions"),
      { faq: [
        { q: "How long does it take to rank on Google?", a: "For a new site targeting low-competition local terms in Chennai, 3–6 months of consistent publishing and technical work. For competitive commercial queries, 9–18 months. Anyone promising #1 in 30 days is either lying or targeting your brand name." },
        { q: "Is SEO worth it for a small Chennai business?", a: "Yes, if you sell services or products with any repeat search demand. Local SEO in particular has a very high ROI because the intent is transactional — someone searching 'dentist in Adyar' is ready to book." },
        { q: "Can I do SEO myself?", a: "You can handle content, Google Business Profile and internal linking. Technical SEO, schema, Core Web Vitals fixes and link building typically need specialist help. We offer a done-with-you model for founders who want to stay involved." },
        { q: "Does redesigning my website hurt SEO?", a: "Only if you skip a redirect map. Every old URL must 301 to its new equivalent, or you lose the rankings you already have. We ship every redesign with a mapped redirect plan." },
      ]},
      P(<>Ready to see exactly where your site is losing rankings? <a href="/contact" className="text-accent underline">Book a free 20-minute audit</a> — we screen-record the diagnostic and send you the recording, whether you hire us or not.</>),
    ],
  },

  // ── 2. Local SEO checklist ────────────────────────────────────
  {
    slug: "local-seo-checklist-small-business-chennai",
    cat: "Local SEO",
    date: "Jul 2026",
    datePublishedIso: "2026-07-02",
    read: "10 min",
    title: "The 2026 local SEO checklist for small businesses in Chennai (steal our exact process)",
    excerpt: "Local SEO is the highest-ROI marketing channel most Chennai SMBs are ignoring. Here is the full 34-point checklist we use for every client, in the order it matters.",
    keywords: ["local seo chennai", "google business profile", "local seo checklist"],
    featured: true,
    body: [
      P("If you serve a physical area — a clinic in Tambaram, a restaurant in T Nagar, a boutique in Nungambakkam — local SEO will out-earn any other marketing rupee you spend. Getting to the top of the Google Map Pack for one high-intent query can generate more qualified calls than a ₹50,000/month ad budget."),
      H("Foundations: your Google Business Profile (GBP)"),
      P("Your GBP is more important than your website for local intent. Google shows the Map Pack above the organic results, and 44% of Chennai local searches end without a click to any website — they call directly from the map card."),
      L([
        "Claim and verify the listing (video verification is now standard).",
        "Primary category matches your money keyword exactly (e.g. 'Web designer', not 'IT services').",
        "Add every applicable secondary category (up to 9).",
        "Business name matches your signage exactly — no keyword stuffing.",
        "Full address with landmark, correct pincode, service radius set.",
        "Two phone numbers: local landline + WhatsApp-enabled mobile.",
        "Hours accurate, including special hours for Pongal, Diwali, Eid.",
        "10+ high-quality photos: exterior, interior, team, products, work.",
        "Weekly Google Posts (updates, offers, events).",
        "Q&A section seeded with 5 real questions and answers.",
      ]),
      H("Reviews: the #1 local ranking factor"),
      P("Google's local algorithm weighs review count, review recency and review keyword content heavily. A competitor with 87 recent reviews mentioning 'root canal' will outrank a dentist with 210 old reviews mentioning nothing specific."),
      L([
        "Target 10+ new reviews per month, consistently.",
        "Send a review request via WhatsApp within 2 hours of service completion — response rate is 3× email.",
        "Ask reviewers to mention the service they received (this is not a violation; it is genuine detail).",
        "Reply to every review within 24 hours — including 5-star ones.",
        "Never buy reviews. Google's neural review filter now flags them within days.",
      ]),
      H("On-page local SEO"),
      L([
        "Every location or service page has: H1 with {service} + {area}, self-referencing canonical, unique title + meta description, embedded Google Map, LocalBusiness schema.",
        "NAP (Name, Address, Phone) appears in schema, footer and contact page — identical formatting everywhere.",
        "Dedicated pages for each service area (we ship 8 for Chennai: Chrompet, Tambaram, T Nagar, Guindy, Saidapet, Nungambakkam, Pallavaram, Chitlapakkam).",
        "FAQPage schema on every location page.",
      ]),
      { type: "checklist" },
      H("Local citations that still matter in India"),
      L([
        "Justdial (highest trust signal in South India)",
        "Sulekha",
        "IndiaMART (for B2B)",
        "UrbanPro / UrbanClap (service verticals)",
        "Chamber of Commerce listings (CII, FICCI locals)",
        "Industry-specific: Practo (medical), Zomato (F&B), MagicBricks (real estate)",
      ]),
      P("Consistency of NAP across these citations feeds Google's confidence in your legitimacy. One typo across 12 directories can suppress your Map Pack ranking by 3–5 positions."),
      H("Technical local signals"),
      L([
        "hreflang not needed unless you serve Tamil + English separately — but ship a Tamil landing page and it will win the growing Tamil-language search volume.",
        "Structured data: LocalBusiness + PostalAddress + GeoCoordinates + OpeningHoursSpecification.",
        "Mobile page speed under 2.5s LCP (most local searches are mobile).",
        "Click-to-call buttons prominent on every page.",
      ]),
      H("Frequently asked questions"),
      { faq: [
        { q: "How long does local SEO take to show results in Chennai?", a: "Google Business Profile improvements can move Map Pack rankings within 2–4 weeks. Full local SEO results — organic + map + review flow compounding — typically take 3–6 months for a small business." },
        { q: "Do I need a separate location page for every area I serve?", a: "Yes, if you want to rank in each area. A single 'Areas We Serve' page listing 20 pincodes will rank for none of them. Each area needs its own indexed, unique page." },
        { q: "How much should local SEO cost in Chennai?", a: "Reputable local SEO retainers in Chennai run ₹15,000–₹45,000/month depending on scope. Anything under ₹8,000 is usually a JustDial reseller or bot review farm — walk away." },
      ]},
      P(<>Want us to run this checklist on your business? <a href="/seo-services-chennai" className="text-accent underline">See our SEO services</a> or <a href="/contact" className="text-accent underline">book a strategy call</a>.</>),
    ],
  },

  // ── 3. SEO vs Google Ads ──────────────────────────────────────
  {
    slug: "seo-vs-google-ads-which-delivers-better-roi",
    cat: "Digital Marketing",
    date: "Jun 2026",
    datePublishedIso: "2026-06-28",
    read: "9 min",
    title: "SEO vs Google Ads: which actually delivers better ROI for Indian SMBs?",
    excerpt: "The honest answer is 'both, at different stages'. Here is the maths, the timelines, and the framework we use to decide which gets the bigger budget for each client.",
    keywords: ["seo vs google ads", "digital marketing roi", "google ads chennai"],
    body: [
      P("Every quarter a founder asks us: 'Should I put my ₹40,000/month into SEO or Google Ads?' The lazy answer is 'depends'. The real answer is: they solve different problems on different timelines, and the right split changes as your business matures."),
      H("The core difference in one line"),
      P("Google Ads rents attention. SEO builds an asset. Stop paying Google, ads stop. Stop paying an SEO team, rankings decay slowly — a good SEO investment keeps generating leads for 12–36 months after you stop."),
      H("Cost per lead — real Chennai numbers"),
      P("From our client dashboards, average cost per qualified lead across verticals:"),
      { table: { head: ["Vertical", "Google Ads CPL", "SEO CPL (steady state, month 12+)"], rows: [
        ["Local dental clinic", "₹380–620", "₹90–150"],
        ["Real estate broker", "₹1,100–2,400", "₹280–450"],
        ["Ecommerce (D2C fashion)", "₹220–410", "₹70–130"],
        ["B2B SaaS", "₹1,800–4,500", "₹500–900"],
        ["Home services (plumbing, AC)", "₹95–180", "₹35–75"],
      ]}},
      P("SEO is 2–5× cheaper per lead at steady state. But 'steady state' is 9–15 months in. That is the trap."),
      H("The J-curve problem"),
      P("SEO returns look like a J-curve. Months 1–4 you spend and see almost nothing. Months 5–8 traffic starts. Months 9–12 leads compound. Month 15 onward the CPL collapses. Founders who cut SEO in month 4 because 'it's not working' throw away the entire investment right before the payoff."),
      H("When to lean into Google Ads"),
      L([
        "You need cash flow this quarter, not next year.",
        "You are launching a new product or entering a new city.",
        "You are validating whether a keyword actually converts (Ads is the fastest test).",
        "You are running a time-bound offer.",
        "You are in a hyper-local niche with very low organic volume.",
      ]),
      H("When to lean into SEO"),
      L([
        "You have 12+ months of runway and want compounding leads.",
        "Your unit economics are strong enough to survive month 1–8.",
        "Your competitors are already ranking — every month you wait, they entrench.",
        "You want to build a defensible moat (brand + content + backlinks).",
        "Your service has recurring or high-lifetime-value customers.",
      ]),
      H("The framework we recommend"),
      P("For most Chennai SMBs with ₹30k–₹80k/month marketing budgets, we ship this split:"),
      { table: { head: ["Business stage", "Ads %", "SEO %", "Rationale"], rows: [
        ["New (0–12 months)", "70%", "30%", "Cash flow first, plant SEO seeds"],
        ["Growing (1–3 years)", "50%", "50%", "SEO starts producing, keep Ads on high-intent"],
        ["Established (3+ years)", "30%", "70%", "SEO is now the engine, Ads for peaks + gaps"],
      ]}},
      { callout: { title: "The compound truth", body: "A client we started SEO for in 2023 now gets 340 organic leads/month at a blended CPL of ₹110. They spend ₹35k/month on SEO. Matching that lead volume via Ads would cost ₹40,000+ per week.", ctaLabel: "Book a Strategy Call", ctaHref: "/contact" } },
      H("Frequently asked questions"),
      { faq: [
        { q: "Should I do SEO or Google Ads first?", a: "If you have runway, both — Ads for immediate leads, SEO seeded in parallel. If you must pick one, start with Ads to prove the funnel converts, then reinvest into SEO in month 3–4." },
        { q: "Is SEO dead because of AI Overviews?", a: "No. AI Overviews still cite sources, and being cited by ChatGPT/Gemini/Perplexity requires the same on-page + authority work as classical SEO. AEO (Answer Engine Optimization) is a layer on top, not a replacement." },
        { q: "What's a realistic Google Ads budget for a Chennai SMB?", a: "Minimum viable budget for a local service business is ₹15,000/month. Below that, you cannot gather enough conversion data to optimise, and Google's algorithm underserves your account." },
      ]},
      P(<>Not sure which mix fits your business? Read our <a href="/blog/how-we-stopped-chennai-clinic-wasting-google-ads" className="text-accent underline">Google Ads waste case study</a> or <a href="/services/digital-marketing-chennai" className="text-accent underline">see our digital marketing services</a>.</>),
    ],
  },

  // ── 4. How much does SEO cost ─────────────────────────────────
  {
    slug: "how-much-does-seo-cost-in-india",
    cat: "SEO",
    date: "Jun 2026",
    datePublishedIso: "2026-06-26",
    read: "8 min",
    title: "How much does SEO actually cost in India in 2026? (Honest pricing breakdown)",
    excerpt: "The Indian SEO market runs from ₹5,000/month scams to ₹5,00,000/month enterprise retainers. Here is what every price tier actually delivers — and where SmartPixel sits.",
    keywords: ["seo cost india", "seo pricing chennai", "seo packages"],
    body: [
      P("Search 'SEO cost in India' and you will see ranges from ₹5,000 to ₹5,00,000 per month. Both extremes exist, and most of what is sold at the bottom is not SEO. Here is what you actually get at each price point, based on 12 years of watching this market from Chennai."),
      H("The five real pricing tiers"),
      { table: { head: ["Tier", "Monthly ₹", "What you get", "Who it's for"], rows: [
        ["Bargain / spam", "₹3,000–8,000", "Directory submissions, comment spam, keyword-stuffed blog posts. Actively hurts long-term.", "Nobody — walk away"],
        ["Freelancer basic", "₹10,000–20,000", "On-page fixes, monthly blog, GBP maintenance. No technical SEO or link building.", "Micro businesses testing SEO"],
        ["Small agency", "₹25,000–60,000", "Full audit, monthly content, technical SEO, GBP + local citations, basic outreach.", "Local SMBs, most Chennai clinics/retailers"],
        ["Mid-market agency", "₹75,000–1,50,000", "Above + digital PR, dedicated strategist, custom dashboards, CRO integration.", "Growing D2C, real estate, multi-location"],
        ["Enterprise", "₹2,00,000+", "Full team: technical, content, PR, analytics. International or multi-vertical.", "SaaS, large ecommerce, listed companies"],
      ]}},
      H("What good SEO actually spends the budget on"),
      L([
        "Senior strategist time (30–40% of retainer) — the person who decides what to work on.",
        "Content production (25–35%) — writers, editors, subject-matter interviews.",
        "Technical SEO (10–15%) — audits, schema, Core Web Vitals, dev handoffs.",
        "Digital PR / link building (10–20%) — outreach, guest placements.",
        "Tools + reporting (5–10%) — Ahrefs, Semrush, Screaming Frog, dashboards.",
      ]),
      P("If a proposal cannot break down where the budget goes, it is either a scam or a resell of someone else's work at a markup."),
      H("Why ₹5,000 'SEO packages' are dangerous"),
      P("At ₹5k/month, an agency has maybe 2 hours of junior time to spend on you. They cannot write content, do outreach, or fix technical issues. So they resort to:"),
      L([
        "Automated blog spinning (Google detects and demotes)",
        "Toxic backlink packages from PBNs (manual actions)",
        "Fake reviews (GBP suspension)",
        "Keyword stuffing (algorithmic filter)",
      ]),
      P("We regularly onboard clients whose previous 'SEO' left them with 2,000 toxic links and a Google penalty. Undoing the damage costs more than doing it right from the start."),
      { callout: { title: "SmartPixel pricing (transparent)", body: "Our local SEO retainer starts at ₹28,000/month with a 6-month minimum. Growth-tier (D2C, multi-location, competitive verticals) starts at ₹65,000/month. Every retainer includes weekly strategy calls, a real dashboard, and a 90-day exit clause after the initial term.", ctaLabel: "See SEO Services", ctaHref: "/seo-services-chennai" } },
      H("Frequently asked questions"),
      { faq: [
        { q: "Should I pay for SEO monthly or one-time?", a: "SEO is an ongoing discipline — algorithms update, competitors move, content ages. Pay monthly. Beware of 'one-time SEO packages' — they cannot deliver sustained results." },
        { q: "Are pay-per-result SEO offers legitimate?", a: "Almost never. They incentivise the agency to target easy vanity keywords (your brand name, ultra long-tail queries with no traffic). You will 'rank #1' for terms no one searches." },
        { q: "What's the minimum budget to see real SEO results in a competitive Chennai vertical?", a: "For legal, medical, real estate or ecommerce in Chennai — realistically ₹40,000/month for 9+ months. Below that, you can move on ultra-local long-tail but not the main money keywords." },
        { q: "How much should content cost inside an SEO budget?", a: "A well-researched 1,500-word article costs ₹4,500–₹9,000 to produce properly (research + writing + editing + optimisation + publishing). If your agency is producing 8 articles a month for ₹10k total, they are AI-spinning them." },
      ]},
      P(<>Want a real SEO proposal, not a template? <a href="/contact" className="text-accent underline">Send us your site and top 3 competitors</a> — we'll come back with scope and a fixed monthly number within 48 hours.</>),
    ],
  },

  // ── 5. 25 SEO mistakes ────────────────────────────────────────
  {
    slug: "25-seo-mistakes-costing-you-customers",
    cat: "SEO",
    date: "Jun 2026",
    datePublishedIso: "2026-06-24",
    read: "14 min",
    title: "25 SEO mistakes that are silently costing you customers in 2026",
    excerpt: "We audited 47 Chennai SMB websites this quarter. These 25 mistakes appear over and over — and each one is fixable in under a day.",
    keywords: ["seo mistakes", "seo audit", "seo checklist"],
    trending: true,
    body: [
      P("Most SEO problems are not exotic. They are the same 25 mistakes, made by 90% of Indian SMB websites. Fix even half of them and rankings move within a quarter."),
      H("Technical mistakes (fixable this week)"),
      L([
        "No self-referencing canonical tag on money pages.",
        "Sitemap.xml missing, outdated, or includes 404s and redirects.",
        "robots.txt accidentally blocking /wp-content/ or /assets/ (kills rendering).",
        "Client-side-only rendering with no prerender or SSR — Google sees blank HTML.",
        "301 redirect chains (A → B → C → D instead of A → D).",
        "Mixed http/https or www/non-www without a single 301 target.",
        "No hreflang or wrong language tags for Tamil/English sites.",
      ], true),
      H("On-page mistakes"),
      L([
        "Duplicate title tags across dozens of pages ('Home | Brand', 'About | Brand'...).",
        "Meta descriptions missing or auto-generated by the CMS.",
        "H1 that is a marketing slogan, not the actual keyword ('Excellence Delivered' vs 'Web Design Company in Chennai').",
        "Multiple H1s per page (should be one).",
        "Images with no alt text or filenames like DSC_00847.jpg.",
        "Money pages under 500 words — thin content.",
        "No internal links between related pages (orphan pages).",
      ], true),
      H("Local SEO mistakes"),
      L([
        "GBP category set to a generic parent ('Business Services') instead of the specific one.",
        "NAP inconsistent between website footer, GBP, and Justdial.",
        "No location page for each area you actually serve.",
        "Reviews left unanswered for weeks.",
        "GBP profile with fewer than 5 photos.",
      ], true),
      H("Content and authority mistakes"),
      L([
        "Publishing content on topics with zero search demand ('Our Weekend Team Trip').",
        "Copying manufacturer product descriptions verbatim (duplicate content).",
        "No FAQ sections on service pages — misses featured snippets and AI Overviews.",
        "Zero backlinks — no outreach, no digital PR, no relationships.",
        "Buying links from Fiverr, PBNs, or 'link exchange' networks.",
        "Never updating old posts — content ages out of relevance.",
      ], true),
      { type: "checklist" },
      H("Frequently asked questions"),
      { faq: [
        { q: "Which SEO mistake hurts rankings the most?", a: "For most SMBs it's a tie between JS-only rendering (Google literally cannot read your content) and thin/duplicate content on money pages. Both are architectural, so they affect every page at once." },
        { q: "Will fixing these mistakes recover lost rankings?", a: "Usually yes, within 4–12 weeks of the fixes being crawled and reindexed. Some mistakes (toxic backlinks, past manual actions) require additional recovery work." },
        { q: "How often should I re-audit my site?", a: "Full technical audit every 6 months. Quick check (index coverage, Core Web Vitals, broken links) every month. After any redesign or migration — immediately." },
      ]},
      P(<>Want us to run all 25 checks on your site? <a href="/contact" className="text-accent underline">Book a free audit</a> — we screen-record every finding and send you a video, whether you hire us or not.</>),
    ],
  },

  // ── 6. 15 signs need new website ──────────────────────────────
  {
    slug: "15-signs-your-business-needs-a-new-website",
    cat: "Web Design",
    date: "Jun 2026",
    datePublishedIso: "2026-06-20",
    read: "8 min",
    title: "15 signs your business needs a new website (not just a redesign)",
    excerpt: "A cosmetic redesign wastes six figures if the underlying problems are structural. Here is how to tell whether your site needs paint — or a rebuild.",
    keywords: ["new website", "website redesign", "web design chennai"],
    body: [
      P("Most 'redesigns' fail because they treat symptoms — the site looks dated, so we pick new colours — while ignoring structural rot. Before you brief an agency, run these 15 tests. If more than five apply, you need a rebuild, not a facelift."),
      H("Performance and technical signs"),
      L([
        "Mobile PageSpeed score under 50.",
        "Largest Contentful Paint over 4 seconds on mid-range Android.",
        "Homepage weighs more than 3 MB.",
        "Site is not fully responsive on tablet or foldables.",
        "You cannot edit content without calling your developer.",
      ]),
      H("Business signs"),
      L([
        "Traffic is flat or declining for 12+ months.",
        "Contact form conversion is under 0.8% of visitors.",
        "Bounce rate over 75% on your money pages.",
        "You have added services or products your site does not reflect.",
        "Your brand identity has evolved and the site no longer matches.",
      ]),
      H("SEO and structural signs"),
      L([
        "URLs look like /page.php?id=347 or /index.html?p=12.",
        "No blog, or the blog last published in 2022.",
        "No FAQ sections, no schema markup, no meta descriptions.",
        "Site is on a discontinued platform (old Wix classic, Weebly, DreamWeaver builds).",
        "Analytics is either missing or last configured 4 years ago.",
      ]),
      { callout: { title: "The 5-signs rule", body: "1–2 signs: fix in place. 3–4 signs: strategic redesign (keep structure, replace UI). 5+ signs: full rebuild — anything less is throwing money at rot.", ctaLabel: "Discuss Your Website", ctaHref: "/services/web-design-chennai" } },
      H("What a real rebuild costs and takes"),
      P("A serious SMB website rebuild in Chennai runs ₹1.2L–₹5L and takes 4–10 weeks depending on scope. Anyone quoting ₹15,000 with a 5-day timeline is selling you a template with your logo dropped in — you will need another rebuild in 18 months."),
      H("Frequently asked questions"),
      { faq: [
        { q: "How often should a business redesign its website?", a: "Content and UX every 2–3 years. Full technical rebuild every 5–7 years, or sooner if the platform gets deprecated. Design trends change; underlying architecture ages faster than most founders realise." },
        { q: "Will a new website hurt my Google rankings?", a: "Only if you skip the redirect map. Every old URL must 301 to its new equivalent. We ship every SmartPixel redesign with a mapped redirect plan reviewed pre-launch." },
        { q: "Should I redesign or rebuild?", a: "If the structure, routing, CMS and platform are solid, redesign. If any of those are broken, rebuild — a redesign will only paper over the cracks." },
      ]},
      P(<>Read our <a href="/blog/why-most-business-websites-never-generate-leads" className="text-accent underline">deep dive on lead-generating websites</a> or <a href="/services/web-design-chennai" className="text-accent underline">see our web design service</a>.</>),
    ],
  },

  // ── 7. Websites don't generate leads ──────────────────────────
  {
    slug: "why-most-business-websites-never-generate-leads",
    cat: "Web Design",
    date: "Jun 2026",
    datePublishedIso: "2026-06-17",
    read: "10 min",
    title: "Why most business websites never generate a single lead (and the 7 fixes that change that)",
    excerpt: "Nine out of ten SMB sites we audit convert under 1% of visitors. It is almost never a traffic problem — it is a structure problem.",
    keywords: ["lead generation website", "conversion rate optimization", "website not converting"],
    body: [
      P("Founders spend ₹2L building a website, ₹40k a month driving traffic to it, and get 3 enquiries a month. The traffic is real. The design is 'nice'. So why is the pipeline dry? Because the site was built like a brochure, not like a machine."),
      H("Fix 1: One primary action per page"),
      P("Homepage with 'Learn more', 'Get in touch', 'Explore services', 'Watch video', 'Read blog', 'Download brochure', 'Book a call' all above the fold? You just gave the visitor a decision. They freeze. Pick one primary action per page. Everything else is secondary or tertiary."),
      H("Fix 2: Kill hero sliders"),
      P("Sliders had a 0.4% CTR on the second slide and near-zero after that in the last A/B test batch we ran across 8 clients. One static hero with one message and one CTA converts 2–4× better than a rotating carousel."),
      H("Fix 3: Speak to the buyer's problem, not your capabilities"),
      L([
        "Weak: 'We are a full-service digital agency delivering excellence.'",
        "Strong: 'Your Google ads are burning ₹40k/month without producing bookings. We fix that in 30 days.'",
      ]),
      P("The strong version names a specific pain, a specific outcome and a specific timeline. Your visitor thinks 'yes, that is exactly me' within 4 seconds — and scrolls."),
      H("Fix 4: Trust proof above the fold, not buried in a testimonials tab"),
      L([
        "3–5 client logos, real ones",
        "One case study number ('cut CPL by 62% for a Chennai clinic')",
        "A star rating with review count",
        "Google Business Profile embed for local trust",
      ]),
      H("Fix 5: Multiple contact modes, not just a form"),
      P("Contact forms convert at 0.8–2%. WhatsApp click-to-chat converts at 8–14% in India. Add a WhatsApp button. Add a phone number that dials on tap. Keep the form for those who want it — but do not make it the only path."),
      { type: "calculator" },
      H("Fix 6: Progressive disclosure on forms"),
      P("A 12-field form asking for company size, budget, timeline and preferred meeting time on the first screen converts at under 1%. A 2-field form (name + WhatsApp number) followed by a scheduling step converts at 6–9%. Ask for what you need to reply — nothing more."),
      H("Fix 7: A real thank-you page, not a modal that disappears"),
      P("After conversion, most sites show a green tick and vanish. Waste. Use the thank-you page to: (a) set expectations ('we reply within 4 hours'), (b) offer a WhatsApp shortcut for urgent needs, (c) point to a case study or downloadable resource, (d) fire the conversion pixel properly."),
      { callout: { title: "The audit we run", body: "Send us your homepage and top service page. We record a 20-minute video walking through every conversion leak with timestamps. Yours to keep whether you hire us or not.", ctaLabel: "Get Your Free CRO Audit", ctaHref: "/contact" } },
      H("Frequently asked questions"),
      { faq: [
        { q: "What is a good conversion rate for a Chennai SMB website?", a: "1.5–3% for cold traffic on a service business. 4–8% for warm traffic (email, existing customers). 8%+ on retargeting campaigns. Under 0.8% is a structural problem — not a traffic problem." },
        { q: "How long does CRO take to show results?", a: "First fixes (hero, primary CTA, WhatsApp button) show within 2–4 weeks. Full CRO programme (heatmaps, A/B tests, form redesigns) compounds over 3–6 months, typically doubling conversion rate." },
        { q: "Do I need more traffic or better conversion?", a: "If you convert under 1%, fix conversion first — doubling from 0.8% to 1.6% doubles leads with zero extra ad spend. Above 2.5%, invest in more traffic." },
      ]},
      P(<>Read <a href="/blog/website-speed-hidden-sales-killer" className="text-accent underline">our post on website speed</a> — the fastest conversion win most sites are still ignoring.</>),
    ],
  },

  // ── 8. Website speed ──────────────────────────────────────────
  {
    slug: "website-speed-hidden-sales-killer",
    cat: "Web Performance",
    date: "Jun 2026",
    datePublishedIso: "2026-06-14",
    read: "9 min",
    title: "Website speed: the hidden sales killer nobody in India talks about",
    excerpt: "Every extra second of load time drops mobile conversions by 12–20%. Here is what actually causes slow Indian SMB sites — and the 8 fixes that move the needle.",
    keywords: ["website speed", "core web vitals", "page speed india"],
    body: [
      P("Amazon measured that every 100ms of extra load time cost them 1% in sales. Google's own data pegs Indian mobile drop-off at 32% when LCP crosses 3 seconds. Yet 78% of the Chennai SMB sites we audit load in 5+ seconds on 4G. This is the cheapest, highest-ROI fix in the entire web stack — and almost nobody prioritises it."),
      H("The 3 Core Web Vitals that actually matter"),
      { table: { head: ["Metric", "What it measures", "Good", "Poor"], rows: [
        ["LCP (Largest Contentful Paint)", "When the main content becomes visible", "< 2.5s", "> 4.0s"],
        ["INP (Interaction to Next Paint)", "How quickly the page responds to taps", "< 200ms", "> 500ms"],
        ["CLS (Cumulative Layout Shift)", "How much things jump around while loading", "< 0.1", "> 0.25"],
      ]}},
      P("Google now uses the 75th percentile of real user data (field data, from Chrome) — not lab tests. If 25% of your visitors have a bad experience, your ranking suffers."),
      H("What actually slows down Indian SMB sites"),
      L([
        "Uncompressed hero images (a 4 MB JPEG when a 180 KB WebP would look identical).",
        "Third-party scripts: Hotjar, Intercom, live chat widgets, 5 different analytics.",
        "Cheap hosting on shared servers with 400ms TTFB.",
        "WordPress themes bundled with 47 plugins, most inactive.",
        "Client-side JS that renders every page from scratch.",
        "Custom fonts loaded before content (blocking render).",
        "Video backgrounds autoplaying on mobile 4G.",
        "No CDN — every visitor from Chennai to Delhi hits your Bengaluru server directly.",
      ]),
      H("The 8 fixes that produce the biggest gains"),
      L([
        "Convert every image to WebP or AVIF. Serve at the display size, not 4000px wide.",
        "Lazy-load images and iframes below the fold.",
        "Move to a modern host with CDN — Vercel, Netlify, Cloudflare Pages, Bunny.",
        "Preconnect + preload critical fonts. Use font-display: swap.",
        "Remove any third-party script you cannot justify by revenue impact.",
        "Enable HTTP/3 and Brotli compression.",
        "For React/Vue apps: ship a prerendered or SSR version.",
        "Cache-Control: immutable on all versioned static assets.",
      ], true),
      { type: "speed-audit" },
      H("Desktop vs mobile — the split most agencies miss"),
      P("Indian founders check speed on their desk MacBook and see a 1.2s load. Their customer is on a ₹12,000 Redmi over Jio 4G with 6 Chrome tabs open. That customer sees 6.4s. Always test on: (a) a mid-range Android emulator, (b) a throttled 4G connection, (c) PageSpeed Insights' field data section — not the lab data."),
      H("Frequently asked questions"),
      { faq: [
        { q: "How much does website speed affect Google rankings?", a: "For competitive queries, speed is a tiebreaker between two otherwise-equal pages. For most SMB queries, poor Core Web Vitals apply a soft demotion — you can still rank, but 2–4 positions lower than you would otherwise." },
        { q: "What is the fastest way to speed up a WordPress site?", a: "Three moves: (1) install a modern caching plugin (WP Rocket or LiteSpeed Cache), (2) convert images to WebP with ShortPixel or Imagify, (3) move to a CDN (Cloudflare's free tier is fine to start). That typically halves load time in an afternoon." },
        { q: "Is a fast site really that important for conversions?", a: "In India, yes. Mobile data is inconsistent, users are impatient, and switching to a competitor takes one tap. Our clients see 15–35% conversion lift within 30 days of a speed overhaul." },
      ]},
      P(<>Want to know exactly how much revenue your slow site is costing? <a href="/contact" className="text-accent underline">Book a speed + revenue audit</a> — free, 30 minutes, screen-recorded.</>),
    ],
  },

  // ── 9. WhatsApp automation 20 hours ───────────────────────────
  {
    slug: "whatsapp-automation-save-20-hours-a-week",
    cat: "WhatsApp Automation",
    date: "Jun 2026",
    datePublishedIso: "2026-06-11",
    read: "9 min",
    title: "How Chennai businesses save 20+ hours every week using WhatsApp automation",
    excerpt: "One clinic, one D2C brand, one real estate broker — three real teardowns of how WhatsApp automation replaced the manual chat, booking and follow-up loop.",
    keywords: ["whatsapp automation", "whatsapp business api", "chennai automation"],
    body: [
      P("Every SMB in India spends 20+ hours a week manually replying to WhatsApp: 'What are your timings?', 'Send me the price list', 'Is this in stock?', 'Where is my order?'. This work is repetitive, high-volume, and completely automatable using the official WhatsApp Business Cloud API — not the free consumer app."),
      H("WhatsApp Business App vs Cloud API"),
      { table: { head: ["Feature", "Business App", "Business Cloud API"], rows: [
        ["Cost", "Free", "Pay-per-conversation (₹0.30–₹0.90)"],
        ["Devices", "1 phone + 4 linked", "Unlimited (server-side)"],
        ["Automation depth", "Auto-reply + labels only", "Full bots, flows, integrations"],
        ["CRM integration", "Manual only", "Native — HubSpot, Zoho, custom"],
        ["Broadcast reach", "256 contacts per list", "Unlimited (template-approved)"],
        ["Best for", "Solo founders, < 50 chats/day", "Any team with 100+ chats/day"],
      ]}},
      H("Case 1: Dental clinic (Adyar)"),
      P("Before: One receptionist handling ~180 WhatsApp messages/day — appointment requests, timing questions, insurance queries. She lost an average of 4 hours daily to WhatsApp, missing walk-ins."),
      P("After: A bot handles first-contact (timings, doctor availability, insurance list, price ranges) and offers three actions — book now, request callback, chat with human. Bookings that hit the calendar auto-confirm; reminders send 24h and 2h before. Post-appointment: an automatic review request routes to Google or, if the rating is 3 or below, to a private feedback form."),
      P("Result: 78% of enquiries resolved without human touch. Receptionist recovered 18 hours/week. Google reviews went from 47 to 214 in 6 months."),
      H("Case 2: D2C jewelry brand"),
      P("Before: Customers messaged product photos asking 'is this available?', 'what is the price?', 'when will you deliver?'. Founder + 2 staff spent evenings replying manually. Cart recovery was zero."),
      P("After: Product catalog integrated into WhatsApp. Customers browse SKUs inside the chat, hit 'buy', complete payment via Razorpay UPI link — all inside WhatsApp. Cart abandonment triggers a 2-hour follow-up template with a 5% code. Order status pushes automatically (packed / shipped / out for delivery / delivered)."),
      P("Result: 34% recovered cart rate. Founder's evenings back."),
      H("Case 3: Real estate broker"),
      P("Before: Every property listing generated 20–40 'send me details' messages. Broker manually sent PDFs and photos. Most leads died in follow-up."),
      P("After: Lead qualification bot asks 3 questions (budget, area, timeline). Qualified leads (matching current inventory) get automatic property matches. Unqualified leads get nurtured with weekly market updates. Broker only touches high-intent conversations."),
      { callout: { title: "What we ship on a WhatsApp automation project", body: "Meta Business verification, WABA setup, bot design + flow, CRM/site integration, template message library (10+), staff training, monthly optimization. Typical scope: 3–5 weeks, ₹75k–₹2.5L one-time + hosting.", ctaLabel: "See WhatsApp Automation", ctaHref: "/whatsapp-automation-chennai" } },
      H("What to automate first"),
      L([
        "First-reply auto-response (never leave a customer waiting > 2 minutes).",
        "FAQ bot (timings, pricing, location, contact).",
        "Lead qualification (3–4 questions before human handoff).",
        "Order/appointment status updates.",
        "Post-service review requests.",
        "Cart / enquiry abandonment recovery.",
      ], true),
      H("Frequently asked questions"),
      { faq: [
        { q: "Is WhatsApp automation legal in India?", a: "Yes, via the official WhatsApp Business Cloud API from Meta. Automated messages using unofficial tools (bulk sender apps) violate WhatsApp's terms and will get your number permanently banned." },
        { q: "How much does WhatsApp automation cost per month?", a: "Setup: ₹75,000–₹2.5L one-time depending on complexity. Ongoing: ~₹0.30–₹0.90 per user-initiated conversation, plus hosting (₹3–5k/month). A clinic doing 5,000 conversations/month runs ~₹2,500 in Meta fees." },
        { q: "Will bot replies feel robotic to customers?", a: "Well-designed flows feel like natural quick-reply menus, not chatbots. The key is giving users a 'chat with human' escape hatch at every step — customers who feel trapped in a bot bounce hard." },
      ]},
      P(<>Read <a href="/blog/3-friction-points-killing-chennai-d2c-checkout" className="text-accent underline">our D2C checkout deep dive</a> or <a href="/whatsapp-automation-chennai" className="text-accent underline">see the automation service</a>.</>),
    ],
  },

  // ── 10. Custom vs WordPress ───────────────────────────────────
  {
    slug: "custom-website-vs-wordpress-which-is-right",
    cat: "Web Design",
    date: "Jun 2026",
    datePublishedIso: "2026-06-08",
    read: "10 min",
    title: "Custom website vs WordPress: which is actually right for your Chennai business?",
    excerpt: "The 'always use WordPress' and 'always go custom' camps are both wrong. Here is the honest decision framework we use with founders, based on 12 years of building both.",
    keywords: ["wordpress vs custom", "custom website chennai", "cms comparison"],
    body: [
      P("Every quarter we get the same founder question: 'Should I build my site in WordPress or go custom?'. The right answer depends on 6 variables — not on whichever agency is pitching you. Here is the framework."),
      H("What each option is actually good at"),
      { table: { head: ["Dimension", "WordPress", "Custom (React/Next/Vite)"], rows: [
        ["Content editing by non-devs", "Excellent (Gutenberg, WPBakery)", "Requires a CMS layer (Sanity, Strapi)"],
        ["Time to first launch", "2–4 weeks", "4–10 weeks"],
        ["Cost (up-front)", "₹40k–₹1.5L", "₹1.5L–₹6L"],
        ["Cost (ongoing security/updates)", "₹5–15k/mo maintenance", "Near-zero if hosted on Vercel/Netlify"],
        ["Performance ceiling", "Good with work", "Excellent by default"],
        ["Custom interactions / SaaS features", "Painful (plugin gymnastics)", "Native"],
        ["Ecommerce (< 500 SKUs)", "WooCommerce excellent", "Custom or Shopify better"],
        ["Long-term flexibility", "Locked to WP ecosystem", "Full control"],
      ]}},
      H("Choose WordPress when"),
      L([
        "You will publish content weekly and non-technical staff must edit it.",
        "Your site is primarily content — blog, landing pages, brochure.",
        "You are running WooCommerce with < 500 SKUs and standard checkout.",
        "Budget is tight (< ₹1.5L) and speed to launch matters.",
        "You are comfortable paying ongoing maintenance to keep it secure.",
      ]),
      H("Choose custom when"),
      L([
        "The site has app-like features (dashboards, calculators, real-time data).",
        "Performance is a competitive edge (ecommerce over 500 SKUs, media-heavy).",
        "You need deep integrations (custom CRM, ERP, WhatsApp API, payment logic).",
        "Design fidelity matters — you want animations and interactions plugins cannot deliver.",
        "You are building something users will return to daily (SaaS, marketplace).",
      ]),
      H("The hybrid we usually recommend"),
      P("For most SMBs above ₹2L budget with regular content needs, we ship a headless setup: a custom React frontend (fast, flexible, on Vercel) with a headless CMS (Sanity or Payload) for content editing. Marketing team gets WordPress-style editing. Users get custom-app performance. Best of both — but only viable above a certain budget."),
      { callout: { title: "The honest trade-off", body: "WordPress is cheaper to start and more expensive to maintain. Custom is more expensive to start and cheaper to maintain. The break-even is around month 22.", ctaLabel: "Discuss Your Project", ctaHref: "/services/web-design-chennai" } },
      H("Mistakes we see either way"),
      L([
        "Building a custom site because 'React is trendy' when a Genesis-child theme would have shipped in 3 weeks.",
        "Building on WordPress because 'it's cheaper' then bolting on 40 plugins that make it slower + more expensive than a custom build.",
        "Choosing a page builder (Elementor, Divi) for a site that needs to scale — page builders create bloat that is very hard to unwind later.",
        "Going custom with an agency that cannot show you a self-serve CMS — content updates via tickets will kill your velocity.",
      ]),
      H("Frequently asked questions"),
      { faq: [
        { q: "Is WordPress secure enough for business in 2026?", a: "Yes, with proper hosting (WP Engine, Kinsta, Rocket.net), managed updates, a security plugin (Wordfence), and disciplined plugin hygiene. Most WP hacks come from outdated plugins, not WordPress itself." },
        { q: "Which is better for SEO — WordPress or custom?", a: "Neither is better by default. WordPress with Yoast/RankMath gives you SEO tooling out of the box; a custom site can match it with 2 hours of implementation. What matters is the actual SEO work — content, speed, schema, links — not the platform." },
        { q: "Can I migrate from WordPress to custom later?", a: "Yes. We do this migration regularly for clients who outgrew WordPress. It typically takes 6–10 weeks and needs a full redirect map to preserve SEO. Cheaper to make the right choice up front." },
      ]},
      P(<>Not sure which fits your business? <a href="/contact" className="text-accent underline">Send us your requirements</a> — we'll recommend the honest option, even if it's not what we'd build.</>),
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Existing 4 posts, preserved
  // ─────────────────────────────────────────────────────────────
  {
    slug: "why-high-google-impressions-fail-to-generate-enquiries",
    cat: "SEO",
    date: "Jul 2026",
    datePublishedIso: "2026-07-02",
    read: "8 min",
    title: "High Google Search Console impressions but zero enquiries? Here is the exact fix.",
    excerpt: "If your website ranks well on Google but your inbox remains completely quiet, you don't have a traffic problem — you have a conversion layout problem.",
    keywords: ["gsc impressions", "conversion rate", "website conversion"],
    body: [
      P("You open your Google Search Console dashboard from your studio in Chennai and see the impressions graph tracking steadily upward. Thousands of daily search matches, healthy metrics, but complete silence on your conversion channels. This mismatch means your platform answers basic informational queries perfectly while offering no clear commercial next step."),
      H("Informational intent vs commercial action"),
      P("Most regional platforms make the strategic error of structural info-dumping. If a user lands to grab quick tips and hits a lengthy 10-field form asking for deep tracking variables just to request an introductory price document, they will bounce. You solved their text question, but failed to catch their transaction momentum."),
      H("The immediate conversion fix"),
      P("To transform passive view counts into revenue, offer immediate interactive micro-commitments. Swap friction blocks for quick calculators and instant WhatsApp hooks that capture local users before they bounce to a competitor."),
      { type: "calculator" },
      H("Frequently asked questions"),
      { faq: [
        { q: "Why do high impressions not translate to clicks?", a: "Usually a title/description mismatch — you rank for the query but your snippet does not compel a click. Rewrite titles to include the searcher's exact intent and a benefit." },
        { q: "How do I turn traffic into leads?", a: "Add multi-modal contact options (WhatsApp, call, form), reduce form fields to 2-3, and add above-the-fold trust signals — reviews, logos, case numbers." },
      ]},
    ],
  },
  {
    slug: "chennai-jewelry-showroom-digital-trust-architecture",
    cat: "Ecommerce",
    date: "Jun 2026",
    datePublishedIso: "2026-06-29",
    read: "9 min",
    title: "Why your Chennai jewelry showroom needs more than a 'pretty' website to sell online",
    excerpt: "Beautiful photos aren't enough. Luxury buyers looking for wedding collections or solid gold investment pieces demand institutional trust models and direct showroom integrations.",
    keywords: ["jewelry ecommerce", "luxury web design chennai"],
    body: [
      P("Walk into any premier flagship studio across Cathedral Road, T Nagar, or Khader Nawaz Khan Road, and the client journey is flawless. Personalized curation, elegant staging, and true design mastery. Yet, when these legacy brands transition to an ecommerce platform, they deploy standard store catalogs that look exactly like low-end retail outlets."),
      H("The high-value transaction barrier"),
      P("A local consumer does not pick out an expensive diamond choker or solid gold investment items online the same way they purchase fast fashion. High-ticket conversions require the total elimination of structural doubt. If your site hides hallmarking seals, or masks physical showroom presence, they will walk."),
      H("Bridging the virtual-showroom gap"),
      P("To win affluent buyers, replace basic galleries with immediate video-consultation triggers, transparent weight parameters, and localized booking systems that lock in in-person viewings smoothly."),
      { type: "checklist" },
      H("Frequently asked questions"),
      { faq: [
        { q: "Do luxury customers actually buy jewelry online?", a: "For pieces under ₹1.5L, yes — increasingly. Above that price, online drives the enquiry, but final purchase almost always happens in-showroom. Your site must bridge the two." },
        { q: "What trust signals matter most for jewelry ecommerce?", a: "BIS hallmarking certification, live gold rates, showroom video tours, verified Google reviews, and one-click WhatsApp with a real consultant — not a bot." },
      ]},
    ],
  },
  {
    slug: "how-we-stopped-chennai-clinic-wasting-google-ads",
    cat: "Case Study",
    date: "Jun 2026",
    datePublishedIso: "2026-06-24",
    read: "7 min",
    title: "How we stopped a Chennai clinic from wasting ₹40,000/month on dead-end Google ads",
    excerpt: "Broad match keywords burned budget on clicks that never became bookings. Shifting to hyper-local intent + custom landers cut CPL by half.",
    keywords: ["google ads chennai", "clinic marketing", "local lead generation"],
    body: [
      P("We recently optimized a multi-branch clinical space in Chennai burning substantial capital monthly on broad terms like 'best pediatrician in Chennai'. The metrics showed high clicks, massive bounces, callers located too far to commute, and zero actual appointment bookings."),
      H("The keyword location leak"),
      P("When families seek professional care, they search within clear geographical limits. Moving search targeting from broad city terms to hyper-localized phrase pairings like 'paediatrician near Adyar' or 'clinic in Tambaram' flags immediate proximity to users who are ready to visit today."),
      H("Landing destinations vs default homepages"),
      P("Sending direct ad traffic to a multi-page homepage forces a stressed user to look through deep navigation tabs just to find an address or phone number. Dropping traffic onto custom, light landers built with direct LocalBusiness schemas stabilizes conversion values immediately."),
      { type: "calculator" },
      H("Frequently asked questions"),
      { faq: [
        { q: "What CPL should a Chennai clinic target?", a: "Depending on speciality: ₹150–₹350 for GP/dental, ₹400–₹800 for niche speciality (fertility, dermatology). Anything above ₹1,000 usually signals broad-match keyword waste." },
        { q: "How many landing pages should I build?", a: "One per (speciality × primary area) combination. A clinic serving 4 specialities across 3 areas needs 12 dedicated landers — not one homepage." },
      ]},
    ],
  },
  {
    slug: "3-friction-points-killing-chennai-d2c-checkout",
    cat: "Ecommerce",
    date: "Jun 2026",
    datePublishedIso: "2026-06-15",
    read: "8 min",
    title: "3 friction points killing 70% of checkout conversions for Chennai D2C brands",
    excerpt: "Slow mobile load cycles on patchy data, hidden shipping surcharges at the final screen, and tedious registration walls drive massive cart abandonment.",
    keywords: ["ecommerce checkout", "d2c india", "cart abandonment"],
    body: [
      P("The vast majority of emerging direct-to-consumer online stores across India drop buyers at the final payment gateway. Clean branding, stable social traffic, then a cliff at the transaction phase."),
      H("1. Device latency on moving data profiles"),
      P("Checkout scripts test cleanly on fibre in Guindy, but act differently on spotty mobile networks near Pallavaram. Uncompressed modules and script bloat delay the viewport paint. Every second past a 2-second load baseline cuts order volumes dramatically."),
      H("2. Final-stage pricing surprises"),
      P("Masking processing surcharges or delivery variations until the final checkout line triggers immediate friction. Premium setups highlight logistical realities early to build transaction confidence."),
      H("3. Rigid mandatory profile gates"),
      P("Demanding a visitor create a username, verify an authorization link, and fill a complex form before checking out stalls purchase velocity. Guest modes or single-tap WhatsApp order buttons connect buyers instantly to your distribution hub."),
      { type: "speed-audit" },
      H("Frequently asked questions"),
      { faq: [
        { q: "What's the ideal number of checkout steps?", a: "Two, maximum three. Contact + address collapsed into one screen, payment on the next. Every extra step is a 10–15% drop-off." },
        { q: "Should I offer COD in Chennai?", a: "Yes, for now. COD still drives 25–40% of D2C orders in Tier 1 India. RTO fees hurt margins, but COD conversions offset it — until UPI adoption catches up further." },
      ]},
    ],
  },
];

// ── Helpers ──
export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
export const getRelatedPosts = (current: Post, limit = 3) =>
  posts
    .filter((p) => p.slug !== current.slug && p.cat === current.cat)
    .slice(0, limit)
    .concat(
      posts.filter((p) => p.slug !== current.slug && p.cat !== current.cat).slice(0, limit),
    )
    .slice(0, limit);

export const allCategories = (): Category[] => {
  const seen = new Set<Category>();
  posts.forEach((p) => seen.add(p.cat));
  return Array.from(seen);
};

// Estimate wordcount from a post's body — used for Article schema
export const wordCount = (p: Post) => {
  const stringify = (v: unknown): string => {
    if (v == null) return "";
    if (typeof v === "string") return v;
    if (Array.isArray(v)) return v.map(stringify).join(" ");
    if (typeof v === "object") return Object.values(v as Record<string, unknown>).map(stringify).join(" ");
    return String(v);
  };
  return stringify(p.body).split(/\s+/).filter(Boolean).length;
};
