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
    <section id="studio" ref={ref} className="bg-surface py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24 border-y border-border">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="about-line eyebrow mb-4 sm:mb-6">— The Studio</p>
          <h2 className="about-line font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            A studio<br/>of operators,<br/>not <span className="italic text-accent">vendors</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 sm:space-y-10">
          <p className="about-line text-lg sm:text-xl leading-[1.7] text-foreground/90">
            Start With Us was founded on a single conviction — that the brands compounding fastest are the ones treating marketing as engineering. Not campaigns. Systems.
          </p>
          <p className="about-line text-muted-foreground leading-relaxed">
            We work with a small number of partners each year — corporate teams seeking new velocity, founders building category-defining narratives, and ambitious individuals serious about positioning. Every engagement is led by a senior operator. No account managers. No layers.
          </p>
          <div className="about-line grid grid-cols-3 gap-px bg-border mt-10 sm:mt-12">
            {[
              ["09", "Years operating"],
              ["27", "Specialists in studio"],
              ["4", "Continents served"],
            ].map(([v, l]) => (
              <div key={l} className="bg-surface p-5 sm:p-8">
                <div className="num-display text-3xl sm:text-4xl text-accent mb-2 sm:mb-3">{v}</div>
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
