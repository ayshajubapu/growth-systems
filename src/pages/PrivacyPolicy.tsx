import { Helmet } from "react-helmet-async";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WeightedHeading from "@/components/WeightedHeading";

const PrivacyPolicy = () => (
  <main className="bg-background text-foreground">
    <Helmet>
      <title>Privacy Policy | SmartPixel Chennai</title>
      <meta name="description" content="Privacy policy for SmartPixel — website development company in Chennai. How we collect, use and protect your information." />
      <link rel="canonical" href="https://www.smartpixel.in/privacy-policy" />
    </Helmet>
    <Nav />
    <article className="pt-32 pb-20 px-5 sm:px-10 lg:px-20 max-w-[900px] mx-auto">
      <WeightedHeading text="Privacy Policy" className="text-4xl sm:text-5xl mb-8" />
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>SmartPixel ("we", "us") respects your privacy. This policy explains what data we collect via smartpixel.in and how we use it.</p>
        <h2 className="font-display text-2xl text-foreground">Information we collect</h2>
        <p>Contact details you submit (name, email, phone, message), and standard analytics data (IP, browser, pages viewed) via cookies.</p>
        <h2 className="font-display text-2xl text-foreground">How we use it</h2>
        <p>To respond to enquiries, deliver services, improve our website and meet legal obligations. We never sell your data.</p>
        <h2 className="font-display text-2xl text-foreground">Cookies</h2>
        <p>We use essential and analytics cookies. You can disable cookies in your browser settings.</p>
        <h2 className="font-display text-2xl text-foreground">Third-party services</h2>
        <p>We use Google Analytics, Google Ads and Meta Pixel for measurement. They process data per their own policies.</p>
        <h2 className="font-display text-2xl text-foreground">Your rights</h2>
        <p>You may request access, correction or deletion of your data by emailing <a className="text-accent" href="mailto:workwithsmartpixel@gmail.com">workwithsmartpixel@gmail.com</a>.</p>
        <h2 className="font-display text-2xl text-foreground">Contact</h2>
        <p>SmartPixel, Chrompet, Chennai 600044 — +91 98860 69488.</p>
      </div>
    </article>
    <Footer />
  </main>
);

export default PrivacyPolicy;
