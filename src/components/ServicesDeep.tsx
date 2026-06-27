import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgWeb from "@/assets/sp-web.jpg";
import imgMobile from "@/assets/sp-mobile.jpg";
import imgMarketing from "@/assets/sp-marketing.jpg";
import imgDesign from "@/assets/sp-design.jpg";
import imgEcom from "@/assets/sp-ecom.jpg";

/*
  SEO FIX 1: Removed <Helmet> entirely from ServicesDeep.

  This component is used on the homepage AND potentially the /services
  page. Having Helmet here causes:
  - Title "Website Design, Ecommerce..." to overwrite the homepage title
  - canonical "https://www.smartpixel.in/services" injected on the homepage
    — Google sees your homepage as a duplicate of /services
  - ProfessionalService schema duplicated (already in index.html)

  Rule: Only PAGE-level components (Home.tsx, Services.tsx, Contact.tsx)
  should contain <Helmet>. Shared/section components never should.

  If you want a dedicated /services page with its own Helmet, create
  a Services.tsx page component that imports ServicesDeep and adds
  its own Helmet there.
*/

gsap.registerPlugin(ScrollTrigger);

/*
  SEO FIX 2: Each service now has a dedicated URL.
  These are real pages Google can crawl and rank independently.
  Add these routes to your React Router:
    /services/web-design-chennai
    /ecommerce-website-chennai
    /services/web-app-development
    /services/mobile-app-development
    /seo-services-chennai
*/
const items = [
  {
    n: "01",
    title: "Web Design",
    tag: "Brand & Experience",
    body: "You have about four seconds before a visitor decides whether to stay. We design websites for Chennai businesses that communicate credibility and intent from the first scroll.",
    outcome: "40+ websites shipped for Chennai businesses. Average build: 2 weeks.",
    points: ["Custom design + development", "Conversion-led structure", "Ongoing support"],
    badges: ["WhatsApp Automation"],
    image: imgDesign,
    alt: "Web design services in Chennai by SmartPixel",
    href: "/services/web-design-chennai",
    lead: true,
  },
  {
    n: "02",
    title: "E-Commerce Development",
    tag: "Online Stores",
    body: "We build ecommerce stores focused on speed, trust and checkout conversions — built to grow with your catalogue.",
    outcome: "Shopify & WooCommerce stores live in 2–3 weeks, payments included.",
    points: ["Shopify & WooCommerce", "Payment + inventory", "Product catalogue"],
    image: imgEcom,
    alt: "Ecommerce website development in Chennai — SmartPixel",
    href: "/ecommerce-website-chennai",
    lead: true,
  },
  {
    n: "03",
    title: "Mobile App Development",
    tag: "iOS & Android",
    body: "Modern mobile apps built for retention, speed and a polished user experience.",
    outcome: "Cross-platform builds with React Native & Flutter.",
    points: ["iOS & Android", "React Native / Flutter"],
    image: imgMobile,
    alt: "Mobile app development in Chennai — iOS and Android — SmartPixel",
    href: "/services/mobile-app-development",
  },
  {
    n: "04",
    title: "SEO & Digital Marketing",
    tag: "Growth Systems",
    body: "SEO, paid ads and content systems designed to generate leads and revenue from Google.",
    outcome: "Local SEO + Google/Meta ads tuned for Chennai search demand.",
    points: ["SEO + Local SEO", "Google & Meta ads"],
    image: imgMarketing,
    alt: "SEO and digital marketing services in Chennai — SmartPixel",
    href: "/seo-services-chennai",
  },
];

const ServicesDeep = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".deep-row").forEach((row) => {
        gsap.from(row, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="systems"
      ref={ref}
      className="bg-background py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6 opacity-60">
              — Website Development &amp; Digital Marketing Services in Chennai
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Not services.{" "}
              <span className="italic text-accent">Systems.</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
            Website design, ecommerce, apps and SEO — handled by one expert
            team in <strong className="text-foreground/60">Chennai</strong>.
          </p>
        </div>

        <div className="border-t border-border">
          {items.map((it) => (
            /*
              SEO FIX 7: Each article now wraps in an <a> link to its
              dedicated service page. This makes every service row a
              crawlable internal link — Google follows these and indexes
              each service page with context from the anchor text.
            */
            <article
              key={it.n}
              className={`deep-row group relative grid md:grid-cols-12 gap-4 md:gap-8 border-b border-border transition-colors duration-500 hover:bg-surface/40 ${
                it.lead ? "py-12 sm:py-16 lg:py-24" : "py-6 sm:py-9 lg:py-12"
              }`}
            >
              <div className="md:col-span-1 text-xs text-muted-foreground tracking-[0.3em]">
                {it.n}
              </div>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                  {it.tag}
                </p>

                <h3
                  className="font-display leading-[1.05] tracking-tight text-balance transition-colors duration-500 group-hover:text-accent text-3xl sm:text-4xl md:text-5xl"
                >
                  {it.title}
                </h3>
              </div>

              <div className="md:col-span-6 md:col-start-6 space-y-4">
                <p className={`text-muted-foreground leading-relaxed ${it.lead ? "text-base sm:text-lg" : "text-sm"}`}>
                  {it.body}
                </p>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent">◆</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-foreground/70 italic">
                  {it.outcome}
                </p>

                {it.badges && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {it.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full border border-accent/40 text-accent/90 bg-accent/5"
                      >
                        + {b}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={it.href}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent hover:gap-4 transition-all duration-300"
                >
                  {it.title} Services →
                </a>
              </div>

              {/* Floating image preview on hover (desktop only) */}
              <div
                aria-hidden
                className="pointer-events-none hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[280px] aspect-[4/3] rounded-xl overflow-hidden border border-accent/30 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.9)] opacity-0 translate-x-6 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-500 ease-out z-20"
              >
                <img
                  src={it.image}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/60" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{it.tag}</p>
                  <p className="font-display text-lg leading-tight mt-1">{it.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDeep;