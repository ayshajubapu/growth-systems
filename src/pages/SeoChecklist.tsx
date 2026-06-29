import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Loader2, RefreshCw } from "lucide-react";
import WeightedHeading from "@/components/WeightedHeading";

const ORIGIN = "https://www.smartpixel.in";

const ROUTES: { path: string; label: string }[] = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms", label: "Terms" },
  { path: "/seo-services-chennai", label: "SEO Services Chennai" },
  { path: "/ecommerce-website-chennai", label: "Ecommerce Chennai" },
  { path: "/whatsapp-automation-chennai", label: "WhatsApp Automation" },
  { path: "/services/web-design-chennai", label: "Web Design Chennai" },
  { path: "/services/web-app-development", label: "Web App Development" },
  { path: "/services/mobile-app-development", label: "Mobile App Development" },
  { path: "/services/digital-marketing-chennai", label: "Digital Marketing" },
  { path: "/web-design-pallavaram", label: "Web Design Pallavaram" },
  { path: "/web-design-tambaram", label: "Web Design Tambaram" },
  { path: "/web-design-chrompet", label: "Web Design Chrompet" },
  { path: "/web-design-guindy", label: "Web Design Guindy" },
  { path: "/web-design-t-nagar", label: "Web Design T Nagar" },
  { path: "/web-design-saidapet", label: "Web Design Saidapet" },
  { path: "/web-design-nungambakkam", label: "Web Design Nungambakkam" },
  { path: "/web-design-chitlapakkam", label: "Web Design Chitlapakkam" },
  
  // FIXED: High-value transactional blog paths registered to static route matrix
  { path: "/blog/ecommerce-jewelry-storefront-chennai", label: "Blog: E-commerce Jewelry Storefront" },
  { path: "/blog/local-seo-architecture-t-nagar", label: "Blog: T Nagar Web Architecture" },
  { path: "/blog/spa-vs-ssr-chennai-startups", label: "Blog: SPA vs SSR Performance" },
  { path: "/blog/whatsapp-automation-react-applications", label: "Blog: Web WhatsApp Automation" },
];

type Status = "pending" | "ok" | "fail";
type RouteCheck = {
  path: string;
  inSitemap: Status;
  canonicalCorrect: Status;
  canonicalFound: string | null;
  notes: string;
};

type GlobalCheck = { label: string; status: Status; detail: string };

const Pill = ({ status, label }: { status: Status; label: string }) => {
  const map = {
    pending: { Icon: Loader2, cls: "text-muted-foreground", spin: true },
    ok:      { Icon: CheckCircle2, cls: "text-emerald-400", spin: false },
    fail:    { Icon: XCircle, cls: "text-red-400", spin: false },
  } as const;
  const { Icon, cls, spin } = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs ${cls}`}>
      <Icon size={14} className={spin ? "animate-spin" : ""} /> {label}
    </span>
  );
};

const SeoChecklist = () => {
  const [globals, setGlobals] = useState<GlobalCheck[]>([]);
  const [rows, setRows] = useState<RouteCheck[]>(
    ROUTES.map((r) => ({
      path: r.path,
      inSitemap: "pending",
      canonicalCorrect: "pending",
      canonicalFound: null,
      notes: "",
    }))
  );
  const [running, setRunning] = useState(false);
  const [sitemapUrls, setSitemapUrls] = useState<Set<string>>(new Set());

  const summary = useMemo(() => {
    let ok = 0, fail = 0, pending = 0;
    rows.forEach((r) => {
      [r.inSitemap, r.canonicalCorrect].forEach((s) => {
        if (s === "ok") ok++;
        else if (s === "fail") fail++;
        else pending++;
      });
    });
    globals.forEach((g) => {
      if (g.status === "ok") ok++;
      else if (g.status === "fail") fail++;
      else pending++;
    });
    return { ok, fail, pending };
  }, [rows, globals]);

  const runChecks = async () => {
    setRunning(true);
    setGlobals([
      { label: "robots.txt reachable", status: "pending", detail: "" },
      { label: "robots.txt references sitemap", status: "pending", detail: "" },
      { label: "sitemap.xml reachable", status: "pending", detail: "" },
      { label: "sitemap.xml is valid XML", status: "pending", detail: "" },
    ]);
    setRows(ROUTES.map((r) => ({
      path: r.path, inSitemap: "pending", canonicalCorrect: "pending",
      canonicalFound: null, notes: "",
    })));

    const next: GlobalCheck[] = [];

    // robots.txt
    let robotsTxt = "";
    try {
      const res = await fetch("/robots.txt", { cache: "no-store" });
      robotsTxt = await res.text();
      next.push({
        label: "robots.txt reachable",
        status: res.ok ? "ok" : "fail",
        detail: res.ok ? `HTTP ${res.status}` : `HTTP ${res.status}`,
      });
      const hasSitemap = /Sitemap:\s*\S+sitemap\.xml/i.test(robotsTxt);
      next.push({
        label: "robots.txt references sitemap",
        status: hasSitemap ? "ok" : "fail",
        detail: hasSitemap ? "Sitemap directive found" : "Missing 'Sitemap:' line",
      });
    } catch (e) {
      next.push({ label: "robots.txt reachable", status: "fail", detail: String(e) });
      next.push({ label: "robots.txt references sitemap", status: "fail", detail: "Skipped" });
    }

    // sitemap.xml
    const urls = new Set<string>();
    let sitemapText = "";
    try {
      const res = await fetch("/sitemap.xml", { cache: "no-store" });
      sitemapText = await res.text();
      next.push({
        label: "sitemap.xml reachable",
        status: res.ok ? "ok" : "fail",
        detail: `HTTP ${res.status}`,
      });
      let valid = false;
      try {
        const doc = new DOMParser().parseFromString(sitemapText, "application/xml");
        valid = !doc.querySelector("parsererror");
        doc.querySelectorAll("url > loc").forEach((el) => {
          const u = (el.textContent || "").trim().replace(/\/$/, "");
          if (u) urls.add(u);
        });
      } catch {/* noop */}
      next.push({
        label: "sitemap.xml is valid XML",
        status: valid ? "ok" : "fail",
        detail: valid ? `${urls.size} URLs parsed` : "XML parse error",
      });
    } catch (e) {
      next.push({ label: "sitemap.xml reachable", status: "fail", detail: String(e) });
      next.push({ label: "sitemap.xml is valid XML", status: "fail", detail: "Skipped" });
    }

    setGlobals(next);
    setSitemapUrls(urls);

    // FIXED: Enforce absolute rule configuration handling. 
    // Trims unwanted trailing slashes from internal structural paths before processing.
    const buildCanonical = (path: string) =>
      path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path.replace(/\/+$/, "")}`;

    const updated: RouteCheck[] = [];
    for (const r of ROUTES) {
      const expectedCanonical = buildCanonical(r.path);
      const sitemapKey = expectedCanonical.replace(/\/$/, "");
      const inSitemap: Status = urls.has(sitemapKey) || urls.has(`${sitemapKey}/`) ? "ok" : "fail";

      let canonicalFound: string | null = null;
      let canonicalCorrect: Status = "pending";
      let notes = "";
      try {
        const res = await fetch(r.path, { cache: "no-store" });
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const link = doc.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        canonicalFound = link?.href || null;

        if (!canonicalFound) {
          notes = "Not in static HTML — Helmet injects at runtime. Verify with view-source after SSR/prerender.";
          canonicalCorrect = "fail";
        } else {
          const norm = canonicalFound.replace(/\/$/, "");
          const exp = expectedCanonical.replace(/\/$/, "");
          canonicalCorrect = norm === exp ? "ok" : "fail";
          if (canonicalCorrect === "fail") notes = `Expected ${exp}`;
        }
      } catch (e) {
        notes = `Fetch failed: ${e}`;
        canonicalCorrect = "fail";
      }

      updated.push({ path: r.path, inSitemap, canonicalCorrect, canonicalFound, notes });
      setRows((prev) => prev.map((p) => (p.path === r.path ? updated[updated.length - 1] : p)));
    }

    setRunning(false);
  };

  useEffect(() => {
    runChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>SEO Checklist | SmartPixel — robots, sitemap & canonical audit</title>
        <meta name="description" content="On-page SEO checklist that automatically verifies robots.txt, sitemap.xml and canonical tags for every SmartPixel page." />
        <link rel="canonical" href="https://www.smartpixel.in/seo-checklist" />
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <article className="px-5 sm:px-10 lg:px-20 py-16 max-w-[1200px] mx-auto">
        <p className="eyebrow mb-5">— SEO Audit</p>
        <div className="flex items-start justify-between gap-6 flex-wrap mb-6">
          <WeightedHeading text="On-page SEO Checklist" className="text-4xl sm:text-5xl lg:text-6xl leading-tight" />
          <button
            onClick={runChecks}
            disabled={running}
            className="btn-ghost inline-flex items-center gap-2"
          >
            <RefreshCw size={14} className={running ? "animate-spin" : ""} />
            {running ? "Running…" : "Re-run checks"}
          </button>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
          Automated audit that verifies <code className="text-accent">robots.txt</code>,{" "}
          <code className="text-accent">sitemap.xml</code> and the{" "}
          <code className="text-accent">{`<link rel="canonical">`}</code> tag on every
          page. Use this before submitting to Google Search Console — pair with the{" "}
          <Link to="/backlinks" className="text-accent underline">backlinks plan</Link>.
        </p>

        {/* Summary */}
        <section className="mb-10 grid grid-cols-3 gap-px bg-foreground/5 border-y border-foreground/10">
          <div className="bg-background px-5 py-5">
            <div className="num-display text-3xl text-emerald-400">{summary.ok}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">Passed</div>
          </div>
          <div className="bg-background px-5 py-5">
            <div className="num-display text-3xl text-red-400">{summary.fail}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">Failed</div>
          </div>
          <div className="bg-background px-5 py-5">
            <div className="num-display text-3xl text-muted-foreground">{summary.pending}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">Pending</div>
          </div>
        </section>

        {/* Global checks */}
        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl mb-4">Global checks</h2>
          <div className="border border-foreground/10 rounded-md divide-y divide-foreground/5">
            {globals.map((g) => (
              <div key={g.label} className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm">{g.label}</p>
                  <p className="text-xs text-muted-foreground">{g.detail}</p>
                </div>
                <Pill status={g.status} label={g.status.toUpperCase()} />
              </div>
            ))}
            {globals.length === 0 && (
              <div className="p-4 text-sm text-muted-foreground">Initialising…</div>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            View raw files: <a href="/robots.txt" target="_blank" rel="noreferrer" className="text-accent underline">/robots.txt</a> ·{" "}
            <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="text-accent underline">/sitemap.xml</a>
            {sitemapUrls.size > 0 && <> · <span>{sitemapUrls.size} URLs in sitemap</span></>}
          </p>
        </section>

        {/* Per-page checks */}
        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl mb-4">Per-page checks</h2>
          <div className="overflow-x-auto border border-foreground/10 rounded-md">
            <table className="w-full text-sm">
              <thead className="bg-surface text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <tr>
                  <th className="text-left p-3">Page</th>
                  <th className="text-left p-3">In sitemap</th>
                  <th className="text-left p-3">Canonical</th>
                  <th className="text-left p-3 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/5">
                {rows.map((r) => (
                  <tr key={r.path} className="hover:bg-surface/40">
                    <td className="p-3">
                      <Link to={r.path} className="text-foreground hover:text-accent">{r.path}</Link>
                    </td>
                    <td className="p-3"><Pill status={r.inSitemap} label={r.inSitemap === "ok" ? "Listed" : r.inSitemap === "fail" ? "Missing" : "Checking"} /></td>
                    <td className="p-3">
                      <Pill status={r.canonicalCorrect} label={r.canonicalCorrect === "ok" ? "Correct" : r.canonicalCorrect === "fail" ? "Wrong/Missing" : "Checking"} />
                      {r.canonicalFound && (
                        <p className="text-[10px] text-muted-foreground mt-1 truncate max-w-[260px]">{r.canonicalFound}</p>
                      )}
                    </td>
                    <td className="p-3 text-xs text-muted-foreground hidden md:table-cell">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Note: this is a Vite SPA, so canonical tags are injected by react-helmet at runtime.
            For a 100% accurate canonical check Google sees, run this audit against the
            production URL after enabling SSR/prerender, or verify with "View Source" on each page.
          </p>
        </section>

        <div className="border-t border-border pt-10">
          <Link to="/contact" className="btn-gold inline-block">Need help fixing failures? →</Link>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default SeoChecklist;