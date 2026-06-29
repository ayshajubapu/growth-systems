import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";
import { Download, ExternalLink, Filter, CheckCircle, Circle, Loader } from "lucide-react";

type Status = "todo" | "in-progress" | "done";

type Target = {
  name: string;
  url: string;
  category: string;
  da: string;
  notes: string;
};

const targets: Target[] = [
  { name: "Google Business Profile", url: "https://business.google.com/", category: "Local", da: "100", notes: "Critical for Map Pack — claim Chrompet address" },
  { name: "Justdial", url: "https://www.justdial.com/", category: "Directory", da: "70+", notes: "Free business listing — high local trust" },
  { name: "Sulekha", url: "https://www.sulekha.com/", category: "Directory", da: "65+", notes: "Free listing — service categories for Chennai" },
  { name: "IndiaMART", url: "https://www.indiamart.com/", category: "Directory", da: "72+", notes: "List SmartPixel as a service provider" },
  { name: "Clutch.co", url: "https://clutch.co/", category: "Reviews", da: "75+", notes: "Agency profile + collect 2-3 client reviews" },
  { name: "DesignRush", url: "https://www.designrush.com/", category: "Reviews", da: "60+", notes: "Submit agency profile" },
  { name: "Google Maps", url: "https://www.google.com/maps", category: "Local", da: "100", notes: "Add Chrompet address and link to website" },
  { name: "Bing Places", url: "https://www.bingplaces.com/", category: "Local", da: "60+", notes: "Mirror your GBP listing on Bing" },
  { name: "GoodFirms", url: "https://www.goodfirms.co/", category: "Reviews", da: "65+", notes: "Free agency profile + reviews" },
  { name: "Yelp India", url: "https://www.yelp.in/", category: "Directory", da: "85+", notes: "Local business listing" },
  { name: "TradeIndia", url: "https://www.tradeindia.com/", category: "Directory", da: "65+", notes: "B2B service provider listing" },
  { name: "GitHub Profile", url: "https://github.com/", category: "Authority", da: "95+", notes: "Pin open-source repos linking to smartpixel.in" },
  { name: "Medium", url: "https://medium.com/", category: "Content", da: "94+", notes: "Republish blog posts with canonical to your blog" },
  { name: "Dev.to", url: "https://dev.to/", category: "Content", da: "90+", notes: "Republish technical posts with canonical link" },
  { name: "Quora (answer marketing)", url: "https://www.quora.com/", category: "Content", da: "92+", notes: "Answer 'best web design Chennai' style questions" },
  { name: "Reddit (r/chennai, r/webdev)", url: "https://www.reddit.com/", category: "Community", da: "92+", notes: "Genuine participation, profile link only" },
  { name: "LinkedIn Company Page", url: "https://www.linkedin.com/company/", category: "Authority", da: "98+", notes: "Optimized page + weekly posts linking back" },
  { name: "Behance Project", url: "https://www.behance.net/", category: "Portfolio", da: "92+", notes: "Publish each case study with link to /portfolio" },
  { name: "Dribbble Shot", url: "https://dribbble.com/", category: "Portfolio", da: "90+", notes: "Publish UI shots linking to live work" },
  { name: "Product Hunt", url: "https://www.producthunt.com/", category: "Authority", da: "90+", notes: "Launch a freebie/template — homepage backlink" },
];

const emailTemplate = `Subject: Quick question about {{Their Site}}

Hi {{Name}},

I'm Aravind from SmartPixel — a small web design and SEO studio based in Chrompet, Chennai. I came across {{Their Site}} while researching {{Their Niche}} in Chennai and genuinely liked {{Specific thing you liked}}.

I help local Chennai businesses build fast, SEO-ready websites that turn visitors into enquiries. Recently we rebuilt sites for travel, jewellery and education brands and roughly 3x'd their booked calls in the first month.

I noticed two quick things on {{Their Site}} that might be costing you leads:
1. {{Issue 1 — e.g. slow mobile load}}
2. {{Issue 2 — e.g. no clear CTA above the fold}}

Happy to send a free 5-minute Loom audit with no strings attached. Want me to send it over?

Either way, all the best with {{Their Site}}.

— Aravind
SmartPixel — Web design & SEO, Chennai
https://www.smartpixel.in
+91-9886069488
`;

const STORAGE_KEY = "smartpixel.backlinks.tracker";

const Backlinks = () => {
  // Safe state initialization to prevent layout shifts
  const [tracker, setTracker] = useState<Record<string, Status>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Active viewing tab state control
  const [activeFilter, setActiveFilter] = useState<"all" | Status>("all");

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tracker));
    } catch (err) {
      console.error("Local storage sync failed", err);
    }
  }, [tracker]);

  // Combined tracking metrics
  const counts = useMemo(() => {
    const c = { todo: 0, "in-progress": 0, done: 0 } as Record<Status, number>;
    targets.forEach((t) => {
      c[(tracker[t.url] ?? "todo") as Status]++;
    });
    return c;
  }, [tracker]);

  // Filter target pipelines
  const filteredTargets = useMemo(() => {
    if (activeFilter === "all") return targets;
    return targets.filter((t) => (tracker[t.url] ?? "todo") === activeFilter);
  }, [activeFilter, tracker]);

  const setStatus = (url: string, s: Status) =>
    setTracker((p) => ({ ...p, [url]: s }));

  const downloadTemplate = () => {
    const blob = new Blob([emailTemplate], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "smartpixel-outreach-template.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Helmet>
        <title>Backlinks & Outreach Plan | SmartPixel SEO Workspace</title>
        <meta name="description" content="SmartPixel's backlink target list, downloadable cold-outreach email template, and a simple tracker to manage SEO link building." />
        <link rel="canonical" href="https://www.smartpixel.in/backlinks" />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <article className="px-5 sm:px-10 lg:px-20 py-16 max-w-[1200px] mx-auto">
        <span className="text-xs uppercase tracking-widest text-accent font-medium mb-3 block">
          — Internal SEO Workspace
        </span>
        <WeightedHeading text="Backlinks & Outreach Tracker" className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6" />
        
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mb-12">
          Building high-authority contextual targets pointing back to{" "}
          <Link to="/" className="text-accent underline hover:text-accent/80 transition-colors">smartpixel.in</Link>{" "}
          establishes algorithmic domain authority. Pair this list pipeline with internal anchor strategies on our{" "}
          <Link to="/seo-services-chennai" className="text-accent underline hover:text-accent/80 transition-colors">SEO Services in Chennai</Link>{" "}
          landing nodes to route link equity to transactional paths.
        </p>

        {/* Metric Overview Panels */}
        <section className="mb-12 grid grid-cols-3 gap-4 border border-border bg-surface/10 p-4 rounded-xl">
          {[
            { id: "todo", label: "To Do", color: "text-muted-foreground", icon: Circle },
            { id: "in-progress", label: "In Progress", color: "text-amber-400", icon: Loader },
            { id: "done", label: "Completed", color: "text-emerald-400", icon: CheckCircle },
          ].map(({ id, label, color, icon: Icon }) => (
            <div key={id} className="bg-background/40 border border-border/60 rounded-lg p-4 transition-all hover:bg-background/80">
              <div className="flex items-center gap-2 mb-1">
                <Icon size={14} className={color} />
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{label}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-semibold font-mono text-foreground">
                {counts[id as Status]}
              </div>
            </div>
          ))}
        </section>

        {/* Custom Outreach Text block template */}
        <section className="mb-16 border border-border bg-surface/10 rounded-xl p-5 sm:p-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div>
              <h2 className="font-display text-xl sm:text-2xl tracking-tight">Direct Link Outreach Script</h2>
              <p className="text-xs text-muted-foreground mt-0.5">High-conversion local positioning framework template</p>
            </div>
            <button 
              onClick={downloadTemplate} 
              className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface/80 border border-border rounded-lg text-xs font-medium transition-colors"
            >
              <Download size={13} /> Download Source Text
            </button>
          </div>
          <div className="relative">
            <pre className="whitespace-pre-wrap text-xs font-mono bg-background border border-border/80 rounded-lg p-4 leading-relaxed text-muted-foreground/90 max-h-[280px] overflow-y-auto">
              {emailTemplate}
            </pre>
          </div>
          <p className="text-[11px] text-muted-foreground/60 mt-3 italic">
            Make sure to tailor every structural parameter marker element placeholder context configuration before running outreach loops.
          </p>
        </section>

        {/* Filter Navigation Bar Tabs + Pipeline Core List Table */}
        <section className="mb-14 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/60">
            <div>
              <h2 className="font-display text-xl sm:text-2xl tracking-tight">Backlink Directories Directory</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Showing {filteredTargets.length} domains of interest</p>
            </div>

            {/* Filter Pipeline Options Controls Container */}
            <div className="flex items-center gap-1.5 bg-surface/30 border border-border/80 p-1 rounded-lg self-start sm:self-auto">
              <div className="px-2 text-muted-foreground/60">
                <Filter size={12} />
              </div>
              {(["all", "todo", "in-progress", "done"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium rounded-md transition-all ${
                    activeFilter === filter
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter === "all" ? "All" : filter.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive UI Spreadsheet Layout Data Window Component */}
          <div className="overflow-x-auto border border-border/80 rounded-xl bg-surface/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface/30 border-b border-border/80 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <th className="p-4 font-semibold">Target Domain Node</th>
                  <th className="p-4 font-semibold">Classification</th>
                  <th className="p-4 font-semibold text-center">DA Authority</th>
                  <th className="p-4 font-semibold hidden md:table-cell max-w-sm">Strategic Direct Notes</th>
                  <th className="p-4 font-semibold text-right">Workflow Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-xs">
                {filteredTargets.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-muted-foreground italic">
                      No matching backlink directories found in this bucket.
                    </td>
                  </tr>
                ) : (
                  filteredTargets.map((t) => {
                    const status = (tracker[t.url] ?? "todo") as Status;
                    return (
                      <tr key={t.url} className="hover:bg-surface/20 transition-colors group">
                        <td className="p-4 font-medium">
                          <a 
                            href={t.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors font-sans"
                          >
                            {t.name} 
                            <ExternalLink size={11} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </td>
                        <td className="p-4 text-muted-foreground">
                          <span className="px-2.5 py-0.5 rounded-full bg-surface text-[10px] font-medium border border-border/60">
                            {t.category}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono font-medium text-accent">
                          {t.da}
                        </td>
                        <td className="p-4 text-muted-foreground hidden md:table-cell max-w-xs truncate" title={t.notes}>
                          {t.notes}
                        </td>
                        <td className="p-4 text-right">
                          <select
                            value={status}
                            onChange={(e) => setStatus(t.url, e.target.value as Status)}
                            className={`bg-background border rounded-lg px-2.5 py-1.5 text-xs font-medium focus:outline-none focus:border-accent/80 transition-colors ${
                              status === "done" 
                                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" 
                                : status === "in-progress" 
                                ? "border-amber-500/30 text-amber-400 bg-amber-500/5" 
                                : "border-border text-muted-foreground"
                            }`}
                            aria-label={`Update pipeline status for ${t.name}`}
                          >
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Completed</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted-foreground/60 text-right italic">
            Tracker state configuration parameters are preserved within your secure local environment context workspace.
          </p>
        </section>

        {/* Distribution Target Guide Nodes Strategy Maps */}
        <section className="mb-16 border-t border-border/60 pt-10">
          <h3 className="font-display text-lg sm:text-xl tracking-tight mb-4">Target Link Distribution Strategy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {[
              { type: "General Link Building Profiles", path: "/", target: "Primary Homepage Entry" },
              { type: "Local Business Indices (Justdial/Sulekha)", path: "/contact", target: "Contact Form Node" },
              { type: "Design Directories & Reviews (Clutch/Behance)", path: "/portfolio", target: "Case Studies / Portfolio Showcase" },
              { type: "SEO-Focused Technical Guest Logs", path: "/seo-services-chennai", target: "SEO Marketing Landing Node" },
              { type: "E-Commerce Contextual Content Releases", path: "/ecommerce-website-chennai", target: "E-Commerce Specialized Path" },
            ].map(({ type, path, target }) => (
              <div key={type} className="border border-border/80 p-4 rounded-xl bg-surface/10 flex flex-col justify-between gap-3">
                <div>
                  <h4 className="font-medium text-foreground/90 mb-1">{type}</h4>
                  <p className="text-[11px] text-muted-foreground">Redirect equity target node endpoint:</p>
                </div>
                <Link to={path} className="font-mono text-[11px] text-accent hover:underline block break-all">
                  {target} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border pt-10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-muted-foreground max-w-sm">
            Need help executing this outreach program or managing continuous search link profile operations?
          </p>
          <Link to="/contact" className="btn-gold">
            Launch Outreach Campaign →
          </Link>
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Backlinks;