import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does SmartPixel charge for a website?",
    a: "Our projects start from ₹25,000 for business sites and go up to ₹1,50,000+ for custom ecommerce or web app builds. Every project includes a free strategy call before we quote.",
  },
  {
    q: "How long does a website build take?",
    a: "Our average is 2 weeks from brief to launch. Ecommerce stores typically take 2–3 weeks. Mobile apps start from 6 weeks.",
  },
  {
    q: "Does SmartPixel work with businesses outside Chennai?",
    a: "Yes. We're based in Chrompet but work with clients across India remotely. Most of our team communication is async.",
  },
  {
    q: "What makes SmartPixel different from other Chennai agencies?",
    a: "One team owns your project start to finish — no account managers, no handoffs. You talk directly to the people doing the work.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. All projects include a support period post-launch. We offer ongoing retainers for maintenance and growth.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-background border-t border-border py-20 sm:py-28 lg:py-32 px-5 sm:px-10 lg:px-24"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="eyebrow mb-5">— Questions, Answered</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Everything you'd ask
            <br />
            on the <span className="italic text-accent">first call</span>.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left py-6 sm:py-7 group"
                >
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl leading-snug group-hover:text-accent transition-colors">
                    {f.q}
                  </h3>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-accent">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-7 -mt-1 text-muted-foreground leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
