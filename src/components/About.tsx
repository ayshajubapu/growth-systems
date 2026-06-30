import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 72%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="studio"
      ref={ref}
      className="relative bg-surface py-24 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24 border-y border-border overflow-hidden"
    >
      {/* Glow background removed */}

      <div className="relative max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        {/* Left */}
        <div className="lg:col-span-4">
          <p className="about-line eyebrow mb-4 sm:mb-6">
            — Built On What Works
          </p>

          <h2 className="about-line font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Industry-grade tools.
            <br />
            No unnecessary{" "}
            <span className="italic text-accent">complexity</span>.
          </h2>

          <p className="about-line mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
            Smart systems. Clean code. Fast performance. Built to grow with your business.
          </p>
        </div>

        {/* Right */}
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 sm:space-y-10">
          <p className="about-line text-lg sm:text-xl leading-[1.8] text-foreground/90 max-w-3xl">
            SmartPixel was founded in Chennai, Tamil Nadu in 2023 by Aysha.
            We specialise in conversion-focused websites, ecommerce stores,
            and mobile apps for small and mid-size businesses. Our clients
            include travel agencies, jewellery brands, education institutes,
            and B2B manufacturers — primarily across South Chennai.
          </p>

          <p className="about-line text-sm text-muted-foreground max-w-2xl leading-relaxed">
            In plain English: the same tools used by Swiggy, Razorpay and
            Zomato — built to handle your traffic and grow with your business.
          </p>

          {/* Tech Grid */}
          <div className="about-line grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "React", "Next.js", "Node.js", "TypeScript",
              "Tailwind", "MongoDB", "PostgreSQL", "GraphQL",
              "AWS", "Stripe", "Figma", "GSAP",
            ].map((t) => (
              <div
                key={t}
                className="glass px-4 py-4 text-center text-xs sm:text-sm font-display tracking-tight hover:text-accent hover:scale-[1.03] transition-all duration-300"
              >
                {t}
              </div>
            ))}
          </div>

          {/* Stats — unified set */}
          <div className="about-line grid grid-cols-2 sm:grid-cols-4 gap-px bg-border mt-8 sm:mt-10 rounded-2xl overflow-hidden">
            {[
              ["40+", "Clients"],
              ["98%", "Satisfaction"],
              ["3×", "Avg conversion lift"],
              ["2 wk", "Avg turnaround"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background p-5 sm:p-6">
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