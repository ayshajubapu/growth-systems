import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  company: string;
  initials: string;
  result: string;
  quote: string;
  link?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Junaid",
    company: "Travel Hub Tambaram",
    initials: "JU",
    result: "Booked calls tripled (+200%) in the first month",
    quote:
      "SmartPixel rebuilt our website end-to-end with one focus — getting visitors to actually book a call. The difference was visible in week one.",
    link: "https://www.travelhubtambaram.in/",
  },
  {
    name: "Gagan",
    company: "LTS Learning Academy",
    initials: "GA",
    result: "Live in 3 weeks with an enquiry-led structure",
    quote:
      "From kickoff to launch in three weeks. The site looks premium, loads fast, and the enquiry flow is exactly how we wanted students to discover us.",
    link: "https://www.ltslearningacademy.com/",
  },
  {
    name: "Your story next",
    company: "Become our next case study",
    initials: "+",
    result: "We're taking on a small number of new builds this quarter.",
    quote:
      "Tell us your goal — we'll show you the structure, timeline, and outcome we'd build for it. No pitch decks. One call.",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".t-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.from(".t-reveal > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Client Testimonials | SmartPixel Chennai</title>
        <meta
          name="description"
          content="Real results from SmartPixel clients in travel, education, jewellery and more. Read what founders say about working with us."
        />
        <link rel="canonical" href="https://www.smartpixel.in/#testimonials" />
      </Helmet>

      <section
        id="voices"
        ref={ref}
        className="relative bg-surface border-y border-border py-20 sm:py-28 lg:py-32 px-5 sm:px-10 lg:px-24"
      >
        <div className="t-reveal max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-xs uppercase tracking-[0.3em] text-foreground mb-6">
            Testimonials
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
            <span className="block text-foreground">Real founders.</span>
            <span className="block text-muted-foreground italic">Real results.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-xl mx-auto">
            We let our clients do the talking. Here's what working with
            SmartPixel actually looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-[1200px] mx-auto">
          {testimonials.map((t) => {
            const isCTA = t.initials === "+";
            const Wrapper = (t.link ? "a" : "div") as "a" | "div";
            const wrapperProps = t.link
              ? { href: t.link, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={t.name + t.company}
                {...(wrapperProps as Record<string, string>)}
                className={`t-card group relative flex flex-col p-7 sm:p-8 rounded-2xl border transition-all duration-500 ${
                  isCTA
                    ? "border-accent/40 bg-accent/5 hover:bg-accent/10"
                    : "border-border bg-background hover:border-accent/30"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-base ${
                      isCTA
                        ? "bg-accent text-accent-foreground"
                        : "bg-foreground/10 text-foreground"
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display text-lg leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground tracking-wide mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                  {isCTA ? "Open slot" : "Result"}
                </p>
                <p className="font-display text-lg sm:text-xl leading-snug mb-5">
                  {t.result}
                </p>

                <div className="relative mt-auto pt-5 border-t border-border">
                  <Quote
                    size={18}
                    className="text-accent/60 mb-2"
                    aria-hidden
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {isCTA && (
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent hover:gap-4 transition-all"
                  >
                    Book a strategy call →
                  </a>
                )}
              </Wrapper>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
