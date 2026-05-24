import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/i18n/LangProvider";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import ECommerce from "./pages/ECommerce.tsx";
import WebAnalytics from "./pages/WebAnalytics.tsx";
import CRO from "./pages/CRO.tsx";
import SEO from "./pages/SEO.tsx";
import Ads from "./pages/Ads.tsx";
import Reports from "./pages/Reports.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Contact from "./pages/Contact.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import EndToEndAnalytics from "./pages/EndToEndAnalytics.tsx";
import Book from "./pages/Book.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const routes = (
  <>
    <Route index element={<Index />} />
    <Route path="services" element={<Services />} />
    <Route path="e-commerce" element={<ECommerce />} />
    <Route path="web-analytics" element={<WebAnalytics />} />
    <Route path="cro" element={<CRO />} />
    <Route path="seo" element={<SEO />} />
    <Route path="ads" element={<Ads />} />
    <Route path="reports" element={<Reports />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:slug" element={<BlogPost />} />
    <Route path="contact" element={<Contact />} />
    <Route path="thank-you" element={<ThankYou />} />
    <Route path="end-to-end-analytics" element={<EndToEndAnalytics />} />
    <Route path="book" element={<Book />} />
    <Route path="ads-lp" element={<Book />} />
    <Route path="email-lp" element={<Book />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LangProvider>
          <Routes>
            {/* English (default) */}
            <Route path="/">{routes}</Route>
            {/* Serbian */}
            <Route path="/sr">{routes}</Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LangProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
