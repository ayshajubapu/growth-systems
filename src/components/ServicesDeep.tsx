import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgMobile from "@/assets/sp-mobile.jpg";
import imgMarketing from "@/assets/sp-marketing.jpg";
import imgDesign from "@/assets/sp-design.jpg";
import imgEcom from "@/assets/sp-ecom.jpg";

gsap.registerPlugin(ScrollTrigger);

type ServiceItem = {
  n: string;
  title: string;
  tag: string;
  body: string;
  outcome: string;
  points: string[];
  badges?: string[];
  image: string;
  alt: string;
  href: string;
  lead?: boolean;
};

const items: ServiceItem[] = [
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
            toggleActions: "play none none none",
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
        {/* Header Block Section */}
        <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6 opacity-60 text-xs tracking-wider">
              — Website Development &amp; Digital Marketing Services in Chennai
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1] max-w-3xl text-foreground">
              Not services. <span className="italic text-accent font-normal">Systems.</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
            Website design, ecommerce, apps and SEO — handled by one expert team in{" "}
            <strong className="text-foreground/80 font-semibold">Chennai</strong>.
          </p>
        </div>

        {/* Dynamic Structural Grid Stack */}
        <div className="border-t border-border">
          {items.map((it) => (
            <article
              key={it.n}
              className={`deep-row group relative grid md:grid-cols-12 gap-4 md:gap-8 border-b border-border transition-colors duration-500 hover:bg-surface/40 ${
                it.lead ? "py-12 sm:py-16 lg:py-24" : "py-6 sm:py-9 lg:py-12"
              }`}
            >
              <div className="md:col-span-1 text-xs text-muted-foreground font-mono tracking-[0.3em]">
                {it.n}
              </div>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
                  {it.tag}
                </p>

                <h3 className="font-display font-bold leading-[1.05] tracking-tight text-balance transition-colors duration-500 group-hover:text-accent text-3xl sm:text-4xl md:text-5xl text-foreground">
                  {it.title}
                </h3>
              </div>

              <div className="md:col-span-6 md:col-start-6 space-y-4">
                <p className={`text-muted-foreground leading-relaxed ${it.lead ? "text-base sm:text-lg" : "text-sm"}`}>
                  {it.body}
                </p>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground font-medium">
                  {it.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="text-accent text-[10px] select-none">◆</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-foreground/70 italic font-medium">
                  {it.outcome}
                </p>

                {it.badges && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {it.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full border border-accent/40 text-accent/90 bg-accent/5 select-none"
                      >
                        + {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    to={it.href}
                    aria-label={`Explore our ${it.title} specialized solutions`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent hover:gap-4 transition-all duration-300"
                  >
                    {it.title} Services →
                  </Link>
                </div>
              </div>

              {/* Floating Desktop Asset Interactive Hover Cards */}
              <div
                aria-hidden="true"
                className="pointer-events-none hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[280px] aspect-[4/3] rounded-xl overflow-hidden border border-accent/30 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.9)] opacity-0 translate-x-6 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-500 ease-out z-20"
              >
                <img
                  src={it.image}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/60 select-none pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">{it.tag}</p>
                  <p className="font-display text-lg font-bold leading-tight mt-1">{it.title}</p>
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