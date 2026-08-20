import { Link } from "react-router-dom";
import ServicePage from "./ServicePage";

const A = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-accent underline font-medium hover:text-accent/80 transition-colors"
  >
    {children}
  </Link>
);

const Bullets = ({
  items,
}: {
  items: [string, React.ReactNode][];
}) => (
  <ul className="space-y-3 text-muted-foreground/90">
    {items.map(([h, body]) => (
      <li key={h} className="leading-relaxed">
        <strong className="text-foreground">{h}</strong> — {body}
      </li>
    ))}
  </ul>
);

/* =========================================================
   SEO SERVICES — CHENNAI
   ========================================================= */

export const SeoServicesChennai = () => (
  <ServicePage
    slug="seo-services-chennai"
    crumbName="SEO Services Chennai"
    serviceName="SEO Services"
    title="SEO Services in Chennai — Local, Technical & Content SEO | SmartPixel"
    description="SEO services in Chennai covering technical SEO, local SEO, on-page optimisation, content strategy and Google Business Profile optimisation. Transparent work with no ranking guarantees."
    h1="SEO Services in Chennai"
    intro={
      <>
        We provide SEO services for Chennai businesses that want stronger
        organic visibility, more relevant search traffic and more enquiries
        from Google. Our work covers technical SEO, local SEO, on-page
        optimisation, content and Google Business Profile optimisation —
        without ranking guarantees or vague monthly reports.
      </>
    }
    what={[
      "Local SEO and Google Business Profile optimisation",
      "Technical SEO audits and Core Web Vitals improvements",
      "On-page SEO including titles, meta descriptions and heading structure",
      "Structured data, canonical URLs, sitemaps and indexation improvements",
      "Keyword research focused on commercial and local search intent",
      "Internal linking and site architecture improvements",
      "Content strategy based on real customer search behaviour",
      "Monthly ranking, traffic and Search Console reporting",
    ]}
    benefits={[
      "Build stronger visibility for high-intent Chennai searches",
      "Improve local search visibility across relevant service areas",
      "Create clearer connections between services, locations and website content",
      "Increase qualified organic traffic instead of chasing irrelevant keywords",
      "Build a stronger technical foundation for long-term search growth",
      "Turn existing website traffic into more enquiries through better page structure",
    ]}
    process={[
      "Website and Google Search Console audit",
      "Keyword and competitor research",
      "Search intent and page-mapping strategy",
      "Technical and on-page SEO improvements",
      "Local SEO and Google Business Profile optimisation",
      "Content optimisation and new search-focused content",
      "Internal linking and authority-building work",
      "Monthly reporting, analysis and iteration",
    ]}
    faqs={[
      {
        q: "How long does SEO take to show results in Chennai?",
        a: "SEO results vary depending on competition, website authority, technical condition, content quality and the locations being targeted. Local improvements can sometimes appear within weeks, while competitive search terms generally require sustained work over several months.",
      },
      {
        q: "Do you guarantee number one Google rankings?",
        a: "No. No legitimate SEO agency can guarantee a fixed Google ranking because search results change according to competition, location, search intent and Google's ranking systems. We focus on measurable work, improved visibility and relevant organic traffic.",
      },
      {
        q: "How much does SEO cost in Chennai?",
        a: "SEO pricing depends on the website, target locations, competition, number of pages, technical work required and the scope of ongoing content and local SEO. SmartPixel provides a tailored plan after reviewing the business and its search goals.",
      },
      {
        q: "Do I need SEO if I already run Google Ads?",
        a: "They solve different problems. Google Ads can generate immediate paid traffic, while SEO builds organic visibility over time. Many businesses use paid campaigns for immediate demand while building organic search visibility alongside them.",
      },
      {
        q: "Can you work on a website you did not build?",
        a: "Yes. We can audit and optimise existing WordPress, Shopify, Wix and custom websites. We first identify technical, content and structural issues before recommending the work required.",
      },
      {
        q: "What do I receive each month from SEO?",
        a: "You receive a clear record of completed work, ranking and page movement, Search Console performance, important technical changes, content activity and the next priorities. The focus is on useful SEO data rather than vanity metrics.",
      },
      {
        q: "Do you provide local SEO in Chennai?",
        a: "Yes. Local SEO includes Google Business Profile optimisation, local landing pages, business information consistency, review strategy, location-focused content, internal linking and other work designed to improve local search visibility.",
      },
      {
        q: "Do you provide SEO for ecommerce websites?",
        a: "Yes. Ecommerce SEO can include category and product-page optimisation, internal linking, technical indexing, structured data, search-focused content and improvements to product discovery through organic search.",
      },
    ]}
    extraSections={[
      {
        h2: "What we work on",
        body: (
          <Bullets
            items={[
              [
                "Local SEO",
                <>
                  Improving visibility for location-based searches through
                  Google Business Profile optimisation, local service pages,
                  consistent business information, relevant reviews and
                  location-focused content. See our local work around{" "}
                  <A to="/web-design-chrompet">Chrompet</A>,{" "}
                  <A to="/web-design-pallavaram">Pallavaram</A> and{" "}
                  <A to="/web-design-tambaram">Tambaram</A>.
                </>,
              ],

              [
                "Technical SEO",
                <>
                  Crawlability, indexation, canonical tags, redirects,
                  XML sitemaps, robots directives, structured data and
                  Core Web Vitals. Technical problems can prevent otherwise
                  useful content from performing well.
                </>,
              ],

              [
                "On-page SEO",
                <>
                  Titles, meta descriptions, heading structure, page copy,
                  image context, internal links and search intent alignment
                  are reviewed so each important page has a clear purpose.
                </>,
              ],

              [
                "Content SEO",
                <>
                  We build content around genuine customer questions,
                  commercial intent and useful information rather than
                  producing repetitive keyword-filled articles. Explore our{" "}
                  <A to="/blog">blog</A>.
                </>,
              ],

              [
                "Ecommerce SEO",
                <>
                  Category and product architecture, internal linking,
                  indexation, product information and structured data can
                  be improved to help customers discover products through
                  organic search. See our{" "}
                  <A to="/ecommerce-website-chennai">
                    ecommerce website development
                  </A>{" "}
                  service.
                </>,
              ],

              [
                "Google Business Profile",
                <>
                  Categories, services, business information, photos,
                  posts and review activity are important parts of local
                  search visibility. We align the profile with the website
                  and the actual services the business provides.
                </>,
              ],
            ]}
          />
        ),
      },

      {
        h2: "Who we help",
        body: (
          <p className="leading-relaxed">
            We work with owner-run and growing businesses across Chennai,
            including retail and jewellery showrooms, clinics and practices,
            education and training providers, travel and services companies,
            D2C and ecommerce brands, and B2B suppliers. You can see examples
            of our work in the{" "}
            <A to="/portfolio">portfolio</A> and{" "}
            <A to="/case-studies">case studies</A>.
          </p>
        ),
      },

      {
        h2: "SEO for Chennai and surrounding areas",
        body: (
          <p className="leading-relaxed">
            Local search strategy becomes more useful when the website
            clearly connects the business with the areas it genuinely
            serves. We work with businesses around{" "}
            <A to="/web-design-chrompet">Chrompet</A>,{" "}
            <A to="/web-design-pallavaram">Pallavaram</A>,{" "}
            <A to="/web-design-tambaram">Tambaram</A>, Guindy, T Nagar,
            Saidapet, Nungambakkam and other parts of Chennai. Location
            targeting is based on genuine service coverage rather than
            creating repetitive pages for every possible keyword.
          </p>
        ),
      },

      {
        h2: "What affects the cost of SEO",
        body: (
          <>
            <p className="leading-relaxed">
              We don't use a single price for every SEO project because the
              amount of work depends on the current website, competition and
              business goals.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90 mt-4">
              <li>
                Number of pages that require optimisation or restructuring.
              </li>

              <li>
                Competition for the keywords and locations being targeted.
              </li>

              <li>
                Technical condition and platform of the current website.
              </li>

              <li>
                Amount of new content required each month.
              </li>

              <li>
                Whether local SEO and Google Business Profile work is included.
              </li>

              <li>
                Whether ecommerce, multiple locations or larger site
                architecture is involved.
              </li>
            </ul>

            <p className="leading-relaxed mt-4">
              If a website needs structural work before SEO can perform
              properly, we explain that before recommending an ongoing
              search strategy. See{" "}
              <A to="/services/web-design-chennai">
                our web design and development work
              </A>
              .
            </p>
          </>
        ),
      },

      {
        h2: "Proof, not promises",
        body: (
          <p className="leading-relaxed">
            We don't guarantee positions or publish results that cannot be
            supported. Instead, we focus on clear technical work, measurable
            search visibility and useful organic traffic. Read the{" "}
            <A to="/case-studies/vj-real-estate">
              VJ Real Estate case study
            </A>{" "}
            for an SEO-focused website architecture, or read{" "}
            <A to="/blog/why-high-google-impressions-fail-to-generate-enquiries">
              why high Google impressions don't always become enquiries
            </A>{" "}
            and{" "}
            <A to="/blog/why-your-website-isnt-ranking-on-google">
              why websites fail to rank
            </A>
            .
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "VJ Real Estate — SEO-first build",
        href: "/case-studies/vj-real-estate",
      },
      {
        label: "Local SEO checklist",
        href: "/blog/local-seo-checklist-for-small-businesses",
      },
      {
        label: "SEO vs Google Ads",
        href: "/blog/seo-vs-google-ads-which-delivers-better-roi",
      },
      {
        label: "Why websites fail to rank",
        href: "/blog/why-your-website-isnt-ranking-on-google",
      },
      {
        label: "SEO mistakes costing businesses customers",
        href: "/blog/25-seo-mistakes-costing-you-customers",
      },
    ]}
  />
);

/* =========================================================
   ECOMMERCE
   ========================================================= */

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
        From a 10-product boutique to a 10,000-SKU store — we build
        ecommerce websites in Chennai that load fast, convert visitors,
        and integrate with the tools you already use.
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
      {
        q: "Shopify or WooCommerce — which is better?",
        a: "Shopify is faster to launch and easier to maintain. WooCommerce gives more control and flexibility. The right choice depends on the catalogue, integrations and how the business plans to manage the store.",
      },
      {
        q: "How much does an ecommerce website cost in Chennai?",
        a: "The cost depends on the platform, catalogue size, payment requirements, shipping, integrations, custom functionality and design requirements. We provide a project-specific estimate after understanding the store requirements.",
      },
      {
        q: "Do you integrate UPI?",
        a: "Yes. We can integrate payment gateways such as Razorpay, PayU or Cashfree depending on the project requirements.",
      },
    ]}
  />
);

/* =========================================================
   WHATSAPP AUTOMATION
   ========================================================= */

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
        Capture leads, qualify them, book appointments and send follow-ups —
        automatically — on the channel your customers actually use. Built
        on the official WhatsApp Business Cloud API.
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
      {
        q: "Do I need WhatsApp Business API?",
        a: "Yes — for true automation, broadcasts and chatbots, the WhatsApp Business API is required rather than the standard WhatsApp Business app.",
      },
      {
        q: "How much does WhatsApp automation cost?",
        a: "Pricing depends on the automation scope, integrations, conversation volume and platform requirements. We provide a project-specific estimate after understanding the workflow.",
      },
      {
        q: "Can it book appointments?",
        a: "Yes. We can build booking flows that collect customer information and connect with the relevant calendar or business workflow.",
      },
    ]}
  />
);

/* =========================================================
   WEB DESIGN
   ========================================================= */

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
        We design websites for Chennai businesses that don't just look
        beautiful — they generate enquiries, calls and bookings. Mobile-first,
        SEO-ready, and built to scale.
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
      "Better search visibility through strong technical foundations",
      "Lower bounce rates and clearer enquiry paths",
      "Designs that can evolve with the business",
    ]}
    process={[
      "Discovery + competitor research",
      "Wireframes and design",
      "Development + content",
      "Speed + SEO optimization",
      "Launch + handover",
    ]}
    faqs={[
      {
        q: "How much does web design cost in Chennai?",
        a: "Website cost depends on the number of pages, design complexity, functionality, integrations, CMS requirements and content scope. We provide a project-specific quote after understanding the requirements.",
      },
      {
        q: "How long will it take?",
        a: "Most business websites can be completed within a few weeks depending on content, revisions, functionality and project scope.",
      },
      {
        q: "Do you work with WordPress?",
        a: "Yes — WordPress, Webflow, Shopify or custom React can be used depending on what fits the project's requirements.",
      },
    ]}
    extraSections={[
      {
        h2: "Website services we offer",
        body: (
          <Bullets
            items={[
              [
                "Business websites",
                <>
                  Five to fifteen page sites for service businesses —
                  clear positioning, credibility content and a single
                  obvious enquiry path.
                </>,
              ],

              [
                "Custom web development",
                <>
                  Anything that isn't a template: booking flows,
                  calculators, dashboards and portals. See{" "}
                  <A to="/services/web-app-development">
                    web app development
                  </A>
                  .
                </>,
              ],

              [
                "E-commerce websites",
                <>
                  Product catalogues, payments and order flows — covered
                  in detail on our{" "}
                  <A to="/ecommerce-website-chennai">
                    ecommerce page
                  </A>
                  .
                </>,
              ],

              [
                "React and modern web builds",
                <>
                  Fast, component-based front ends with per-route metadata
                  so pages can actually be indexed.
                </>,
              ],

              [
                "Website redesign",
                <>
                  Rebuilding an existing site without losing the URLs and
                  rankings you already have — redirects mapped before launch.
                </>,
              ],

              [
                "SEO-ready structure",
                <>
                  Clean URLs, heading hierarchy, metadata, sitemap and
                  structured data set up at build time, not bolted on later.
                  Pair with{" "}
                  <A to="/seo-services-chennai">
                    ongoing search work
                  </A>
                  .
                </>,
              ],
            ]}
          />
        ),
      },

      {
        h2: "How a build runs",
        body: (
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground/90">
            <li>
              Discovery — what the business sells, who buys it, and what
              the site has to make happen.
            </li>

            <li>
              Planning — sitemap, page-by-page intent and the content each
              page needs.
            </li>

            <li>
              UI/UX — layout and design, reviewed on mobile first.
            </li>

            <li>
              Development — build in React with reusable components.
            </li>

            <li>
              SEO setup — metadata, headings, schema, sitemap, robots and
              redirects.
            </li>

            <li>
              Testing — devices, browsers, forms, speed and accessibility basics.
            </li>

            <li>
              Deployment — launch, analytics and Search Console connected.
            </li>

            <li>
              Maintenance — updates, fixes and iteration after launch.
            </li>
          </ol>
        ),
      },

      {
        h2: "What affects the cost of a website",
        body: (
          <>
            <p className="leading-relaxed">
              Rather than a single headline price, cost tracks scope:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground/90">
              <li>
                Number of pages and how much of the content we write.
              </li>

              <li>
                Design complexity — template-led versus fully custom.
              </li>

              <li>
                Custom functionality such as bookings, logins or calculators.
              </li>

              <li>
                Third-party integrations: payments, CRM, WhatsApp, analytics.
              </li>

              <li>
                Whether you need a CMS to edit content yourself.
              </li>

              <li>
                E-commerce: catalogue size, variants, shipping and tax rules.
              </li>

              <li>
                Depth of SEO work included at launch.
              </li>

              <li>
                Ongoing maintenance and support.
              </li>
            </ul>
          </>
        ),
      },

      {
        h2: "Work we've shipped",
        body: (
          <p className="leading-relaxed">
            Before/after snapshots across jewellery, travel, education,
            D2C and real estate live in the{" "}
            <A to="/portfolio">portfolio</A>. For a full write-up of
            architecture and search work, read the{" "}
            <A to="/case-studies/vj-real-estate">
              VJ Real Estate case study
            </A>
            , or browse all{" "}
            <A to="/case-studies">case studies</A>. Useful reading before
            you brief us:{" "}
            <A to="/blog/custom-website-vs-wordpress">
              custom build versus WordPress
            </A>{" "}
            and{" "}
            <A to="/blog/why-most-business-websites-never-generate-leads">
              why most business websites never generate leads
            </A>
            .
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "VJ Real Estate case study",
        href: "/case-studies/vj-real-estate",
      },
      {
        label: "All case studies",
        href: "/case-studies",
      },
      {
        label: "Signs you need a new website",
        href: "/blog/15-signs-your-business-needs-a-new-website",
      },
    ]}
  />
);

/* =========================================================
   WEB APP DEVELOPMENT
   ========================================================= */

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
        From customer portals to internal dashboards and full SaaS products —
        we build secure, scalable web apps with modern stacks and a UX your
        team will actually use.
      </>
    }
    what={[
      "MVP scoping and rapid prototyping",
      "Custom dashboards and admin panels",
      "SaaS products with auth, billing and roles",
      "API design and third-party integrations",
      "Secure cloud deployment",
      "Ongoing maintenance and feature releases",
    ]}
    benefits={[
      "Replace disconnected spreadsheets with one workflow",
      "Build applications that can grow with the business",
      "Own your data and application architecture",
      "Improve team workflows",
    ]}
    process={[
      "Discovery + technical scoping",
      "Wireframes + clickable prototype",
      "Sprint-based development",
      "QA + security review",
      "Launch + iterate",
    ]}
    faqs={[
      {
        q: "How much does a web app cost?",
        a: "The cost depends on the product scope, number of users, features, integrations, authentication, dashboard requirements and deployment architecture.",
      },
      {
        q: "Which tech stack do you use?",
        a: "React, Next.js, Node, Express, PostgreSQL, Supabase and cloud platforms can be used depending on the project's requirements.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes. Ongoing maintenance and feature development can be provided after launch.",
      },
    ]}
  />
);

/* =========================================================
   MOBILE APP DEVELOPMENT
   ========================================================= */

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
        Native and cross-platform mobile apps for Chennai startups and
        businesses — built with React Native or Flutter, deployed to App
        Store and Play Store, and designed around the actual user journey.
      </>
    }
    what={[
      "iOS and Android app development",
      "React Native and Flutter cross-platform apps",
      "App Store and Play Store deployment",
      "Push notifications, deep linking and in-app purchases",
      "Backend API + admin panel",
      "Analytics and crash reporting setup",
    ]}
    benefits={[
      "One codebase for multiple platforms where appropriate",
      "Faster development and iteration",
      "Better time to market",
      "Polished mobile user experience",
    ]}
    process={[
      "Discovery + UX scoping",
      "Design (Figma) + prototype",
      "Sprint development",
      "QA on real devices",
      "Store submission + launch",
    ]}
    faqs={[
      {
        q: "How much does a mobile app cost in Chennai?",
        a: "Mobile app pricing depends on the number of screens, platform requirements, backend functionality, integrations and overall product scope.",
      },
      {
        q: "How long does a mobile app take to launch?",
        a: "The timeline depends on the feature set, design, backend requirements and testing. A detailed schedule is provided after the product scope is defined.",
      },
      {
        q: "Do you handle App Store submission?",
        a: "Yes. We can support App Store and Google Play deployment as part of the project.",
      },
    ]}
  />
);

/* =========================================================
   DIGITAL MARKETING
   ========================================================= */

export const DigitalMarketingChennai = () => (
  <ServicePage
    slug="services/digital-marketing-chennai"
    crumbName="Digital Marketing Chennai"
    serviceName="Digital Marketing"
    title="Digital Marketing Agency in Chennai | Ads, SEO, Social | SmartPixel"
    description="Digital marketing agency in Chennai offering Google Ads, Meta Ads, SEO and social media marketing. Lead-focused and measurement-driven."
    h1="Digital Marketing Agency in Chennai"
    intro={
      <>
        We run digital marketing campaigns for Chennai businesses that are
        measured by one thing: meaningful enquiries. Google Ads, Meta Ads,
        SEO and content are planned around the customer's journey.
      </>
    }
    what={[
      "Google Ads (Search, Display, YouTube)",
      "Meta Ads (Facebook, Instagram)",
      "Local SEO and Google Business Profile",
      "Social media content and management",
      "Landing page design and CRO",
      "Monthly reporting with useful performance data",
    ]}
    benefits={[
      "Generate targeted traffic from multiple channels",
      "Improve lead quality through focused targeting",
      "Connect advertising with better landing experiences",
      "Use reporting to identify what should be improved next",
    ]}
    process={[
      "Audit + competitor research",
      "Strategy + creative + landing pages",
      "Launch campaigns",
      "Weekly optimization",
      "Monthly review + scale",
    ]}
    faqs={[
      {
        q: "What advertising platforms do you manage?",
        a: "We can manage Google Ads and Meta Ads depending on the business, audience and campaign objectives.",
      },
      {
        q: "Do you build landing pages?",
        a: "Yes. Dedicated landing pages can be designed and developed around the campaign's search intent and conversion goal.",
      },
      {
        q: "Do you provide SEO as part of digital marketing?",
        a: "Yes. SEO can be included alongside paid advertising and content when organic search is part of the overall growth strategy.",
      },
    ]}
  />
);