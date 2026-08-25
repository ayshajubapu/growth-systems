import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cols = [
  {
    title: "Services",
    links: [
      {
        l: "Web App Development",
        h: "/services/web-app-development",
      },
      {
        l: "Mobile App Development",
        h: "/services/mobile-app-development",
      },
      {
        l: "Digital Marketing",
        h: "/services/digital-marketing-chennai",
      },
      {
        l: "Web Design",
        h: "/services/web-design-chennai",
      },
      {
        l: "E-Commerce",
        h: "/ecommerce-website-chennai",
      },
      {
        l: "SEO Services",
        h: "/seo-services-chennai",
      },
      {
        l: "WhatsApp Automation",
        h: "/whatsapp-automation-chennai",
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        l: "Home",
        h: "/",
      },
      {
        l: "Portfolio",
        h: "/portfolio",
      },
      {
        l: "Case Studies",
        h: "/case-studies",
      },
      {
        l: "Blog",
        h: "/blog",
      },
      {
        l: "About",
        h: "/about",
      },
      {
        l: "Contact",
        h: "/contact",
      },
    ],
  },
];

const areaLinks = [
  {
    l: "Web Design Pallavaram",
    h: "/web-design-pallavaram",
  },
  {
    l: "Web Design Tambaram",
    h: "/web-design-tambaram",
  },
  {
    l: "Web Design Chrompet",
    h: "/web-design-chrompet",
  },
  {
    l: "Web Design Guindy",
    h: "/web-design-guindy",
  },
  {
    l: "Web Design T Nagar",
    h: "/web-design-t-nagar",
  },
  {
    l: "Web Design Saidapet",
    h: "/web-design-saidapet",
  },
  {
    l: "Web Design Nungambakkam",
    h: "/web-design-nungambakkam",
  },
  {
    l: "Web Design Chitlapakkam",
    h: "/web-design-chitlapakkam",
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
    <footer
      ref={ref}
      className="relative bg-background border-t border-border overflow-hidden"
    >
      <div className="relative w-full px-5 sm:px-10 lg:px-24 pt-20 sm:pt-28 lg:pt-36 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — CTA + contact */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">
              — Get In Touch
            </p>

            <h2 className="foot-mark font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] font-bold text-foreground tracking-tight">
              Ready to build
              <br />
              something that{" "}
              <span className="italic text-accent font-normal">
                works
              </span>
              ?
            </h2>

            <p className="mt-5 sm:mt-7 text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base font-light">
              SmartPixel — Conversion-focused websites, apps, and
              growth systems for businesses in{" "}
              <strong className="text-foreground/80 font-semibold">
                Chennai
              </strong>{" "}
              that mean business.
            </p>

            <a
              href="/contact"
              className="btn-gold mt-7 sm:mt-9 inline-block"
              title="Book your direct strategy consultation"
            >
              Book Your Strategy Call →
            </a>

            {/* Contact Cards */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+919886069488"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Call SmartPixel on primary business number"
              >
                <Phone
                  size={16}
                  className="text-accent shrink-0"
                />

                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                    Call
                  </div>

                  <div className="text-sm font-display font-medium text-foreground">
                    +91 98860 69488
                  </div>
                </div>
              </a>

              <a
                href="tel:+919164975073"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Call SmartPixel on secondary business number"
              >
                <Phone
                  size={16}
                  className="text-accent shrink-0"
                />

                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                    Call
                  </div>

                  <div className="text-sm font-display font-medium text-foreground">
                    +91 91649 75073
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/919886069488"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Chat with SmartPixel on WhatsApp"
              >
                <MessageCircle
                  size={16}
                  className="text-accent shrink-0"
                />

                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                    WhatsApp
                  </div>

                  <div className="text-sm font-display font-medium text-foreground">
                    Chat with us
                  </div>
                </div>
              </a>

              <a
                href="mailto:workwithsmartpixel@gmail.com"
                className="glass p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
                aria-label="Email SmartPixel"
              >
                <Mail
                  size={16}
                  className="text-accent shrink-0"
                />

                <div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                    Email
                  </div>

                  <div className="text-sm font-display font-medium text-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px] sm:max-w-[180px]">
                    workwithsmartpixel@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT — Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 lg:pl-10">
            {/* Services + Pages */}
            {cols.map((c) => (
              <div
                key={c.title}
                className="foot-col"
              >
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
                        <span
                          className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500"
                          aria-hidden="true"
                        />

                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Areas We Serve */}
            <div className="foot-col col-span-2 sm:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6 font-semibold">
                — Areas We Serve
              </p>

              <nav aria-label="Web design and development areas served across Chennai">
                <ul className="space-y-3">
                  {areaLinks.map((lk) => (
                    <li key={lk.l}>
                      <a
                        href={lk.h}
                        className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors duration-500"
                        title={`${lk.l} services by SmartPixel`}
                      >
                        <span
                          className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500"
                          aria-hidden="true"
                        />

                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Address / Studio */}
            <div className="foot-col col-span-2 sm:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6 font-semibold">
                — Studio
              </p>

              <address className="not-italic text-sm text-muted-foreground leading-[1.9] flex flex-col gap-2 font-light">
                <a
                  href="mailto:workwithsmartpixel@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail
                    size={13}
                    className="text-accent shrink-0"
                  />

                  workwithsmartpixel@gmail.com
                </a>

                <a
                  href="tel:+919886069488"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone
                    size={13}
                    className="text-accent shrink-0"
                  />

                  +91 98860 69488
                </a>

                <a
                  href="tel:+919164975073"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone
                    size={13}
                    className="text-accent shrink-0"
                  />

                  +91 91649 75073
                </a>

                <span className="flex items-center gap-2">
                  <MapPin
                    size={13}
                    className="text-accent shrink-0"
                  />

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
       
      

        {/* Bottom bar */}
        <div className="mt-8 pt-7 border-t border-border flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
          <div className="flex items-center gap-3 select-none">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
              aria-hidden="true"
            />

            Accepting new projects
          </div>

          <div>
            © {new Date().getFullYear()} SmartPixel — All rights reserved
          </div>

          <div className="flex gap-5">
            <a
              href="/privacy-policy"
              className="hover:text-accent transition-colors"
              title="Review privacy guidelines"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="hover:text-accent transition-colors"
              title="Review terms of service"
            >
              Terms
            </a>

            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new Event("open-cookie-settings")
                )
              }
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