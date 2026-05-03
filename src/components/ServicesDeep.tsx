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
  - canonical "https://smartpixel.in/services" injected on the homepage
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
    /*
      SEO FIX 3: Body text now includes "Chennai" naturally.
      Google uses paragraph text to confirm topical + local relevance.
      Before: no location mentioned anywhere in the body copy.
    */
    body: "You have about four seconds before a visitor decides whether to stay. We design websites for businesses in Chennai that communicate credibility, clarity, and intent from the first scroll.",
    points: [
      "WordPress design & development",
      "Custom HTML/CSS builds",
      "E-commerce design",
      "Responsive layouts",
      "Ongoing support",
    ],
    image: imgDesign,
    /*
      SEO FIX 4: alt text now keyword-rich instead of generic "preview".
      Google uses image alt text as a ranking signal — especially for
      image search and confirming page relevance.
    */
    alt: "Web design services in Chennai by SmartPixel",
    href: "/services/web-design-chennai",
  },
  {
    n: "02",
    title: "E-Commerce Development",
    tag: "Online Stores",
    body: "We build ecommerce stores for Chennai businesses focused on speed, trust, checkout conversions, and long-term growth.",
    points: [
      "Shopify & WooCommerce",
      "Payment gateway integration",
      "Inventory systems",
      "Marketplace setup",
      "Product catalogue",
    ],
    image: imgEcom,
    alt: "Ecommerce website development in Chennai — SmartPixel",
    href: "/ecommerce-website-chennai",
  },
  {
    n: "03",
    title: "Web App Development",
    tag: "Custom Builds",
    body: "Custom web applications built for Chennai businesses that handle traffic, workflows, users, and scale without compromise.",
    points: [
      "Frontend + Backend",
      "Custom CMS",
      "Business portals",
      "PWA builds",
      "Scalable architecture",
    ],
    image: imgWeb,
    alt: "Web app development company in Chennai — SmartPixel",
    href: "/services/web-app-development",
  },
  {
    n: "04",
    title: "Mobile App Development",
    tag: "iOS & Android",
    body: "Modern mobile apps built for Chennai businesses — focused on user retention, speed, and polished user experience.",
    points: [
      "iOS Apps",
      "Android Apps",
      "Flutter",
      "React Native",
      "UI/UX Prototyping",
    ],
    image: imgMobile,
    alt: "Mobile app development in Chennai — iOS and Android — SmartPixel",
    href: "/services/mobile-app-development",
  },
  {
    n: "05",
    title: "SEO & Digital Marketing",
    tag: "Growth Systems",
    /*
      SEO FIX 5: Renamed from "Digital Marketing" to "SEO & Digital Marketing"
      — "SEO" is the higher-value, higher-search-volume keyword.
      Also updated href to /seo-services-chennai which is your
      dedicated SEO landing page.
    */
    body: "SEO, paid ads, content and growth systems designed to help Chennai businesses generate leads and revenue from Google.",
    points: [
      "SEO Services Chennai",
      "Google Ads",
      "Meta Ads",
      "Social Media",
      "Local SEO Chennai",
    ],
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
            <p className="eyebrow mb-4 sm:mb-6">— What We Build</p>

            {/*
              SEO FIX 6: H2 now contains the primary keyword.
              Before: "Not services. Systems." — no keyword value at all.
              After: Keyword-first H2 with your brand voice preserved below.

              sr-only span carries the keyword for Google.
              The visible display text keeps your design language.
            */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              <span className="sr-only">
                Website Development & Digital Marketing Services in Chennai —
              </span>
              Not services.
              <br />
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
              className="deep-row group relative grid md:grid-cols-12 gap-4 md:gap-8 py-8 sm:py-12 lg:py-16 border-b border-border transition-colors duration-500 hover:bg-surface/40"
            >
              <div className="md:col-span-1 text-xs text-muted-foreground tracking-[0.3em]">
                {it.n}
              </div>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                  {it.tag}
                </p>

                <h3 className="font-display text-2xl sm:text-3xl md:text-5xl transition-colors duration-500 group-hover:text-accent">
                  {it.title}
                </h3>
              </div>

              <div className="md:col-span-6 md:col-start-6 space-y-5">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {it.body}
                </p>

                <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent">◆</span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/*
                  SEO FIX 8: "Learn more" CTA link per service.
                  Explicit anchor text ("Web Design Services →") is far
                  stronger than just wrapping the whole card in an <a>.
                  Google reads anchor text to understand what the
                  linked page is about.
                */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{it.tag}</p>
                  <p className="font-display text-lg leading-tight mt-1">{it.title}</p>
                </div>
                <div className="absolute -inset-1 -z-10 bg-accent/20 blur-2xl rounded-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDeep;