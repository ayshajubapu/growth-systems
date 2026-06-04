import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";
import {
  SeoServicesChennai, EcommerceChennai, WhatsappAutomationChennai,
  WebDesignChennai, WebAppDevelopment, MobileAppDevelopment, DigitalMarketingChennai,
} from "./pages/seo/services.tsx";
import {
  Pallavaram, Tambaram, Chrompet, Guindy, TNagar, Saidapet, Nungambakkam, Chitlapakkam,
} from "./pages/seo/locations.tsx";
import Backlinks from "./pages/Backlinks.tsx";
import SeoChecklist from "./pages/SeoChecklist.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import CookieConsent from "./components/CookieConsent.tsx";
import HeadingCursor from "./components/HeadingCursor.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/our-work" element={<Navigate to="/portfolio" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/backlinks" element={<Backlinks />} />
          <Route path="/seo-checklist" element={<SeoChecklist />} />

          {/* Service pages */}
          <Route path="/seo-services-chennai" element={<SeoServicesChennai />} />
          <Route path="/ecommerce-website-chennai" element={<EcommerceChennai />} />
          <Route path="/whatsapp-automation-chennai" element={<WhatsappAutomationChennai />} />
          <Route path="/services/web-design-chennai" element={<WebDesignChennai />} />
          <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/digital-marketing-chennai" element={<DigitalMarketingChennai />} />
          <Route path="/services/digital-marketing" element={<Navigate to="/services/digital-marketing-chennai" replace />} />

          {/* Location pages */}
          <Route path="/web-design-pallavaram" element={<Pallavaram />} />
          <Route path="/web-design-tambaram" element={<Tambaram />} />
          <Route path="/web-design-chrompet" element={<Chrompet />} />
          <Route path="/web-design-guindy" element={<Guindy />} />
          <Route path="/web-design-t-nagar" element={<TNagar />} />
          <Route path="/web-design-saidapet" element={<Saidapet />} />
          <Route path="/web-design-nungambakkam" element={<Nungambakkam />} />
          <Route path="/web-design-chitlapakkam" element={<Chitlapakkam />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
