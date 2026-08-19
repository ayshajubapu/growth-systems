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
      className="relative bg-surface py-14 sm:py-16 lg:py-24 px-5 sm:px-10 lg:px-24 border-y border-border overflow-hidden"
    >
      <div className="relative w-full grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        {/* =====================================================
            LEFT
        ====================================================== */}
        <div className="lg:col-span-4">
          <p className="about-line eyebrow mb-4 sm:mb-6">
            — About SmartPixel
          </p>

          <h2 className="about-line font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Built for{" "}
            <span className="italic text-accent">
              businesses
            </span>
            .
            <br />
            Designed to grow.
          </h2>

          <p className="about-line mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
            SmartPixel builds websites, ecommerce platforms and
            digital systems that combine clean design, strong
            performance and practical business outcomes.
          </p>
        </div>

        {/* =====================================================
            RIGHT
        ====================================================== */}
        <div className="lg:col-span-7 lg:col-start-6 space-y-8 sm:space-y-10">
          {/* Main About Copy */}
          <p className="about-line text-lg sm:text-xl leading-[1.8] text-foreground/90 max-w-3xl">
            SmartPixel is a web design and development company
            founded in Chennai in 2023. We work with small and
            mid-size businesses to build conversion-focused
            websites, ecommerce stores, web applications,
            mobile apps and digital growth systems.
          </p>

          <p className="about-line text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            From our base in Chrompet, Chennai, we work with
            businesses across South Chennai and clients in
            multiple locations internationally. Our work covers
            industries including travel, jewellery, education,
            real estate, healthcare, retail and B2B businesses.
          </p>

          {/* =================================================
              EXPERIENCE / REACH
          ================================================== */}
          <div className="about-line grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              ["20+", "Websites Built"],
              ["4+", "Countries Served"],
              ["2023", "Founded"],
              ["Chennai", "Based"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-background p-5 sm:p-6"
              >
                <div className="num-display text-2xl sm:text-4xl text-accent mb-2 sm:mb-3">
                  {value}
                </div>

                <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              TECHNOLOGY
          ================================================== */}
          <div className="about-line">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              — Technology We Work With
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
                "Supabase",
                "AWS",
                "Razorpay",
                "Figma",
                "GSAP",
              ].map((technology) => (
                <div
                  key={technology}
                  className="glass px-4 py-4 text-center text-xs sm:text-sm font-display tracking-tight hover:text-accent hover:scale-[1.03] transition-all duration-300"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              FINAL POSITIONING
          ================================================== */}
          <div className="about-line border-l-2 border-accent pl-5 sm:pl-6">
            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              We keep the process simple: understand the
              business, build the right digital product, optimise
              it for search and conversions, and keep improving
              it after launch.
            </p>
          </div>

          {/* =================================================
              PERFORMANCE STATS
          ================================================== */}
          <div className="about-line grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              ["20+", "Websites"],
              ["4+", "Countries"],
              ["98%", "Satisfaction"],
              ["2 wk", "Avg Turnaround"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-background p-5 sm:p-6"
              >
                <div className="num-display text-2xl sm:text-4xl text-accent mb-2 sm:mb-3">
                  {value}
                </div>

                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;