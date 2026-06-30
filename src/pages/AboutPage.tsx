import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WeightedHeading from "@/components/WeightedHeading";

const AboutPage = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>About SmartPixel | Website Development Company in Chennai</title>
      <meta
        name="description"
        content="Learn about SmartPixel, a premium Chennai website development company building websites, ecommerce stores, apps and digital growth systems for modern businesses."
      />
      <meta
        name="keywords"
        content="about SmartPixel, Chennai web company, website developer Chennai, ecommerce company Chennai, app development Chennai"
      />
      <link rel="canonical" href="https://www.smartpixel.in/about" />
      <meta property="og:title" content="About SmartPixel | Premium Digital Agency Chennai" />
      <meta
        property="og:description"
        content="Industry-grade tools. Clean code. Smart systems. Learn how SmartPixel helps businesses grow online."
      />
      <meta property="og:url" content="https://www.smartpixel.in/about" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SmartPixel",
          url: "https://www.smartpixel.in",
          logo: "https://www.smartpixel.in/logo.png",
          sameAs: [
            "https://www.instagram.com/smartpiixel/",
            "https://www.threads.net/@smartpiixel",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        })}
      </script>
    </Helmet>

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