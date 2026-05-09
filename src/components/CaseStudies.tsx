import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

import cs1b from "@/assets/cs-1-before.jpg";
import cs1a from "@/assets/cs-1-after.jpg";
import cs2b from "@/assets/cs-2-before.jpg";
import cs2a from "@/assets/cs-2-after.jpg";
import cs3b from "@/assets/cs-3-before.jpg";
import cs3a from "@/assets/cs-3-after.jpg";
import cs4b from "@/assets/cs-4-before.jpg";
import cs4a from "@/assets/cs-4-after.jpg";
import cs5b from "@/assets/cs-5-before.jpg";
import cs5a from "@/assets/cs-5-after.jpg";
import cs6b from "@/assets/cs-6-before.jpg";
import cs6a from "@/assets/cs-6-after.jpg";
import csGulfAfter from "@/assets/cs-gulf2world-after.png";
import csTravelHubAfter from "@/assets/cs-travelhub-after.png";
import csLtsAfter from "@/assets/cs-lts-after.png";
import csManoharAfter from "@/assets/cs-manohar-after.png";
import csSuryaAfter from "@/assets/cs-suryaprakash-after.png";
import csAyishroAfter from "@/assets/cs-ayishro-after.png";
import csManhaAfter from "@/assets/cs-manha-after.png";
import csFlyingBirdAfter from "@/assets/cs-flyingbird-after.png";
import csBlossomAfter from "@/assets/cs-blossombloom-after.png";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    client: "Triumph Travels",
    industry: "Travel",
    quote: "Modernized online presence with faster pages and better enquiry flow.",
    person: "Client",
    before: cs1b,
    after: cs1a,
    metric: "+Leads",
    metricSub: "Generated",
    link: "https://triumphtravels.com/",
  },
  {
    client: "Priya Silver Jewellery",
    industry: "Jewellery",
    quote: "Elegant e-commerce ready design crafted for jewellery buyers.",
    person: "Client",
    before: cs2a,
    after: cs2b,
    metric: "+Sales",
    metricSub: "Increase",
    link: "https://www.priyasilverjewellery.com/",
  },
  {
    client: "Fotrio Edu",
    industry: "Education",
    quote: "Built a student-first website with clarity and strong calls to action.",
    person: "Client",
    before: cs3b,
    after: cs3a,
    metric: "+Enrollments",
    metricSub: "Growth",
    link: "https://fotrioedu.com/",
  },
  {
    client: "Gulf To World Consultants",
    industry: "Immigration",
    quote: "Created a premium immigration website focused on authority, trust, and conversion.",
    person: "Client",
    before: cs4b,
    after: csGulfAfter,
    metric: "+Trust",
    metricSub: "Built",
    link: "https://gulftoworldconsultants.com/",
  },
  {
    client: "Travel Hub Tambaram",
    industry: "Travel & Tourism",
    quote: "Full rebuild focused on getting visitors to actually book a call. Within the first month, booked calls tripled.",
    person: "Junaid",
    before: cs5b,
    after: csTravelHubAfter,
    metric: "+200%",
    metricSub: "Booked Calls",
    link: "https://www.travelhubtambaram.in/",
  },
  {
    client: "LTS Learning Academy",
    industry: "Education",
    quote: "Three weeks from kickoff to a live website. Built with enquiry-focused structure and premium trust design.",
    person: "Gagan",
    before: cs6b,
    after: csLtsAfter,
    metric: "3 Weeks",
    metricSub: "Turnaround",
    link: "https://www.ltslearningacademy.com/",
  },
 
 
  {
    client: "Manohar Jewelleries",
    industry: "Jewellery",
    quote: "Elegant catalogue-style ecommerce design built for high-ticket buyers.",
    person: "Client",
    before: cs3b,
    after: csManoharAfter,
    metric: "+Catalogue",
    metricSub: "Live",
    link: "https://www.manoharjewelleries.com/",
  },
  {
    client: "Surya Prakash Metals",
    industry: "Industrial",
    quote: "B2B website rebuilt to attract bulk enquiries from procurement teams.",
    person: "Client",
    before: cs4b,
    after: csSuryaAfter,
    metric: "+B2B Leads",
    metricSub: "Inbound",
    link: "https://www.suryaprakashmetals.com/",
  },
  {
    client: "Ayishro",
    industry: "Water Purifiers",
    quote: "Premium RO water purification brand site built for trust, leads, and Chennai-wide reach.",
    person: "Client",
    before: cs2b,
    after: csAyishroAfter,
    metric: "+Enquiries",
    metricSub: "Online",
    link: "https://ayishro.com/",
  },
  {
    client: "Manha Hajj & Umrah",
    industry: "Religious Travel",
    quote: "Simple and trust-focused website for Hajj & Umrah enquiries.",
    person: "Client",
    before: cs5b,
    after: cs6a,
    metric: "+Calls",
    metricSub: "Booked",
    link: "https://manhahajjandumrahservice.in/",
  },
  {
    client: "Flying Bird Solution",
    industry: "Business Services",
    quote: "Built a clean and modern business website focused on credibility, enquiries, and growth.",
    person: "Client",
    before: cs6b,
    after: cs4a,
    metric: "+Leads",
    metricSub: "Generated",
    link: "https://flyingbirdsolution.netlify.app/",
  },
  {
    client: "Blossom Bloom",
    industry: "Flowers & Gifts",
    quote: "Created a visually appealing floral website designed to attract customers and increase online orders.",
    person: "Client",
    before: cs1b,
    after: cs2a,
    metric: "+Orders",
    metricSub: "Online",
    link: "https://blossom-bloom.vercel.app/",
  },
];

const INITIAL_VISIBLE = 3;

const stats = [
  { v: "250+", l: "Projects Completed" },
  { v: "120+", l: "Happy Clients" },
  { v: "98%", l: "Success Rate" },
  { v: "5+", l: "Years of Experience" },
];

const CaseStudies = ({ showAllByDefault = false }: { showAllByDefault?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(showAllByDefault);
  const visibleCases = showAll ? cases : cases.slice(0, INITIAL_VISIBLE);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".cs-row").forEach((c) => {
        gsap.from(c, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: c, start: "top 88%" },
        });
      });
      gsap.from(".cs-head > *", {
        y: 40, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [showAll]);

  return (
    <>
      <Helmet>
        <title>Our Work | SmartPixel Case Studies — Before & After Results</title>
        <meta name="description" content="Real businesses, real results. Before and after web design case studies from SmartPixel — websites built to convert, designed to grow." />
        <link rel="canonical" href="https://smartpixel.in/portfolio" />
      </Helmet>

      <section
        id="work"
        ref={ref}
        className="relative bg-background py-20 sm:py-28 lg:py-36 px-5 sm:px-10 lg:px-20 overflow-hidden"
      >
        {/* Big watermark SP */}
        <div
          aria-hidden
          className="absolute top-10 right-0 lg:right-10 font-display text-[28vw] lg:text-[18vw] leading-none text-foreground/[0.03] select-none pointer-events-none"
        >
          SP
        </div>

        <div className="max-w-[1500px] mx-auto relative">
          {/* Header */}
          <div className="cs-head mb-12 lg:mb-16">
            <p className="eyebrow mb-5">— Our Work</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] max-w-3xl">
              The results speak.
              <br />
              <span className="italic text-accent">We let clients say it.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Real businesses. Real results.
              <br />
              Websites built to convert, designed to grow.
            </p>

            {/* Stats strip */}
            <div className="mt-10 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-y border-white/10">
              {stats.map((s) => (
                <div key={s.l} className="bg-background px-5 py-5 lg:py-6">
                  <div className="num-display text-3xl md:text-4xl text-accent">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case rows */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {visibleCases.map((c, i) => (
              <a
                key={c.client}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-row group grid md:grid-cols-12 gap-6 md:gap-6 py-8 lg:py-10 items-center hover:bg-surface/40 transition-colors duration-500"
              >
                {/* Number */}
                <div className="md:col-span-1 flex md:block items-baseline gap-3">
                  <span className="num-display text-3xl md:text-4xl text-foreground/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Client meta */}
                <div className="md:col-span-3 md:pl-2 md:border-l md:border-white/10">
                  <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight group-hover:text-accent transition-colors">
                    {c.client}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                    {c.industry}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground italic leading-relaxed">
                    "{c.quote}"
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-accent">
                    — {c.person}
                  </p>
                </div>

                {/* Before */}
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    Before
                  </p>
                  <div className="overflow-hidden rounded-md border border-white/5 bg-surface">
                    <img
                      src={c.before}
                      alt={`${c.client} before`}
                      width={896}
                      height={576}
                      loading="lazy"
                      className="w-full h-auto opacity-70 grayscale-[20%] group-hover:opacity-90 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                    After
                  </p>
                  <div className="overflow-hidden rounded-md border border-accent/20 bg-surface shadow-[0_20px_60px_-20px_hsl(0_0%_0%/0.7)]">
                    <img
                      src={c.after}
                      alt={`${c.client} after`}
                      width={896}
                      height={576}
                      loading="lazy"
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Outcome */}
                <div className="md:col-span-2 md:pl-4 md:border-l md:border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Outcome
                  </p>
                  <div className="num-display text-2xl md:text-3xl text-accent leading-tight">
                    {c.metric}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{c.metricSub}</p>
                  <span className="mt-4 inline-flex w-9 h-9 rounded-full border border-accent/40 items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <TrendingUp size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* More / Less toggle */}
          {cases.length > INITIAL_VISIBLE && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="btn-ghost"
                aria-expanded={showAll}
              >
                {showAll ? "Show Less" : `View All Case Studies (${cases.length})`}
              </button>
            </div>
          )}

          <div className="mt-10 lg:mt-14 glass-gold rounded-md p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl sm:text-2xl">
                Want results like these?
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Let's build something unstoppable for your business.
              </p>
            </div>
            <a href="#contact" className="btn-gold">
              Let's Talk →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
