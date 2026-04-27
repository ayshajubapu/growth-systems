import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="studio" ref={ref} className="bg-surface py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24 border-y border-border">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="about-line eyebrow mb-4 sm:mb-6">— Built On What Works</p>
          <h2 className="about-line font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Industry-grade tools.<br/>No unnecessary <span className="italic text-accent">complexity</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 sm:space-y-10">
          <p className="about-line text-lg sm:text-xl leading-[1.7] text-foreground/90">
            We use the stack that gets the job done — not the one that looks impressive in a pitch deck. Every choice made for performance, maintainability, and your long-term benefit.
          </p>

          <div className="about-line grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
            {["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "MongoDB", "PostgreSQL", "GraphQL", "AWS", "Stripe", "Figma", "GSAP"].map((t) => (
              <div key={t} className="glass px-3 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-display tracking-tight hover:text-accent transition-colors">
                {t}
              </div>
            ))}
          </div>

          <div className="about-line grid grid-cols-3 gap-px bg-border mt-6 sm:mt-10">
            {[
              ["15+", "Trusted clients"],
              ["98%", "Satisfaction"],
              ["3×", "Conversion lift"],
            ].map(([v, l]) => (
              <div key={l} className="bg-surface p-4 sm:p-7">
                <div className="num-display text-2xl sm:text-4xl text-accent mb-2 sm:mb-3">{v}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
