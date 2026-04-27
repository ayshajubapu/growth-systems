import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    client: "Travel Hub Tambaram",
    industry: "Travel & Tourism",
    before: "Mostly idle site",
    after: "3× booked calls",
    metric: "+200%",
    body: "Full rebuild focused on getting visitors to actually book a call. Within the first month, booked calls tripled — a result I didn't expect to say out loud a month after launch.",
    person: "Junaid",
  },
  {
    client: "LTS Learning Academy",
    industry: "Education",
    before: "Generic site",
    after: "Conversion-led rebuild",
    metric: "3 weeks",
    body: "Three weeks from kickoff to a live website. What stayed with me was how differently they thought about design — less about what looked good, more about what would move someone from visitor to enquiry.",
    person: "Gagan",
  },
  {
    client: "Surya Prakash Metals",
    industry: "Manufacturing",
    before: "3 disconnected vendors",
    after: "1 team, 1 conversation",
    metric: "+ROI",
    body: "I'd worked with two agencies before SmartPixel. With them, it was one team, one conversation, no translation required. The site doesn't just look good — it actually generates business.",
    person: "Amit",
  },
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".case-card").forEach((c) => {
        gsap.from(c, {
          y: 100, opacity: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="bg-surface py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
          <div>
            <p className="eyebrow mb-4 sm:mb-6">— Selected Work</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
              The results speak.<br/><span className="italic text-accent">We let clients say it.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-px bg-border">
          {cases.map((c, i) => (
            <article key={c.client} className="case-card bg-background grid md:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-10 lg:p-14 group hover:bg-surface transition-colors duration-700">
              <div className="md:col-span-3">
                <p className="text-xs text-muted-foreground tracking-[0.3em] mb-3 sm:mb-4">CASE 0{i + 1}</p>
                <h3 className="font-display text-2xl sm:text-3xl mb-2">{c.client}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">{c.industry}</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-accent">— {c.person}</p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg italic">"{c.body}"</p>
              </div>
              <div className="md:col-span-4 grid grid-cols-2 gap-px bg-border">
                <div className="bg-background p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Before</p>
                  <p className="font-display text-base sm:text-lg text-muted-foreground">{c.before}</p>
                </div>
                <div className="bg-background p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">After</p>
                  <p className="font-display text-base sm:text-lg">{c.after}</p>
                </div>
                <div className="bg-background p-4 sm:p-5 col-span-2 flex items-center justify-between glass-gold">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Outcome</span>
                  <span className="num-display text-2xl sm:text-3xl text-accent">{c.metric}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
