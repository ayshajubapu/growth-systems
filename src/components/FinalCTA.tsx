import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-el", {
        y: 70,
        opacity: 0,
        duration: 1.2,
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
    <section
      id="contact"
      ref={ref}
      className="relative bg-background py-24 sm:py-36 lg:py-48 px-5 sm:px-10 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full opacity-[0.05] bg-accent blur-3xl" />

      <div className="relative max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="cta-el eyebrow mb-6 sm:mb-8">
            — Let's Start
          </p>

          <h2 className="cta-el font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1] max-w-5xl mx-auto text-balance">
            Your next website should
            <br />
            make you money.
            <br />
            <span className="italic text-accent">
              Let's make sure it does.
            </span>
          </h2>

          <p className="cta-el mt-6 sm:mt-10 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            No jargon. No pressure. Just honest advice about whether we’re the
            right fit for your business.
          </p>

          {/* Buttons */}
          <div className="cta-el mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <a
              href="mailto:workwithsmartpixel@gmail.com"
              className="btn-gold"
            >
              Book Your Free Strategy Call →
            </a>

            <a
              href="https://wa.me/919886069488"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="cta-el mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            We’ll respond within 24 hours · If we can’t help, we’ll tell you that too
          </p>
        </div>

        {/* Premium Contact Cards */}
        <div className="cta-el grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            {
              Icon: Phone,
              label: "Call Us",
              value: "+91 98860 69488",
              href: "tel:+919886069488",
            },
            {
              Icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat Instantly",
              href: "https://wa.me/919886069488",
            },
            {
              Icon: Mail,
              label: "Email",
              value: "workwithsmartpixel@gmail.com",
              href: "mailto:workwithsmartpixel@gmail.com",
            },
            {
              Icon: MapPin,
              label: "Studio",
              value: "Chrompet, Chennai",
              href: "#",
            },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glass group p-6 sm:p-7 rounded-2xl border border-border hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon size={18} className="text-accent" />
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  {label}
                </div>

                <div className="font-display text-sm sm:text-base text-foreground/90 group-hover:text-accent transition-colors break-all">
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;