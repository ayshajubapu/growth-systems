import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  TrendingDown, 
  Zap, 
  BookOpen, 
  Search, 
  Sliders, 
  Layers 
} from "lucide-react";

const ORIGIN = "https://www.smartpixel.in";

// ── TYPES & SCHEMAS DEFINITIONS ──
type BodyItem = 
  | { h: string; p?: never; type?: never }
  | { h?: never; p: ReactNode; type?: never }
  | { type: "calculator" | "checklist" | "speed-audit"; h?: never; p?: never };

type Post = {
  slug: string;
  cat: string;
  date: string;
  datePublishedIso: string;
  read: string;
  title: string;
  excerpt: string;
  body: BodyItem[];
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SmartPixel",
  "url": ORIGIN,
  "logo": `${ORIGIN}/logo.png`,
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91-9886069488",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "ta"]
  }]
};

// ── FIXED CENTRALIZED DATA ARRAYS ──
const posts: Post[] = [
  {
    slug: "why-high-google-impressions-fail-to-generate-enquiries",
    cat: "Search Analytics",
    date: "Jul 2026",
    datePublishedIso: "2026-07-02",
    read: "8 min",
    title: "High Google Search Console impressions but zero enquiries? Here is the exact fix.",
    excerpt: "If your website ranks well on Google but your inbox remains completely quiet, you don't have an traffic problem—you have an interactive layout block.",
    body: [
      { p: <>You open your Google Search Console dashboard from your studio in Chennai and see the impressions graph tracking steadily upward. Thousands of daily search matches, healthy metrics, but complete silence on your conversion channels. This layout mismatch means your platform answers basic informational search queries perfectly while offering no clear commercial direction.</> },
      { h: "Informational intent vs commercial action" },
      { p: <>Most regional platforms make the strategic error of structural info-dumping. If a user lands to grab quick tips and hits a lengthy 10-field submission page asking for deep tracking variables just to request a introductory price document, they will bounce. You solved their text question, but failed to catch their transaction momentum.</> },
      { h: "The immediate conversion fix" },
      { p: <>To transform passive view counts into structural revenue streams, you must offer immediate interactive micro-commitments. Swapping structural friction blocks for quick calculation metrics and instant WhatsApp hooks captures local users before they bounce to an alternate competitor.</> },
      { type: "calculator" }
    ]
  },
  {
    slug: "chennai-jewelry-showroom-digital-trust-architecture",
    cat: "Luxury Retail",
    date: "Jun 2026",
    datePublishedIso: "2026-06-29",
    read: "9 min",
    title: "Why your Chennai jewelry showroom needs more than a 'pretty' website to sell online.",
    excerpt: "Beautiful photos aren't enough. Luxury buyers looking for wedding collections or solid gold investment pieces demand institutional trust models and direct showroom integrations.",
    body: [
      { p: <>Walk into any premier flagship studio across Cathedral Road, T. Nagar, or Khader Nawaz Khan Road, and the client journey is flawless. Personalized curation, elegant staging, and true design mastery. Yet, when these legacy brands transition to an e-commerce platform, they deploy standard store catalogs that look exactly like low-end retail outlets.</> },
      { h: "The high-value transaction barrier" },
      { p: <>A local consumer does not pick out an expensive diamond choker or solid gold investment items online the same way they purchase fast fashion. High-ticket conversions require the total elimination of structural doubt. If your site structure abstracts your design pedigree, hides hallmarking seals, or masks physical presence, they will walk.</> },
      { h: "Bridging the virtual-showroom gap" },
      { p: <>To win over affluent buyers, replace basic galleries with immediate video-consultation triggers, transparent weight parameters, and localized booking systems that lock in in-person viewings smoothly.</> },
      { type: "checklist" }
    ]
  },
  {
    slug: "how-we-stopped-chennai-clinic-wasting-google-ads",
    cat: "Local Lead Gen",
    date: "Jun 2026",
    datePublishedIso: "2026-06-24",
    read: "7 min",
    title: "How we stopped a Chennai clinic from wasting ₹40,000/month on dead-end Google ads.",
    excerpt: "Most local agencies pump your budget into broad keyword strings that generate expensive empty clicks. Shifting ad variants to hyper-localized landing hubs cuts your lead acquisition costs by half.",
    body: [
      { p: <>We recently optimized a multi-branch clinical space in Chennai that was burning substantial capital monthly on broad terms like 'best pediatrician in Chennai'. The metrics showed high clicks, but massive bounces, callers located too far away to commute, and zero actual appointment bookings.</> },
      { h: "The keyword location leak" },
      { p: <>When families seek professional care, they search within clear geographical limits. Moving search targeting from broad city terms to hyper-localized phrase pairings like 'paediatrician near Adyar' or 'clinic in Tambaram' flags immediate proximity to users who are ready to visit today.</> },
      { h: "Landing destinations vs default homepages" },
      { p: <>Sending direct ad traffic to a multi-page homepage forces a stressed user to look through deep navigation tabs just to find an address or phone number. Dropping traffic onto custom, light landers built with direct LocalBusiness schemas stabilizes conversion values immediately.</> },
      { type: "calculator" }
    ]
  },
  {
    slug: "3-friction-points-killing-chennai-d2c-checkout",
    cat: "Ecommerce Optimization",
    date: "Jun 2026",
    datePublishedIso: "2026-06-15",
    read: "8 min",
    title: "3 Friction points killing 70% of checkout conversions for Chennai D2C brands.",
    excerpt: "Slow mobile load cycles on patchy mobile data, hidden shipping surcharges at the final screen, and tedious registration walls drive massive cart abandonment.",
    body: [
      { p: <>The vast majority of emerging direct-to-consumer online stores across India drop their buyers at the final payment gateway. They execute clean branding assets, draw stable traffic from social channels, and watch their analytics drop off right at the transaction phase.</> },
      { h: "1. Device latency on moving data profiles" },
      { p: <>While your checkout scripts may test cleanly inside a fiber-connected development workspace in Guindy, they act differently on a spotty mobile network near Pallavaram. Large uncompressed modules and script bloat delay the viewport paint. Every second past a two-second load baseline cuts order volumes dramatically.</> },
      { h: "2. Final-stage pricing surprises" },
      { p: <>Masking processing surcharges or local delivery variations until the absolute final checkout line triggers immediate buyer friction. Premium setups highlight overall logistical realities early to build solid transaction confidence.</> },
      { h: "3. Rigid mandatory profile gates" },
      { p: <>Demanding a visitor create a username, verify an authorization link, and fill a complex form before checking out stalls purchase velocity. Integrating swift guest modes or simple single-tap WhatsApp order buttons connects buyers instantly with your distribution hub.</> },
      { type: "speed-audit" }
    ]
  }
];

export default function BlogEngine() {
  const { slug } = useParams<{ slug?: string }>();
  
  // Interactive Conversion Calculator Local UI States
  const [adSpend, setAdSpend] = useState<number>(30000);
  const [convRate, setConvRate] = useState<number>(1);

  // Memoized Math Output array to completely avoid layout thrashing
  const leakMetrics = useMemo(() => {
    const estimatedClicks = Math.floor(adSpend / 15); // Evaluated at a ₹15 local market click baseline
    const currentConversions = Math.floor(estimatedClicks * (convRate / 100));
    const optimizedConversions = Math.floor(estimatedClicks * 0.035); // Aiming for a 3.5% optimized layout floor
    const missedLeads = Math.max(0, optimizedConversions - currentConversions);
    const leakedValue = missedLeads * 3000; // Calculated at an estimated ₹3,00,00 average customer lifespans
    return { missedLeads, leakedValue };
  }, [adSpend, convRate]);

  // ── RENDER CONDITION: SINGLE BLOG POST ENTRY ──
  if (slug) {
    const currentPost = posts.find((p) => p.slug === slug);
    if (!currentPost) {
      return (
        <div className="bg-background text-foreground min-h-screen flex items-center justify-center p-6 text-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">The resource you requested cannot be located.</p>
            <Link to="/blog" className="text-accent underline font-semibold">Return to directory</Link>
          </div>
        </div>
      );
    }

    const canonicalUrl = `${ORIGIN}/blog/${currentPost.slug}`;
    const dynamicArticleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": currentPost.title,
      "description": currentPost.excerpt,
      "datePublished": currentPost.datePublishedIso,
      "author": { "@type": "Organization", "name": "SmartPixel", "url": ORIGIN },
      "publisher": {
        "@type": "Organization",
        "name": "SmartPixel",
        "logo": { "@type": "ImageObject", "url": `${ORIGIN}/logo.png` }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
    };

    return (
      <main className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-white antialiased">
        <Helmet>
          <title>{`${currentPost.title} | SmartPixel Insights`}</title>
          <meta name="description" content={currentPost.excerpt} />
          <link rel="canonical" href={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(dynamicArticleSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        </Helmet>

        <Nav />
        <div className="pt-24" />

        <article className="px-5 sm:px-10 lg:px-24 py-16 max-w-[850px] mx-auto">
          {/* Post Header */}
          <div className="space-y-4 mb-10 border-b border-border pb-8">
            <div className="flex items-center gap-3 text-xs flex-wrap">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-bold uppercase tracking-wider">
                {currentPost.cat}
              </span>
              <span className="text-muted-foreground font-medium">{currentPost.date}</span>
              <span className="text-muted-foreground/30 select-none">•</span>
              <span className="text-muted-foreground font-medium">{currentPost.read} read</span>
            </div>
            
            <WeightedHeading 
              text={currentPost.title} 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground"
            />
            
            <p className="post-excerpt text-muted-foreground text-lg sm:text-xl font-light leading-relaxed border-l-2 border-accent pl-4 italic bg-surface/10 py-2 pr-2 rounded-r-md">
              {currentPost.excerpt}
            </p>
          </div>

          {/* Dynamic Content Element Stack */}
          <div className="prose prose-invert max-w-none text-muted-foreground/90 font-sans space-y-8 text-base sm:text-lg leading-relaxed">
            {currentPost.body.map((block, idx) => {
              if (block.h) {
                return (
                  <h2 key={idx} className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight pt-4 flex items-center gap-2">
                    <Layers size={20} className="text-accent shrink-0" /> {block.h}
                  </h2>
                );
              }
              
              if (block.p) {
                return <p key={idx}>{block.p}</p>;
              }

              // ── COMPONENT 1: HIGH TICKET UI CHECKLIST BLUEPRINT ──
              if (block.type === "checklist") {
                return (
                  <div key={idx} className="my-10 p-6 sm:p-8 rounded-xl border border-accent/20 bg-gradient-to-br from-surface/40 to-surface/10 space-y-6 shadow-md">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-accent font-bold flex items-center gap-1.5">
                        <Shield size={12} className="text-accent" /> Institutional Validation Matrix
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                        Deploy a High-Ticket Virtual Showroom Framework
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We build real-time pricing feeds, dynamic gold calculators, and private encrypted virtual preview channels customized to secure large luxury buyers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-foreground/80 font-medium">
                      <div className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border/40">
                        <CheckCircle size={14} className="text-accent shrink-0" /> Live Bureau of Indian Standards API integrations
                      </div>
                      <div className="flex items-center gap-2 bg-background/50 p-3 rounded-lg border border-border/40">
                        <CheckCircle size={14} className="text-accent shrink-0" /> Structured LocalBusiness Maps markup
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 active:scale-[0.98] transition-all text-center">
                        Request High-Ticket UX Checklist <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                );
              }

              // ── COMPONENT 2: AD CONVERSION LEAKAGE SLIDER CALCULATOR ──
              if (block.type === "calculator") {
                return (
                  <div key={idx} className="my-10 p-6 sm:p-8 rounded-xl border border-accent/20 bg-gradient-to-br from-surface/40 to-surface/10 space-y-6 shadow-md select-none">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-rose-400 font-bold flex items-center gap-1.5">
                        <TrendingDown size={12} className="text-rose-400" /> Pipeline Leak Diagnostic
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                        Calculate Your Missed Inbound Lead Losses
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Adjust your active parameters below to visualize how minor layout errors divert high-intent local traffic straight to your competitors.
                      </p>
                    </div>

                    <div className="space-y-4 bg-background/60 p-5 rounded-lg border border-border/60">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold tracking-wide text-foreground">
                          <label htmlFor="budget-slider">ESTIMATED TRAFFIC VALUE (MONTHLY SPEND)</label>
                          <span className="text-accent font-mono font-bold">₹{adSpend.toLocaleString("en-IN")}</span>
                        </div>
                        <input 
                          id="budget-slider"
                          type="range" 
                          min="10000" 
                          max="200000" 
                          step="5000" 
                          value={adSpend}
                          onChange={(e) => setAdSpend(Number(e.target.value))}
                          className="w-full accent-accent bg-border h-1.5 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-semibold tracking-wide text-foreground">
                          <label htmlFor="conversion-slider">CURRENT PERFORMANCE RATIO</label>
                          <span className="text-rose-400 font-mono font-bold">{convRate}%</span>
                        </div>
                        <input 
                          id="conversion-slider"
                          type="range" 
                          min="0.5" 
                          max="2.5" 
                          step="0.1" 
                          value={convRate}
                          onChange={(e) => setConvRate(Number(e.target.value))}
                          className="w-full accent-accent bg-border h-1.5 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-background/40 p-4 rounded-lg border border-border/40">
                        <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Missed Opportunities</p>
                        <p className="text-xl sm:text-2xl font-bold text-foreground font-display">{leakMetrics.missedLeads}</p>
                      </div>
                      <div className="bg-rose-500/5 p-4 rounded-lg border border-rose-500/20">
                        <p className="text-[10px] uppercase font-bold text-rose-400 tracking-wider mb-1">Leaked Monthly Value</p>
                        <p className="text-xl sm:text-2xl font-bold text-rose-400 font-display">₹{leakMetrics.leakedValue.toLocaleString("en-IN")}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 active:scale-[0.98] transition-all text-center w-full sm:w-auto">
                        Fix My Funnel Layout <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                );
              }

              // ── COMPONENT 3: CORE SPEED AUDIT MANUAL VIDEO PROPOSAL ──
              if (block.type === "speed-audit") {
                return (
                  <div key={idx} className="my-10 p-6 sm:p-8 rounded-xl border border-accent/20 bg-gradient-to-br from-surface/40 to-surface/10 space-y-6 shadow-md">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                        <Zap size={12} className="text-emerald-400" /> Infrastructure Audit
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                        Claim Your Manual 24-Hour Conversion Breakdown
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Stop running automatic scanner scripts that produce empty PDF reports. We will generate a complete, screen-recorded evaluation tracking every performance roadblock stalling your incoming lead pipeline.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold rounded-lg text-xs uppercase tracking-wider hover:bg-accent/90 active:scale-[0.98] transition-all text-center">
                        Get Your Free Video Review <ArrowRight size={13} />
                      </Link>
                      <a 
                        href="https://wa.me/919886069488?text=Hi%20SmartPixel,%20I%20have%20high%20impressions%20but%20no%20enquiries.%20Can%20you%20diagnose%20my%20website?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border bg-background/50 hover:bg-surface/80 font-semibold rounded-lg text-xs text-foreground active:scale-[0.98] transition-all text-center"
                      >
                        Ping Our WhatsApp Directly
                      </a>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Quick Back Navigation Trigger */}
          <div className="mt-16 pt-8 border-t border-border flex justify-start">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider hover:text-accent/80 transition-colors">
              ← Return to search insights index
            </Link>
          </div>
        </article>

        <FinalCTA />
        <Footer />
      </main>
    );
  }

  // ── RENDER CONDITION: DEFAULT BLOG DIRECTORY GRID OVERVIEW ──
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-white antialiased">
      <Helmet>
        <title>Engineering Content Frameworks | SmartPixel Insights</title>
        <meta name="description" content="No fluff, no placeholder text. Read through real, data-driven local SEO strategies and conversion design frameworks built explicitly to maximize inbound leads." />
        <link rel="canonical" href={`${ORIGIN}/blog`} />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <section className="px-5 sm:px-10 lg:px-24 py-16 max-w-[1200px] mx-auto space-y-12">
        {/* Hub Heading Area */}
        <div className="space-y-4 max-w-2xl border-b border-border/60 pb-8">
          <span className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-3 py-1 rounded-full">
            Technical Knowledge Base
          </span>
          <WeightedHeading 
            text="Real optimization frameworks. Zero hollow data metrics." 
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight"
          />
          <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
            Stop prioritizing vanity index views over actual pipeline revenue. Learn exactly how we wire high-performance interfaces to convert local search patterns into client entries.
          </p>
        </div>

        {/* Directory Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {posts.map((item) => (
            <article 
              key={item.slug} 
              className="group p-6 rounded-xl border border-border bg-gradient-to-b from-surface/20 to-surface/5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/[0.02] flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-accent uppercase tracking-wider">{item.cat}</span>
                  <span className="text-muted-foreground/60">{item.date}</span>
                </div>
                
                <Link to={`/blog/${item.slug}`} className="block group-hover:text-accent transition-colors">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
                    {item.title}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground text-sm line-clamp-3 font-normal leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-border/40 mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">
                <span>{item.read} viewport read</span>
                <Link 
                  to={`/blog/${item.slug}`} 
                  className="inline-flex items-center gap-1 bg-surface/80 px-3 py-1.5 rounded-md border border-border group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                >
                  Analyze Strategy <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}