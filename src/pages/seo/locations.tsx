import LocationPage from "./LocationPage";

/**
 * Each area gets: a unique meta description, a unique localNote grounded in the
 * area's real commercial character, and its own FAQ set (rendered on-page and
 * emitted as FAQPage schema). No invented client names, results or statistics.
 */

export const Pallavaram = () => (
  <LocationPage
    area="Pallavaram"
    slug="pallavaram"
    landmark="Pallavaram Market"
    metaDescription="Web design in Pallavaram, Chennai built for mobile data speeds along GST Road and the Radial Road — fast websites, ecommerce and local SEO from our Chrompet studio."
    localNote="Pallavaram buyers browse on mid-range Android phones over patchy 4G along GST Road and the Pallavaram–Thoraipakkam Radial Road. A checkout that feels instant on office fibre can take several seconds here, so we build Pallavaram sites with compressed WebP imagery, deferred non-critical JavaScript and modern hosting — the site has to stay usable on a budget phone on mobile data, because that is what most of your traffic is."
    faqs={[
      {
        q: "Will my website load fast on mobile data in Pallavaram?",
        a: "That's the constraint we design to. We compress images to WebP, defer scripts that aren't needed for first paint and keep third-party embeds to a minimum, then test the site throttled to a slow 4G connection rather than only on desktop broadband.",
      },
      {
        q: "How much does a website cost for a Pallavaram business?",
        a: "A 5-page business site starts at ₹10,000. An ecommerce store with payment gateway, GST invoicing and inventory starts at ₹25,000 — the final number depends on product count and how much of your catalogue needs photography.",
      },
      {
        q: "Can you help my Pallavaram shop show up on Google Maps?",
        a: "Yes. Google Business Profile work is part of local SEO: correct category, service area, real photos, consistent NAP details across listings, and a review flow so customers are actually asked. The website and the profile have to say the same thing or Google discounts both.",
      },
      {
        q: "Do I need to travel to your office?",
        a: "No. We're in Chrompet, one stop up GST Road, so we can come to you for the kickoff and for review meetings.",
      },
    ]}
  />
);

export const Tambaram = () => (
  <LocationPage
    area="Tambaram"
    slug="tambaram"
    landmark="Tambaram Sanatorium"
    metaDescription="Web design company for Tambaram, Chennai businesses — long-tail local SEO, fast websites and ecommerce for retail, clinics and services near the Sanatorium and West Tambaram."
    localNote="Tambaram's retail and clinic belt around the Sanatorium and the West Tambaram bus terminus competes on neighbourhood intent, not national terms. Chasing broad keywords puts a local brand up against Myntra or Amazon and loses. Specific phrasing — 'unstitched cotton kurti Tambaram', 'clinic in Tambaram' — is winnable inside a quarter, so we structure Tambaram sites around those query patterns: one page per real intent, written for someone who is already nearby and ready to buy."
    faqs={[
      {
        q: "Why target long-tail keywords instead of 'buy kurtis online'?",
        a: "Broad ecommerce terms are held by marketplaces with enormous domain authority and ad budgets. A Tambaram retailer ranking for 'unstitched cotton kurti Tambaram' gets fewer impressions but far higher intent, and it's realistically winnable within a quarter instead of never.",
      },
      {
        q: "I get impressions in Search Console but no enquiries. Why?",
        a: "Usually the page ranks for informational queries rather than buying ones, or it ranks in positions 8–20 where clicks collapse. We audit which queries actually drive the impressions, then rewrite the page around the transactional ones and put the phone/WhatsApp action above the fold.",
      },
      {
        q: "Do you build for clinics and healthcare practices in Tambaram?",
        a: "Yes — the pattern there is appointment-first: visible timings, doctor credentials, directions, and a booking or WhatsApp action on every screen. No stock photos of unrelated hospitals.",
      },
      {
        q: "How long before a new Tambaram site starts ranking locally?",
        a: "Local movement typically starts in 4–8 weeks for area-specific terms once the site is indexed and the Google Business Profile is aligned. Competitive Chennai-wide terms take 3–6 months.",
      },
    ]}
  />
);

export const Chrompet = () => (
  <LocationPage
    area="Chrompet"
    slug="chrompet"
    landmark="MIT Chrompet"
    metaDescription="SmartPixel is a web design company based in Chrompet, Chennai. In-person kickoffs, websites, ecommerce and local SEO for businesses along GST Road, Radha Nagar and the bazaar."
    localNote="Chrompet is our home base — the studio sits minutes from the GST Road stretch between MIT and Chrompet railway station. For businesses along Kandhan Chavadi, Radha Nagar and the main bazaar that means in-person kickoffs, on-site product photography and same-week review meetings without anyone giving up half a day to cross the city. It also means we know the competitive set here first-hand: the same handful of retailers, clinics and coaching centres show up in the local pack, and most of them are losing on site speed and stale Google Business Profiles rather than on design."
    faqs={[
      {
        q: "Where exactly is your office in Chrompet?",
        a: "We work out of Chrompet, off the GST Road stretch near MIT and Chrompet railway station. Message us on WhatsApp and we'll share the exact pin and a time — walk-in meetings are fine with a heads-up.",
      },
      {
        q: "Can you shoot photos of my Chrompet shop or products?",
        a: "Yes. Being local, on-site shoots are practical for Chrompet clients, and real photos of your actual premises and stock convert better than stock imagery — they also help your Google Business Profile.",
      },
      {
        q: "What usually beats competitors in the Chrompet local pack?",
        a: "In our experience it isn't design. It's a correctly categorised and actively maintained Google Business Profile, real reviews with recency, a page that loads fast on mobile, and NAP details that match everywhere. Most local competitors are weak on at least two of those.",
      },
      {
        q: "Do you work with coaching centres and clinics in Chrompet?",
        a: "Yes. Those are enquiry-driven businesses, so we build around a single action — call, WhatsApp or book — with fees, timings and location visible without scrolling.",
      },
    ]}
  />
);

export const Guindy = () => (
  <LocationPage
    area="Guindy"
    slug="guindy"
    landmark="Guindy Industrial Estate"
    metaDescription="B2B web design for Guindy, Chennai — credibility-led websites for firms in the Industrial Estate, SIDCO units and Mount Road offices, built to pass procurement scrutiny."
    localNote="Guindy is Chennai's corporate and industrial spine — the Industrial Estate, the SIDCO units and the office towers along Mount Road draw B2B, manufacturing and enterprise buyers rather than walk-in retail. That changes what the website has to do. Nobody buys a ₹40-lakh contract off a hero slider; a procurement or purchase team is checking whether your capabilities, certifications, plant details and contact path look credible enough to shortlist. So Guindy builds get detailed capability pages, downloadable specs or catalogues, named contacts, and an enquiry form that captures requirement details instead of just 'Name, Email, Message'."
    faqs={[
      {
        q: "Do you build B2B and manufacturing websites for Guindy companies?",
        a: "Yes. The structure differs from retail: capability and process pages, product or spec sheets, certifications, plant or facility detail, client sectors, and an RFQ-style enquiry form rather than a generic contact box.",
      },
      {
        q: "What should a Guindy B2B site have that a retail site doesn't?",
        a: "Evidence a purchase team can verify — company registration and GST details, certifications, capacity or turnaround figures, named contacts with direct numbers, and downloadable specification documents. Buyers here shortlist on credibility signals before they ever call.",
      },
      {
        q: "Can you integrate a catalogue or spec-sheet download with lead capture?",
        a: "Yes. We gate PDFs behind a short form when you want the lead data, or keep them open when speed of shortlisting matters more — we'll recommend based on your sales cycle rather than defaulting to gating everything.",
      },
      {
        q: "Is SEO worth it for a B2B firm in Guindy?",
        a: "Volume is low but intent is extremely high — searches like 'CNC machining Guindy' or 'industrial fabrication Chennai' come from people with a live requirement. It's a slower, cheaper channel than ads, and one good page can carry a product line for years.",
      },
    ]}
  />
);

export const TNagar = () => (
  <LocationPage
    area="T Nagar"
    slug="t-nagar"
    landmark="Pondy Bazaar"
    metaDescription="Web design for T Nagar, Chennai retail — showroom-grade websites and fast mobile checkout for boutiques and stores around Pondy Bazaar, Ranganathan Street and Cathedral Road."
    localNote="T Nagar's high-footfall retail corridor around Pondy Bazaar and Ranganathan Street means site speed and mobile checkout decide the sale — a shopper comparing prices on a phone in a crowded street will not wait. We also work with boutiques and showroom brands in this belt and along Cathedral Road, where in-store conversion runs far ahead of the website. That gap is almost always caused by the same thing: a curated showroom experience gets replaced online by a generic catalogue grid. Our T Nagar builds carry the store's actual merchandising and styling online instead of flattening it into thumbnails."
    faqs={[
      {
        q: "My T Nagar showroom converts well in store but the website doesn't. Why?",
        a: "In almost every case the online experience throws away what makes the store work — styling, curation, staff guidance, the reason a piece is worth the price. A default catalogue grid asks a first-time visitor to self-serve with no context. We rebuild the browsing path around collections, looks and reasons to buy rather than SKU tiles.",
      },
      {
        q: "How fast should a retail site in T Nagar load?",
        a: "Aim for a usable first paint under about 2.5 seconds on 4G. Shoppers here are browsing between stores on mobile data, and every extra second of load measurably costs sessions before the page is ever seen.",
      },
      {
        q: "Do you set up payments, delivery and GST invoicing?",
        a: "Yes — Razorpay or a similar gateway, GST-compliant invoicing, shipping rules and COD logic where relevant, on Shopify or WooCommerce depending on your catalogue and team.",
      },
      {
        q: "Can the site drive footfall to the physical store instead of online orders?",
        a: "Yes, and for many T Nagar retailers that's the higher-value goal. We build for store visits: live stock or collection pages, directions, WhatsApp-to-reserve, and a Google Business Profile tuned for 'near me' searches in the Pondy Bazaar area.",
      },
    ]}
  />
);

export const Saidapet = () => (
  <LocationPage
    area="Saidapet"
    slug="saidapet"
    landmark="Saidapet Court"
    metaDescription="Web design in Saidapet, Chennai for advocates, consultants and documentation firms — fast service pages with visible call and WhatsApp actions, plus local SEO."
    localNote="Saidapet's business mix leans heavily on professional services — the court complex, the registration offices and the trader lanes off Anna Salai bring in advocates, consultants, chartered accountants and documentation firms. Those clients search under pressure and on urgent, transactional intent: they want to know you handle their exact matter, roughly what it costs, and how to reach you in the next minute. So Saidapet sites get lean, fast-loading pages per service, a phone number and WhatsApp button that stay visible while scrolling, and a clear map presence — not a long brand story."
    faqs={[
      {
        q: "Do you build websites for advocates and legal firms in Saidapet?",
        a: "Yes. Practice-area pages, clear scope of work, and immediate contact paths. We keep claims factual and avoid outcome guarantees, which matter both for professional conduct rules and for user trust.",
      },
      {
        q: "Should I publish my fees on a professional services site?",
        a: "A starting range works better than silence. Enquirers who can't find any indication of cost either don't call or call to ask only about price. A 'from ₹X, depends on Y' line filters both problems and improves the quality of the calls you get.",
      },
      {
        q: "How do I get more enquiries from urgent searches near the Saidapet court complex?",
        a: "Speed and proximity signals: a Google Business Profile with correct hours and a real address, a page per matter type using the words clients use, and a tap-to-call button that never scrolls off screen on mobile.",
      },
      {
        q: "Can enquiries come straight to WhatsApp?",
        a: "Yes. We wire a WhatsApp entry point with a pre-filled message, and can add automation so after-hours enquiries get an instant acknowledgement and are logged rather than lost.",
      },
    ]}
  />
);

export const Nungambakkam = () => (
  <LocationPage
    area="Nungambakkam"
    slug="nungambakkam"
    landmark="Khader Nawaz Khan Road"
    metaDescription="Premium web design in Nungambakkam, Chennai — considered typography, real photography and restrained motion for boutiques, clinics and studios on Khader Nawaz Khan Road."
    localNote="Nungambakkam High Road and the Khader Nawaz Khan Road stretch host premium boutiques, clinics, design studios, restaurants and consulates — an audience that judges a brand on presentation before it ever looks at pricing. Web work here has to hold a higher visual standard, and that means the opposite of more effects: considered typography, generous whitespace, real commissioned photography and restrained motion. Stock imagery and template layouts are read instantly as a downgrade by exactly the customers this area depends on, and no amount of animation compensates."
    faqs={[
      {
        q: "What makes a website look premium rather than templated?",
        a: "Typography with a real hierarchy, generous whitespace, original photography of your actual space and products, a tight colour palette, and motion used sparingly for feedback rather than decoration. Most 'cheap-looking' sites fail on photography and spacing long before design skill.",
      },
      {
        q: "Do I need professional photography for a Nungambakkam brand?",
        a: "For a premium positioning, yes — it's usually the single highest-return spend on the project. We can shoot on location or work with a photographer, and we design the layout around your real images instead of retro-fitting them into a template.",
      },
      {
        q: "Won't a heavily designed site load slowly?",
        a: "It doesn't have to. We serve responsive WebP or AVIF images, lazy-load below the fold and keep animation on the compositor. A visually rich page can still hit good Core Web Vitals — the usual culprits are uncompressed hero images and stacked third-party scripts.",
      },
      {
        q: "Do you work with restaurants and clinics in Nungambakkam?",
        a: "Yes. Both are presentation-led and booking-driven: the site's job is to make the place feel worth visiting and then get the reservation or appointment in as few taps as possible.",
      },
    ]}
  />
);

export const Chitlapakkam = () => (
  <LocationPage
    area="Chitlapakkam"
    slug="chitlapakkam"
    landmark="Chitlapakkam Lake"
    metaDescription="Web design in Chitlapakkam, Chennai for tuition centres, clinics, home services and neighbourhood retail — hyper-local SEO, Google Business Profile and fast enquiry pages."
    localNote="Chitlapakkam is a dense residential pocket between Chromepet and Selaiyur, and almost all of its demand is hyper-local — tuition centres, clinics, home services, salons and neighbourhood retail around the lake and Main Road. Ranking here is won through Google Business Profile accuracy, area-specific landing copy and steady review volume, not broad Chennai-wide keywords. The practical upside is that competition is thin: a small business with an accurate profile, a fast page and twenty genuine reviews can hold the local pack for its category with modest ongoing effort."
    faqs={[
      {
        q: "Is a full website worth it for a small Chitlapakkam business?",
        a: "If your customers are within a few kilometres, start with a fast three-to-five page site plus a properly set up Google Business Profile. That combination usually out-earns a bigger site, because most enquiries here begin on Maps rather than on a search results page.",
      },
      {
        q: "How do I rank in the local pack for Chitlapakkam?",
        a: "Correct primary category, exact service area, real photos updated periodically, opening hours that are actually right, consistent name/address/phone everywhere, and a steady flow of reviews. Then a page on your site that names Chitlapakkam and the specific service in the title and headings.",
      },
      {
        q: "How many Google reviews do I actually need?",
        a: "There's no fixed threshold, but in a thin-competition pocket like this, a couple of dozen genuine, recent reviews usually puts you ahead of neighbours who have five from three years ago. Recency and response rate matter as much as the count.",
      },
      {
        q: "Do you work with tuition centres and home-service businesses?",
        a: "Yes. Both live on quick enquiries, so we keep it simple: what you offer, timings or service area, pricing indication, and a tap-to-call or WhatsApp button on every screen.",
      },
    ]}
  />
);
