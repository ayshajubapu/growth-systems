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
    document.title = "Start With Us — Digital Systems That Generate Revenue";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute("content", "Start With Us — a premium digital agency building SEO, web, performance & content systems for corporate teams, startups, and ambitious operators.");
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <h1 className="sr-only">Start With Us — Premium Digital Agency for SEO, Web Development & Performance Marketing</h1>
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
