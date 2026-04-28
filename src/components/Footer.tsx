import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cols = [
  {
    title: "Services",
    links: [
      { l: "Web App Development", h: "#systems" },
      { l: "Mobile App Development", h: "#systems" },
      { l: "Digital Marketing", h: "#systems" },
      { l: "Web Design", h: "#systems" },
      { l: "E-Commerce", h: "#systems" },
    ],
  },
  {
    title: "Studio",
    links: [
      { l: "Home", h: "#" },
      { l: "Portfolio", h: "#work" },
      { l: "Clients", h: "#voices" },
      { l: "About", h: "#studio" },
    ],
  },
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
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Contact SmartPixel | Website Development Company Chennai
        </title>

        <meta
          name="description"
          content="Contact SmartPixel Chennai for website development, ecommerce stores, mobile apps, SEO and digital marketing services. Call, WhatsApp or email us today."
        />

        <meta
          name="keywords"
          content="contact SmartPixel, Chennai website company contact, web developer Chennai, ecommerce company Chennai, SmartPixel phone number"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://smartpixel.in/contact" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact SmartPixel | Chennai Web Design Agency"
        />

        <meta
          property="og:description"
          content="Ready to grow your business? Contact SmartPixel for websites, apps and SEO systems."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartpixel.in/contact" />
        <meta property="og:image" content="https://smartpixel.in/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact SmartPixel Chennai"
        />
        <meta
          name="twitter:description"
          content="Book your free strategy call with SmartPixel."
        />
        <meta name="twitter:image" content="https://smartpixel.in/logo.png" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SmartPixel",
            url: "https://smartpixel.in",
            logo: "https://smartpixel.in/logo.png",
            image: "https://smartpixel.in/logo.png",
            telephone: "+91-9886069488",
            email: "workwithsmartpixel@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chrompet",
              addressRegion: "Chennai",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/smartpiixel/",
              "https://www.threads.net/@smartpiixel",
            ],
          })}
        </script>
      </Helmet>

      <footer
        ref={ref}
        className="relative bg-background border-t border-border overflow-hidden"
      >
        <div className="absolute inset-0 glow-bg pointer-events-none opacity-60" />

        <div className="relative max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-24 pt-20 sm:pt-28 lg:pt-36 pb-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5">— Get In Touch</p>

              <h3 className="foot-mark font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
                Ready to build
                <br />
                something that{" "}
                <span className="italic text-accent">works</span>?
              </h3>

              <p className="mt-5 sm:mt-7 text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base">
                SmartPixel — Conversion-focused websites, apps, and growth
                systems for businesses that mean business.
              </p>

              <a
                href="#contact"
                className="btn-gold mt-7 sm:mt-9 inline-block"
              >
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
                    <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                      Call
                    </div>

                    <div className="text-sm font-display">
                      +91 98860 69488
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919886069488"
                  className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                >
                  <MessageCircle
                    size={16}
                    className="text-accent shrink-0"
                  />

                  <div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                      WhatsApp
                    </div>

                    <div className="text-sm font-display">
                      Chat with us
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 lg:pl-10">
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

              {/* Contact */}
              <div className="foot-col col-span-2 sm:col-span-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6">
                  — Studio
                </p>

                <address className="not-italic text-sm text-muted-foreground leading-[1.9] flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    <Mail size={13} className="text-accent" />
                    workwithsmartpixel@gmail.com
                  </span>

                  <span className="flex items-center gap-2">
                    <Phone size={13} className="text-accent" />
                    +91 98860 69488
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={13} className="text-accent" />
                    Chrompet, Chennai · smartpixel.in
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

          {/* Bottom */}
          <div className="mt-8 pt-7 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Accepting new projects
            </div>

            <div>
              © {new Date().getFullYear()} SmartPixel — All rights reserved
            </div>

            <div className="flex gap-5">
              <a
                href="#"
                className="hover:text-accent transition-colors"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-accent transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;