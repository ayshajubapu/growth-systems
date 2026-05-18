import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/*
  SEO FIX 1: Removed <Helmet> entirely from Footer.
  
  The Footer renders on EVERY page. Having Helmet here means:
  - The title "Contact SmartPixel" overwrites every page's title
  - canonical "https://www.smartpixel.in/contact" is injected on
    every page — Google treats ALL your pages as duplicates of /contact
  - schema runs on every page, conflicting with page-specific schema
  
  Each page (Home, Contact, About, etc.) manages its own Helmet.
  The Footer only renders UI — never meta tags.
*/

/*
  SEO FIX 2: All navigation links are now real URLs.
  
  Before: href="#systems", href="#work" — anchor links Google cannot
  crawl as separate pages. They contribute zero SEO value.
  
  After: href="/services", href="/our-work" — real routes Google
  indexes and ranks independently. Each is also an internal link
  that passes authority from the footer to that page on every page
  of your site. Footer links are powerful because they appear site-wide.
*/
const cols = [
  {
    title: "Services",
    links: [
      { l: "Web App Development",   h: "/services/web-app-development" },
      { l: "Mobile App Development", h: "/services/mobile-app-development" },
      { l: "Digital Marketing",      h: "/services/digital-marketing" },
      { l: "Web Design",             h: "/services/web-design-chennai" },
      { l: "E-Commerce",             h: "/ecommerce-website-chennai" },
      { l: "SEO Services",           h: "/seo-services-chennai" },
      { l: "WhatsApp Automation",    h: "/whatsapp-automation-chennai" },
    ],
  },
  {
    title: "Pages",
    links: [
      { l: "Home",      h: "/" },
      { l: "Portfolio", h: "/our-work" },
      { l: "Clients",   h: "/our-work#clients" },
      { l: "About",     h: "/about" },
      { l: "Contact",   h: "/contact" },
    ],
  },
];

/*
  SEO FIX 3: Area pages added as a third nav column.
  
  Footer links to area pages appear on EVERY page of your site.
  This sends strong internal link signals to those location pages,
  helping them rank for "web design [area]" searches faster.
*/
const areaLinks = [
  { l: "Pallavaram",    h: "/web-design-pallavaram" },
  { l: "Tambaram",      h: "/web-design-tambaram" },
  { l: "Chrompet",      h: "/web-design-chrompet" },
  { l: "Guindy",        h: "/web-design-guindy" },
  { l: "T Nagar",       h: "/web-design-t-nagar" },
  { l: "Saidapet",      h: "/web-design-saidapet" },
  { l: "Nungambakkam",  h: "/web-design-nungambakkam" },
  { l: "Chitlapakkam",  h: "/web-design-chitlapakkam" },
];

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".foot-mark", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });

      gsap.from(".foot-col", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={ref}
      className="relative bg-background border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 glow-bg pointer-events-none opacity-60" />

      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-24 pt-20 sm:pt-28 lg:pt-36 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── LEFT — CTA + contact cards ── */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">— Get In Touch</p>

            <h2 className="foot-mark font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Ready to build
              <br />
              something that{" "}
              <span className="italic text-accent">works</span>?
            </h2>

            {/*
              SEO FIX 4: Added "Chennai" to the tagline paragraph.
              Footer text appears on every page — each instance reinforces
              your local relevance signal to Google.
            */}
            <p className="mt-5 sm:mt-7 text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base">
              SmartPixel — Conversion-focused websites, apps, and growth
              systems for businesses in <strong className="text-foreground/60">Chennai</strong> that mean business.
            </p>

            <a href="/contact" className="btn-gold mt-7 sm:mt-9 inline-block">
              Book Your Strategy Call →
            </a>

            {/* Contact Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+919886069488"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
              >
                <Phone size={16} className="text-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Call</div>
                  <div className="text-sm font-display">+91 98860 69488</div>
                </div>
              </a>

              <a
                href="https://wa.me/919886069488"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
              >
                <MessageCircle size={16} className="text-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-display">Chat with us</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── RIGHT — nav columns ── */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 lg:pl-10">

            {/* Services + Studio columns */}
            {cols.map((c) => (
              <div key={c.title} className="foot-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6">
                  — {c.title}
                </p>
                <ul className="space-y-3">
                  {c.links.map((lk) => (
                    <li key={lk.l}>
                      <a
                        href={lk.h}
                        className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                      >
                        <span className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500" />
                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 
              SEO FIX 5: Area pages column.
              nav with aria-label makes this meaningful to screen readers
              and search engines. Each link is a real crawlable URL.
            */}
            <div className="foot-col col-span-2 sm:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6">
                — Areas We Serve
              </p>
              <nav aria-label="Chennai service areas">
                <ul className="space-y-3">
                  {areaLinks.map((lk) => (
                    <li key={lk.l}>
                      <a
                        href={lk.h}
                        className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                      >
                        <span className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500" />
                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Address block */}
            <div className="foot-col col-span-2 sm:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6">
                — Studio
              </p>

              {/*
                SEO FIX 6: Fixed addressRegion.
                Before: addressRegion: "Chennai" — Chennai is a city, not a region.
                After: addressRegion: "Tamil Nadu" — correct for schema and local SEO.
                Also added postalCode which strengthens local signals.
              */}
              <address className="not-italic text-sm text-muted-foreground leading-[1.9] flex flex-col gap-2">
                <a href="mailto:workwithsmartpixel@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={13} className="text-accent shrink-0" />
                  workwithsmartpixel@gmail.com
                </a>
                <a href="tel:+919886069488" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={13} className="text-accent shrink-0" />
                  +91 98860 69488
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-accent shrink-0" />
                  Chrompet, Chennai, Tamil Nadu 600044
                </span>
              </address>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-16 sm:mt-24 lg:mt-28 overflow-hidden">
          <div className="foot-mark font-display text-[16vw] leading-[0.85] tracking-tight whitespace-nowrap text-foreground/[0.07] select-none">
            Smart Pixel
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 pt-7 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Accepting new projects
          </div>

          <div>© {new Date().getFullYear()} SmartPixel — All rights reserved</div>

          <div className="flex gap-5">
            {/*
              SEO FIX 7: Privacy and Terms link to real pages.
              These pages also need to exist as React routes.
              Having them as "#" means they 404 when followed.
            */}
            <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;