import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";

type Post = {
  slug: string;
  cat: string;
  date: string;
  datePublishedIso?: string; // ISO for Article schema (optional)
  read: string;
  title: string;
  excerpt: string;
  /** Optional speakable selectors for voice/AEO. Default: ["h1", ".post-excerpt"]. */
  speakable?: string[];
  body: { h?: string; p?: ReactNode }[];
};

const posts: Post[] = [
  {
    slug: "websites-that-collect-customers-not-compliments",
    cat: "Web Development",
    date: "Apr 2026",
    read: "8 min",
    title: "Why most business websites collect compliments instead of customers — and the rebuild that fixes it.",
    excerpt: "The structural reasons sites fail to convert, and the conversion-led architecture we use instead.",
    body: [
      { p: "Most business websites in Chennai are designed to look good in a screenshot — not to make a stranger pick up the phone. That's why the compliments roll in but the enquiries don't." },
      { h: "The three structural failures" },
      { p: "1. The hero answers the wrong question. Visitors don't care what your studio 'crafts' — they care whether you solve their problem. Lead with the outcome." },
      { p: "2. CTAs that are scared of asking. 'Learn more' is a phrase used by sites that don't believe in themselves. 'Book a free 20-min strategy call' converts because it tells the visitor exactly what happens next." },
      { p: "3. No proof above the fold. If a visitor has to scroll three screens to find a number, a case study or a real client name — they won't." },
      { h: "The rebuild we use" },
      { p: "Outcome-led headline → one-line subhead that names the customer → primary CTA → proof bar (clients, results, rating) → 3 case studies → services → testimonials → FAQ → CTA. That order maps to how a buyer actually decides." },
      { p: "We've used this structure for 40+ clients. Average post-rebuild conversion lift: 3×. Average turnaround: 2 weeks." },
    ],
  },
  {
    slug: "apps-that-survive-the-first-week",
    cat: "Mobile Apps",
    date: "Mar 2026",
    read: "10 min",
    title: "Most apps get deleted in a week. Here's what the ones that survive get right.",
    excerpt: "A practical breakdown of speed, simplicity, and UX patterns that earn second opens.",
    body: [
      { p: "The single biggest determinant of an app's survival is the user's second open. If they don't come back within 72 hours, you've lost them." },
      { h: "Speed is a feature" },
      { p: "Cold start under 2 seconds. Every screen interactive within 400ms. If users wait, they delete." },
      { h: "Onboarding that asks for nothing" },
      { p: "Show value before you ask for an email. Show the email field before you ask for a phone number. Never ask for a notification permission on screen one." },
      { h: "One job, done loudly" },
      { p: "Apps that survive do one thing 10× better than the website. Identify that one job and put it on the home screen." },
    ],
  },
  {
    slug: "marketing-math-that-actually-grows",
    cat: "Marketing",
    date: "Mar 2026",
    read: "7 min",
    title: "Traffic is vanity. The marketing math that actually grows a service business.",
    excerpt: "Why CAC, LTV and pipeline beat impressions and clicks.",
    body: [
      { p: "If you're a service business in Chennai obsessing over Instagram impressions, you're optimising the wrong number." },
      { h: "The three numbers that matter" },
      { p: "CAC (Customer Acquisition Cost): total marketing spend ÷ paying customers in the same period." },
      { p: "LTV (Lifetime Value): average revenue per customer × average retention period." },
      { p: "Payback period: how many months a customer takes to repay their CAC. Under 6 months is healthy for most Chennai SMBs." },
      { h: "Why this changes your website brief" },
      { p: "Once you know your LTV, you know exactly how much a lead is worth — and you stop tolerating a website that converts at 0.5%." },
    ],
  },
  {
    slug: "ecommerce-funnel-leaks",
    cat: "Ecommerce",
    date: "Feb 2026",
    read: "6 min",
    title: "The leaks in your e-commerce funnel — and how to find them before competitors do.",
    excerpt: "From product page to checkout, patterns that kill revenue.",
    body: [
      { p: "Most Chennai ecommerce stores lose 70%+ of buyers between the product page and the thank-you screen. Here's where the leaks usually are." },
      { h: "Product page" },
      { p: "Single hero image, no zoom, no size guide, no delivery estimate. Each missing element costs 5–8% of conversions." },
      { h: "Cart" },
      { p: "Surprise shipping costs are the #1 reason for abandonment. Show shipping on the product page, not the cart." },
      { h: "Checkout" },
      { p: "Force-account-creation kills conversion. Always offer guest checkout. Reduce form fields to the absolute minimum." },
    ],
  },

  // ── SEO blog set with deep internal links to services + case studies ──
  {
    slug: "ecommerce-jewelry-storefront-chennai",
    cat: "Ecommerce",
    date: "Jun 2026",
    datePublishedIso: "2026-06-10",
    read: "9 min",
    title: "Building an e-commerce jewelry storefront in Chennai that actually sells.",
    excerpt: "What a Chennai jewellery brand needs from its first online catalogue — pricing logic, trust signals, and the search architecture that earns the click.",
    speakable: ["h1", ".post-excerpt"],
    body: [
      { p: <>Jewellery is the hardest category to sell online — high ticket, high trust, high return risk. We've shipped catalogues for legacy Chennai brands like <Link to="/portfolio" className="text-accent underline">Manohar Jewellers</Link> and know exactly where the conversions leak.</> },
      { h: "1. Lead with trust, not the catalogue" },
      { p: <>Hallmark, BIS, return window and the founder's face in the first viewport. Without these, the price tag does the talking — and on a ₹85,000 necklace, that's a one-way ticket out.</> },
      { h: "2. Price logic visible on every product" },
      { p: <>Gold rate × weight + making charge + GST. Show the math. Chennai buyers cross-check; a calculator beats a static price field every time.</> },
      { h: "3. Search built around occasions, not SKUs" },
      { p: <>"Bridal haram", "daily wear chain", "baby anklet" — that's how customers search. Build the IA around occasion + metal + budget, not category trees.</> },
      { h: "Where to go next" },
      { p: <>If you're scoping a build, start with our <Link to="/ecommerce-website-chennai" className="text-accent underline">e-commerce website services in Chennai</Link> page, then read about <Link to="/seo-services-chennai" className="text-accent underline">SEO services for Chennai stores</Link> to make sure the catalogue gets found.</> },
    ],
  },
  {
    slug: "local-seo-architecture-t-nagar",
    cat: "SEO",
    date: "Jun 2026",
    datePublishedIso: "2026-06-05",
    read: "7 min",
    title: "Local SEO architecture for a T Nagar business: the URL map Google actually rewards.",
    excerpt: "Why a flat 'services' page can never outrank a per-area page, and the architecture we use for clients targeting T Nagar, Pondy Bazaar and surrounding pin codes.",
    speakable: ["h1", ".post-excerpt"],
    body: [
      { p: <>If you serve a defined catchment in Chennai, a single homepage cannot rank for "service + locality" queries. You need a per-area URL with localised content, schema, and internal linking.</> },
      { h: "The 3-tier URL map" },
      { p: <>Tier 1 — service hub (e.g. <Link to="/services/web-design-chennai" className="text-accent underline">/services/web-design-chennai</Link>). Tier 2 — area page (<Link to="/web-design-t-nagar" className="text-accent underline">/web-design-t-nagar</Link>). Tier 3 — case study on the same locality. Each tier links down and up.</> },
      { h: "LocalBusiness schema per area, not per site" },
      { p: <>One global LocalBusiness JSON-LD is wasted on a multi-area brand. Inject a per-area block on each /web-design-&lt;area&gt; page with the right areaServed and landmark reference.</> },
      { h: "Anchor text that compounds" },
      { p: <>"Web design in T Nagar" beats "click here" every time. Use exact-match locally, partial-match elsewhere, and verify with the <Link to="/seo-checklist" className="text-accent underline">on-page SEO checklist</Link>.</> },
      { h: "Adjacent reading" },
      { p: <>See live examples on <Link to="/web-design-t-nagar" className="text-accent underline">T Nagar</Link>, <Link to="/web-design-nungambakkam" className="text-accent underline">Nungambakkam</Link> and <Link to="/web-design-saidapet" className="text-accent underline">Saidapet</Link>, or read our <Link to="/seo-services-chennai" className="text-accent underline">SEO services in Chennai</Link>.</> },
    ],
  },
  {
    slug: "spa-vs-ssr-chennai-startups",
    cat: "Web Development",
    date: "May 2026",
    datePublishedIso: "2026-05-22",
    read: "8 min",
    title: "SPA vs SSR for Chennai startups: which one actually moves the SEO needle?",
    excerpt: "A no-fluff comparison of single-page apps and server-rendered sites for early-stage Chennai startups — with the rule we follow before we write a line of code.",
    speakable: ["h1", ".post-excerpt"],
    body: [
      { p: <>Most early-stage Chennai startups pick React without thinking about how Google will see the site on day one. Here's the rule we apply on every project.</> },
      { h: "The rule" },
      { p: <>If &gt;30% of expected traffic is organic, you need server-rendered HTML on the public pages. Period. A pure client-side SPA gets indexed eventually, but "eventually" kills the runway.</> },
      { h: "Hybrid is the right default" },
      { p: <>Marketing routes (/, /about, /services, /blog) get static prerendering. App routes behind login stay SPA. That's how we ship our own <Link to="/services/web-app-development" className="text-accent underline">web app development</Link> projects.</> },
      { h: "What this looks like in production" },
      { p: <>Check the rendered HTML of a competitor — view-source on their homepage. If the headline isn't in the first 50 lines, they're losing search to anyone who does it right.</> },
      { h: "Related work" },
      { p: <>Browse our <Link to="/portfolio" className="text-accent underline">case studies</Link> for live examples — including <Link to="/portfolio" className="text-accent underline">VJ Real Estate</Link> and <Link to="/portfolio" className="text-accent underline">Ayishro</Link>, both prerendered.</> },
    ],
  },
  {
    slug: "whatsapp-automation-react-applications",
    cat: "WhatsApp Automation",
    date: "May 2026",
    datePublishedIso: "2026-05-15",
    read: "6 min",
    title: "WhatsApp automation inside a React app: the integration pattern that actually scales.",
    excerpt: "How we wire WhatsApp Business API into React applications for Chennai service businesses — without turning the codebase into a chatbot graveyard.",
    speakable: ["h1", ".post-excerpt"],
    body: [
      { p: <>Every Chennai service business eventually asks: "Can you put a WhatsApp bot on the site?" Yes — but the way it's wired decides whether it pays back or rots in six months.</> },
      { h: "Three layers, never one" },
      { p: <>Layer 1 — Cloud API token + webhook on the server. Layer 2 — a thin orchestration service holding the conversation graph. Layer 3 — React widgets that only deal in UI events. Never let the React component talk to Meta directly.</> },
      { h: "Templates are a product surface, not a config" },
      { p: <>Treat WhatsApp templates like landing pages: version them, A/B them, attribute conversions. We've seen template-level lift of 2–3× from a single copy rewrite.</> },
      { h: "Where this fits" },
      { p: <>Pair this with our <Link to="/whatsapp-automation-chennai" className="text-accent underline">WhatsApp automation services</Link> and our work on <Link to="/services/web-app-development" className="text-accent underline">React web apps</Link>. For a full marketing layer, see <Link to="/services/digital-marketing-chennai" className="text-accent underline">digital marketing in Chennai</Link>.</> },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  // Canonical: https + www host, no trailing slash, no fragment.
  const url = `https://www.smartpixel.in/blog/${post.slug.replace(/\/+$/, "")}`;
  const ORIGIN = "https://www.smartpixel.in";
  const speakableSelectors = post.speakable ?? ["h1", ".post-excerpt"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: "Aysha", url: `${ORIGIN}/about` },
    publisher: {
      "@type": "Organization",
      name: "SmartPixel",
      url: ORIGIN,
      logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.datePublishedIso ?? post.date,
    dateModified: post.datePublishedIso ?? post.date,
    inLanguage: "en-IN",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SmartPixel",
    url: ORIGIN,
    logo: `${ORIGIN}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/smartpixel-in",
      "https://www.instagram.com/smartpixel.in",
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+91-9886069488",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    }],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SmartPixel",
    url: ORIGIN,
    publisher: { "@type": "Organization", name: "SmartPixel" },
    potentialAction: {
      "@type": "SearchAction",
      target: `${ORIGIN}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: post.title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
    url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${ORIGIN}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>{post.title} | SmartPixel Insights</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Nav />
      <article className="pt-32 pb-20 px-5 sm:px-10 lg:px-20 max-w-[820px] mx-auto">
        <nav className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2 text-accent">/</span>
          <Link to="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-foreground/70">{post.cat}</span>
        </nav>

        <p className="eyebrow mb-5">— {post.cat}</p>
        <WeightedHeading text={post.title} className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6" />
        <p className="text-sm text-muted-foreground tracking-wide mb-10">
          {post.date} · {post.read} · By Aysha
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">{post.excerpt}</p>

        <div className="space-y-6">
          {post.body.map((b, i) =>
            b.h ? (
              <h2 key={i} className="font-display text-2xl sm:text-3xl mt-10 mb-2">{b.h}</h2>
            ) : (
              <p key={i} className="text-muted-foreground leading-relaxed">{b.p}</p>
            )
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground mb-5">Continue reading</p>
          <ul className="space-y-3">
            {posts.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="font-display text-lg hover:text-accent transition-colors">
                  → {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default BlogPost;
