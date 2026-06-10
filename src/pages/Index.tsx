import { useEffect } from "react";
import HeroJack from "@/components/jack/HeroJack";
import MarqueeJack from "@/components/jack/MarqueeJack";
import AboutJack from "@/components/jack/AboutJack";
import ServicesJack from "@/components/jack/ServicesJack";
import ProjectsJack from "@/components/jack/ProjectsJack";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
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
    setMeta(
      "description",
      "SmartPixel builds conversion-focused websites, mobile apps, and e-commerce stores. Web development, app development, and digital marketing from Chrompet, Chennai. Call +91 98860 69488."
    );
    setMeta("og:title", "SmartPixel — Conversion-focused Websites, Apps & Growth Systems", "property");
    setMeta(
      "og:description",
      "Websites, apps, and e-commerce stores designed to convert visitors into paying customers.",
      "property"
    );
  }, []);

  return (
    <main
      className="text-foreground"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <HeroJack />
      <MarqueeJack />
      <AboutJack />
      <ServicesJack />
      <ProjectsJack />
      <Testimonials />
      <Faq />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
