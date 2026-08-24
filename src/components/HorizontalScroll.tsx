import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";

import {
  Users,
  Star,
  Trophy,
  Phone,
  MessageSquare,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

/* =========================================================
   LAZY LOAD ORB
   ========================================================= */

const Orb = lazy(
  () => import("@/components/Orb")
);

/* =========================================================
   CLIENTS
   ========================================================= */

const clients = [
  "Al Miraj",
  "Travel Hub Tambaram",
  "Gulf To World",
  "Arabian Vibes",
  "Triumph Travel & Tourism",
  "LTS Learning Academy",
  "Surya Prakash Metals",
  "Priya Silver Jewellery",
  "Manohar Jewelleries",
  "Fotrio Edu",
  "Manha Hajj & Umrah",
];

/* =========================================================
   SERVICE AREAS
   ========================================================= */

const areas = [
  {
    name: "Chrompet",
    href: "/web-design-chrompet",
  },
  {
    name: "Tambaram",
    href: "/web-design-tambaram",
  },
  {
    name: "Pallavaram",
    href: "/web-design-pallavaram",
  },
  {
    name: "Guindy",
    href: "/web-design-guindy",
  },
  {
    name: "T Nagar",
    href: "/web-design-t-nagar",
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

const HorizontalScroll = () => {
  const [showOrb, setShowOrb] = useState(false);

  /* =======================================================
     LAZY LOAD DECORATIVE ORB
     
     The Orb is decorative only.
     It should never block the main content or CTA.
     ======================================================= */

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.matchMedia(
      "(max-width: 767px)"
    ).matches;

    if (reduceMotion || isMobile) {
      return;
    }

    let cancelled = false;

    const loadOrb = () => {
      if (!cancelled) {
        setShowOrb(true);
      }
    };

    /*
     * Use requestIdleCallback where available.
     * This allows the browser to finish important
     * page work before loading the decorative Orb.
     */
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        loadOrb,
        {
          timeout: 1800,
        }
      );

      return () => {
        cancelled = true;

        if ("cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        }
      };
    }

    /*
     * Fallback for browsers without requestIdleCallback.
     */
    const timeoutId = window.setTimeout(
      loadOrb,
      1200
    );

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative bg-background">

      {/* ===================================================
          SEO
          =================================================== */}

      <Helmet>

        <title>
          Web Design & Development Company in Chennai | SmartPixel
        </title>

        <meta
          name="description"
          content="SmartPixel is a Chennai web design and development company building fast, conversion-focused websites, ecommerce stores, web apps and SEO systems for businesses in Chennai and across India."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="SmartPixel"
        />

        <link
          rel="canonical"
          href="https://smartpixel.in/"
        />

        <meta
          property="og:title"
          content="Web Design & Development Company in Chennai | SmartPixel"
        />

        <meta
          property="og:description"
          content="SmartPixel builds conversion-focused websites, ecommerce stores, web applications and SEO systems for businesses in Chennai and across India."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://smartpixel.in/"
        />

        <meta
          property="og:image"
          content="https://smartpixel.in/og-banner.jpg"
        />

        <meta
          property="og:site_name"
          content="SmartPixel"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Web Design & Development Company in Chennai | SmartPixel"
        />

        <meta
          name="twitter:description"
          content="Conversion-focused websites, ecommerce, web apps and SEO systems for businesses in Chennai."
        />

        <meta
          name="twitter:image"
          content="https://smartpixel.in/og-banner.jpg"
        />

      </Helmet>

      {/* ===================================================
          HERO
          =================================================== */}

      <section
        className="
          relative
          w-full
          flex
          flex-col
          px-5
          sm:px-10
          lg:px-20
          pt-28
          pb-12
        "
      >

        {/* =================================================
            BACKGROUND GRID
            ================================================= */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            pointer-events-none
            bg-background
          "
        >
          <div
            className="
              absolute
              inset-0
              opacity-[0.05]
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, hsl(var(--accent)) 0 1px, transparent 1px 9%)",
            }}
          />
        </div>

        {/* =================================================
            DESKTOP ORB

            Decorative only.
            It loads after the important content.
            ================================================= */}

        {showOrb && (
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
            "
          >
            <div
              className="
                relative
                w-[min(90vw,760px)]
                aspect-square
                opacity-[0.55]
              "
            >
              <Suspense fallback={null}>
                <Orb
                  hue={210}
                  hoverIntensity={0.4}
                  rotateOnHover
                  backgroundColor="#000000"
                />
              </Suspense>
            </div>
          </div>
        )}

        {/* =================================================
            HERO CONTENT
            ================================================= */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
            w-full
          "
        >
          <div
            className="
              w-full
              max-w-4xl
              mx-auto
              text-center
              flex
              flex-col
              items-center
            "
          >

            {/* =================================================
                H1
                ================================================= */}

            <h1
              className="
                font-display
                text-[8.5vw]
                sm:text-[6.5vw]
                lg:text-[4.2vw]
                leading-[1.05]
                tracking-tight
                text-balance
                font-normal
              "
            >

              <span
                className="
                  font-light
                  text-muted-foreground
                  text-sm
                  sm:text-base
                  uppercase
                  tracking-[0.3em]
                  block
                  mb-3
                "
              >
                Web Design & Development Company in Chennai
              </span>

              Websites that bring your business{" "}

              <span
                className="
                  font-normal
                  italic
                  text-accent
                "
              >
                more enquiries
              </span>
              .

            </h1>

            {/* =================================================
                INTRO
                ================================================= */}

            <p
              className="
                mt-5
                text-base
                sm:text-lg
                text-muted-foreground
                max-w-2xl
                leading-relaxed
                mx-auto
              "
            >
              SmartPixel builds fast, SEO-ready websites for
              businesses in Chennai that turn Google visitors
              into calls, WhatsApp enquiries and customers.
              Get a clear quote and speak directly with our team.
            </p>

            {/* =================================================
                AREAS
                ================================================= */}

            <nav
              aria-label="Chennai areas we serve"
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-2
                text-xs
                text-muted-foreground
              "
            >

              <span
                className="
                  uppercase
                  tracking-widest
                  mr-1
                  opacity-50
                "
              >
                Areas:
              </span>

              {areas.map((area, index) => (
                <span
                  key={area.name}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <a
                    href={area.href}
                    className="
                      hover:text-accent
                      underline
                      underline-offset-2
                      transition-colors
                    "
                  >
                    {area.name}
                  </a>

                  {index < areas.length - 1 && (
                    <span className="opacity-30">
                      ·
                    </span>
                  )}

                </span>
              ))}

            </nav>

            {/* =================================================
                PRIMARY CTA
                ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
              "
            >

              {/* PHONE CTA */}

              <a
                href="tel:+919886069488"
                aria-label="Call SmartPixel at +91 98860 69488"
                className="
                  btn-gold
                  shadow-lg
                  shadow-accent/10
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Phone size={16} />

                Call SmartPixel
              </a>

              {/* WHATSAPP CTA */}

              <a
                href="https://wa.me/919886069488?text=Hi%20SmartPixel%2C%20I%20found%20you%20online%20and%20I%27d%20like%20to%20get%20a%20free%20website%20quote."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a free website quote from SmartPixel on WhatsApp"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-foreground
                  text-background
                  px-5
                  py-3
                  rounded
                  text-sm
                  uppercase
                  tracking-wider
                  border
                  border-foreground
                  transition-all
                  hover:opacity-90
                "
              >
                <MessageSquare size={16} />

                Get Free Quote on WhatsApp
              </a>

            </div>

            {/* REASSURANCE */}

            <p
              className="
                mt-4
                text-xs
                text-muted-foreground
                text-center
              "
            >
              No pressure. Tell us what you need and
              we’ll suggest the right solution.
            </p>

            {/* =================================================
                EXPERTISE
                ================================================= */}

            <nav
              aria-label="SmartPixel services"
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-2
                text-xs
                text-muted-foreground
              "
            >

              <span
                className="
                  uppercase
                  tracking-widest
                  mr-1
                  opacity-50
                "
              >
                Expertise:
              </span>

              <a
                href="/services/web-design-chennai"
                className="
                  hover:text-accent
                  underline
                  underline-offset-2
                  transition-colors
                "
              >
                Web Design
              </a>

              <span className="opacity-30">
                ·
              </span>

              <a
                href="/ecommerce-website-chennai"
                className="
                  hover:text-accent
                  underline
                  underline-offset-2
                  transition-colors
                "
              >
                E-commerce Stores
              </a>

              <span className="opacity-30">
                ·
              </span>

              <a
                href="/seo-services-chennai"
                className="
                  hover:text-accent
                  underline
                  underline-offset-2
                  transition-colors
                "
              >
                SEO
              </a>

              <span className="opacity-30">
                ·
              </span>

              <a
                href="/whatsapp-automation-chennai"
                className="
                  hover:text-accent
                  underline
                  underline-offset-2
                  transition-colors
                "
              >
                WhatsApp Automation
              </a>

            </nav>

          </div>
        </div>

        {/* =================================================
            TRUST STRIP
            ================================================= */}

        <div
          className="
            relative
            mt-10
            border-t
            border-foreground/10
            pt-6
          "
        >

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
            "
          >

            {[
              {
                v: "20+",
                l: "Projects",
                I: Users,
              },
              {
                v: "98%",
                l: "Satisfaction",
                I: Star,
              },
              {
                v: "2 wk",
                l: "Avg turnaround",
                I: Trophy,
              },
              {
                v: "Chennai",
                l: "Based team",
                I: Phone,
              },
            ].map(
              ({
                v,
                l,
                I,
              }) => (
                <div
                  key={l}
                  className="
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  <I
                    size={20}
                    className="
                      text-accent
                      mb-2
                    "
                  />

                  <div
                    className="
                      num-display
                      text-3xl
                      md:text-4xl
                      text-accent
                    "
                  >
                    {v}
                  </div>

                  <div
                    className="
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-muted-foreground
                      mt-1.5
                    "
                  >
                    {l}
                  </div>

                </div>
              )
            )}

          </div>
        </div>

      </section>

      {/* =====================================================
          CONVERSION CTA
          ===================================================== */}

      <section
        className="
          w-full
          border-y
          border-border
          bg-surface
          px-5
          sm:px-10
          lg:px-20
          py-12
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <div className="text-center md:text-left">

            <p className="eyebrow mb-3">
              — Ready to grow?
            </p>

            <h2
              className="
                font-display
                text-3xl
                sm:text-4xl
                leading-tight
              "
            >
              Need a website that brings enquiries?
            </h2>

            <p
              className="
                mt-3
                text-sm
                text-muted-foreground
                max-w-xl
              "
            >
              Tell us about your business. Get a clear
              recommendation and quote without a complicated
              sales process.
            </p>

          </div>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
              shrink-0
            "
          >

            <a
              href="tel:+919886069488"
              className="
                btn-gold
                inline-flex
                items-center
                justify-center
                gap-2
              "
            >
              <Phone size={16} />
              Call SmartPixel
            </a>

            <a
              href="https://wa.me/919886069488?text=Hi%20SmartPixel%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border
                border-border
                bg-background
                text-foreground
                px-5
                py-3
                rounded
                text-sm
                uppercase
                tracking-wider
                transition-all
                hover:border-accent
                hover:text-accent
              "
            >
              <MessageSquare size={16} />
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          DIFFERENCE SECTION
          ===================================================== */}

      <section
        className="
          relative
          w-full
          grid
          md:grid-cols-2
          border-t
          border-border
        "
      >

        {/* LEFT */}

        <div
          className="
            flex
            flex-col
            justify-center
            px-5
            sm:px-10
            lg:px-24
            py-14
          "
        >

          <p
            className="eyebrow mb-5"
          >
            — The Difference
          </p>

          <h2
            className="
              font-display
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-[1.05]
              mb-6
            "
          >
            Chennai agencies promise.

            <br />

            We show up in your{" "}

            <span className="italic text-accent">
              analytics
            </span>
            .
          </h2>

          <p
            className="
              text-muted-foreground
              max-w-md
              leading-relaxed
            "
          >
            Here's what working with a{" "}

            <strong className="text-foreground/70">
              website development team in Chennai
            </strong>{" "}

            that takes ownership actually looks like.
          </p>

        </div>

        {/* RIGHT */}

        <div
          className="
            bg-surface
            flex
            flex-col
            justify-center
            px-5
            sm:px-10
            lg:px-24
            py-12
            border-t
            md:border-t-0
            md:border-l
            border-border
          "
        >

          {[
            {
              k: "Unlimited Revisions",
              v: "We don't count rounds. You'll know when it's right — and so will we. Until then, we keep going.",
            },
            {
              k: "Fast Turnaround",
              v: "Updates every 24 to 48 hours. Silence is where projects go to die — you stay in the loop at every stage.",
            },
            {
              k: "One Team, Zero Handoffs",
              v: "No account managers who don't know the code. One team owns your project, and you talk to the people doing the work.",
            },
          ].map(
            (item, i) => (
              <div
                key={item.k}
                className={`
                  py-5
                  ${
                    i !== 0
                      ? "border-t border-border"
                      : ""
                  }
                `}
              >

                <div
                  className="
                    flex
                    items-baseline
                    gap-4
                    sm:gap-6
                  "
                >

                  <span
                    className="
                      text-xs
                      text-muted-foreground
                      tracking-[0.3em]
                    "
                  >
                    0{i + 1}
                  </span>

                  <div>

                    <h3
                      className="
                        font-display
                        text-xl
                        sm:text-2xl
                        md:text-3xl
                        mb-2
                      "
                    >
                      {item.k}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-muted-foreground
                      "
                    >
                      {item.v}
                    </p>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </section>

      {/* =====================================================
          CLIENT MARQUEE
          ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          border-y
          border-border
          bg-background
          py-5
        "
      >

        <p
          className="
            text-center
            text-[9px]
            uppercase
            tracking-[0.4em]
            text-muted-foreground/60
            mb-3
          "
        >
          Trusted by businesses across India and beyond
        </p>

        <div
          className="
            flex
            whitespace-nowrap
            animate-marquee
            gap-12
            text-muted-foreground
            mt-1
          "
        >

          {Array.from({
            length: 2,
          }).map((_, k) => (

            <div
              key={k}
              className="
                flex
                items-center
                gap-12
                shrink-0
              "
            >

              {clients.map(
                (client) => (

                  <span
                    key={`${k}-${client}`}
                    className="
                      font-display
                      text-2xl
                      sm:text-3xl
                      italic
                    "
                  >

                    {client}

                    <span
                      className="
                        text-accent
                        not-italic
                        ml-12
                      "
                    >
                      ·
                    </span>

                  </span>

                )
              )}

            </div>

          ))}

        </div>

      </div>

      {/* =====================================================
          MOBILE CALL / WHATSAPP BAR
          ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          md:hidden
          border-t
          border-border
          bg-background/95
          backdrop-blur
          px-3
          py-2
        "
      >

        <div
          className="
            grid
            grid-cols-2
            gap-2
            max-w-lg
            mx-auto
          "
        >

          <a
            href="tel:+919886069488"
            aria-label="Call SmartPixel"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              btn-gold
              py-3
              rounded
              text-xs
              uppercase
              tracking-wider
            "
          >
            <Phone size={15} />
            Call Now
          </a>

          <a
            href="https://wa.me/919886069488?text=Hi%20SmartPixel%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp SmartPixel"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-foreground
              text-background
              py-3
              rounded
              text-xs
              uppercase
              tracking-wider
            "
          >
            <MessageSquare size={15} />
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default HorizontalScroll;