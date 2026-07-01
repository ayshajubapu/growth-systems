import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import ServicesDeep from "@/components/ServicesDeep";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WeightedHeading from "@/components/WeightedHeading";

const Services = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>Services Overview — Web, App, E-commerce & SEO Chennai | SmartPixel</title>
      <meta
        name="description"
        content="Overview of SmartPixel's digital services in Chennai — web design, web apps, mobile apps, e-commerce, SEO, WhatsApp automation & digital marketing. Compare and choose the right service."
      />
      <link rel="canonical" href="https://www.smartpixel.in/services" />
      <meta property="og:title" content="Services Overview — SmartPixel Chennai" />
      <meta property="og:url" content="https://www.smartpixel.in/services" />
      <meta property="og:type" content="website" />
    </Helmet>

    <Nav />
    <div className="pt-24" />

    {/* Unique overview intro — differentiates this hub page from individual service pages */}
    <header className="px-5 sm:px-10 lg:px-20 pt-12 max-w-[1200px] mx-auto">
      <WeightedHeading
        text="SmartPixel Services — Web Design, App Development, E-commerce & SEO in Chennai"
        className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
      />
      <p className="mt-6 text-muted-foreground text-lg max-w-3xl leading-relaxed">
        This is the overview hub for every service we offer. Below is a quick summary — for full pricing,
        deliverables, timelines and case studies of each service, follow the dedicated pages linked in each
        section.
      </p>
      <nav aria-label="Service quick links" className="mt-6 flex flex-wrap gap-2 text-sm">
        {[
          { href: "/services/web-design-chennai", label: "Web Design →" },
          { href: "/ecommerce-website-chennai", label: "E-commerce →" },
          { href: "/services/web-app-development", label: "Web Apps →" },
          { href: "/services/mobile-app-development", label: "Mobile Apps →" },
          { href: "/seo-services-chennai", label: "SEO →" },
          { href: "/services/digital-marketing-chennai", label: "Digital Marketing →" },
          { href: "/whatsapp-automation-chennai", label: "WhatsApp Automation →" },
        ].map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className="inline-block px-3 py-1.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>

    <ServicesDeep />
    <FinalCTA />
    <Footer />
  </main>
);

export default Services;
