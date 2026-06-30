import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import HorizontalScroll from "@/components/HorizontalScroll";
import ServicesDeep from "@/components/ServicesDeep";
import CaseStudies from "@/components/CaseStudies";

import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import About from "@/components/About";
import Faq from "@/components/Faq";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Helmet>
        <title>SmartPixel — Web, App & E-commerce Development Agency in Chennai</title>
        <meta
          name="description"
          content="SmartPixel builds conversion-focused websites, mobile apps, and e-commerce stores. Web development, app development, and digital marketing from Chrompet, Chennai. Call +91 98860 69488."
        />
        <link rel="canonical" href="https://www.smartpixel.in/" />
        <meta property="og:title" content="SmartPixel — Conversion-focused Websites, Apps & Growth Systems" />
        <meta
          property="og:description"
          content="Websites, apps, and e-commerce stores designed to convert visitors into paying customers."
        />
        <meta property="og:url" content="https://www.smartpixel.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Nav />
      <HorizontalScroll />
      <CaseStudies />
      <ServicesDeep />
      <Testimonials />
      <Insights />
      <About />
      <Faq />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;