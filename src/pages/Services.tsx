import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import ServicesDeep from "@/components/ServicesDeep";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const serviceLinks = [
  {
    href: "/services/web-design-chennai",
    label: "Web Design",
  },
  {
    href: "/ecommerce-website-chennai",
    label: "E-commerce",
  },
  {
    href: "/services/web-app-development",
    label: "Web Apps",
  },
  {
    href: "/services/mobile-app-development",
    label: "Mobile Apps",
  },
  {
    href: "/seo-services-chennai",
    label: "SEO",
  },
  {
    href: "/services/digital-marketing-chennai",
    label: "Digital Marketing",
  },
  {
    href: "/whatsapp-automation-chennai",
    label: "WhatsApp Automation",
  },
];

const Services = () => {
  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>
          Web Design, Development, E-commerce & SEO Services in Chennai | SmartPixel
        </title>

        <meta
          name="description"
          content="Explore SmartPixel's web design, website development, e-commerce, web app, mobile app, SEO, digital marketing and WhatsApp automation services for businesses in Chennai and across India."
        />

        <link
          rel="canonical"
          href="https://smartpixel.in/services"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          property="og:title"
          content="Web Design, Development, E-commerce & SEO Services in Chennai | SmartPixel"
        />

        <meta
          property="og:description"
          content="Explore SmartPixel's web design, website development, e-commerce, web app, mobile app, SEO, digital marketing and WhatsApp automation services for businesses in Chennai and across India."
        />

        <meta
          property="og:url"
          content="https://smartpixel.in/services"
        />

        <meta
          property="og:type"
          content="website"
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
          content="Web Design, Development, E-commerce & SEO Services in Chennai | SmartPixel"
        />

        <meta
          name="twitter:description"
          content="Web design, development, e-commerce, mobile apps, SEO, digital marketing and WhatsApp automation for businesses in Chennai and across India."
        />
      </Helmet>

      <Nav />

      {/* Navigation offset */}
      <div
        className="pt-24"
        aria-hidden="true"
      />

      {/* Page introduction */}
      <header className="px-5 sm:px-10 lg:px-20 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
        <div className="max-w-5xl">
          <p className="text-xs sm:text-sm tracking-[0.08em] text-accent font-semibold mb-4">
            SmartPixel Services
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground font-bold text-balance">
            Web Design, Development, E-commerce & SEO Services in Chennai
          </h1>

          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
            SmartPixel helps businesses build and grow their digital presence
            through high-performance websites, web applications, e-commerce
            platforms, mobile apps, SEO and digital marketing. Explore our
            services below and choose the solution that fits your business
            goals.
          </p>

          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-3xl leading-relaxed">
            We work with businesses in Chennai and across India, combining
            strategy, design, development and search visibility into practical
            digital systems built to generate enquiries, sales and long-term
            growth.
          </p>

          {/* Service navigation */}
          <nav
            aria-label="Service categories"
            className="mt-8 flex flex-wrap gap-2 sm:gap-3"
          >
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="inline-flex items-center min-h-10 px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-accent hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {service.label}
                <span
                  aria-hidden="true"
                  className="ml-1.5"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main service overview */}
      <ServicesDeep />

      {/* Final conversion section */}
      <FinalCTA />

      <Footer />
    </main>
  );
};

export default Services;