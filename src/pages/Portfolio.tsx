import Nav from "@/components/Nav";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Portfolio = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <h1 className="sr-only">SmartPixel Portfolio — Web, App & E-commerce Case Studies</h1>
    <div className="pt-24" />
    <CaseStudies showAllByDefault />
    <FinalCTA />
    <Footer />
  </main>
);

export default Portfolio;
