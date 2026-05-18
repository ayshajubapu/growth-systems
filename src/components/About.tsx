import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      {/* SEO */}
      <Helmet>
        <title>
          About SmartPixel | Website Development Company in Chennai
        </title>

        <meta
          name="description"
          content="Learn about SmartPixel, a premium Chennai website development company building websites, ecommerce stores, apps and digital growth systems for modern businesses."
        />

        <meta
          name="keywords"
          content="about SmartPixel, Chennai web company, website developer Chennai, ecommerce company Chennai, app development Chennai"
        />

        <link rel="canonical" href="https://www.smartpixel.in/about" />

        <meta
          property="og:title"
          content="About SmartPixel | Premium Digital Agency Chennai"
        />

        <meta
          property="og:description"
          content="Industry-grade tools. Clean code. Smart systems. Learn how SmartPixel helps businesses grow online."
        />

        <meta
          property="og:url"
          content="https://www.smartpixel.in/about"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SmartPixel",
            url: "https://www.smartpixel.in",
            logo: "https://www.smartpixel.in/logo.png",
            sameAs: [
              "https://www.instagram.com/smartpiixel/",
              "https://www.threads.net/@smartpiixel",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      <section
        id="studio"
        ref={ref}
        className="relative bg-surface py-24 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24 border-y border-border overflow-hidden"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-[1500px] mx-auto grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-4">
            <p className="about-line eyebrow mb-4 sm:mb-6">
              — Built On What Works
            </p>

            <h2 className="about-line font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Industry-grade tools.
              <br />
              No unnecessary{" "}
              <span className="italic text-accent">complexity</span>.
            </h2>

            <p className="about-line mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Smart systems. Clean code. Fast performance. Built to grow with your business.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 sm:space-y-10">
            <p className="about-line text-lg sm:text-xl leading-[1.8] text-foreground/90 max-w-3xl">
              We use the stack that gets results — not the one that sounds fancy in a meeting.
              Every decision is made for speed, maintainability, scalability, and long-term ROI.
            </p>

            <p className="about-line text-sm text-muted-foreground max-w-2xl leading-relaxed">
              In plain English: the same tools used by Swiggy, Razorpay and
              Zomato — built to handle your traffic and grow with your business.
            </p>

            {/* Tech Grid */}
            <div className="about-line grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                "React", "Next.js", "Node.js", "TypeScript",
                "Tailwind", "MongoDB", "PostgreSQL", "GraphQL",
                "AWS", "Stripe", "Figma", "GSAP",
              ].map((t) => (
                <div
                  key={t}
                  className="glass px-4 py-4 text-center text-xs sm:text-sm font-display tracking-tight hover:text-accent hover:scale-[1.03] transition-all duration-300"
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Stats — unified set */}
            <div className="about-line grid grid-cols-2 sm:grid-cols-4 gap-px bg-border mt-8 sm:mt-10 rounded-2xl overflow-hidden">
              {[
                ["40+", "Clients"],
                ["98%", "Satisfaction"],
                ["3×", "Avg conversion lift"],
                ["2 wk", "Avg turnaround"],
              ].map(([v, l]) => (
                <div key={l} className="bg-background p-5 sm:p-6">
                  <div className="num-display text-2xl sm:text-4xl text-accent mb-2 sm:mb-3">{v}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;