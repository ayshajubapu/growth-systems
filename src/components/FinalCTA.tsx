import { useEffect, useRef, useState, FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Interactive Inquiry Inline State
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Narrowing our selector to ref.current protects against picking up global classes
    const ctx = gsap.context((self) => {
      if (!self.selector) return;
      gsap.from(self.selector(".cta-el"), {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const handleQuickSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Direct API simulation line
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-background py-24 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24 border-t border-border/60 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Heading Stack */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="cta-el text-[11px] uppercase tracking-[0.3em] text-accent mb-4 block">
            — Let's Build Your Project
          </p>

          <h2 className="cta-el font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl mx-auto text-balance font-normal tracking-tight">
            Your next website should{" "}
            <span className="block sm:inline">make you money.</span>
            <br />
            <span className="italic font-light text-accent/90">
              Let's make sure it does.
            </span>
          </h2>

          <p className="cta-el mt-6 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            No jargon. No pressure. Just honest advice from a Chennai team about whether we’re the right fit for your business goals.
          </p>
        </div>

        {/* Dynamic Split Action Layout: Info Cards vs Inline Quick Lead Intake */}
        <div className="cta-el grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Grid: Premium Informational Contact Nodes */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {
                Icon: Phone,
                label: "Call Us Direct",
                value: "+91 98860 69488",
                href: "tel:+919886069488",
                target: undefined,
              },
              {
                Icon: MessageCircle,
                label: "WhatsApp Chat",
                value: "Instant Consultation",
                href: "https://wa.me/919886069488?text=Hi%20SmartPixel,%20I'd%20like%20to%20discuss%20a%20web%20project.",
                target: "_blank",
              },
              {
                Icon: Mail,
                label: "Email Workspace",
                value: "workwithsmartpixel@gmail.com",
                href: "mailto:workwithsmartpixel@gmail.com",
                target: undefined,
              },
              {
                Icon: MapPin,
                label: "Studio Base",
                value: "Chrompet, Chennai",
                href: "https://maps.google.com/?q=Chrompet+Chennai",
                target: "_blank",
              },
            ].map(({ Icon, label, value, href, target }) => (
              <a
                key={label}
                href={href}
                target={target}
                rel={target ? "noopener noreferrer" : undefined}
                className="group p-5 rounded-xl border border-border/80 bg-surface/10 hover:border-accent/40 hover:bg-surface/30 transition-all duration-300 flex flex-col justify-between min-h-[120px]"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                  <Icon size={16} />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                    {label}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-foreground/80 font-medium tracking-tight break-all">
                    {value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right Grid: High-Conversion Quick Capture Node */}
          <div className="lg:col-span-5 border border-border/80 bg-surface/20 rounded-xl p-6 flex flex-col justify-center">
            {isSuccess ? (
              <div className="text-center py-6 flex flex-col items-center justify-center animate-fade-in">
                <CheckCircle2 size={36} className="text-emerald-400 mb-3" />
                <h4 className="text-base font-medium mb-1">We'll reach out shortly!</h4>
                <p className="text-xs text-muted-foreground max-w-[240px] mx-auto">
                  Our development strategist will drop you an email within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Want a callback?</h4>
                  <p className="text-xs text-muted-foreground">Drop your email below and we'll touch base with you.</p>
                </div>
                
                <div className="space-y-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-background border border-border rounded-lg px-3.5 py-2.5 text-xs focus:outline-none focus:border-accent/60 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-4 py-2.5 rounded-lg text-[10px] uppercase tracking-widest hover:bg-accent/95 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? "Connecting..." : (
                      <>
                        Get Free Strategy Call <Send size={11} />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[10px] text-center text-muted-foreground/60">
                  Zero spam · Responding within 24 hours max
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;