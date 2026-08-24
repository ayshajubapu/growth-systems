import {
  lazy,
  Suspense,
} from "react";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "./components/ScrollToTop.tsx";
import CookieConsent from "./components/CookieConsent.tsx";

/*
|--------------------------------------------------------------------------
| CORE PAGES
|--------------------------------------------------------------------------
*/

const Index = lazy(() => import("./pages/Index.tsx"));

const Services = lazy(() => import("./pages/Services.tsx"));

const Portfolio = lazy(() => import("./pages/Portfolio.tsx"));

const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));

const Contact = lazy(() => import("./pages/Contact.tsx"));

const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));

const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const PrivacyPolicy = lazy(
  () => import("./pages/PrivacyPolicy.tsx")
);

const Terms = lazy(
  () => import("./pages/Terms.tsx")
);

/*
|--------------------------------------------------------------------------
| CASE STUDIES
|--------------------------------------------------------------------------
*/

const CaseStudyRoute = lazy(
  () => import("./pages/CaseStudy.tsx")
);

/*
|--------------------------------------------------------------------------
| SEO / MARKETING TOOLS
|--------------------------------------------------------------------------
*/

const Backlinks = lazy(
  () => import("./pages/Backlinks.tsx")
);

const SeoChecklist = lazy(
  () => import("./pages/SeoChecklist.tsx")
);

/*
|--------------------------------------------------------------------------
| MAIN SERVICE PAGES
|--------------------------------------------------------------------------
|
| These pages are named exports, so we convert each named export
| into a lazy-loaded default component.
|
|--------------------------------------------------------------------------
*/

const SeoServicesChennai = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.SeoServicesChennai,
  }))
);

const EcommerceChennai = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.EcommerceChennai,
  }))
);

const WhatsappAutomationChennai = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.WhatsappAutomationChennai,
  }))
);

const WebDesignChennai = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.WebDesignChennai,
  }))
);

const WebAppDevelopment = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.WebAppDevelopment,
  }))
);

const MobileAppDevelopment = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.MobileAppDevelopment,
  }))
);

const DigitalMarketingChennai = lazy(() =>
  import("./pages/seo/services.tsx").then((module) => ({
    default: module.DigitalMarketingChennai,
  }))
);

/*
|--------------------------------------------------------------------------
| WEB DESIGN LOCATION PAGES
|--------------------------------------------------------------------------
*/

const Pallavaram = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Pallavaram,
  }))
);

const Tambaram = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Tambaram,
  }))
);

const Chrompet = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Chrompet,
  }))
);

const Guindy = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Guindy,
  }))
);

const TNagar = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.TNagar,
  }))
);

const Saidapet = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Saidapet,
  }))
);

const Nungambakkam = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Nungambakkam,
  }))
);

const Chitlapakkam = lazy(() =>
  import("./pages/seo/locations.tsx").then((module) => ({
    default: module.Chitlapakkam,
  }))
);

/*
|--------------------------------------------------------------------------
| SEO LOCATION PAGES
|--------------------------------------------------------------------------
*/

const SeoPallavaram = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoPallavaram,
  }))
);

const SeoTambaram = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoTambaram,
  }))
);

const SeoChrompet = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoChrompet,
  }))
);

const SeoGuindy = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoGuindy,
  }))
);

const SeoTNagar = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoTNagar,
  }))
);

const SeoSaidapet = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoSaidapet,
  }))
);

const SeoNungambakkam = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoNungambakkam,
  }))
);

const SeoChitlapakkam = lazy(() =>
  import("./pages/seo/seoLocations.tsx").then((module) => ({
    default: module.SeoChitlapakkam,
  }))
);

/*
|--------------------------------------------------------------------------
| QUERY CLIENT
|--------------------------------------------------------------------------
*/

const queryClient = new QueryClient();

/*
|--------------------------------------------------------------------------
| LOADING FALLBACK
|--------------------------------------------------------------------------
|
| Keep this extremely lightweight.
| Do not load another large component here.
|
|--------------------------------------------------------------------------
*/

const PageLoader = () => (
  <div
    className="
      min-h-[60vh]
      flex
      items-center
      justify-center
      bg-background
      text-muted-foreground
    "
  >
    <div className="text-xs uppercase tracking-[0.25em]">
      Loading...
    </div>
  </div>
);

/*
|--------------------------------------------------------------------------
| APP
|--------------------------------------------------------------------------
*/

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* Toast notifications */}
        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* Scroll position management */}
          <ScrollToTop />

          {/* Lazy-loaded pages */}
          <Suspense fallback={<PageLoader />}>

            <Routes>

              {/* =====================================================
                  CORE PAGES
              ===================================================== */}

              <Route
                path="/"
                element={<Index />}
              />

              <Route
                path="/services"
                element={<Services />}
              />

              <Route
                path="/portfolio"
                element={<Portfolio />}
              />

              <Route
                path="/our-work"
                element={
                  <Navigate
                    to="/portfolio"
                    replace
                  />
                }
              />

              <Route
                path="/about"
                element={<AboutPage />}
              />

              {/* =====================================================
                  BLOG
              ===================================================== */}

              <Route
                path="/blog"
                element={<BlogPost />}
              />

              <Route
                path="/blog/:slug"
                element={<BlogPost />}
              />

              {/* =====================================================
                  CASE STUDIES
              ===================================================== */}

              <Route
                path="/case-studies"
                element={<CaseStudyRoute />}
              />

              <Route
                path="/case-studies/:slug"
                element={<CaseStudyRoute />}
              />

              {/* =====================================================
                  CONTACT + LEGAL
              ===================================================== */}

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/privacy-policy"
                element={<PrivacyPolicy />}
              />

              <Route
                path="/terms"
                element={<Terms />}
              />

              {/* =====================================================
                  SEO / MARKETING TOOLS
              ===================================================== */}

              <Route
                path="/backlinks"
                element={<Backlinks />}
              />

              <Route
                path="/seo-checklist"
                element={<SeoChecklist />}
              />

              {/* =====================================================
                  MAIN SERVICE PAGES
              ===================================================== */}

              <Route
                path="/seo-services-chennai"
                element={<SeoServicesChennai />}
              />

              <Route
                path="/ecommerce-website-chennai"
                element={<EcommerceChennai />}
              />

              <Route
                path="/whatsapp-automation-chennai"
                element={<WhatsappAutomationChennai />}
              />

              <Route
                path="/services/web-design-chennai"
                element={<WebDesignChennai />}
              />

              <Route
                path="/services/web-app-development"
                element={<WebAppDevelopment />}
              />

              <Route
                path="/services/mobile-app-development"
                element={<MobileAppDevelopment />}
              />

              <Route
                path="/services/digital-marketing-chennai"
                element={<DigitalMarketingChennai />}
              />

              {/* Old URL → New URL */}

              <Route
                path="/services/digital-marketing"
                element={
                  <Navigate
                    to="/services/digital-marketing-chennai"
                    replace
                  />
                }
              />

              {/* =====================================================
                  WEB DESIGN LOCATION PAGES
              ===================================================== */}

              <Route
                path="/web-design-pallavaram"
                element={<Pallavaram />}
              />

              <Route
                path="/web-design-tambaram"
                element={<Tambaram />}
              />

              <Route
                path="/web-design-chrompet"
                element={<Chrompet />}
              />

              <Route
                path="/web-design-guindy"
                element={<Guindy />}
              />

              <Route
                path="/web-design-t-nagar"
                element={<TNagar />}
              />

              <Route
                path="/web-design-saidapet"
                element={<Saidapet />}
              />

              <Route
                path="/web-design-nungambakkam"
                element={<Nungambakkam />}
              />

              <Route
                path="/web-design-chitlapakkam"
                element={<Chitlapakkam />}
              />

              {/* =====================================================
                  SEO LOCATION PAGES
              ===================================================== */}

              <Route
                path="/seo-services-pallavaram"
                element={<SeoPallavaram />}
              />

              <Route
                path="/seo-services-tambaram"
                element={<SeoTambaram />}
              />

              <Route
                path="/seo-services-chrompet"
                element={<SeoChrompet />}
              />

              <Route
                path="/seo-services-guindy"
                element={<SeoGuindy />}
              />

              <Route
                path="/seo-services-t-nagar"
                element={<SeoTNagar />}
              />

              <Route
                path="/seo-services-saidapet"
                element={<SeoSaidapet />}
              />

              <Route
                path="/seo-services-nungambakkam"
                element={<SeoNungambakkam />}
              />

              <Route
                path="/seo-services-chitlapakkam"
                element={<SeoChitlapakkam />}
              />

              {/* =====================================================
                  404
              ===================================================== */}

              <Route
                path="*"
                element={<NotFound />}
              />

            </Routes>

          </Suspense>

          {/* Cookie consent */}
          <CookieConsent />

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;