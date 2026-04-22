import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { tag: "Brand", title: "Halcyon Capital", year: "2026", span: "md:col-span-7 md:row-span-2", h: "h-[420px] md:h-full", grad: "from-[#3a2f1f] via-[#1a1612] to-[#0a0a0a]" },
  { tag: "Web", title: "Atelier Norra", year: "2025", span: "md:col-span-5", h: "h-[320px]", grad: "from-[#2a2620] via-[#15130f] to-[#0a0a0a]" },
  { tag: "Performance", title: "Kestrel Health", year: "2025", span: "md:col-span-5", h: "h-[320px]", grad: "from-[#1f2a2e] via-[#11171a] to-[#0a0a0a]" },
  { tag: "SEO", title: "Maison Verre", year: "2025", span: "md:col-span-4", h: "h-[300px]", grad: "from-[#332a1a] via-[#1a160e] to-[#0a0a0a]" },
  { tag: "Content", title: "Orbital Studios", year: "2025", span: "md:col-span-4", h: "h-[300px]", grad: "from-[#262023] via-[#161214] to-[#0a0a0a]" },
  { tag: "Brand", title: "Northwind Spirits", year: "2024", span: "md:col-span-4", h: "h-[300px]", grad: "from-[#2a2418] via-[#171410] to-[#0a0a0a]" },
];

const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gal-tile").forEach((el, i) => {
        gsap.from(el, {
          y: 80, opacity: 0, duration: 1.1, ease: "power3.out", delay: i * 0.05,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={ref} className="bg-background py-24 sm:py-32 lg:py-48 px-6 sm:px-10 lg:px-24 border-t border-border">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-16 sm:mb-24 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— Gallery</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Selected <span className="italic text-accent">artefacts</span><br/>from the studio.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            A small archive of recent work — brand systems, sites, and campaigns built for compounding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[260px] gap-3 sm:gap-4">
          {items.map((it, i) => (
            <a
              key={it.title}
              href="#"
              className={`gal-tile group relative block overflow-hidden border border-border ${it.span} ${it.h}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${it.grad} transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]`} />
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:3px_3px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{it.tag}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">N° 0{i + 1}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 translate-y-0 group-hover:-translate-y-1 transition-transform duration-700">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight">{it.title}</h3>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-2">{it.year}</p>
                </div>
                <span className="text-accent text-xl translate-x-0 group-hover:translate-x-1 transition-transform duration-500">→</span>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1400ms] ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
