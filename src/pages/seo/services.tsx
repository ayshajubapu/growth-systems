import { Link } from "react-router-dom";
import ServicePage from "./ServicePage";

const A = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-accent underline font-medium hover:text-accent/80 transition-colors">{children}</Link>
);

const Bullets = ({ items }: { items: [string, React.ReactNode][] }) => (
  <ul className="space-y-3 text-muted-foreground/90">
    {items.map(([h, body]) => (
      <li key={h} className="leading-relaxed">
        <strong className="text-foreground">{h}</strong> — {body}
      </li>
    ))}
  </ul>
);

export const SeoServicesChennai = () => (
  <ServicePage
    slug="seo-services-chennai"
    crumbName="SEO Services Chennai"
    serviceName="SEO Services"
    title="SEO Services in Chennai — Local, Technical & Content SEO | SmartPixel"
    description="SEO services in Chennai covering local SEO, technical fixes, on-page work, content and Google Business Profile. Clear process, honest reporting, no ranking guarantees."
    h1="SEO Services in Chennai"
    intro={
      <>
        We help Chennai businesses rank for the keywords their customers actually search — from <strong>"web design chennai"</strong> to <strong>"website developer near me"</strong>. No fluff, just measurable rankings and traffic.
      </>
    }
    what={[
      "Local SEO and Google Business Profile optimization",
      "On-page SEO: titles, meta, schema, internal linking",
      "Technical SEO audits and Core Web Vitals fixes",
      "Keyword research focused on buyer intent",
      "Content strategy with monthly blog posts",
      "Monthly transparent ranking and traffic reports",
    ]}
    benefits={[
      "Rank for high-intent local Chennai keywords",
      "Get into the Google Map Pack for your area",
      "More organic leads without paying for ads",
      "Long-term compounding traffic growth",
    ]}
    process={[
      "Free SEO audit of your current site",
      "Keyword and competitor research",
      "On-page and technical fixes",
      "Local SEO setup (GBP, citations, schema)",
      "Monthly content + link building",
      "Reporting + iteration",
    ]}
    faqs={[
      { q: "How long does SEO take to show results in Chennai?", a: "Local SEO often shows movement in 4–8 weeks. Competitive keywords take 3–6 months." },
      { q: "Do you guarantee #1 rankings?", a: "No ethical SEO does. We guarantee transparent work and measurable ranking improvements." },
      { q: "How much does SEO cost in Chennai?", a: "Plans start from ₹6,000/month for local SEO. Beyond that, cost tracks the amount of work: how many pages need fixing, how competitive the keywords are, and how much content is published each month." },
      { q: "Do I need SEO if I already run Google Ads?", a: "They answer different problems. Ads stop the day you stop paying; SEO compounds but takes months. Most Chennai businesses we work with run ads for immediate enquiries while SEO builds underneath." },
      { q: "Can you work on a site you didn't build?", a: "Yes. Most SEO engagements start on an existing website — WordPress, Shopify, Wix or custom. We audit first and tell you honestly if the platform is the bottleneck." },
      { q: "What do I actually receive each month?", a: "A record of what changed on the site, the keywords and pages that moved, Search Console impressions and clicks, and what is queued next. No vanity dashboards." },
    ]}
    extraSections={[
      {
        h2: "What we work on",
        body: (
          <Bullets
            items={[
              ["Local SEO", <>Getting you found for searches in your own area — service pages per locality, consistent business details across directories, and the on-page signals that support Map Pack visibility. See how we approach <A to="/web-design-chrompet">Chrompet</A> or <A to="/web-design-t-nagar">T Nagar</A>.</>],
              ["Technical SEO", <>Crawlability, indexation, canonical tags, redirects, sitemaps, structured data and Core Web Vitals. This is usually where the fastest wins are on an older site.</>],
              ["On-page SEO", <>Titles, meta descriptions, heading structure and page copy rewritten around what the searcher is actually trying to do.</>],
              ["Content SEO", <>Articles that answer real buying questions rather than keyword filler — the approach we use on our own <A to="/blog">blog</A>.</>],
              ["E-commerce SEO", <>Category and product page structure, faceted-navigation control, and product schema. Pairs with <A to="/ecommerce-website-chennai">ecommerce builds</A>.</>],
              ["Google Business Profile", <>Categories, services, photos, posts and review handling — the profile does most of the heavy lifting for near-me searches.</>],
              ["Answer engine optimisation", <>Clear question-and-answer structure, FAQ and entity markup, and factual on-page statements so AI answer engines can quote you correctly.</>],
            ]}
          />
        ),
      },
      {
        h2: "Who we help",
        body: (
          <p className="leading-relaxed">
            The businesses we work with in Chennai are mostly owner-run: retail and jewellery showrooms, clinics and
            practices, education and training providers, travel and services firms, D2C and ecommerce brands, and
            B2B suppliers. You can see the kind of work this produces in our <A to="/portfolio">portfolio</A> and in
            our longer <A to="/case-studies">case studies</A>.
          </p>
        ),
      },
      {
        h2: "What affects the cost of SEO",
        body: (
          <>
            <p className="leading-relaxed">
              We publish a starting point rather than a fixed price list, because SEO cost is driven by scope, not by
              a package name. The factors that move it:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              <li>How many pages exist, and how many need rewriting or restructuring.</li>
              <li>How competitive your keywords are — city-wide terms take far more work than neighbourhood ones.</li>
              <li>Whether the current platform can be fixed or needs rebuilding first.</li>
              <li>How much new content is published each month.</li>
              <li>Whether local SEO and Google Business Profile work is included.</li>
              <li>Whether you need ecommerce or multi-location coverage.</li>
            </ul>
            <p className="leading-relaxed">
              If a site needs structural work first, we say so before quoting monthly SEO — see{" "}
              <A to="/services/web-design-chennai">our web design and development work</A>.
            </p>
          </>
        ),
      },
      {
        h2: "Proof, not promises",
        body: (
          <p className="leading-relaxed">
            We don't guarantee positions, and we don't publish numbers we can't source. What we can show is how the
            work is structured: read the{" "}
            <A to="/case-studies/vj-real-estate">VJ Real Estate case study</A> for an SEO-first architecture built
            from scratch, or{" "}
            <A to="/blog/why-high-google-impressions-fail-to-generate-enquiries">why impressions don't become enquiries</A>{" "}
            and <A to="/blog/why-your-website-isnt-ranking-on-google">why a site isn't ranking</A> for how we diagnose.
          </p>
        ),
      },
    ]}
    extraLinks={[
      { label: "VJ Real Estate — SEO-first build", href: "/case-studies/vj-real-estate" },
      { label: "Local SEO checklist", href: "/blog/local-seo-checklist-for-small-businesses" },
      { label: "What SEO costs in India", href: "/blog/how-much-does-seo-cost-in-india" },
    ]}
  />
);

export const EcommerceChennai = () => (
  <ServicePage
    slug="ecommerce-website-chennai"
    crumbName="Ecommerce Website Chennai"
    serviceName="Ecommerce Website Development"
    title="Ecommerce Website Development in Chennai | Shopify, WooCommerce | SmartPixel"
    description="Build an ecommerce website in Chennai with payment gateway, GST invoicing and inventory. Shopify and WooCommerce experts based in Chrompet."
    h1="Ecommerce Website Development in Chennai"
    intro={
      <>
        From a 10-product boutique to a 10,000-SKU store — we build ecommerce websites in Chennai that load fast, convert visitors, and integrate with the tools you already use.
      </>
    }
    what={[
      "Shopify store design and setup",
      "WooCommerce / WordPress ecommerce builds",
      "Razorpay, PayU, Stripe payment integration",
      "GST invoicing and inventory management",
      "Mobile-first product pages with conversion optimization",
      "WhatsApp order automation",
    ]}
    benefits={[
      "Sell 24/7 to customers across India",
      "Lower cart abandonment with one-page checkout",
      "Native UPI + card payments",
      "SEO-optimized product pages out of the box",
    ]}
    process={[
      "Discovery: products, audience, payment needs",
      "Theme design or custom build",
      "Product upload + payment + shipping setup",
      "Speed and conversion optimization",
      "Launch + training",
    ]}
    faqs={[
      { q: "Shopify or WooCommerce — which is better?", a: "Shopify is faster to launch and easier to maintain. WooCommerce gives more control and lower long-term cost." },
      { q: "How much does an ecommerce website cost in Chennai?", a: "From ₹40,000 for a Shopify store to ₹1L+ for custom Website with admin panel." },
      { q: "Do you integrate UPI?", a: "Yes — via Razorpay, PayU or Cashfree, all major UPI apps work." },
    ]}
  />
);

export const WhatsappAutomationChennai = () => (
  <ServicePage
    slug="whatsapp-automation-chennai"
    crumbName="WhatsApp Automation Chennai"
    serviceName="WhatsApp Automation"
    title="WhatsApp Automation in Chennai | Chatbots & Lead Capture | SmartPixel"
    description="WhatsApp automation for Chennai businesses — chatbots, auto-replies, booking flows and lead nurturing on the official WhatsApp Business API."
    h1="WhatsApp Automation for Chennai Businesses"
    intro={
      <>
        Capture leads, qualify them, book appointments and send follow-ups — automatically — on the channel your customers actually use. Built on the official WhatsApp Business Cloud API.
      </>
    }
    what={[
      "WhatsApp Business API setup and verification",
      "Chatbot flows for FAQs, bookings and lead capture",
      "Auto-reply, away messages, and CRM sync",
      "Broadcast campaigns with template messages",
      "Click-to-WhatsApp ad funnels",
      "Integration with your website and Google Sheets",
    ]}
    benefits={[
      "Reply in seconds — even at 2 AM",
      "Capture leads directly from Instagram, ads and Google",
      "Qualify before your sales team gets involved",
      "Send order updates and reminders automatically",
    ]}
    process={[
      "WhatsApp Business API onboarding",
      "Flow design for your use case",
      "Chatbot build + template approval",
      "Integration with website / CRM",
      "Test, launch, monitor",
    ]}
    faqs={[
      { q: "Do I need WhatsApp Business API?", a: "Yes — for true automation, broadcasts and chatbots, the API is required (not the green app)." },
      { q: "How much does WhatsApp automation cost?", a: "From ₹15,000 setup + monthly platform fees based on conversation volume." },
      { q: "Can it book appointments?", a: "Yes — we build full booking flows that sync to your calendar." },
    ]}
  />
);

export const WebDesignChennai = () => (
  <ServicePage
    slug="services/web-design-chennai"
    crumbName="Web Design Chennai"
    serviceName="Web Design"
    title="Web Design & Development Company in Chennai | SmartPixel"
    description="Web design and development company in Chennai building mobile-first business, custom and e-commerce websites — SEO-ready at launch. Based in Chrompet."
    h1="Web Design & Development Company in Chennai"
    intro={
      <>
        We design websites for Chennai businesses that don't just look beautiful — they generate enquiries, calls and bookings. Mobile-first, SEO-ready, and built to scale.
      </>
    }
    what={[
      "Custom UI/UX design tailored to your brand",
      "Mobile-first responsive layouts",
      "Conversion-focused page structure",
      "Fast-loading code with Core Web Vitals in mind",
      "On-page SEO baked in",
      "CMS so you can edit content yourself",
    ]}
    benefits={[
      "Stand out from cookie-cutter template sites",
      "Higher Google rankings from day one",
      "Lower bounce rates, more leads",
      "Designs that age well",
    ]}
    process={[
      "Discovery + competitor research",
      "Wireframes and design",
      "Development + content",
      "Speed + SEO optimization",
      "Launch + handover",
    ]}
    faqs={[
      { q: "How much does web design cost in Chennai?", a: "Custom websites start from ₹25,000 for a 5-page site. Larger projects from ₹60,000." },
      { q: "How long will it take?", a: "Most websites launch in 3–4 weeks." },
      { q: "Do you work with WordPress?", a: "Yes — WordPress, Webflow, Shopify or custom React, depending on what fits best." },
    ]}
    extraSections={[
      {
        h2: "Website services we offer",
        body: (
          <Bullets
            items={[
              ["Business websites", <>Five to fifteen page sites for service businesses — clear positioning, credibility content and a single obvious enquiry path.</>],
              ["Custom web development", <>Anything that isn't a template: booking flows, calculators, dashboards and portals. See <A to="/services/web-app-development">web app development</A>.</>],
              ["E-commerce websites", <>Product catalogues, payments and order flows — covered in detail on our <A to="/ecommerce-website-chennai">ecommerce page</A>.</>],
              ["React and modern web builds", <>Fast, component-based front ends with per-route metadata so pages can actually be indexed.</>],
              ["Website redesign", <>Rebuilding an existing site without losing the URLs and rankings you already have — redirects mapped before launch.</>],
              ["SEO-ready structure", <>Clean URLs, heading hierarchy, metadata, sitemap and structured data set up at build time, not bolted on later. Pair with <A to="/seo-services-chennai">ongoing search work</A>.</>],
            ]}
          />
        ),
      },
      {
        h2: "How a build runs",
        body: (
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground/90">
            <li>Discovery — what the business sells, who buys it, and what the site has to make happen.</li>
            <li>Planning — sitemap, page-by-page intent and the content each page needs.</li>
            <li>UI/UX — layout and design, reviewed on mobile first.</li>
            <li>Development — build in React with reusable components.</li>
            <li>SEO setup — metadata, headings, schema, sitemap, robots and redirects.</li>
            <li>Testing — devices, browsers, forms, speed and accessibility basics.</li>
            <li>Deployment — launch, analytics and Search Console connected.</li>
            <li>Maintenance — updates, fixes and iteration after launch.</li>
          </ol>
        ),
      },
      {
        h2: "What affects the cost of a website",
        body: (
          <>
            <p className="leading-relaxed">Rather than a single headline price, cost tracks scope:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              <li>Number of pages and how much of the content we write.</li>
              <li>Design complexity — template-led versus fully custom.</li>
              <li>Custom functionality such as bookings, logins or calculators.</li>
              <li>Third-party integrations: payments, CRM, WhatsApp, analytics.</li>
              <li>Whether you need a CMS to edit content yourself.</li>
              <li>E-commerce: catalogue size, variants, shipping and tax rules.</li>
              <li>Depth of SEO work included at launch.</li>
              <li>Ongoing maintenance and support.</li>
            </ul>
          </>
        ),
      },
      {
        h2: "Work we've shipped",
        body: (
          <p className="leading-relaxed">
            Before/after snapshots across jewellery, travel, education, D2C and real estate live in the{" "}
            <A to="/portfolio">portfolio</A>. For a full write-up of architecture and search work, read the{" "}
            <A to="/case-studies/vj-real-estate">VJ Real Estate case study</A>, or browse all{" "}
            <A to="/case-studies">case studies</A>. Useful reading before you brief us:{" "}
            <A to="/blog/custom-website-vs-wordpress">custom build versus WordPress</A> and{" "}
            <A to="/blog/why-most-business-websites-never-generate-leads">why most business websites never generate leads</A>.
          </p>
        ),
      },
    ]}
    extraLinks={[
      { label: "VJ Real Estate case study", href: "/case-studies/vj-real-estate" },
      { label: "All case studies", href: "/case-studies" },
      { label: "Signs you need a new website", href: "/blog/15-signs-your-business-needs-a-new-website" },
    ]}
  />
);

export const WebAppDevelopment = () => (
  <ServicePage
    slug="services/web-app-development"
    crumbName="Web App Development"
    serviceName="Web App Development"
    title="Web App Development in Chennai | SaaS, Dashboards, Portals | SmartPixel"
    description="Custom web app development in Chennai — SaaS products, dashboards, internal tools and customer portals. React, Node, Postgres."
    h1="Web App Development in Chennai"
    intro={
      <>
        From customer portals to internal dashboards and full SaaS products — we build secure, scalable web apps with modern stacks (React, Node, Postgres) and a UX your team will actually use.
      </>
    }
    what={[
      "MVP scoping and rapid prototyping",
      "Custom dashboards and admin panels",
      "SaaS products with auth, billing and roles",
      "API design and third-party integrations",
      "Secure cloud deployment (AWS/Vercel)",
      "Ongoing maintenance and feature releases",
    ]}
    benefits={[
      "Replace 5 spreadsheets with one tool",
      "Scale from 10 to 10,000 users without rewrites",
      "Own your data — no vendor lock-in",
      "Faster team workflows",
    ]}
    process={[
      "Discovery + technical scoping",
      "Wireframes + clickable prototype",
      "Sprint-based development",
      "QA + security review",
      "Launch + iterate",
    ]}
    faqs={[
      { q: "How much does a web app cost?", a: "MVPs start from ₹2.5L. Full products typically ₹6L–₹20L depending on scope." },
      { q: "Which tech stack do you use?", a: "React/Next.js + Node/Express + Postgres + Supabase/AWS — chosen per project." },
      { q: "Do you offer ongoing support?", a: "Yes — monthly retainer plans available after launch." },
    ]}
  />
);

export const MobileAppDevelopment = () => (
  <ServicePage
    slug="services/mobile-app-development"
    crumbName="Mobile App Development"
    serviceName="Mobile App Development"
    title="Mobile App Development in Chennai | iOS & Android | SmartPixel"
    description="Mobile app development company in Chennai. Native iOS, Android and cross-platform React Native apps for startups and businesses."
    h1="Mobile App Development in Chennai"
    intro={
      <>
        Native and cross-platform mobile apps for Chennai startups and businesses — built with React Native or Flutter, deployed to App Store and Play Store, and designed to delight.
      </>
    }
    what={[
      "iOS and Android app development",
      "React Native and Flutter cross-platform apps",
      "App Store and Play Store deployment",
      "Push notifications, deep linking, in-app purchases",
      "Backend API + admin panel",
      "Analytics and crash reporting setup",
    ]}
    benefits={[
      "One codebase, two platforms",
      "Lower development cost than fully native",
      "Faster time to market",
      "Better retention with native-feeling UX",
    ]}
    process={[
      "Discovery + UX scoping",
      "Design (Figma) + prototype",
      "Sprint development",
      "QA on real devices",
      "Store submission + launch",
    ]}
    faqs={[
      { q: "How much does a mobile app cost in Chennai?", a: "MVPs from ₹1.5L. Production apps with backend ₹2L–₹5L." },
      { q: "How long to launch?", a: "Typical timeline is 8–16 weeks from kickoff to App Store." },
      { q: "Do you handle App Store submission?", a: "Yes — including Apple Developer account setup and review responses." },
    ]}
  />
);

export const DigitalMarketingChennai = () => (
  <ServicePage
    slug="services/digital-marketing-chennai"
    crumbName="Digital Marketing Chennai"
    serviceName="Digital Marketing"
    title="Digital Marketing Agency in Chennai | Ads, SEO, Social | SmartPixel"
    description="Digital marketing agency in Chennai offering Google Ads, Meta Ads, SEO and social media marketing. Lead-focused, ROI-driven."
    h1="Digital Marketing Agency in Chennai"
    intro={
      <>
        We run digital marketing campaigns for Chennai businesses that are measured by one thing: leads in your inbox. Google Ads, Meta Ads, SEO and content — all tuned for ROI.
      </>
    }
    what={[
      "Google Ads (Search, Display, YouTube)",
      "Meta Ads (Facebook, Instagram)",
      "Local SEO and Google Business Profile",
      "Social media content and management",
      "Landing page design and CRO",
      "Monthly reporting with real numbers",
    ]}
    benefits={[
      "Predictable lead flow within weeks",
      "Lower cost per lead with focused targeting",
      "Full-funnel approach (ads + landing + follow-up)",
      "Transparent reporting — no agency black box",
    ]}
    process={[
      "Audit + competitor research",
      "Strategy + creative + landing pages",
      "Launch campaigns",
      "Weekly optimization",
      "Monthly review + scale",
    ]}
    faqs={[
      { q: "Minimum ad budget?", a: "We recommend ₹15,000+/month ad spend for meaningful results in Chennai." },
      { q: "What's your management fee?", a: "From ₹8,000/month based on scope and platforms." },
      { q: "Do you build landing pages?", a: "Yes — every ad campaign should have a dedicated landing page." },
    ]}
  />
);