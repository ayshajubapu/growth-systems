import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import WeightedHeading from "@/components/WeightedHeading";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    // Signal to prerender/crawlers this is not a real page
    document.title = "404 — Page Not Found | SmartPixel";
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <Helmet>
        <title>404 — Page Not Found | SmartPixel</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="prerender-status-code" content="404" />
        <meta httpEquiv="Status" content="404 Not Found" />
      </Helmet>
      <div className="text-center max-w-lg px-6">
        <WeightedHeading text="404 Page not found" className="mb-4 text-4xl" />
        <p className="mb-6 text-lg text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Try one of these instead:
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
          <li><Link to="/" className="underline hover:text-accent">Home</Link></li>
          <li><Link to="/services" className="underline hover:text-accent">Services</Link></li>
          <li><Link to="/portfolio" className="underline hover:text-accent">Portfolio</Link></li>
          <li><Link to="/blog" className="underline hover:text-accent">Blog</Link></li>
          <li><Link to="/contact" className="underline hover:text-accent">Contact</Link></li>
        </ul>
        <Link to="/" className="inline-block px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
