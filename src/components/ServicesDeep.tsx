import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgTraining from "@/assets/service-training.jpg";
import imgDesign from "@/assets/service-design.jpg";
import imgWeb from "@/assets/service-web.jpg";
import imgMarketing from "@/assets/service-marketing.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    n: "01",
    title: "Corporate Training",
    tag: "Workforce & Campus Training",
    body: "Structured learning programs for corporate teams, colleges, and institutions. From digital skills and leadership modules to industry-specific workshops — we design curriculum that sticks and outcomes that show up in performance reviews.",
    image: imgTraining,
  },
  {
    n: "02",
    title: "Design",
    tag: "Brand & Visual Design",
    body: "Identity systems, UI/UX, and marketing collateral built for clarity and recognition. Whether you're launching a new brand or refreshing a stale one, we design for people who have to make decisions fast.",
    image: imgDesign,
  },
  {
    n: "03",
    title: "Web Development",
    tag: "Conversion-Led Web Development",
    body: "Websites engineered around your buyer's journey — fast, considered, and built to convert. From institutional portals to startup landing pages, every build ships with performance and purpose.",
    image: imgWeb,
  },
  {
    n: "04",
    title: "Digital Marketing",
    tag: "Digital Marketing & Growth",
    body: "SEO, paid media, social, and content — operated as a system, not a set of loose campaigns. We build inbound pipelines and manage full-funnel growth for brands serious about their numbers.",
    image: imgMarketing,
  },
];

const ServicesDeep = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".deep-row").forEach((row) => {
        gsap.from(row, {
          y: 80,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 80%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="systems" ref={ref} className="bg-background py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— Growth Systems</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Not services.<br/><span className="italic text-accent">Systems.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Each discipline is engineered to compound the others. Strategy is the operating layer.
          </p>
        </div>

        <div className="border-t border-border">
          {items.map((it) => (
            <article key={it.n} className="deep-row group relative grid md:grid-cols-12 gap-4 md:gap-8 py-10 sm:py-12 lg:py-16 border-b border-border items-start overflow-hidden">
              {/* Hover image — desktop floating preview */}
              <div className="pointer-events-none hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[280px] h-[200px] overflow-hidden opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-700 ease-out z-0">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1600ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
              </div>

              <div className="md:col-span-1 text-xs text-muted-foreground tracking-[0.3em] pt-2 relative z-10">{it.n}</div>
              <div className="md:col-span-4 relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3 sm:mb-4">{it.tag}</p>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl group-hover:translate-x-2 transition-transform duration-700">
                  {it.title}
                </h3>
              </div>
              <p className="md:col-span-5 md:col-start-7 text-muted-foreground text-base sm:text-lg leading-relaxed relative z-10 lg:max-w-md">
                {it.body}
              </p>
              <div className="md:col-span-1 md:col-start-12 hidden md:flex justify-end pt-2 relative z-10">
                <span className="text-accent opacity-40 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDeep;
