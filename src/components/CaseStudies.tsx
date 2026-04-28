import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cases = [
 {
    client: "Triumph Travels",
    industry: "Travel",
    before: "Outdated branding",
    after: "Modern growth site",
    metric: "+Leads",
    body: "Modernized online presence with faster pages and better enquiry flow.",
    person: "Client",
    link: "https://triumphtravels.com/",
  },
  {
    client: "Priya Silver Jewellery",
    industry: "Jewellery",
    before: "Offline only feel",
    after: "Luxury online presence",
    metric: "+Sales",
    body: "Elegant e-commerce ready design crafted for jewellery buyers.",
    person: "Client",
    link: "https://www.priyasilverjewellery.com/",
  },
  {
    client: "Fotrio Edu",
    industry: "Education",
    before: "Low visibility",
    after: "Modern trust brand",
    metric: "+Enrollments",
    body: "Built a student-first website with clarity and strong calls to action.",
    person: "Client",
    link: "https://fotrioedu.com/",
  },
  {
    client: "Gulf To World Consultants",
    industry: "Immigration",
    before: "No premium presence",
    after: "Lead-ready website",
    metric: "+Trust",
    body: "Created a premium immigration website focused on authority, trust, and conversion.",
    person: "Client",
    link: "https://gulftoworldconsultants.com/",
  },
  {
    client: "Travel Hub Tambaram",
    industry: "Travel & Tourism",
    before: "Mostly idle site",
    after: "3× booked calls",
    metric: "+200%",
    body: "Full rebuild focused on getting visitors to actually book a call. Within the first month, booked calls tripled.",
    person: "Junaid",
    link: "https://www.travelhubtambaram.in/",
  },
  {
    client: "LTS Learning Academy",
    industry: "Education",
    before: "Generic site",
    after: "Conversion-led rebuild",
    metric: "3 weeks",
    body: "Three weeks from kickoff to a live website. Built with enquiry-focused structure and premium trust design.",
    person: "Gagan",
    link: "https://www.ltslearningacademy.com/",
  },

  {
    client: "Surya Prakash Metals",
    industry: "Manufacturing",
    before: "3 disconnected vendors",
    after: "1 team, 1 conversation",
    metric: "+ROI",
    body: "One team, one conversation, one result-driven website that actually generates business.",
    person: "Amit",
    link: "https://suryaprakashmetals.com/",
  },
  {
    client: "Manohar Jewelleries",
    industry: "Jewellery",
    before: "Traditional only",
    after: "Premium showcase",
    metric: "+Walk-ins",
    body: "Designed a premium digital showroom to attract local buyers.",
    person: "Client",
    link: "https://www.manoharjewelleries.com/",
  },
  {
    client: "Ayishro",
    industry: "Fashion",
    before: "No online identity",
    after: "Brand website",
    metric: "+Branding",
    body: "Created a clean premium fashion website for customer trust and reach.",
    person: "Client",
    link: "https://ayishro.com/",
  },
  {
    client: "Manha Hajj & Umrah",
    industry: "Religious Travel",
    before: "No funnel",
    after: "Booking ready site",
    metric: "+Calls",
    body: "Simple and trust-focused website for Hajj & Umrah enquiries.",
    person: "Client",
    link: "http://manhahajjandumrahservice.in/",
  },
  {
  client: "Flying Bird Solution",
  industry: "Business Services",
  before: "No strong online presence",
  after: "Professional business website",
  metric: "+Leads",
  body: "Built a clean and modern business website focused on credibility, enquiries, and growth.",
  person: "Client",
  link: "https://flyingbirdsolution.netlify.app/",
},
{
  client: "Blossom Bloom",
  industry: "Flowers & Gifts",
  before: "No digital storefront",
  after: "Elegant brand website",
  metric: "+Orders",
  body: "Created a visually appealing floral website designed to attract customers and increase online orders.",
  person: "Client",
  link: "https://blossom-bloom.vercel.app/",
},
];

const CaseStudies = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".case-card").forEach((c) => {
        gsap.from(c, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: c,
            start: "top 85%",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Our Portfolio | Website Projects & Client Results | SmartPixel Chennai
        </title>

        <meta
          name="description"
          content="Explore SmartPixel portfolio featuring website design, ecommerce stores and growth-focused digital projects for travel, jewellery, flowers and business brands."
        />

        <meta
          name="keywords"
          content="SmartPixel portfolio, Chennai web design portfolio, website projects Chennai, ecommerce website examples, SmartPixel case studies"
        />

        <link rel="canonical" href="https://smartpixel.in/portfolio" />

        <meta
          property="og:title"
          content="SmartPixel Portfolio | Real Client Results"
        />

        <meta
          property="og:description"
          content="See how SmartPixel helps businesses grow with premium websites and conversion-focused digital systems."
        />

        <meta
          property="og:url"
          content="https://smartpixel.in/portfolio"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "SmartPixel Portfolio",
            url: "https://smartpixel.in/portfolio",
            about: "Website Design Portfolio and Case Studies",
            publisher: {
              "@type": "Organization",
              name: "SmartPixel",
              url: "https://smartpixel.in",
              logo: {
                "@type": "ImageObject",
                url: "https://smartpixel.in/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <section
        id="work"
        ref={ref}
        className="bg-surface py-20 sm:py-32 lg:py-40 px-5 sm:px-10 lg:px-24"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-12 sm:mb-20">
            <p className="eyebrow mb-4 sm:mb-6">— Selected Work</p>

            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1] max-w-4xl">
              The results speak.
              <br />
              <span className="italic text-accent">
                We let clients say it.
              </span>
            </h2>
          </div>

          <div className="space-y-px bg-border">
            {cases.map((c, i) => (
              <a
                key={c.client}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <article className="case-card bg-background grid md:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-10 lg:p-14 group hover:bg-surface transition-all duration-700 cursor-pointer">
                  <div className="md:col-span-3">
                    <p className="text-xs text-muted-foreground tracking-[0.3em] mb-3 sm:mb-4">
                      CASE 0{i + 1}
                    </p>

                    <h3 className="font-display text-2xl sm:text-3xl mb-2 group-hover:text-accent transition-colors">
                      {c.client}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                      {c.industry}
                    </p>

                    <p className="text-[11px] uppercase tracking-[0.25em] text-accent">
                      — {c.person}
                    </p>
                  </div>

                  <div className="md:col-span-5 flex flex-col justify-center">
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg italic">
                      "{c.body}"
                    </p>
                  </div>

                  <div className="md:col-span-4 grid grid-cols-2 gap-px bg-border">
                    <div className="bg-background p-4 sm:p-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                        Before
                      </p>
                      <p className="font-display text-base sm:text-lg text-muted-foreground">
                        {c.before}
                      </p>
                    </div>

                    <div className="bg-background p-4 sm:p-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                        After
                      </p>
                      <p className="font-display text-base sm:text-lg">
                        {c.after}
                      </p>
                    </div>

                    <div className="bg-background p-4 sm:p-5 col-span-2 flex items-center justify-between glass-gold">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Outcome
                      </span>

                      <span className="num-display text-2xl sm:text-3xl text-accent">
                        {c.metric}
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;