import Nav from "@/components/Nav";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <h1 className="sr-only">About SmartPixel — Chennai's Conversion-focused Web & App Studio</h1>
    <div className="pt-24" />
    <About />
    <Testimonials />
    <FinalCTA />
    <Footer />
  </main>
);

export default AboutPage;
