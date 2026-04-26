import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-el", {
        y: 60, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative bg-background py-28 sm:py-40 lg:py-56 px-6 sm:px-10 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="relative max-w-[1500px] mx-auto text-center">
        <p className="cta-el eyebrow mb-8 sm:mb-10">— Limited Engagements / 2026</p>
        <h2 className="cta-el font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1] max-w-5xl mx-auto text-balance">
          Ready to train, build,<br/>and <span className="italic text-accent">grow — properly</span>?
        </h2>
        <p className="cta-el mt-8 sm:mt-12 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We work with a select number of partners each quarter. Whether you need a training programme, a new website, or a full digital marketing system — we'd like to hear about it.
        </p>
        <div className="cta-el mt-12 sm:mt-16 flex flex-wrap gap-3 sm:gap-4 justify-center">
          <a href="mailto:hello@startwithus.studio" className="btn-gold">Book a Strategy Call →</a>
          <a href="#" className="btn-ghost">Tell Us What You Need</a>
        </div>
      </div>

    </section>
  );
};

export default FinalCTA;
