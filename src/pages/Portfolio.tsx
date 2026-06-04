import Nav from "@/components/Nav";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WeightedHeading from "@/components/WeightedHeading";

const Portfolio = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <div className="pt-24" />
    <header className="px-5 sm:px-10 lg:px-20 pt-12 max-w-[1200px] mx-auto">
      <WeightedHeading text="SmartPixel Portfolio — Web, App & E-commerce Case Studies" className="text-4xl sm:text-5xl lg:text-6xl leading-tight" />
    </header>
    <CaseStudies showAllByDefault />
    <FinalCTA />
    <Footer />
  </main>
);

export default Portfolio;
