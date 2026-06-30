import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does SmartPixel charge for a website in Chennai?",
    a: "Our core business website development packages start from ₹15,000. Custom e-commerce storefronts, SaaS applications, and enterprise web platforms typically range up to ₹1,50,000+ depending on architectural complexity. Every project begins with a comprehensive strategy blueprinting call before final estimation.",
  },
  {
    q: "What is your process for website renewal and redesigning outdated platforms?",
    a: "We handle complete end-to-end website renewals by analyzing conversion funnel bottlenecks in your old site. Our structural redesign process includes SEO link mitigation (preserving your existing Google authority via strict 301 redirect mapping), performance optimization, and updating content layouts to modern UX frameworks.",
  },
  {
    q: "Do you offer post-service technical support and maintenance after launch?",
    a: "Yes, every deployment includes a comprehensive 30-day post-launch warranty covering software patches, performance fine-tuning, and user monitoring. Following this period, we provide ongoing monthly technical maintenance retainers to manage cloud hosting, security monitoring, regular backups, and content updates.",
  },
  {
    q: "Can you manage our social media channels alongside our digital infrastructure?",
    a: "Absolutely. We provide data-driven social media management and conversion marketing across LinkedIn, Instagram, and Google Business Profile. Our strategies bridge the gap between creative visual content curation and technical performance tracking to ensure social traffic turns into measurable leads on your website.",
  },
  {
    q: "Can you guarantee number 1 rankings for Google SEO?",
    a: "No legitimate agency can guarantee a static #1 rank because Google's core search algorithm updates dynamically. However, we do guarantee white-hat execution of semantic indexing practices: optimizing Core Web Vitals, generating explicit structural JSON-LD schemas, and creating high-intent keyword positioning that consistently outranks local competitors.",
  },
  {
    q: "What is your approach to developing custom SaaS products and web applications?",
    a: "We build scalable, cloud-native Software-as-a-Service (SaaS) applications using reliable modern technology stacks like React, Next.js, and Node.js. Our development team prioritizes highly secure relational multi-tenant database designs, rapid application rendering, and clean RESTful API integration frameworks optimized for scalability.",
  },
  {
    q: "How does SmartPixel integrate AI automation into business workflows?",
    a: "We develop custom AI integrations utilizing modern Large Language Model APIs to automate repetitive business overhead. This includes engineering smart automated lead qualification tools, custom customer support agents, automated internal invoicing pipelines, and synchronizing native CRM platforms directly into your core website.",
  },
  {
    q: "How long does a custom web design and development project take?",
    a: "Standard business landing pages launch within 2 weeks from kickoff. High-performance e-commerce applications and customized SaaS products typically span 3 to 6 weeks. Complex enterprise systems or deep AI pipeline automations are built over a multi-stage milestone roadmap.",
  },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  // Generate dynamic Google FAQPage Schema markup for automated SEO Rich Snippet crawling
  const faqSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        },
      })),
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Dynamic JSON-LD Injection to trigger rich snippet display on search queries */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section
        id="faq"
        className="relative bg-background border-t border-border py-20 sm:py-28 lg:py-32 px-5 sm:px-10 lg:px-24"
        aria-labelledby="faq-section-title"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="eyebrow mb-5 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              — Questions, Answered
            </p>
            <h2 
              id="faq-section-title" 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Everything you'd ask
              <br />
              on the <span className="italic text-accent font-normal">first call</span>.
            </h2>
          </div>

          {/* Semantic Accordion Layout */}
          <div 
            className="divide-y divide-border border-y border-border" 
            role="presentation"
          >
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-btn-${i}`;
              
              return (
                <div key={f.q} className="overflow-hidden">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-center justify-between gap-6 text-left py-6 sm:py-7 group focus:outline-none focus-visible:text-accent"
                    >
                      <span className="font-display text-lg sm:text-xl md:text-2xl font-semibold leading-snug group-hover:text-accent transition-colors text-foreground">
                        {f.q}
                      </span>
                      <span className="shrink-0 w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                  </h3>
                  
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen 
                        ? "max-h-[500px] opacity-100 pb-7" 
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="-mt-1 text-muted-foreground leading-relaxed max-w-3xl text-sm sm:text-base font-light">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;