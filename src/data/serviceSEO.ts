// Per-service SEO copy (title/description/keywords) for each route slug.
// Used by ServicePage via setSEO(). Bilingual.

export type ServiceSEO = {
  title: string;
  description: string;
  keywords: string;
};

type Lang = "en" | "sr";

export const serviceSEO: Record<string, Record<Lang, ServiceSEO>> = {
  "e-commerce": {
    en: {
      title: "E-commerce Analytics & Growth Consulting | Vlad's Digital",
      description:
        "Grow your Shopify or e-commerce store with data-driven analytics, CRO and funnel optimization. Custom dashboards, A/B testing and revenue-focused insights.",
      keywords:
        "ecommerce analytics, Shopify analytics, ecommerce growth, ecommerce CRO, conversion optimization, funnel optimization, ecommerce consultant",
    },
    sr: {
      title: "E-commerce analitika i rast prodavnice | Vlad's Digital",
      description:
        "Rast Shopify i e-commerce prodavnica kroz data-driven analitiku, CRO i optimizaciju funnel-a. Custom dashboardi, A/B testovi i uvidi za prihod.",
      keywords:
        "e-commerce analitika, Shopify analitika, e-commerce rast, CRO, optimizacija konverzija, funnel optimizacija",
    },
  },
  "web-analytics": {
    en: {
      title: "Web Analytics — GA4, GTM & Mixpanel Setup | Vlad's Digital",
      description:
        "GA4 setup, Google Tag Manager, server-side tracking and Mixpanel implementation. Accurate web analytics, event tracking and Looker Studio dashboards.",
      keywords:
        "GA4 setup, Google Analytics 4 consultant, Google Tag Manager, server-side tracking, Mixpanel, Matomo, web analytics audit, event tracking",
    },
    sr: {
      title: "Web analitika — GA4, GTM i Mixpanel | Vlad's Digital",
      description:
        "Postavka GA4, Google Tag Manager-a, server-side tracking-a i Mixpanel-a. Tačna web analitika, event tracking i Looker Studio dashboardi.",
      keywords:
        "GA4 postavka, Google Analytics 4, Google Tag Manager, server-side tracking, Mixpanel, web analitika",
    },
  },
  cro: {
    en: {
      title: "CRO — Conversion Rate Optimization Services | Vlad's Digital",
      description:
        "Increase your conversion rate with proven CRO: heatmaps, A/B testing, funnel analysis and UX improvements. Grow revenue without raising ad spend.",
      keywords:
        "CRO, conversion rate optimization, A/B testing, landing page optimization, ecommerce CRO, funnel analysis, Hotjar, Crazy Egg",
    },
    sr: {
      title: "CRO — optimizacija konverzija | Vlad's Digital",
      description:
        "Povećaj konverziju kroz proveren CRO: heatmape, A/B testovi, analiza funnel-a i UX poboljšanja. Više prihoda bez većeg ad budžeta.",
      keywords:
        "CRO, optimizacija konverzija, A/B testovi, optimizacija landing strana, e-commerce CRO, analiza funnel-a",
    },
  },
  seo: {
    en: {
      title: "SEO Audit & Google Search Console Analysis | Vlad's Digital",
      description:
        "Technical SEO audits, on-page optimization and Google Search Console analysis. Grow organic traffic with data-driven keyword and content strategy.",
      keywords:
        "SEO audit, technical SEO, Google Search Console, GSC analysis, on-page SEO, keyword research, organic traffic, Core Web Vitals",
    },
    sr: {
      title: "SEO audit i Google Search Console analiza | Vlad's Digital",
      description:
        "Tehnički SEO audit, on-page optimizacija i GSC analiza. Rast organic saobraćaja kroz keyword i content strategiju.",
      keywords:
        "SEO audit, tehnički SEO, Google Search Console, GSC, on-page SEO, keyword research, organic saobraćaj",
    },
  },
  ads: {
    en: {
      title: "Google Ads Tracking & Performance Optimization | Vlad's Digital",
      description:
        "Google Ads management with advanced conversion tracking, server-side tagging and ROI reporting. Search, PMax, Display and Video campaigns optimized for performance.",
      keywords:
        "Google Ads, PPC management, conversion tracking, server-side tagging, PMax, Performance Max, Google Ads ROI, Looker Studio Ads dashboard",
    },
    sr: {
      title: "Google Ads — praćenje i optimizacija performansi | Vlad's Digital",
      description:
        "Vođenje Google Ads kampanja sa naprednim conversion tracking-om, server-side tagging-om i ROI izveštajima. Search, PMax, Display i Video.",
      keywords:
        "Google Ads, PPC, conversion tracking, server-side tagging, PMax, Performance Max, Google Ads ROI",
    },
  },
  reports: {
    en: {
      title: "BI Dashboards & Custom Reporting | Vlad's Digital",
      description:
        "Custom BI dashboards in Looker Studio, Power BI and Metabase. Real-time KPI tracking across GA4, Ads, CRM, Shopify and BigQuery.",
      keywords:
        "BI dashboards, Looker Studio, Power BI, Metabase, BigQuery, KPI dashboard, marketing reporting, ecommerce reporting, custom dashboards",
    },
    sr: {
      title: "BI dashboardi i custom izveštaji | Vlad's Digital",
      description:
        "Custom BI dashboardi u Looker Studio, Power BI i Metabase. Real-time praćenje KPI-jeva kroz GA4, Ads, CRM, Shopify i BigQuery.",
      keywords:
        "BI dashboardi, Looker Studio, Power BI, Metabase, BigQuery, KPI dashboard, marketing izveštaji",
    },
  },
};
