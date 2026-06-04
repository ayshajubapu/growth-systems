import Nav from "@/components/Nav";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WeightedHeading from "@/components/WeightedHeading";

const AboutPage = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <div className="pt-24" />
    <header className="px-5 sm:px-10 lg:px-20 pt-12 max-w-[1200px] mx-auto">
      <WeightedHeading text="About SmartPixel — Chennai's Conversion-focused Web & App Studio" className="text-4xl sm:text-5xl lg:text-6xl leading-tight" />
    </header>
    <About />
    <Testimonials />
    <FinalCTA />
    <Footer />
  </main>
);

export default AboutPage;
