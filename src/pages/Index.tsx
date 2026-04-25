import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

const Index = () => {
  useEffect(() => {
    document.title = "Vlad's Digital — Data analytics, CRO & BI for e-commerce";
    const desc = "Premium data analytics, engineering and CRO for e-commerce and digital marketing teams. Turn data into measurable growth.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);
  }, []);

  return (
    <Layout>
      <Hero />
      <LogosMarquee />
      <ServicesGrid />
      <Testimonials />
      <CTABanner />
    </Layout>
  );
};

export default Index;
