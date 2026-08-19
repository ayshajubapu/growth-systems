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
    title: "Web Design & Development",
    tag: "Websites & Digital Experience",
    body:
      "We design and develop fast, conversion-focused websites for Chennai businesses that need more than a good-looking homepage. Every website is structured around credibility, enquiries, mobile usability and search visibility.",
    outcome:
      "Business websites designed for speed, enquiries and long-term SEO growth.",
    points: [
      "Custom website design",
      "React & modern development",
      "SEO-ready structure",
      "Mobile-first experience",
    ],
    badges: ["Local SEO Ready"],
    image: imgDesign,
    alt:
      "Custom web design and website development services in Chennai by SmartPixel",
    href: "/services/web-design-chennai",
    lead: true,
  },

  {
    n: "02",
    title: "E-Commerce Development",
    tag: "Online Stores & Commerce",
    body:
      "We build ecommerce websites for businesses that need a reliable product catalogue, smooth mobile checkout and the infrastructure to manage products, payments and orders as they grow.",
    outcome:
      "Ecommerce websites with payments, product management, inventory and conversion-focused checkout.",
    points: [
      "Custom ecommerce development",
      "Payment gateway integration",
      "Product catalogue",
      "Inventory management",
      "Mobile-first checkout",
    ],
    badges: ["Conversion Focused"],
    image: imgEcom,
    alt:
      "Ecommerce website development and online store design in Chennai by SmartPixel",
    href: "/ecommerce-website-chennai",
    lead: true,
  },

  {
    n: "03",
    title: "Mobile App Development",
    tag: "iOS & Android Applications",
    body:
      "We develop mobile applications for businesses and startups that need customers, teams or partners to interact through a dedicated app instead of relying only on a website.",
    outcome:
      "Cross-platform mobile applications built with scalable modern technologies.",
    points: [
      "iOS & Android apps",
      "React Native",
      "Flutter",
      "API integration",
      "Secure authentication",
    ],
    image: imgMobile,
    alt:
      "Mobile app development company in Chennai building iOS and Android applications",
    href: "/services/mobile-app-development",
  },

  {
    n: "04",
    title: "SEO & Digital Marketing",
    tag: "Organic Growth & Lead Generation",
    body:
      "We combine technical SEO, local SEO, content and paid marketing to help businesses become easier to find when potential customers are actively searching for their products or services.",
    outcome:
      "Search-focused growth systems targeting local and high-intent customers.",
    points: [
      "Technical SEO",
      "Local SEO",
      "Google Business Profile",
      "Content strategy",
      "Google & Meta Ads",
    ],
    badges: ["Growth System"],
    image: imgMarketing,
    alt:
      "SEO and digital marketing services for Chennai businesses by SmartPixel",
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
      aria-labelledby="services-section-title"
      className="bg-background py-12 sm:py-16 lg:py-20 px-5 sm:px-10 lg:px-24"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6 opacity-60 text-xs tracking-wider">
              — Website Development & Digital Marketing Services in Chennai
            </p>

            <h2
              id="services-section-title"
              className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1] max-w-3xl text-foreground"
            >
              Not services.{" "}
              <span className="italic text-accent font-normal">
                Systems.
              </span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
            Websites, ecommerce stores, mobile apps and SEO — built by one
            team for businesses in{" "}
            <strong className="text-foreground/80 font-semibold">
              Chennai
            </strong>{" "}
            and beyond.
          </p>
        </div>

        {/* Services */}
        <div className="border-t border-border">
          {items.map((it) => (
            <article
              key={it.n}
              className={`deep-row group relative grid md:grid-cols-12 gap-4 md:gap-8 border-b border-border transition-colors duration-500 hover:bg-surface/40 ${
                it.lead
                  ? "py-12 sm:py-16 lg:py-24"
                  : "py-6 sm:py-9 lg:py-12"
              }`}
            >
              {/* Number */}
              <div className="md:col-span-1 text-xs text-muted-foreground font-mono tracking-[0.3em]">
                {it.n}
              </div>

              {/* Service Title */}
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
                  {it.tag}
                </p>

                <h3 className="font-display font-bold leading-[1.05] tracking-tight text-balance transition-colors duration-500 group-hover:text-accent text-3xl sm:text-4xl md:text-5xl text-foreground">
                  {it.title}
                </h3>
              </div>

              {/* Service Content */}
              <div className="md:col-span-6 md:col-start-6 space-y-4">
                <p
                  className={`text-muted-foreground leading-relaxed ${
                    it.lead
                      ? "text-base sm:text-lg"
                      : "text-sm sm:text-base"
                  }`}
                >
                  {it.body}
                </p>

                {/* Features */}
                <ul
                  aria-label={`${it.title} features`}
                  className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground font-medium"
                >
                  {it.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2"
                    >
                      <span
                        className="text-accent text-[10px] select-none"
                        aria-hidden="true"
                      >
                        ◆
                      </span>

                      {point}
                    </li>
                  ))}
                </ul>

                {/* Outcome */}
                <p className="text-xs sm:text-sm text-foreground/70 italic font-medium">
                  {it.outcome}
                </p>

                {/* Badges */}
                {it.badges && it.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {it.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full border border-accent/40 text-accent/90 bg-accent/5 select-none"
                      >
                        + {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Internal Link */}
                <div className="pt-2">
                  <Link
                    to={it.href}
                    aria-label={`Learn more about ${it.title} from SmartPixel`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent hover:gap-4 transition-all duration-300"
                  >
                    Explore {it.title} →
                  </Link>
                </div>
              </div>

              {/* Desktop Hover Image */}
              <div
                aria-hidden="true"
                className="pointer-events-none hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[280px] aspect-[4/3] rounded-xl overflow-hidden border border-accent/30 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.9)] opacity-0 translate-x-6 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-500 ease-out z-20"
              >
                <img
                  src={it.image}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-foreground/60 select-none pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                    {it.tag}
                  </p>

                  <p className="font-display text-lg font-bold leading-tight mt-1">
                    {it.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Supporting SEO/Internal Navigation */}
        <div className="mt-10 sm:mt-14 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm">
          <Link
            to="/services/web-design-chennai"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Web Design Chennai
          </Link>

          <Link
            to="/ecommerce-website-chennai"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Ecommerce Website Chennai
          </Link>

          <Link
            to="/services/mobile-app-development"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Mobile App Development
          </Link>

          <Link
            to="/seo-services-chennai"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            SEO Services Chennai
          </Link>

          <Link
            to="/whatsapp-automation-chennai"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            WhatsApp Automation Chennai
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesDeep;