import { useEffect } from "react";
import Nav from "@/components/Nav";
import HorizontalScroll from "@/components/HorizontalScroll";
import ServicesDeep from "@/components/ServicesDeep";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  useEffect(() => {
    document.title = "Usine Studio — Digital Systems That Generate Revenue";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute("content", "Usine Studio — a premium digital agency building SEO, web, performance & content systems for corporate teams, startups, and ambitious operators.");
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <h1 className="sr-only">Usine Studio — Premium Digital Agency for SEO, Web Development & Performance Marketing</h1>
      <HorizontalScroll />
      <ServicesDeep />
      <CaseStudies />
      <Insights />
      <About />
      <FinalCTA />
    </main>
  );
};

export default Index;
