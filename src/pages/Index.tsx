import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/i18n/LangProvider";
import { setSEO } from "@/lib/seo";

const Index = () => {
  const { lang } = useLang();
  useEffect(() => {
    setSEO({
      title:
        lang === "sr"
          ? "Vlad's Digital — Data analitika, CRO i BI za e-commerce"
          : "Vlad's Digital — Data Analytics, CRO & BI for Ecommerce",
      description:
        lang === "sr"
          ? "Premium data analitika, engineering i CRO za e-commerce i marketing timove. GA4, BigQuery, Looker Studio dashboardi i Google Ads tracking."
          : "Premium data analytics, engineering and CRO for ecommerce and marketing teams. GA4, BigQuery, Looker Studio dashboards and Google Ads tracking that drive measurable growth.",
      path: "/",
      lang,
      keywords:
        "data analytics agency, ecommerce analytics, GA4 consultant, Looker Studio, BigQuery, CRO, conversion optimization, Google Ads tracking, BI dashboards, Shopify analytics",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Vlad's Digital",
        url: "https://vlads.digital/",
        description:
          "Data analytics, engineering and CRO for ecommerce and digital marketing teams.",
        areaServed: "Worldwide",
        founder: { "@type": "Person", name: "Vladimir S." },
      },
    });
  }, [lang]);

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
