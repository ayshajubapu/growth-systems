import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cols = [
  {
    title: "Studio",
    links: [
      { l: "About", h: "#studio" },
      { l: "Systems", h: "#systems" },
      { l: "Work", h: "#work" },
      { l: "Gallery", h: "#gallery" },
    ],
  },
  {
    title: "Engage",
    links: [
      { l: "Apply", h: "#contact" },
      { l: "Strategy Call", h: "#contact" },
      { l: "Voices", h: "#voices" },
      { l: "Insights", h: "#insights" },
    ],
  },
  {
    title: "Connect",
    links: [
      { l: "LinkedIn", h: "#" },
      { l: "Instagram", h: "#" },
      { l: "X / Twitter", h: "#" },
      { l: "Dribbble", h: "#" },
    ],
  },
];

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".foot-mark", {
        y: 80, opacity: 0, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".foot-col", {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="relative bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 glow-bg pointer-events-none opacity-60" />

      <div className="relative max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-24 pt-24 sm:pt-32 lg:pt-40 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">— A Studio In Practice</p>
            <h3 className="foot-mark font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Build something<br/>that <span className="italic text-accent">compounds</span>.
            </h3>
            <p className="mt-6 sm:mt-8 text-muted-foreground max-w-md leading-relaxed">
              Limited engagements each quarter. We reply to every serious enquiry within 48 hours.
            </p>
            <a href="#contact" className="btn-gold mt-8 sm:mt-10">Apply To Work With Us →</a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-8 lg:pl-10">
            {cols.map((c) => (
              <div key={c.title} className="foot-col">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6">— {c.title}</p>
                <ul className="space-y-3 sm:space-y-4">
                  {c.links.map((lk) => (
                    <li key={lk.l}>
                      <a href={lk.h} className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors duration-500">
                        <span className="h-px w-3 bg-current opacity-40 group-hover:w-6 group-hover:opacity-100 transition-all duration-500" />
                        {lk.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="foot-col col-span-2 sm:col-span-3 lg:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-5 sm:mb-6">— Studio</p>
              <address className="not-italic text-sm text-muted-foreground leading-[1.9]">
                hello@startwithus.studio<br/>
                +91 98 0000 0000<br/>
                Bengaluru · London · Dubai
              </address>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-20 sm:mt-28 lg:mt-32 overflow-hidden">
          <div className="foot-mark font-display text-[18vw] leading-[0.85] tracking-tight whitespace-nowrap text-foreground/[0.07] select-none">
            Start·With·Us
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Accepting Q3 partners
          </div>
          <div>© {new Date().getFullYear()} Start With Us — All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
