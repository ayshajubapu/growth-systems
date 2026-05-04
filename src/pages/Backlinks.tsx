import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Download, ExternalLink } from "lucide-react";

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
https://smartpixel.in
+91-9886069488
`;

const STORAGE_KEY = "smartpixel.backlinks.tracker";

const Backlinks = () => {
  const [tracker, setTracker] = useState<Record<string, Status>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTracker(JSON.parse(raw));
    } catch {/* noop */}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tracker)); } catch {/* noop */}
  }, [tracker]);

  const counts = useMemo(() => {
    const c = { todo: 0, "in-progress": 0, done: 0 } as Record<Status, number>;
    targets.forEach((t) => { c[(tracker[t.url] ?? "todo") as Status]++; });
    return c;
  }, [tracker]);

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
    <main className="bg-background text-foreground">
      <Helmet>
        <title>Backlinks & Outreach Plan | SmartPixel SEO</title>
        <meta name="description" content="SmartPixel's backlink target list, downloadable cold-outreach email template, and a simple tracker to manage SEO link building." />
        <link rel="canonical" href="https://smartpixel.in/backlinks" />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <article className="px-5 sm:px-10 lg:px-20 py-16 max-w-[1200px] mx-auto">
        <p className="eyebrow mb-5">— SEO Playbook</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
          Backlinks & Outreach Plan
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
          High-authority links pointing to{" "}
          <Link to="/" className="text-accent underline">smartpixel.in</Link>{" "}
          tell Google to trust the site. Work through this list, track progress, and
          send the template below to relevant editors and directory owners. Pair this
          with the{" "}
          <Link to="/seo-services-chennai" className="text-accent underline">SEO services in Chennai</Link>{" "}
          internal pages so each new link drives keyword equity to the right destination.
        </p>

        {/* Tracker summary */}
        <section className="mb-12 grid grid-cols-3 gap-px bg-white/5 border-y border-white/10">
          {(["todo", "in-progress", "done"] as Status[]).map((s) => (
            <div key={s} className="bg-background px-5 py-5">
              <div className="num-display text-3xl text-accent">{counts[s]}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">{s.replace("-", " ")}</div>
            </div>
          ))}
        </section>

        {/* Outreach template */}
        <section className="mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h2 className="font-display text-2xl sm:text-3xl">Cold-outreach email template</h2>
            <button onClick={downloadTemplate} className="btn-ghost inline-flex items-center gap-2">
              <Download size={16} /> Download .txt
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-sm bg-surface border border-white/10 rounded-md p-5 leading-relaxed text-muted-foreground">
{emailTemplate}
          </pre>
          <p className="text-xs text-muted-foreground mt-3">
            Personalise every <code className="text-accent">{`{{placeholder}}`}</code> before sending.
          </p>
        </section>

        {/* Targets table + tracker */}
        <section className="mb-14">
          <h2 className="font-display text-2xl sm:text-3xl mb-4">Backlink targets</h2>
          <div className="overflow-x-auto border border-white/10 rounded-md">
            <table className="w-full text-sm">
              <thead className="bg-surface text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <tr>
                  <th className="text-left p-3">Target</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">DA</th>
                  <th className="text-left p-3 hidden md:table-cell">Notes</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {targets.map((t) => {
                  const status = (tracker[t.url] ?? "todo") as Status;
                  return (
                    <tr key={t.url} className="hover:bg-surface/40">
                      <td className="p-3">
                        <a href={t.url} target="_blank" rel="noopener noreferrer"
                           className="text-foreground hover:text-accent inline-flex items-center gap-1">
                          {t.name} <ExternalLink size={12} />
                        </a>
                      </td>
                      <td className="p-3 text-muted-foreground">{t.category}</td>
                      <td className="p-3 text-accent">{t.da}</td>
                      <td className="p-3 text-muted-foreground hidden md:table-cell">{t.notes}</td>
                      <td className="p-3">
                        <select
                          value={status}
                          onChange={(e) => setStatus(t.url, e.target.value as Status)}
                          className="bg-background border border-white/10 rounded px-2 py-1 text-xs"
                          aria-label={`Status for ${t.name}`}
                        >
                          <option value="todo">To do</option>
                          <option value="in-progress">In progress</option>
                          <option value="done">Done</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Status is saved locally in your browser — no account needed.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl mb-4">Where each link should point</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>General agency links → <Link to="/" className="text-accent underline">homepage</Link></li>
            <li>Directory listings (Justdial, Sulekha) → <Link to="/contact" className="text-accent underline">/contact</Link></li>
            <li>Reviews + agency profiles (Clutch, GoodFirms) → <Link to="/portfolio" className="text-accent underline">/portfolio</Link></li>
            <li>Niche guest posts about SEO → <Link to="/seo-services-chennai" className="text-accent underline">/seo-services-chennai</Link></li>
            <li>Niche guest posts about ecommerce → <Link to="/ecommerce-website-chennai" className="text-accent underline">/ecommerce-website-chennai</Link></li>
          </ul>
        </section>

        <div className="border-t border-border pt-10">
          <Link to="/contact" className="btn-gold inline-block">Get help executing this plan →</Link>
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Backlinks;
