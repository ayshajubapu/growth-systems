import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WeightedHeading from "@/components/WeightedHeading";

const Portfolio = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>Our Work | SmartPixel Case Studies — Before & After Results</title>
      <meta
        name="description"
        content="Real businesses, real results. Before and after web design case studies from SmartPixel — websites built to convert, designed to grow."
      />
      <link rel="canonical" href="https://www.smartpixel.in/portfolio" />
    </Helmet>
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