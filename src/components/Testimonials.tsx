import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    quote:
      "We'd had a website for years that looked fine and did almost nothing. SmartPixel rebuilt it from scratch and booked calls tripled.",
    name: "Junaid",
    role: "Travel Hub Tambaram",
    metric: "↑ 3× booked calls",
  },
  {
    quote:
      "Three weeks from kickoff to a live website. Less about what looked good, more about what moved visitors to enquiry.",
    name: "Gagan",
    role: "LTS Learning Academy",
    metric: "↑ Enquiry growth",
  },
  {
    quote:
      "One team, one conversation, no confusion. The site they delivered actually generates business.",
    name: "Amit",
    role: "Surya Prakash Metals",
    metric: "↑ Better ROI",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".voice-head > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(id);
  }, []);

  const current = quotes[active];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Client Testimonials | SmartPixel Chennai Website Company
        </title>

        <meta
          name="description"
          content="Read real SmartPixel client testimonials. Businesses trust us for website development, ecommerce stores, branding and lead generation systems in Chennai."
        />

        <meta
          name="keywords"
          content="SmartPixel reviews, SmartPixel testimonials, Chennai website company reviews, web design testimonials Chennai"
        />

        <link rel="canonical" href="https://smartpixel.in/testimonials" />

        <meta
          property="og:title"
          content="SmartPixel Client Reviews & Testimonials"
        />

        <meta
          property="og:description"
          content="See what real SmartPixel clients say about their website growth, enquiries and results."
        />

        <meta
          property="og:url"
          content="https://smartpixel.in/testimonials"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SmartPixel",
            url: "https://smartpixel.in",
            review: quotes.map((q) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: q.name,
              },
              reviewBody: q.quote,
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
            })),
          })}
        </script>
      </Helmet>

      <section
        id="voices"
        ref={ref}
        className="relative bg-surface py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24 border-y border-border overflow-hidden"
      >
        <div className="relative max-w-[1500px] mx-auto">
          <div className="voice-head flex items-end justify-between mb-12 sm:mb-20 flex-wrap gap-6 sm:gap-8">
            <div>
              <p className="eyebrow mb-4 sm:mb-6">
                — From The People We've Built For
              </p>

              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-3xl">
                The results speak.
                <br />
                But we'll let our
                <br />
                <span className="italic text-accent">
                  clients say it.
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
              Real words from founders and business owners we helped grow.
            </p>
          </div>

          <div
            ref={featuredRef}
            className="glass-strong p-7 sm:p-12 lg:p-16 mb-10 sm:mb-14"
          >
            <blockquote className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] max-w-5xl">
              {current.quote}
            </blockquote>

            <div className="mt-8 sm:mt-12 flex flex-wrap justify-between gap-6">
              <div>
                <div className="font-display text-lg sm:text-xl">
                  {current.name}
                </div>

                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  {current.role}
                </div>
              </div>

              <div className="text-right">
                <div className="num-display text-xl sm:text-2xl text-accent">
                  {current.metric}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {quotes.map((q, i) => (
              <button
                key={q.role}
                onClick={() => setActive(i)}
                className={`glass text-left p-6 transition-all ${
                  i === active ? "ring-1 ring-accent/40" : ""
                }`}
              >
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {q.quote}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-display">{q.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                    {q.role}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;