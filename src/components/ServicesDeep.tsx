import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgWeb from "@/assets/sp-web.jpg";
import imgMobile from "@/assets/sp-mobile.jpg";
import imgMarketing from "@/assets/sp-marketing.jpg";
import imgDesign from "@/assets/sp-design.jpg";
import imgEcom from "@/assets/sp-ecom.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    n: "01",
    title: "Web Design",
    tag: "Brand & Experience",
    body: "You have about four seconds before a visitor decides whether to stay. We design websites that communicate credibility, clarity, and intent from the first scroll.",
    points: [
      "WordPress design & development",
      "Custom HTML/CSS builds",
      "E-commerce design",
      "Responsive layouts",
      "Ongoing support",
    ],
    image: imgDesign,
  },
  {
    n: "02",
    title: "E-Commerce Development",
    tag: "Online Stores",
    body: "We build ecommerce stores focused on speed, trust, checkout conversions, and long-term growth.",
    points: [
      "Shopify & WooCommerce",
      "Payment gateway integration",
      "Inventory systems",
      "Marketplace setup",
      "Product catalogue",
    ],
    image: imgEcom,
  },
  {
    n: "03",
    title: "Web App Development",
    tag: "Custom Builds",
    body: "Custom web applications that handle traffic, workflows, users, and scale without compromise.",
    points: [
      "Frontend + Backend",
      "Custom CMS",
      "Business portals",
      "PWA builds",
      "Scalable architecture",
    ],
    image: imgWeb,
  },
  {
    n: "04",
    title: "Mobile App Development",
    tag: "iOS & Android",
    body: "Modern mobile apps built for user retention, speed, and polished user experience.",
    points: [
      "iOS Apps",
      "Android Apps",
      "Flutter",
      "React Native",
      "UI/UX Prototyping",
    ],
    image: imgMobile,
  },
  {
    n: "05",
    title: "Digital Marketing",
    tag: "Growth Systems",
    body: "SEO, paid ads, content and growth systems designed to generate leads and revenue.",
    points: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media",
      "Local SEO",
    ],
    image: imgMarketing,
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
    <>
      {/* SEO */}
    <Helmet>
  <title>
    Website Design, Ecommerce, App Development & SEO Services Chennai | SmartPixel
  </title>

  <meta
    name="description"
    content="SmartPixel offers premium website design, ecommerce development, mobile app development, SEO and digital marketing services in Chennai. Build faster, rank higher and generate more leads."
  />

  <meta
    name="keywords"
    content="website development Chennai, web design Chennai, ecommerce development Chennai, SEO Chennai, mobile app development Chennai, digital marketing Chennai, SmartPixel services"
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="SmartPixel" />
  <meta name="language" content="English" />

  <link rel="canonical" href="https://smartpixel.in/services" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="SmartPixel Services | Website, Ecommerce, App & SEO Company Chennai"
  />

  <meta
    property="og:description"
    content="Explore SmartPixel services: premium websites, ecommerce stores, mobile apps, SEO and growth systems for Chennai businesses."
  />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://smartpixel.in/services" />
  <meta property="og:image" content="https://smartpixel.in/logo.png" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SmartPixel Services | Chennai Website & SEO Agency"
  />
  <meta
    name="twitter:description"
    content="Website design, ecommerce, apps and SEO services in Chennai."
  />
  <meta name="twitter:image" content="https://smartpixel.in/logo.png" />

  {/* Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "SmartPixel",
      url: "https://smartpixel.in",
      logo: "https://smartpixel.in/logo.png",
      image: "https://smartpixel.in/logo.png",
      telephone: "+91-9886069488",
      email: "workwithsmartpixel@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Chennai",
      },
      sameAs: [
        "https://www.instagram.com/smartpiixel/",
        "https://www.threads.net/@smartpiixel",
      ],
      serviceType: [
        "Website Design",
        "Ecommerce Development",
        "Mobile App Development",
        "SEO Services",
        "Digital Marketing"
      ]
    })}
  </script>
</Helmet>

      <section
        id="systems"
        ref={ref}
        className="bg-background py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
            <div>
              <p className="eyebrow mb-4 sm:mb-6">— What We Build</p>

              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
                Not services.
                <br />
                <span className="italic text-accent">Systems.</span>
              </h2>
            </div>

            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
              From strategy to growth — handled by one expert team.
            </p>
          </div>

          <div className="border-t border-border">
            {items.map((it) => (
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
                </div>

                {/* Floating image preview on hover (desktop only) */}
                <div
                  aria-hidden
                  className="pointer-events-none hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[280px] aspect-[4/3] rounded-xl overflow-hidden border border-accent/30 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.9)] opacity-0 translate-x-6 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-500 ease-out z-20"
                >
                  <img
                    src={it.image}
                    alt={`${it.title} preview`}
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
    </>
  );
};

export default ServicesDeep;