import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Terms = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>Terms of Service | SmartPixel Chennai</title>
      <meta name="description" content="Terms of service for engaging SmartPixel for website, app, ecommerce and SEO services in Chennai." />
      <link rel="canonical" href="https://www.smartpixel.in/terms" />
    </Helmet>
    <Nav />
    <article className="pt-32 pb-20 px-5 sm:px-10 lg:px-20 max-w-[900px] mx-auto">
      <h1 className="font-display text-4xl sm:text-5xl mb-8">Terms of Service</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>By engaging SmartPixel for any services, you agree to the terms below.</p>
        <h2 className="font-display text-2xl text-foreground">Scope of work</h2>
        <p>Each project is defined by a written quote or proposal. Any change in scope may affect timeline and cost.</p>
        <h2 className="font-display text-2xl text-foreground">Payments</h2>
        <p>50% advance to start, balance on delivery unless agreed otherwise. All prices in INR, GST extra where applicable.</p>
        <h2 className="font-display text-2xl text-foreground">Intellectual property</h2>
        <p>Final deliverables transfer to you on full payment. We retain rights to showcase work in our portfolio unless agreed otherwise.</p>
        <h2 className="font-display text-2xl text-foreground">Warranty</h2>
        <p>30-day bug-fix window after launch. Beyond that, support is via a maintenance plan.</p>
        <h2 className="font-display text-2xl text-foreground">Liability</h2>
        <p>Our maximum liability is limited to fees paid for the specific project.</p>
        <h2 className="font-display text-2xl text-foreground">Governing law</h2>
        <p>These terms are governed by the laws of India. Disputes are subject to Chennai jurisdiction.</p>
      </div>
    </article>
    <Footer />
  </main>
);

export default Terms;
