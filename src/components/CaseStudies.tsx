import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";
import DesktopFrame from "@/components/DesktopFrame";

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
    beforeAlt: "Triumph Travels old website screenshot before SmartPixel redesign — outdated travel agency layout",
    afterAlt: "Triumph Travels modern website after SmartPixel redesign — fast, conversion-focused travel agency homepage",
    metric: "Modernised",
    metricSub: "Faster pages, cleaner enquiry flow",
    link: "https://triumphtravels.com/",
  },
  {
    client: "Priya Silver Jewellery",
    industry: "Jewellery",
    quote: "Elegant e-commerce ready design crafted for jewellery buyers.",
    person: "Client",
    before: cs2a,
    after: cs2b,
    beforeAlt: "Priya Silver Jewellery website before redesign — basic jewellery store layout",
    afterAlt: "Priya Silver Jewellery e-commerce website after SmartPixel redesign — elegant product showcase for jewellery buyers",
    metric: "Launched",
    metricSub: "First true ecommerce presence",
    link: "https://www.priyasilverjewellery.com/",
  },
  {
    client: "Fotrio Edu",
    industry: "Education",
    quote: "Built a student-first website with clarity and strong calls to action.",
    person: "Client",
    before: cs3b,
    after: cs3a,
    beforeAlt: "Fotrio Edu old education website before SmartPixel redesign — cluttered course listing layout",
    afterAlt: "Fotrio Edu student-first education website after SmartPixel redesign — clear calls to action and course discovery",
    metric: "Clearer",
    metricSub: "Course pages built around enquiry",
    link: "https://fotrioedu.com/",
  },
  {
    client: "Gulf To World Consultants",
    industry: "Immigration",
    quote: "Created a premium immigration website focused on authority, trust, and conversion.",
    person: "Client",
    before: cs4b,
    after: csGulfAfter,
    beforeAlt: "Gulf To World Consultants old immigration website before SmartPixel redesign",
    afterAlt: "Gulf To World Consultants premium immigration website after SmartPixel redesign — Canada, Australia and EU visa services with consultation CTA",
    metric: "Authority",
    metricSub: "Premium immigration brand site",
    link: "https://gulftoworldconsultants.com/",
  },
  {
    client: "Travel Hub Tambaram",
    industry: "Travel & Tourism",
    quote: "Full rebuild focused on getting visitors to actually book a call. Within the first month, booked calls tripled.",
    person: "Junaid",
    before: cs5b,
    after: csTravelHubAfter,
    beforeAlt: "Travel Hub Tambaram old website before SmartPixel rebuild — basic travel rental page",
    afterAlt: "Travel Hub Tambaram new website after SmartPixel rebuild — booking-focused hero with WhatsApp lead form",
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
    beforeAlt: "LTS Learning Academy old website before SmartPixel redesign",
    afterAlt: "LTS Learning Academy new dark-mode tech training website after SmartPixel redesign — career-focused hero with course CTAs",
    metric: "3 Weeks",
    metricSub: "Turnaround",
    link: "https://www.ltslearningacademy.com/",
  },
  {
    client: "Manohar Jewelleries",
    industry: "Jewellery",
    quote: "Elegant catalogue-style ecommerce design built for high-ticket buyers.",
    person: "Client",
    before: csManoharAfter,
    after: csManoharAfter,
    beforeAlt: "Manohar Jewelleries old website before SmartPixel redesign",
    afterAlt: "Manohar Jewelleries luxury jewellery website after SmartPixel redesign — heritage gold catalogue with premium dark hero",
    metric: "First-ever",
    metricSub: "Online catalogue for a 30-yr brand",
    link: "https://www.manoharjewelleries.com/",
  },
  {
    client: "Surya Prakash Metals",
    industry: "Industrial",
    quote: "B2B website rebuilt to attract bulk enquiries from procurement teams.",
    person: "Client",
    before: csSuryaAfter,
    after: csSuryaAfter,
    beforeAlt: "Surya Prakash Metals old B2B website before SmartPixel redesign",
    afterAlt: "Surya Prakash Metals B2B manufacturer website after SmartPixel redesign — bulk copper, brass and bronze quote request hero",
    metric: "B2B-ready",
    metricSub: "Built for procurement enquiries",
    link: "https://www.suryaprakashmetals.com/",
  },
  {
    client: "Ayishro",
    industry: "Water Purifiers",
    quote: "Premium RO water purification brand site built for trust, leads, and Chennai-wide reach.",
    person: "Client",
    before: csAyishroAfter,
    after: csAyishroAfter,
    beforeAlt: "Ayishro old RO water purifier website before SmartPixel redesign",
    afterAlt: "Ayishro premium RO water purifier website after SmartPixel redesign — Chennai service hero with quote request CTA",
    metric: "Trust-led",
    metricSub: "RO water brand for Chennai",
    link: "https://ayishro.com/",
  },
  {
    client: "Manha Hajj & Umrah",
    industry: "Religious Travel",
    quote: "Simple and trust-focused website for Hajj & Umrah enquiries.",
    person: "Client",
    before: cs5b,
    after: csManhaAfter,
    beforeAlt: "Manha Hajj & Umrah old website before SmartPixel redesign",
    afterAlt: "Manha Hajj & Umrah website after SmartPixel redesign — cinematic Kaaba hero with Umrah 2026 booking CTA",
    metric: "Booking-ready",
    metricSub: "Hajj & Umrah enquiry site",
    link: "https://manhahajjandumrahservice.in/",
  },
  {
    client: "Flying Bird Solution",
    industry: "Travel & Tourism",
    quote: "Built a clean and modern travel website focused on credibility, enquiries, and bookings.",
    person: "Client",
    before: cs6b,
    after: csFlyingBirdAfter,
    beforeAlt: "Flying Bird Solution old travel website before SmartPixel redesign",
    afterAlt: "Flying Bird Solution travel website after SmartPixel redesign — Kashmir, Ladakh and Himachal experiences with curated activity cards",
    metric: "Credibility",
    metricSub: "Curated travel experience cards",
    link: "https://flyingbirdsolution.netlify.app/",
  },
  {
    client: "Blossom Bloom",
    industry: "Fashion & Lifestyle",
    quote: "Created a visually appealing fashion lookbook website designed to attract customers and grow orders.",
    person: "Client",
    before: cs1b,
    after: csBlossomAfter,
    beforeAlt: "Blossom Bloom old website before SmartPixel redesign",
    afterAlt: "Blossom Bloom fashion e-commerce website after SmartPixel redesign — coord sets lookbook hero with shop CTA",
    metric: "Lookbook",
    metricSub: "Visual storefront for new brand",
    link: "https://blossom-bloom.vercel.app/",
  },
];

const INITIAL_VISIBLE = 3;




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
        <link rel="canonical" href="https://www.smartpixel.in/portfolio" />
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
                  <DesktopFrame
                    src={c.before}
                    alt={c.beforeAlt ?? `${c.client} website before SmartPixel redesign`}
                    variant="before"
                  />
                </div>

                {/* After */}
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                    After
                  </p>
                  <DesktopFrame
                    src={c.after}
                    alt={c.afterAlt ?? `${c.client} website after SmartPixel redesign`}
                    variant="after"
                  />
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
