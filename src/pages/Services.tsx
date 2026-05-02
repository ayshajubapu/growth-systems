import Nav from "@/components/Nav";
import ServicesDeep from "@/components/ServicesDeep";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Services = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <h1 className="sr-only">SmartPixel Services — Web Design, App Development, E-commerce & SEO in Chennai</h1>
    <div className="pt-24" />
    <ServicesDeep />
    <FinalCTA />
    <Footer />
  </main>
);

export default Services;
