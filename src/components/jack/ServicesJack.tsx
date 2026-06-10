import { FadeIn } from "./primitives";

const services = [
  {
    n: "01",
    name: "Web Design",
    desc: "Custom-designed websites built for credibility and conversion. Average build time: two weeks.",
  },
  {
    n: "02",
    name: "E-Commerce Development",
    desc: "Shopify and WooCommerce stores tuned for trust, speed, and checkout. Payments and inventory included.",
  },
  {
    n: "03",
    name: "Mobile App Development",
    desc: "Polished iOS and Android apps built with React Native or Flutter — focused on retention and performance.",
  },
  {
    n: "04",
    name: "SEO & Local SEO",
    desc: "Rank where your customers in Chennai actually search. Technical SEO, local listings, and content systems.",
  },
  {
    n: "05",
    name: "Digital Marketing",
    desc: "Google and Meta ads, WhatsApp automation, and lifecycle campaigns that drive real revenue — not vanity metrics.",
  },
];

const ServicesJack = () => {
  return (
    <section
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: "#FFFFFF" }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : "none", borderBottom: "1px solid rgba(12,12,12,0.15)" }}
            >
              <span
                className="font-black shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 0.9 }}
              >
                {s.n}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesJack;
