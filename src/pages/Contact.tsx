
import Nav from "@/components/Nav";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import WeightedHeading from "@/components/WeightedHeading";
 
const Contact = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>Contact SmartPixel | Website Development Company in Chennai</title>
      <meta
        name="description"
        content="Get in touch with SmartPixel — website development company in Chennai. Call +91 98860 69488 or email us. Serving Chrompet, Pallavaram, Tambaram, Guindy and all Chennai."
      />
      <link rel="canonical" href="https://www.smartpixel.in/contact" />
      <meta property="og:title" content="Contact SmartPixel | Website Development Chennai" />
      <meta property="og:description" content="Talk to SmartPixel about your website, ecommerce or SEO project. Based in Chrompet, Chennai." />
      <meta property="og:url" content="https://www.smartpixel.in/contact" />
      <meta property="og:type" content="website" />
 
      {/* BreadcrumbList schema — helps Google show breadcrumbs in search results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.smartpixel.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": "https://www.smartpixel.in/contact"
            }
          ]
        })}
      </script>
 
      {/* ContactPage schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SmartPixel",
          "url": "https://www.smartpixel.in/contact",
          "description": "Contact SmartPixel, a website development company in Chennai, for websites, ecommerce, SEO and WhatsApp automation services.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "SmartPixel",
            "telephone": "+91-9886069488",
            "email": "workwithsmartpixel@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chrompet",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600044",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Chennai", "Pallavaram", "Tambaram", "Chrompet",
              "Guindy", "T Nagar", "Saidapet", "Nungambakkam"
            ]
          }
        })}
      </script>
    </Helmet>
 
    <Nav />
 
    <div className="pt-24" />
 
    {/*
      SEO FIX: Visible contact info section.
      Google needs real crawlable text on this page.
      This section is lightweight — it won't clash with FinalCTA below.
    */}
    <section className="px-5 sm:px-10 lg:px-20 py-16 max-w-[1200px] mx-auto">
 
      {/* H1 — keyword-rich and visible */}
      <WeightedHeading
        text="Talk to a website expert in Chennai"
        className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
        lightClassName="font-light italic text-accent"
      />
 
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
        Whether you need a new website, an ecommerce store, SEO services or
        WhatsApp automation — SmartPixel is based in{" "}
        <strong className="text-foreground/70">Chrompet, Chennai</strong> and
        serves businesses across Pallavaram, Tambaram, Guindy, T Nagar and
        Nungambakkam.
      </p>
 
      {/* Contact details grid — visible, crawlable, structured */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Phone,
            label: "Phone",
            value: "+91 98860 69488",
            href: "tel:+919886069488",
          },
          {
            icon: Mail,
            label: "Email",
            value: "workwithsmartpixel@gmail.com",
            href: "mailto:workwithsmartpixel@gmail.com",
          },
          {
            icon: MapPin,
            label: "Location",
            value: "Chrompet, Chennai — Tamil Nadu 600044",
            href: "https://maps.google.com/?q=Chrompet+Chennai",
          },
          {
            icon: Clock,
            label: "Working Hours",
            value: "Mon – Sat, 9 AM to 7 PM IST",
            href: null,
          },
        ].map(({ icon: Icon, label, value, href }) => (
          <div
            key={label}
            className="border border-border rounded-xl p-6 flex flex-col gap-3 hover:border-accent/40 transition-colors"
          >
            <Icon size={20} className="text-accent" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors leading-snug"
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {value}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground leading-snug">{value}</p>
            )}
          </div>
        ))}
      </div>
 
      {/* Areas served — adds local keyword density Google needs */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
          Areas we serve
        </p>
        <nav aria-label="Service areas in Chennai">
          <ul className="flex flex-wrap gap-2">
            {[
              { name: "Pallavaram", href: "/web-design-pallavaram" },
              { name: "Tambaram",   href: "/web-design-tambaram" },
              { name: "Chrompet",   href: "/web-design-chrompet" },
              { name: "Guindy",     href: "/web-design-guindy" },
              { name: "T Nagar",    href: "/web-design-t-nagar" },
              { name: "Saidapet",   href: "/web-design-saidapet" },
              { name: "Nungambakkam", href: "/web-design-nungambakkam" },
              { name: "Chitlapakkam", href: "/web-design-chitlapakkam" },
            ].map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
 
    {/* Your existing CTA component — unchanged */}
    <FinalCTA />
 
    <Footer />
  </main>
);
 
export default Contact;