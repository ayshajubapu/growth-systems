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
    <section id="contact" ref={ref} className="relative bg-background py-40 lg:py-56 px-8 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 glow-bg animate-glow-pulse pointer-events-none" />
      <div className="relative max-w-[1500px] mx-auto text-center">
        <p className="cta-el eyebrow mb-10">— Limited Engagements / 2026</p>
        <h2 className="cta-el font-display text-5xl md:text-8xl leading-[1] max-w-5xl mx-auto text-balance">
          Let's build your<br/><span className="italic text-accent">growth system</span>.
        </h2>
        <p className="cta-el mt-12 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          We accept a small number of new partners each quarter. Apply for an introductory strategy call.
        </p>
        <div className="cta-el mt-16 flex flex-wrap gap-4 justify-center">
          <a href="mailto:hello@maison.studio" className="btn-gold">Book Consultation →</a>
          <a href="#" className="btn-ghost">Apply To Work With Us</a>
        </div>
      </div>

      <footer className="relative max-w-[1500px] mx-auto mt-40 pt-12 border-t border-border flex flex-wrap items-center justify-between gap-6">
        <div className="font-display text-xl">Maison<span className="text-accent">.</span></div>
        <div className="flex gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">X</a>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">© 2026 Maison Studio</div>
      </footer>
    </section>
  );
};

export default FinalCTA;
