// Postbuild prerender: for every route in scripts/seo-routes.mjs, write
// dist/<route>/index.html with unique <title>, <meta name=description>,
// <link rel=canonical>, and matching og:*/twitter:* baked into the static HTML.
//
// Why this exists: this app is a client-rendered SPA. react-helmet-async only
// mutates the DOM after JS hydration, so Googlebot's initial fetch and every
// non-JS crawler see the homepage's title/canonical on every URL. That was the
// real cause of GSC's "Duplicate without user-selected canonical" flags.
//
// Vercel/Lovable static hosting checks the filesystem BEFORE applying rewrites,
// so /services/index.html will be served for /services, and the SPA catch-all
// still handles anything not prerendered here.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { routes, SITE } from "./seo-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const TEMPLATE_PATH = join(DIST, "index.html");

if (!existsSync(TEMPLATE_PATH)) {
  console.error(`[prerender] dist/index.html not found — did vite build run?`);
  process.exit(1);
}

const template = readFileSync(TEMPLATE_PATH, "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function bakeHtml({ path, title, description, ogType = "website" }) {
  const canonical = `${SITE}${path === "/" ? "/" : path.replace(/\/+$/, "")}`;
  let html = template;

  // Replace <title>...</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${esc(description)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonical}" />`
  );

  // og:url / og:title / og:description / og:type
  html = html.replace(/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(title)}" />`);
  html = html.replace(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(description)}" />`);
  html = html.replace(/<meta\s+property="og:type"[^>]*>/i, `<meta property="og:type" content="${ogType}" />`);

  // twitter:*
  html = html.replace(/<meta\s+name="twitter:url"[^>]*>/i, `<meta name="twitter:url" content="${canonical}" />`);
  html = html.replace(/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${esc(title)}" />`);
  html = html.replace(/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${esc(description)}" />`);

  return html;
}

let count = 0;
const seen = new Set();
for (const route of routes) {
  if (seen.has(route.path)) continue;
  seen.add(route.path);

  const html = bakeHtml(route);
  const outDir = route.path === "/" ? DIST : join(DIST, route.path);
  const outFile = join(outDir, "index.html");

  // Skip overwriting the root — vite already emitted it. We only replace tags
  // there too, so the homepage stays consistent with the rest.
  if (route.path === "/") {
    writeFileSync(TEMPLATE_PATH, html, "utf8");
  } else {
    mkdirSync(outDir, { recursive: true });
    writeFileSync(outFile, html, "utf8");
  }
  count++;
}

console.log(`[prerender] wrote ${count} static HTML files with unique per-route SEO tags`);
