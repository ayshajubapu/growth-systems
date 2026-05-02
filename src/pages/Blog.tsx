import Nav from "@/components/Nav";
import Insights from "@/components/Insights";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Blog = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <h1 className="sr-only">SmartPixel Blog — Insights on Web, Apps & Growth</h1>
    <div className="pt-24" />
    <Insights />
    <FinalCTA />
    <Footer />
  </main>
);

export default Blog;
