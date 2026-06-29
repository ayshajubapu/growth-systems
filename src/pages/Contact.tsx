import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import WeightedHeading from "@/components/WeightedHeading";

const Contact = () => {
  // Form handling state
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API processing endpoint safely
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSuccess(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>Contact SmartPixel | Website Development Company in Chennai</title>
        <meta
          name="description"
          content="Get in touch with SmartPixel — a premium website development company in Chennai. Call +91 98860 69488, chat via WhatsApp, or submit an inquiry instantly. Serving Chrompet, Pallavaram, Tambaram, and Guindy."
        />
        <link rel="canonical" href="https://www.smartpixel.in/contact" />
        <meta property="og:title" content="Contact SmartPixel | Website Development Chennai" />
        <meta property="og:description" content="Talk to SmartPixel about your website, ecommerce or SEO project. Based in Chrompet, Chennai." />
        <meta property="og:url" content="https://www.smartpixel.in/contact" />
        <meta property="og:type" content="website" />

        {/* BreadcrumbList schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.smartpixel.in/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.smartpixel.in/contact" }
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
              "areaServed": ["Chennai", "Pallavaram", "Tambaram", "Chrompet", "Guindy", "T Nagar", "Saidapet", "Nungambakkam"]
            }
          })}
        </script>
      </Helmet>

      <Nav />
      <div className="pt-24" />

      <section className="px-5 sm:px-10 lg:px-20 py-16 max-w-[1200px] mx-auto">
        <WeightedHeading
          text="Talk to a website expert in Chennai"
          className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
          lightClassName="font-light italic text-accent"
        />

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          Whether you need a new website, an ecommerce storefront, SEO positioning or 
          custom WhatsApp workflows — SmartPixel is rooted in{" "}
          <strong className="text-foreground/70">Chrompet, Chennai</strong> and services businesses across 
          major development areas.
        </p>

        {/* NEW COMPONENT LAYOUT: Integrated Quick Inquiries Form Side-by-Side with Metadata Cards */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Grid: Contact Meta Details */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 98860 69488", href: "tel:+919886069488" },
              { icon: Mail, label: "Email", value: "workwithsmartpixel@gmail.com", href: "mailto:workwithsmartpixel@gmail.com" },
              { icon: MapPin, label: "Location", value: "Chrompet, Chennai — TN 600044", href: "https://maps.google.com/?q=Chrompet+Chennai" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9 AM to 7 PM IST", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="border border-border bg-surface/20 rounded-xl p-5 flex flex-col gap-2.5 hover:border-accent/40 transition-colors"
              >
                <Icon size={18} className="text-accent" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors leading-snug break-all"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground leading-snug">{value}</p>
                )}
              </div>
            ))}

            {/* Direct High-Conversion WhatsApp Micro-Action Card */}
            <a
              href="https://wa.me/919886069488?text=Hi%20SmartPixel,%20I%27d%20like%20to%20discuss%20a%20web%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="sm:col-span-2 lg:col-span-1 flex items-center justify-center gap-3 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 font-medium p-4 rounded-xl text-xs uppercase tracking-wider border border-emerald-500/20 transition-all group"
            >
              <MessageSquare size={16} className="group-hover:scale-110 transition-transform" /> 
              Instant WhatsApp Consultation
            </a>
          </div>

          {/* Right Grid: Active Lead Generation Form Container */}
          <div className="lg:col-span-7 border border-border bg-surface/40 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            {isSuccess ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
                <CheckCircle2 size={48} className="text-accent mb-4" />
                <h3 className="text-xl font-display font-medium mb-2">Requirements Received!</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Our web development team will analyze your business profile and reach back via phone or email within 2 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-xs text-accent underline underline-offset-4 font-medium"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl sm:text-2xl mb-2">Send a Quick Message</h3>
                <p className="text-xs text-muted-foreground pb-2">Fill in your requirements below for an accurate turnaround quote.</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] uppercase tracking-wider text-muted-foreground">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                      placeholder="e.g., Rajesh Kumar"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[11px] uppercase tracking-wider text-muted-foreground">Contact Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                      placeholder="e.g., +91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-accent/60 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] uppercase tracking-wider text-muted-foreground">Project Details</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-accent/60 transition-colors resize-none"
                    placeholder="Tell us about your business, required pages, or features (e.g., e-commerce storefront, local business site, SEO setup)..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-widest hover:bg-accent/90 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? "Processing..." : (
                    <>
                      Submit Project Requirements <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Geographic Core Linking Index Container */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Areas we serve in Chennai
          </p>
          <nav aria-label="Service areas in Chennai">
            <ul className="flex flex-wrap gap-2.5">
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
                  {/* FIXED: Switched plain anchor tags to React Router Link items to avoid application reboots */}
                  <Link
                    to={href}
                    className="inline-block text-xs px-3.5 py-1.5 rounded-full border border-border bg-surface/30 text-muted-foreground hover:border-accent/60 hover:text-accent transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Contact;