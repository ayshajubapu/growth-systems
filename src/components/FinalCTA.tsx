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
          Let's build your<br/><span className="italic text-accent">growth system</span>.
        </h2>
        <p className="cta-el mt-8 sm:mt-12 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We accept a small number of new partners each quarter. Apply for an introductory strategy call.
        </p>
        <div className="cta-el mt-12 sm:mt-16 flex flex-wrap gap-3 sm:gap-4 justify-center">
          <a href="mailto:hello@usine.studio" className="btn-gold">Book Consultation →</a>
          <a href="#" className="btn-ghost">Apply To Work With Us</a>
        </div>
      </div>

      <footer className="relative max-w-[1500px] mx-auto mt-24 sm:mt-40 pt-10 sm:pt-12 border-t border-border flex flex-wrap items-center justify-between gap-5 sm:gap-6">
        <div className="font-display text-lg sm:text-xl">Usine<span className="text-accent">.</span>Studio</div>
        <div className="flex gap-6 sm:gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">X</a>
        </div>
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">© 2026 Usine Studio</div>
      </footer>
    </section>
  );
};

export default FinalCTA;
