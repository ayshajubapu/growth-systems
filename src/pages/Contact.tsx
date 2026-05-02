import Nav from "@/components/Nav";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>Contact SmartPixel — Web & App Agency in Chrompet, Chennai</title>
      <meta name="description" content="Talk to SmartPixel about your website, app or e-commerce project. Call +91 98860 69488 or email workwithsmartpixel@gmail.com." />
      <link rel="canonical" href="https://smartpixel.in/contact" />
    </Helmet>
    <Nav />
    <h1 className="sr-only">Contact SmartPixel</h1>
    <div className="pt-24" />
    <FinalCTA />
    <Footer />
  </main>
);

export default Contact;
