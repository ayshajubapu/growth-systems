import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Contact from "./pages/Contact.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";

import {
  SeoServicesChennai,
  EcommerceChennai,
  WhatsappAutomationChennai,
  WebDesignChennai,
  WebAppDevelopment,
  MobileAppDevelopment,
  DigitalMarketingChennai,
} from "./pages/seo/services.tsx";

/*
 * Existing Web Design location pages
 */
import {
  Pallavaram,
  Tambaram,
  Chrompet,
  Guindy,
  TNagar,
  Saidapet,
  Nungambakkam,
  Chitlapakkam,
} from "./pages/seo/locations.tsx";

/*
 * New SEO location pages
 */
import {
  SeoPallavaram,
  SeoTambaram,
  SeoChrompet,
  SeoGuindy,
  SeoTNagar,
  SeoSaidapet,
  SeoNungambakkam,
  SeoChitlapakkam,
} from "./pages/seo/seoLocations.tsx";

import CaseStudyRoute from "./pages/CaseStudy.tsx";
import Backlinks from "./pages/Backlinks.tsx";
import SeoChecklist from "./pages/SeoChecklist.tsx";

import ScrollToTop from "./components/ScrollToTop.tsx";
import CookieConsent from "./components/CookieConsent.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* =====================================================
              CORE PAGES
          ===================================================== */}

          <Route path="/" element={<Index />} />

          <Route path="/services" element={<Services />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route
            path="/our-work"
            element={<Navigate to="/portfolio" replace />}
          />

          <Route path="/about" element={<AboutPage />} />

          {/* =====================================================
              BLOG
          ===================================================== */}

          <Route path="/blog" element={<BlogPost />} />

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

          <Route path="/contact" element={<Contact />} />

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

          {/* SEO */}
          <Route
            path="/seo-services-chennai"
            element={<SeoServicesChennai />}
          />

          {/* Ecommerce */}
          <Route
            path="/ecommerce-website-chennai"
            element={<EcommerceChennai />}
          />

          {/* WhatsApp Automation */}
          <Route
            path="/whatsapp-automation-chennai"
            element={<WhatsappAutomationChennai />}
          />

          {/* Web Design */}
          <Route
            path="/services/web-design-chennai"
            element={<WebDesignChennai />}
          />

          {/* Web Applications */}
          <Route
            path="/services/web-app-development"
            element={<WebAppDevelopment />}
          />

          {/* Mobile Applications */}
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />

          {/* Digital Marketing */}
          <Route
            path="/services/digital-marketing-chennai"
            element={<DigitalMarketingChennai />}
          />

          {/* Old Digital Marketing URL → new URL */}
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
              Existing pages — DO NOT REMOVE
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
              New SEO-specific location pages
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
              CATCH-ALL
              Keep this LAST
          ===================================================== */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>

        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;