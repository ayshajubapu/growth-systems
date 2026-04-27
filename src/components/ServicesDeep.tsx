import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgWeb from "@/assets/sp-web.jpg";
import imgMobile from "@/assets/sp-mobile.jpg";
import imgMarketing from "@/assets/sp-marketing.jpg";
import imgDesign from "@/assets/sp-design.jpg";
import imgEcom from "@/assets/sp-ecom.jpg";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    n: "01",
    title: "Web App Development",
    tag: "Custom Builds",
    body: "Your website isn't a brochure — it's infrastructure. We engineer web applications that handle real traffic, real transactions, and real complexity, without the fragility that comes from cutting corners.",
    points: ["Front-end & back-end development", "Custom CMS and content workflows", "E-commerce portals & catalogues", "Progressive web apps", "End-to-end custom product builds"],
    image: imgWeb,
  },
  {
    n: "02",
    title: "Mobile App Development",
    tag: "iOS & Android · Most Popular",
    body: "Most apps get deleted within a week. The ones that survive earn loyalty through speed, simplicity, and a UI that respects the user's time. We build mobile apps for consumer and enterprise — native and cross-platform.",
    points: ["Custom iOS and Android apps", "Flutter & React Native development", "Hybrid mobile applications", "UI/UX design & interactive prototyping", "App Store submission support"],
    image: imgMobile,
  },
  {
    n: "03",
    title: "Digital Marketing",
    tag: "Growth Systems",
    body: "We don't run campaigns in isolation. We build marketing systems — connected pipelines of SEO, paid media, and content that compound over time. Traffic is vanity. Revenue is the metric that matters.",
    points: ["Technical & content SEO", "Social media strategy and management", "Pay-per-click (Google & Meta)", "Local SEO & Google Business", "E-commerce marketing & feed management"],
    image: imgMarketing,
  },
  {
    n: "04",
    title: "Web Design",
    tag: "Brand & Experience",
    body: "You have about four seconds before a visitor decides whether to stay. We design websites that communicate credibility, clarity, and intent from the first scroll — clean, fast, and built to hold up across every screen.",
    points: ["WordPress design & development", "Custom HTML/CSS builds", "E-commerce & product page design", "Mobile-responsive layouts", "Ongoing design support"],
    image: imgDesign,
  },
  {
    n: "05",
    title: "E-Commerce Development",
    tag: "Online Stores",
    body: "The difference between a store that ticks over and one that scales is rarely the product — it's the experience. How quickly pages load, how easy checkout is, how much the design builds confidence at every step.",
    points: ["Custom e-commerce development", "Shopify & WooCommerce builds", "Secure payment gateway integration", "Marketplace & multi-vendor setup", "Product catalogue & inventory management"],
    image: imgEcom,
  },
];

const ServicesDeep = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".deep-row").forEach((row) => {
        gsap.from(row, {
          y: 80, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="systems" ref={ref} className="bg-background py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— What We Build</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              Not services.<br/><span className="italic text-accent">Systems.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm sm:text-base">
            From the first wireframe to your first sale — strategy, build, and growth, handled by one team.
          </p>
        </div>

        <div className="border-t border-border">
          {items.map((it) => (
            <article key={it.n} className="deep-row group relative grid md:grid-cols-12 gap-4 md:gap-8 py-8 sm:py-12 lg:py-16 border-b border-border items-start overflow-hidden">
              {/* Hover preview */}
              <div className="pointer-events-none hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[300px] h-[210px] overflow-hidden glass opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-700 ease-out z-0">
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
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{it.tag}</p>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl group-hover:translate-x-2 transition-transform duration-700">
                  {it.title}
                </h3>
              </div>
              <div className="md:col-span-6 md:col-start-6 relative z-10 lg:max-w-md space-y-5">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {it.body}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-[13px] text-foreground/75">
                  {it.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-accent mt-1 text-[10px]">◆</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
