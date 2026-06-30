import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

  // Master Relational SEO Schema Graph - Synced directly from your raw HTML head settings
  const masterGraphSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.smartpixel.in/#business",
          "name": "SmartPixel",
          "image": "https://www.smartpixel.in/og-banner.jpg",
          "logo": "https://www.smartpixel.in/logo.png",
          "url": "https://www.smartpixel.in/",
          "telephone": ["+91-9886069488", "+91-9164975073"],
          "email": "workwithsmartpixel@gmail.com",
          "description": "SmartPixel is a web design and development agency in Chrompet, Chennai. We build conversion-focused websites, ecommerce stores and mobile apps for small and mid-size businesses across Chennai.",
          "foundingDate": "2023",
          "founder": {
            "@type": "Person",
            "name": "Aysha"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chrompet",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600044",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9516",
            "longitude": "80.2012"
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }],
          "priceRange": "INR",
          "areaServed": [
            {"@type": "AdministrativeArea", "name": "Chrompet, Chennai"},
            {"@type": "AdministrativeArea", "name": "Tambaram, Chennai"},
            {"@type": "AdministrativeArea", "name": "Pallavaram, Chennai"},
            {"@type": "AdministrativeArea", "name": "Guindy, Chennai"},
            {"@type": "AdministrativeArea", "name": "T Nagar, Chennai"},
            {"@type": "AdministrativeArea", "name": "Saidapet, Chennai"},
            {"@type": "AdministrativeArea", "name": "Nungambakkam, Chennai"},
            {"@type": "AdministrativeArea", "name": "Chitlapakkam, Chennai"}
          ],
          "sameAs": [
            "https://www.instagram.com/smartpiixel/",
            "https://www.threads.net/@smartpiixel"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "40",
            "bestRating": "5"
          }
        },
        {
          "@type": "Service",
          "serviceType": "Web Design & Development",
          "provider": { "@id": "https://www.smartpixel.in/#business" },
          "areaServed": { "@type": "City", "name": "Chennai" },
          "description": "Conversion-focused website design and development for small and mid-size businesses in Chennai.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "25000",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "25000",
              "maxPrice": "150000",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "Service",
          "serviceType": "Ecommerce Website Development",
          "provider": { "@id": "https://www.smartpixel.in/#business" },
          "areaServed": { "@type": "City", "name": "Chennai" },
          "description": "Custom ecommerce stores with payment integration, product catalogues and conversion optimisation.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "50000",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "50000",
              "maxPrice": "200000",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "Service",
          "serviceType": "Mobile App Development",
          "provider": { "@id": "https://www.smartpixel.in/#business" },
          "areaServed": { "@type": "City", "name": "Chennai" },
          "description": "iOS and Android mobile app development for service businesses and startups.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "150000",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "150000",
              "maxPrice": "600000",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "Service",
          "serviceType": "SEO Services",
          "provider": { "@id": "https://www.smartpixel.in/#business" },
          "areaServed": { "@type": "City", "name": "Chennai" },
          "description": "On-page, technical and local SEO to help Chennai businesses rank for high-intent searches.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": "15000",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "15000",
              "maxPrice": "60000",
              "priceCurrency": "INR"
            }
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {"@type":"Question","name":"How much does SmartPixel charge for a website?","acceptedAnswer":{"@type":"Answer","text":"Our projects start from ₹15,000 for business sites and go up to ₹1,50,000+ for custom ecommerce or web app builds. Every project includes a free strategy call before we quote."}},
            {"@type":"Question","name":"How long does a website build take?","acceptedAnswer":{"@type":"Answer","text":"Our average is 2 weeks from brief to launch. Ecommerce stores typically take 2–3 weeks. Mobile apps start from 6 weeks."}},
            {"@type":"Question","name":"Does SmartPixel work with businesses outside Chennai?","acceptedAnswer":{"@type":"Answer","text":"Yes. We're based in Chrompet but work with clients across India remotely. Most of our team communication is async."}},
            {"@type":"Question","name":"What makes SmartPixel different from other Chennai agencies?","acceptedAnswer":{"@type":"Answer","text":"One team owns your project start to finish — no account managers, no handoffs. You talk directly to the people doing the work."}},
            {"@type":"Question","name":"Do you offer ongoing support after launch?","acceptedAnswer":{"@type":"Answer","text":"Yes. All projects include a support period post-launch. We offer ongoing retainers for maintenance and growth."}}
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://www.smartpixel.in/#organization",
          "name": "SmartPixel",
          "alternateName": "SmartPixel Web Agency",
          "url": "https://www.smartpixel.in/",
          "logo": "https://www.smartpixel.in/logo.png",
          "description": "SmartPixel is a Chennai-based web design and development agency building conversion-focused websites, ecommerce stores, mobile apps and WhatsApp automation for small and mid-size businesses.",
          "foundingDate": "2023",
          "founder": {
            "@type": "Person",
            "name": "Aysha",
            "jobTitle": "Founder"
          },
          "knowsAbout": ["Website Development","Web Design","Ecommerce Development","SEO Services","WhatsApp Automation","Mobile App Development","Digital Marketing","Conversion Rate Optimization"],
          "contactPoint": [{
            "@type":"ContactPoint",
            "telephone":"+91-9886069488",
            "contactType":"customer service",
            "email":"workwithsmartpixel@gmail.com",
            "areaServed":"IN",
            "availableLanguage":["English","Tamil","Hindi"]
          }],
          "sameAs": ["https://www.instagram.com/smartpiixel/","https://www.threads.net/@smartpiixel"]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.smartpixel.in/#website",
          "url": "https://www.smartpixel.in/",
          "name": "SmartPixel",
          "publisher": { "@id": "https://www.smartpixel.in/#organization" },
          "inLanguage": "en-IN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type":"EntryPoint",
              "urlTemplate":"https://www.smartpixel.in/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "WebPage",
          "url": "https://www.smartpixel.in/",
          "speakable": {
            "@type":"SpeakableSpecification",
            "cssSelector":["h1","h2",".speakable","[data-speakable]"]
          }
        }
      ]
    };
  }, []);

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
      {/* Complete Connected Site Graph Structural Snippet Injection */}
      <script type="application/ld+json">
        {JSON.stringify(masterGraphSchema)}
      </script>

      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-24 pt-20 sm:pt-28 lg:pt-36 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* ── LEFT — CTA + contact cards ── */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">— Get In Touch</p>

            <h2 className="foot-mark font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] font-bold text-foreground tracking-tight">
              Ready to build
              <br />
              something that{" "}
              <span className="italic text-accent font-normal">works</span>?
            </h2>

            <p className="mt-5 sm:mt-7 text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base font-light">
              SmartPixel — Conversion-focused websites, apps, and growth
              systems for businesses in <strong className="text-foreground/80 font-semibold">Chennai</strong> that mean business.
            </p>

            <a href="/contact" className="btn-gold mt-7 sm:mt-9 inline-block" title="Book your direct strategy consultation">
              Book Your Strategy Call →
            </a>

            {/* Contact Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+919886069488"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Call business contact mobile number"
              >
                <Phone size={16} className="text-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">Call</div>
                  <div className="text-sm font-display font-medium text-foreground">+91 98860 69488</div>
                </div>
              </a>

              <a
                href="tel:+919164975073"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Call business secondary contact line"
              >
                <Phone size={16} className="text-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">Call</div>
                  <div className="text-sm font-display font-medium text-foreground">+91 91649 75073</div>
                </div>
              </a>

              <a
                href="https://wa.me/919886069488"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Initiate encrypted chat via WhatsApp channel"
              >
                <MessageCircle size={16} className="text-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">WhatsApp</div>
                  <div className="text-sm font-display font-medium text-foreground">Chat with us</div>
                </div>
              </a>

              <a
                href="mailto:workwithsmartpixel@gmail.com"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Send direct message to corporate support mailbox"
              >
                <Mail size={16} className="text-accent shrink-0" />
                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">Email</div>
                  <div className="text-sm font-display font-medium text-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px] sm:max-w-[180px]">
                    workwithsmartpixel@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ── RIGHT — nav columns ── */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 lg:pl-10">

            {/* Services + Studio columns */}
            {cols.map((c) => (
              <div key={c.title} className="foot-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6 font-semibold">
                  — {c.title}
                </p>
                <ul className="space-y-3">
                  {c.links.map((lk) => (
                    <li key={lk.l}>
                      <a
                        href={lk.h}
                        className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                        title={`Navigate to ${lk.l}`}
                      >
                        <span className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500" aria-hidden="true" />
                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Area pages column */}
            <div className="foot-col col-span-2 sm:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6 font-semibold">
                — Areas We Serve
              </p>
              <nav aria-label="Chennai regional hyper-local service regions">
                <ul className="space-y-3">
                  {areaLinks.map((lk) => (
                    <li key={lk.l}>
                      <a
                        href={lk.h}
                        className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                        title={`Web Design and Development Services in ${lk.l}`}
                      >
                        <span className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500" aria-hidden="true" />
                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Address block */}
            <div className="foot-col col-span-2 sm:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6 font-semibold">
                — Studio
              </p>

              <address className="not-italic text-sm text-muted-foreground leading-[1.9] flex flex-col gap-2 font-light">
                <a href="mailto:workwithsmartpixel@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={13} className="text-accent shrink-0" />
                  workwithsmartpixel@gmail.com
                </a>
                <a href="tel:+919886069488" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={13} className="text-accent shrink-0" />
                  +91 98860 69488
                </a>
                <a href="tel:+919164975073" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={13} className="text-accent shrink-0" />
                  +91 91649 75073
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-accent shrink-0" />
                  Chrompet, Chennai, Tamil Nadu 600044
                </span>
                <span className="text-xs text-muted-foreground/70 mt-2 font-normal">
                  Founded 2023 · By Aysha
                </span>
              </address>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-16 sm:mt-24 lg:mt-28 overflow-hidden">
          <div className="foot-mark font-display text-[16vw] font-bold leading-[0.85] tracking-tight whitespace-nowrap text-foreground/[0.07] select-none">
            Smart Pixel
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-8 pt-7 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
          <div className="flex items-center gap-3 select-none">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Accepting new projects
          </div>

          <div>© {new Date().getFullYear()} SmartPixel — All rights reserved</div>

          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-accent transition-colors" title="Review privacy guidelines">Privacy</a>
            <a href="/terms" className="hover:text-accent transition-colors" title="Review terms of service">Terms</a>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
              className="hover:text-accent transition-colors uppercase tracking-[0.3em]"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;