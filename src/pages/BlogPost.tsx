import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WeightedHeading from "@/components/WeightedHeading";

type Post = {
  slug: string;
  cat: string;
  date: string;
  datePublishedIso?: string; // ISO for Article schema (optional)
  read: string;
  title: string;
  excerpt: string;
  /** Optional speakable selectors for voice/AEO. Default: ["h1", ".post-excerpt"]. */
  speakable?: string[];
  body: { h?: string; p?: ReactNode }[];
};

const posts: Post[] = [
  {
    slug: "websites-that-collect-customers-not-compliments",
    cat: "Web Development",
    date: "Apr 2026",
    read: "8 min",
    title: "Why most business websites collect compliments instead of customers — and the rebuild that fixes it.",
    excerpt: "The structural reasons sites fail to convert, and the conversion-led architecture we use instead.",
    body: [
      { p: "Most business websites in Chennai are designed to look good in a screenshot — not to make a stranger pick up the phone. That's why the compliments roll in but the enquiries don't." },
      { h: "The three structural failures" },
      { p: "1. The hero answers the wrong question. Visitors don't care what your studio 'crafts' — they care whether you solve their problem. Lead with the outcome." },
      { p: "2. CTAs that are scared of asking. 'Learn more' is a phrase used by sites that don't believe in themselves. 'Book a free 20-min strategy call' converts because it tells the visitor exactly what happens next." },
      { p: "3. No proof above the fold. If a visitor has to scroll three screens to find a number, a case study or a real client name — they won't." },
      { h: "The rebuild we use" },
      { p: "Outcome-led headline → one-line subhead that names the customer → primary CTA → proof bar (clients, results, rating) → 3 case studies → services → testimonials → FAQ → CTA. That order maps to how a buyer actually decides." },
      { p: "We've used this structure for 40+ clients. Average post-rebuild conversion lift: 3×. Average turnaround: 2 weeks." },
    ],
  },
  {
    slug: "apps-that-survive-the-first-week",
    cat: "Mobile Apps",
    date: "Mar 2026",
    read: "10 min",
    title: "Most apps get deleted in a week. Here's what the ones that survive get right.",
    excerpt: "A practical breakdown of speed, simplicity, and UX patterns that earn second opens.",
    body: [
      { p: "The single biggest determinant of an app's survival is the user's second open. If they don't come back within 72 hours, you've lost them." },
      { h: "Speed is a feature" },
      { p: "Cold start under 2 seconds. Every screen interactive within 400ms. If users wait, they delete." },
      { h: "Onboarding that asks for nothing" },
      { p: "Show value before you ask for an email. Show the email field before you ask for a phone number. Never ask for a notification permission on screen one." },
      { h: "One job, done loudly" },
      { p: "Apps that survive do one thing 10× better than the website. Identify that one job and put it on the home screen." },
    ],
  },
  {
    slug: "marketing-math-that-actually-grows",
    cat: "Marketing",
    date: "Mar 2026",
    read: "7 min",
    title: "Traffic is vanity. The marketing math that actually grows a service business.",
    excerpt: "Why CAC, LTV and pipeline beat impressions and clicks.",
    body: [
      { p: "If you're a service business in Chennai obsessing over Instagram impressions, you're optimising the wrong number." },
      { h: "The three numbers that matter" },
      { p: "CAC (Customer Acquisition Cost): total marketing spend ÷ paying customers in the same period." },
      { p: "LTV (Lifetime Value): average revenue per customer × average retention period." },
      { p: "Payback period: how many months a customer takes to repay their CAC. Under 6 months is healthy for most Chennai SMBs." },
      { h: "Why this changes your website brief" },
      { p: "Once you know your LTV, you know exactly how much a lead is worth — and you stop tolerating a website that converts at 0.5%." },
    ],
  },
  {
    slug: "ecommerce-funnel-leaks",
    cat: "Ecommerce",
    date: "Feb 2026",
    read: "6 min",
    title: "The leaks in your e-commerce funnel — and how to find them before competitors do.",
    excerpt: "From product page to checkout, patterns that kill revenue.",
    body: [
      { p: "Most Chennai ecommerce stores lose 70%+ of buyers between the product page and the thank-you screen. Here's where the leaks usually are." },
      { h: "Product page" },
      { p: "Single hero image, no zoom, no size guide, no delivery estimate. Each missing element costs 5–8% of conversions." },
      { h: "Cart" },
      { p: "Surprise shipping costs are the #1 reason for abandonment. Show shipping on the product page, not the cart." },
      { h: "Checkout" },
      { p: "Force-account-creation kills conversion. Always offer guest checkout. Reduce form fields to the absolute minimum." },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  // Canonical: https + www host, no trailing slash, no fragment.
  const url = `https://www.smartpixel.in/blog/${post.slug.replace(/\/+$/, "")}`;

  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>{post.title} | SmartPixel Insights</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Person", name: "Aysha" },
          publisher: {
            "@type": "Organization",
            name: "SmartPixel",
            logo: { "@type": "ImageObject", url: "https://www.smartpixel.in/logo.png" },
          },
          mainEntityOfPage: url,
          datePublished: post.date,
        })}</script>
      </Helmet>

      <Nav />
      <article className="pt-32 pb-20 px-5 sm:px-10 lg:px-20 max-w-[820px] mx-auto">
        <nav className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span className="mx-2 text-accent">/</span>
          <Link to="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2 text-accent">/</span>
          <span className="text-foreground/70">{post.cat}</span>
        </nav>

        <p className="eyebrow mb-5">— {post.cat}</p>
        <WeightedHeading text={post.title} className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6" />
        <p className="text-sm text-muted-foreground tracking-wide mb-10">
          {post.date} · {post.read} · By Aysha
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">{post.excerpt}</p>

        <div className="space-y-6">
          {post.body.map((b, i) =>
            b.h ? (
              <h2 key={i} className="font-display text-2xl sm:text-3xl mt-10 mb-2">{b.h}</h2>
            ) : (
              <p key={i} className="text-muted-foreground leading-relaxed">{b.p}</p>
            )
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground mb-5">Continue reading</p>
          <ul className="space-y-3">
            {posts.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="font-display text-lg hover:text-accent transition-colors">
                  → {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <FinalCTA />
      <Footer />
    </main>
  );
};

export default BlogPost;
