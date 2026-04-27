import { useEffect } from "react";
import Nav from "@/components/Nav";
import HorizontalScroll from "@/components/HorizontalScroll";
import ServicesDeep from "@/components/ServicesDeep";
import CaseStudies from "@/components/CaseStudies";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "SmartPixel — Web, App & E-commerce Development Agency in Chennai";
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "SmartPixel builds conversion-focused websites, mobile apps, and e-commerce stores. Web development, app development, and digital marketing from Chrompet, Chennai. Call +91 98860 69488.");
    setMeta("og:title", "SmartPixel — Conversion-focused Websites, Apps & Growth Systems", "property");
    setMeta("og:description", "Websites, apps, and e-commerce stores designed to convert visitors into paying customers.", "property");
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <h1 className="sr-only">SmartPixel — Premium Web, App & E-commerce Development Agency in Chennai</h1>
      <HorizontalScroll />
      <ServicesDeep />
      <CaseStudies />
      <Gallery />
      <Testimonials />
      <Insights />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
