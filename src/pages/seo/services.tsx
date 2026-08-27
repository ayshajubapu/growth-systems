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

      {
        h2: "Understanding and managing your SEO",
        body: (
          <p className="leading-relaxed">
            Once work is underway, we send{" "}
            <A to="/blog/how-to-read-google-search-console-report">
              a Search Console report you can actually read
            </A>{" "}
            each month. If you're comparing us against another provider, see{" "}
            <A to="/blog/how-to-tell-if-your-seo-agency-is-doing-anything">
              how to tell if your SEO agency is actually doing anything
            </A>
            . For budgeting, read{" "}
            <A to="/blog/seo-cost-chennai">
              what SEO actually costs in Chennai
            </A>{" "}
            and{" "}
            <A to="/blog/technical-vs-onpage-vs-local-seo">
              technical vs on-page vs local SEO — what your business needs
            </A>
            . If rankings improved and then flattened, read{" "}
            <A to="/blog/why-seo-rankings-stall-after-a-few-months">
              why rankings stall after the first few months
            </A>
            , and if you're weighing this against paid traffic, see{" "}
            <A to="/blog/do-you-need-seo-if-running-google-ads">
              do you need SEO if you're already running Google Ads
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
      {
        label: "How to tell if your SEO agency is actually doing anything",
        href: "/blog/how-to-tell-if-your-seo-agency-is-doing-anything",
      },
      {
        label: "How to read your Search Console report",
        href: "/blog/how-to-read-google-search-console-report",
      },
      {
        label: "What SEO actually costs in Chennai",
        href: "/blog/seo-cost-chennai",
      },
      {
        label: "Technical vs on-page vs local SEO",
        href: "/blog/technical-vs-onpage-vs-local-seo",
      },
      {
        label: "Why rankings stall after a few months",
        href: "/blog/why-seo-rankings-stall-after-a-few-months",
      },
      {
        label: "Do you need SEO if you're already running Google Ads?",
        href: "/blog/do-you-need-seo-if-running-google-ads",
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
    extraSections={[
      {
        h2: "Choosing a platform and payment setup",
        body: (
          <p className="leading-relaxed">
            Not sure where to start? Read{" "}
            <A to="/blog/shopify-vs-woocommerce-chennai">
              Shopify vs WooCommerce — the real decision factors
            </A>{" "}
            before committing to a platform, and{" "}
            <A to="/blog/what-is-a-payment-gateway">
              what a payment gateway actually is
            </A>{" "}
            if the terminology is new. When you're ready to pick one, see{" "}
            <A to="/blog/razorpay-vs-payu-vs-cashfree">
              Razorpay vs PayU vs Cashfree — which payment gateway
            </A>
            , and decide{" "}
            <A to="/blog/should-you-offer-cash-on-delivery">
              whether your store should offer cash on delivery
            </A>{" "}
            alongside it.
          </p>
        ),
      },

      {
        h2: "Launch prep, cost and fixing a store that isn't converting",
        body: (
          <p className="leading-relaxed">
            Before launch, check{" "}
            <A to="/blog/how-many-product-photos-ecommerce">
              how many product photos a listing actually needs
            </A>
            , and avoid common{" "}
            <A to="/blog/gst-invoicing-online-stores-mistakes">
              GST invoicing mistakes online sellers make
            </A>
            . For budgeting, see{" "}
            <A to="/blog/ecommerce-website-cost-chennai">
              what an ecommerce website actually costs in Chennai
            </A>{" "}
            and{" "}
            <A to="/blog/boutique-vs-10000-sku-ecommerce-build">
              10-product boutique vs 10,000-SKU store — two different builds
            </A>
            . If your store is live but underperforming, read{" "}
            <A to="/blog/why-ecommerce-store-gets-visitors-no-sales">
              why your store gets visitors but no sales
            </A>{" "}
            and{" "}
            <A to="/blog/reduce-cart-abandonment-india">
              how to reduce cart abandonment on an Indian ecommerce site
            </A>
            .
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "Shopify vs WooCommerce — the real decision factors",
        href: "/blog/shopify-vs-woocommerce-chennai",
      },
      {
        label: "Razorpay vs PayU vs Cashfree — which payment gateway",
        href: "/blog/razorpay-vs-payu-vs-cashfree",
      },
      {
        label: "Why your store gets visitors but no sales",
        href: "/blog/why-ecommerce-store-gets-visitors-no-sales",
      },
      {
        label: "How to reduce cart abandonment on an Indian ecommerce site",
        href: "/blog/reduce-cart-abandonment-india",
      },
      {
        label: "What an ecommerce website actually costs in Chennai",
        href: "/blog/ecommerce-website-cost-chennai",
      },
      {
        label: "GST invoicing mistakes online sellers make",
        href: "/blog/gst-invoicing-online-stores-mistakes",
      },
      {
        label: "Should your store offer cash on delivery?",
        href: "/blog/should-you-offer-cash-on-delivery",
      },
      {
        label: "How many product photos does a listing need?",
        href: "/blog/how-many-product-photos-ecommerce",
      },
      {
        label: "What is a payment gateway?",
        href: "/blog/what-is-a-payment-gateway",
      },
      {
        label: "10-product boutique vs 10,000-SKU store",
        href: "/blog/boutique-vs-10000-sku-ecommerce-build",
      },
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
    extraSections={[
      {
        h2: "Choosing and setting up WhatsApp automation",
        body: (
          <p className="leading-relaxed">
            If you're still using the free WhatsApp Business app, start with{" "}
            <A to="/blog/whatsapp-app-vs-api-chennai">
              when a Chennai business actually needs to move to WhatsApp automation
            </A>
            . Once you're on the API, the first real gate is Meta's
            verification step — see{" "}
            <A to="/blog/meta-verification-rejected-fixes">
              why Meta business verification gets rejected and how to fix it
            </A>
            . After verification, message templates need their own approval,
            covered in{" "}
            <A to="/blog/whatsapp-template-rejected">
              why WhatsApp template messages keep getting rejected
            </A>
            . We also design every flow around{" "}
            <A to="/blog/whatsapp-24-hour-window-explained">
              WhatsApp's 24-hour messaging window
            </A>
            , since it decides when a template is required versus a free-form
            reply.
          </p>
        ),
      },

      {
        h2: "What it costs and where leads come from",
        body: (
          <p className="leading-relaxed">
            For budgeting, read{" "}
            <A to="/blog/whatsapp-automation-cost-chennai">
              what WhatsApp automation actually costs for a Chennai business
            </A>
            . If you're running or planning ads,{" "}
            <A to="/blog/click-to-whatsapp-ads-explained">
              click-to-WhatsApp ads explained
            </A>{" "}
            walks through how ad clicks turn into WhatsApp chats and why
            that funnel needs the API rather than the standard app. This
            pairs with our{" "}
            <A to="/services/digital-marketing-chennai">
              digital marketing services
            </A>
            .
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "When a Chennai business actually needs WhatsApp automation",
        href: "/blog/whatsapp-app-vs-api-chennai",
      },
      {
        label: "Meta business verification rejected — real fixes",
        href: "/blog/meta-verification-rejected-fixes",
      },
      {
        label: "Why WhatsApp template messages get rejected",
        href: "/blog/whatsapp-template-rejected",
      },
      {
        label: "The 24-hour WhatsApp messaging window, explained",
        href: "/blog/whatsapp-24-hour-window-explained",
      },
      {
        label: "What WhatsApp automation actually costs in Chennai",
        href: "/blog/whatsapp-automation-cost-chennai",
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

      {
        h2: "Deciding what to build",
        body: (
          <p className="leading-relaxed">
            Still deciding if you need a full site? Start with{" "}
            <A to="/blog/do-you-need-website-if-on-instagram">
              do you need a website if your business runs on Instagram
            </A>{" "}
            and{" "}
            <A to="/blog/website-vs-landing-page">
              website vs landing page — which do you need
            </A>
            . If you're weighing tools,{" "}
            <A to="/blog/website-builder-vs-custom-coded">
              website builder vs custom-coded — when each makes sense
            </A>{" "}
            and{" "}
            <A to="/blog/what-is-a-cms-do-you-need-one">
              what is a CMS, and do you need one
            </A>{" "}
            cover the two decisions most people get stuck on. Before you
            reach out, read{" "}
            <A to="/blog/how-to-brief-a-web-design-agency">
              how to brief a web design agency
            </A>{" "}
            and{" "}
            <A to="/blog/website-cost-chennai-page-count">
              what page count and features actually add to the cost
            </A>
            .
          </p>
        ),
      },

      {
        h2: "After launch, or if you're redesigning",
        body: (
          <p className="leading-relaxed">
            If a new site isn't performing, read{" "}
            <A to="/blog/website-not-generating-enquiries">
              why your new website isn't generating enquiries
            </A>{" "}
            and{" "}
            <A to="/blog/is-my-website-mobile-friendly-real-test">
              is my website actually mobile-friendly — a real test
            </A>
            . If you're rebuilding an existing site, read{" "}
            <A to="/blog/redesign-without-losing-google-rankings">
              how to redesign without losing your Google rankings
            </A>{" "}
            first.
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
      {
        label: "Do you need a website if you're on Instagram?",
        href: "/blog/do-you-need-website-if-on-instagram",
      },
      {
        label: "Website builder vs custom-coded",
        href: "/blog/website-builder-vs-custom-coded",
      },
      {
        label: "How to brief a web design agency",
        href: "/blog/how-to-brief-a-web-design-agency",
      },
      {
        label: "Why your new website isn't generating enquiries",
        href: "/blog/website-not-generating-enquiries",
      },
      {
        label: "How to redesign without losing your Google rankings",
        href: "/blog/redesign-without-losing-google-rankings",
      },
      {
        label: "Website cost in Chennai by page count",
        href: "/blog/website-cost-chennai-page-count",
      },
      {
        label: "Is my website actually mobile-friendly?",
        href: "/blog/is-my-website-mobile-friendly-real-test",
      },
      {
        label: "What is a CMS, and do you need one?",
        href: "/blog/what-is-a-cms-do-you-need-one",
      },
      {
        label: "Website vs landing page",
        href: "/blog/website-vs-landing-page",
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
    extraSections={[
      {
        h2: "Deciding what to build",
        body: (
          <p className="leading-relaxed">
            Not sure what you actually need? Start with{" "}
            <A to="/blog/web-app-vs-website">
              web app vs website — what's actually different
            </A>{" "}
            and{" "}
            <A to="/blog/web-app-vs-mobile-app-first">
              web app or mobile app — which should you build first
            </A>
            . If spreadsheets and WhatsApp are the current system, read{" "}
            <A to="/blog/signs-outgrown-spreadsheets-whatsapp">
              signs your business has outgrown spreadsheets and WhatsApp
            </A>{" "}
            and{" "}
            <A to="/blog/custom-web-app-vs-no-code">
              custom web app vs no-code tools — when no-code is enough
            </A>
            .
          </p>
        ),
      },

      {
        h2: "Scoping, cost and what happens after launch",
        body: (
          <p className="leading-relaxed">
            Before scoping, read{" "}
            <A to="/blog/what-is-an-mvp-really">
              what is an MVP, really
            </A>{" "}
            and{" "}
            <A to="/blog/how-to-scope-mvp-without-overbuilding">
              how to scope an MVP without overbuilding it
            </A>
            , and plan{" "}
            <A to="/blog/user-roles-permissions-planning">
              user roles and permissions before you build
            </A>
            . For budgeting, see{" "}
            <A to="/blog/web-app-development-cost">
              what drives web app development cost up or down
            </A>{" "}
            and{" "}
            <A to="/blog/in-house-vs-agency-vs-freelancer-web-app">
              in-house developer vs agency vs freelancer
            </A>
            . Once it's live,{" "}
            <A to="/blog/after-mvp-launches-how-to-tell-if-working">
              how to tell if your MVP is actually working
            </A>{" "}
            covers what to check next.
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "Web app vs website — what's actually different",
        href: "/blog/web-app-vs-website",
      },
      {
        label: "Web app or mobile app — which should you build first",
        href: "/blog/web-app-vs-mobile-app-first",
      },
      {
        label: "Custom web app vs no-code tools",
        href: "/blog/custom-web-app-vs-no-code",
      },
      {
        label: "How to scope an MVP without overbuilding it",
        href: "/blog/how-to-scope-mvp-without-overbuilding",
      },
      {
        label: "Signs you've outgrown spreadsheets and WhatsApp",
        href: "/blog/signs-outgrown-spreadsheets-whatsapp",
      },
      {
        label: "What is an MVP, really?",
        href: "/blog/what-is-an-mvp-really",
      },
      {
        label: "Web app development cost — what drives the number",
        href: "/blog/web-app-development-cost",
      },
      {
        label: "User roles and permissions — what to plan first",
        href: "/blog/user-roles-permissions-planning",
      },
      {
        label: "In-house vs agency vs freelancer",
        href: "/blog/in-house-vs-agency-vs-freelancer-web-app",
      },
      {
        label: "After the MVP launches — how to tell if it's working",
        href: "/blog/after-mvp-launches-how-to-tell-if-working",
      },
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
    extraSections={[
      {
        h2: "Deciding if an app is the right call",
        body: (
          <p className="leading-relaxed">
            Start with{" "}
            <A to="/blog/do-you-need-a-mobile-app">
              do you actually need a mobile app, or would a website do
            </A>{" "}
            and{" "}
            <A to="/blog/pwa-vs-native-app">
              progressive web app vs native app — is a PWA enough
            </A>
            . If you've decided to build,{" "}
            <A to="/blog/ios-first-or-android-first-india">
              iOS first or Android first for an Indian market launch
            </A>{" "}
            and{" "}
            <A to="/blog/react-native-vs-flutter-vs-native">
              React Native vs Flutter vs native
            </A>{" "}
            cover the two decisions that come next. New to the terms?{" "}
            <A to="/blog/what-is-react-native-explained">
              what is React Native, explained plainly
            </A>{" "}
            and{" "}
            <A to="/blog/does-your-app-need-a-backend">
              do you need a backend for your mobile app
            </A>{" "}
            help before you scope.
          </p>
        ),
      },

      {
        h2: "Cost, launch and what happens after",
        body: (
          <p className="leading-relaxed">
            For budgeting, see{" "}
            <A to="/blog/mobile-app-cost-chennai">
              mobile app cost in Chennai — screens, backend and store submission
            </A>
            . Before submitting, read{" "}
            <A to="/blog/why-apps-get-rejected-app-store">
              why apps get rejected from the App Store
            </A>{" "}
            and set up{" "}
            <A to="/blog/crash-reporting-analytics-before-launch">
              crash reporting and analytics before you launch
            </A>
            . If your app is live but not gaining traction, read{" "}
            <A to="/blog/app-live-no-downloads-now-what">
              my app is live but getting no downloads — now what
            </A>
            .
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "Do you actually need a mobile app?",
        href: "/blog/do-you-need-a-mobile-app",
      },
      {
        label: "iOS first or Android first for an Indian launch",
        href: "/blog/ios-first-or-android-first-india",
      },
      {
        label: "React Native vs Flutter vs native",
        href: "/blog/react-native-vs-flutter-vs-native",
      },
      {
        label: "Why apps get rejected from the App Store",
        href: "/blog/why-apps-get-rejected-app-store",
      },
      {
        label: "What is React Native, explained plainly",
        href: "/blog/what-is-react-native-explained",
      },
      {
        label: "Mobile app cost in Chennai",
        href: "/blog/mobile-app-cost-chennai",
      },
      {
        label: "Progressive web app vs native app",
        href: "/blog/pwa-vs-native-app",
      },
      {
        label: "My app is live but getting no downloads",
        href: "/blog/app-live-no-downloads-now-what",
      },
      {
        label: "Do you need a backend for your mobile app?",
        href: "/blog/does-your-app-need-a-backend",
      },
      {
        label: "Crash reporting and analytics before you launch",
        href: "/blog/crash-reporting-analytics-before-launch",
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
    extraSections={[
      {
        h2: "Choosing a channel and a budget",
        body: (
          <p className="leading-relaxed">
            Start with{" "}
            <A to="/blog/google-ads-vs-meta-ads-chennai">
              Google Ads vs Meta Ads — which should you start with
            </A>{" "}
            and{" "}
            <A to="/blog/boosting-post-vs-real-ad-campaign">
              boosting a post vs running a real ad campaign
            </A>
            . Before committing spend, read{" "}
            <A to="/blog/ad-budget-how-much-to-start">
              how much ad budget you actually need to start
            </A>{" "}
            and{" "}
            <A to="/blog/diy-ads-vs-hiring-agency">
              DIY ads vs hiring an agency
            </A>
            .
          </p>
        ),
      },

      {
        h2: "Reading results and fixing underperformance",
        body: (
          <p className="leading-relaxed">
            If clicks aren't turning into enquiries, read{" "}
            <A to="/blog/clicks-but-no-enquiries-ads">
              why you're getting clicks but no enquiries
            </A>{" "}
            and{" "}
            <A to="/blog/what-is-cro-landing-page">
              what is CRO, and why it matters more than ad spend
            </A>
            , then apply our{" "}
            <A to="/blog/landing-page-checklist-ad-conversion">
              landing page checklist for ad conversion
            </A>
            . To interpret your numbers, see{" "}
            <A to="/blog/how-to-read-ads-reporting">
              how to read your ads reporting
            </A>{" "}
            before deciding whether to{" "}
            <A to="/blog/pause-or-scale-underperforming-campaign">
              pause or scale an underperforming campaign
            </A>
            , and set expectations with{" "}
            <A to="/blog/how-long-before-ads-profitable">
              how long before ads become profitable
            </A>
            .
          </p>
        ),
      },
    ]}
    extraLinks={[
      {
        label: "Google Ads vs Meta Ads — which should you start with",
        href: "/blog/google-ads-vs-meta-ads-chennai",
      },
      {
        label: "Boosting a post vs running a real ad campaign",
        href: "/blog/boosting-post-vs-real-ad-campaign",
      },
      {
        label: "How much ad budget do you need to start",
        href: "/blog/ad-budget-how-much-to-start",
      },
      {
        label: "Why you're getting clicks but no enquiries",
        href: "/blog/clicks-but-no-enquiries-ads",
      },
      {
        label: "How to read your ads reporting",
        href: "/blog/how-to-read-ads-reporting",
      },
      {
        label: "What is CRO, and why it matters more than ad spend",
        href: "/blog/what-is-cro-landing-page",
      },
      {
        label: "Should you pause or scale an underperforming campaign",
        href: "/blog/pause-or-scale-underperforming-campaign",
      },
      {
        label: "DIY ads vs hiring an agency",
        href: "/blog/diy-ads-vs-hiring-agency",
      },
      {
        label: "How long before ads become profitable",
        href: "/blog/how-long-before-ads-profitable",
      },
      {
        label: "Landing page checklist for ad conversion",
        href: "/blog/landing-page-checklist-ad-conversion",
      },
    ]}
  />
);