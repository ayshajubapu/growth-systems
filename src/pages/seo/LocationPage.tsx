import SeoPageLayout from "@/components/SeoPageLayout";

type Props = {
  area: string;
  slug: string; // e.g., "pallavaram"
  nearby?: { name: string; slug: string }[];
  landmark?: string;
};

const nearbyDefault = [
  { name: "Pallavaram", slug: "pallavaram" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "Chrompet", slug: "chrompet" },
  { name: "Guindy", slug: "guindy" },
  { name: "T Nagar", slug: "t-nagar" },
  { name: "Saidapet", slug: "saidapet" },
  { name: "Nungambakkam", slug: "nungambakkam" },
  { name: "Chitlapakkam", slug: "chitlapakkam" },
];

const LocationPage = ({ area, slug, nearby, landmark }: Props) => {
  const url = `https://smartpixel.in/web-design-${slug}`;
  const adjacents = (nearby ?? nearbyDefault).filter((n) => n.slug !== slug).slice(0, 4);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SmartPixel",
    image: "https://smartpixel.in/logo.png",
    url,
    telephone: "+91-9886069488",
    email: "workwithsmartpixel@gmail.com",
    areaServed: `${area}, Chennai`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chrompet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600044",
      addressCountry: "IN",
    },
  };

  return (
    <SeoPageLayout
      title={`Website Development in ${area}, Chennai | SmartPixel`}
      description={`SmartPixel offers website design, ecommerce, SEO and WhatsApp automation for businesses in ${area}, Chennai. Local team, fast delivery, lead-focused.`}
      canonical={url}
      h1={`Website Development in ${area}, Chennai`}
      breadcrumbs={[
        { name: "Home", url: "https://smartpixel.in/" },
        { name: `Web Design ${area}`, url },
      ]}
      schema={[localBusiness]}
      ctaText={`Get a free quote for your ${area} business →`}
      intro={
        <>
          SmartPixel provides website development, SEO and WhatsApp automation
          to businesses in <strong className="text-foreground/70">{area}, Chennai</strong>.
          Whether you run a shop, clinic, agency or startup in {area}
          {landmark ? ` near ${landmark}` : ""}, we build fast, conversion-focused websites
          that turn local visitors into paying customers.
        </>
      }
      sections={[
        {
          h2: `Services for ${area} businesses`,
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>Web design & development tailored for {area}</li>
              <li>Ecommerce stores with payment gateway integration</li>
              <li>SEO services to rank locally in {area} searches</li>
              <li>WhatsApp automation for leads, bookings and follow-ups</li>
              <li>Mobile and web app development</li>
            </ul>
          ),
        },
        {
          h2: `Why local businesses in ${area} choose SmartPixel`,
          body: (
            <p>
              We're based in nearby Chrompet — close enough to meet face-to-face,
              and we understand the {area} market{landmark ? `, including key spots like ${landmark}` : ""}.
              Every site we build is fast, mobile-first and tuned for Google's local pack
              so customers searching "web design {area.toLowerCase()}" actually find you.
            </p>
          ),
        },
        {
          h2: `Areas near ${area} we also serve`,
          body: (
            <div className="flex flex-wrap gap-2">
              {adjacents.map((a) => (
                <a key={a.slug} href={`/web-design-${a.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-accent/50 hover:text-accent transition-colors">
                  Web design in {a.name}
                </a>
              ))}
            </div>
          ),
        },
      ]}
      internalLinks={[
        { label: "SEO Services Chennai", href: "/seo-services-chennai" },
        { label: "Ecommerce Chennai", href: "/ecommerce-website-chennai" },
        { label: "WhatsApp Automation", href: "/whatsapp-automation-chennai" },
        { label: "Portfolio", href: "/portfolio" },
      ]}
      faqs={[
        {
          q: `How much does a website cost in ${area}, Chennai?`,
          a: `Websites for ${area} businesses start from ₹10,000 for a basic 5-page site. Ecommerce and custom builds start from ₹40,000.`,
        },
        {
          q: `How long does it take to build a website in ${area}?`,
          a: `Most websites are delivered in 5–10 working days. Larger ecommerce or custom app projects take 3–6 weeks.`,
        },
        {
          q: `Do you visit clients in ${area} in person?`,
          a: `Yes. We're based in Chrompet and happy to meet clients in ${area} for kickoff or strategy sessions.`,
        },
      ]}
    />
  );
};

export default LocationPage;
