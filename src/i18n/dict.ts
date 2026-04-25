export type Lang = "en" | "sr";

export type Dict = {
  nav: { home: string; services: string; blog: string; contact: string; schedule: string };
  footer: { rights: string };
  home: {
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustedBy: string;
    statsExperience: string;
    statsProjects: string;
    statsRevenue: string;
    statsConversion: string;
    whatWeDoEyebrow: string;
    whatWeDoTitle: string;
    whatWeDoSubtitle: string;
    services: { title: string; desc: string; href: string; icon: string }[];
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    address: string;
    addressValue: string;
    emailLabel: string;
    callLabel: string;
    successTitle: string;
    successBody: string;
  };
};

export const dict: Record<Lang, Dict> = {
  en: {
    nav: { home: "Home", services: "Services", blog: "Blog", contact: "Contact", schedule: "Schedule a Call" },
    footer: { rights: "All rights reserved." },
    home: {
      heroTitle: "We turn your data",
      heroTitleAccent: "into measurable growth.",
      heroSubtitle:
        "We help e-commerce businesses and digital agencies unlock their full potential through smart data analysis, powerful dashboards, and conversion rate optimization. With 8+ years of experience in web analytics, e-commerce, BI and digital marketing optimization.",
      primaryCta: "Schedule a free call",
      secondaryCta: "Explore services",
      trustedBy: "Trusted by ambitious teams worldwide",
      statsExperience: "Years of experience",
      statsProjects: "Projects delivered",
      statsRevenue: "Revenue tracked",
      statsConversion: "Avg. conversion lift",
      whatWeDoEyebrow: "What we do",
      whatWeDoTitle: "A full data stack for modern commerce",
      whatWeDoSubtitle:
        "From tracking setup to executive dashboards — we own the entire data lifecycle so your team can focus on growth.",
      services: [
        { title: "E-commerce optimization", desc: "Funnels, retention and growth strategies for online stores.", href: "/e-commerce", icon: "🛒" },
        { title: "Web analytics", desc: "GA4, GTM, BigQuery and Looker Studio — done right.", href: "/web-analytics", icon: "📊" },
        { title: "Conversion rate optimization", desc: "A/B testing and UX upgrades that move the needle.", href: "/cro", icon: "🎯" },
        { title: "SEO & GSC analysis", desc: "Search Console insights that win rankings and traffic.", href: "/seo", icon: "🔎" },
        { title: "Google Ads tracking", desc: "Cross-channel performance tracking and ROI optimization.", href: "/ads", icon: "📣" },
        { title: "BI & dashboards", desc: "Custom real-time dashboards built around your KPIs.", href: "/reports", icon: "📈" },
      ],
      testimonialsEyebrow: "Client reviews",
      testimonialsTitle: "Loved by founders, agencies and analysts",
      ctaTitle: "Ready to make your data work harder?",
      ctaSubtitle: "Book a free 30-minute discovery call. No pitch — just clarity.",
    },
    services: {
      eyebrow: "Services",
      title: "Unlock the power of your data",
      subtitle: "End-to-end data analytics, engineering and CRO services for e-commerce and marketing teams.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Insights from the data trenches",
      subtitle: "Practical playbooks on analytics, CRO, SEO and dashboards.",
      readMore: "Read article",
      backToBlog: "Back to blog",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build your data engine",
      subtitle: "Tell us about your project. We respond within one business day.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      subject: "Subject",
      message: "How can we help?",
      send: "Send message",
      address: "Address",
      addressValue: "Kraljevo, Serbia",
      emailLabel: "Email",
      callLabel: "Call",
      successTitle: "Message received — thank you!",
      successBody: "We'll get back to you within one business day.",
    },
  },
  sr: {
    nav: { home: "Početna", services: "Usluge", blog: "Blog", contact: "Kontakt", schedule: "Zakaži poziv" },
    footer: { rights: "Sva prava zadržana." },
    home: {
      heroTitle: "Pretvaramo tvoje podatke",
      heroTitleAccent: "u merljiv rast.",
      heroSubtitle:
        "Pomažemo e-commerce biznisima i digitalnim agencijama da otključaju pun potencijal kroz pametnu analizu podataka, moćne dashboard-e i optimizaciju konverzija. 8+ godina iskustva u web analitici, e-commerce-u, BI i marketing optimizaciji.",
      primaryCta: "Zakaži besplatan poziv",
      secondaryCta: "Pogledaj usluge",
      trustedBy: "Veruju nam ambiciozni timovi širom sveta",
      statsExperience: "Godina iskustva",
      statsProjects: "Realizovanih projekata",
      statsRevenue: "Ispraćenog prihoda",
      statsConversion: "Prosečan rast konverzije",
      whatWeDoEyebrow: "Šta radimo",
      whatWeDoTitle: "Kompletan data stack za moderan commerce",
      whatWeDoSubtitle:
        "Od postavke trackinga do izvršnih dashboard-a — pokrivamo ceo životni ciklus podataka da se tvoj tim posveti rastu.",
      services: [
        { title: "E-commerce optimizacija", desc: "Funneli, retencija i growth strategije za online prodavnice.", href: "/e-commerce", icon: "🛒" },
        { title: "Web analitika", desc: "GA4, GTM, BigQuery i Looker Studio — kako treba.", href: "/web-analytics", icon: "📊" },
        { title: "Conversion Rate Optimization", desc: "A/B testovi i UX poboljšanja koja pomeraju brojke.", href: "/cro", icon: "🎯" },
        { title: "SEO i GSC analiza", desc: "Search Console uvidi za bolji ranking i organski saobraćaj.", href: "/seo", icon: "🔎" },
        { title: "Google Ads tracking", desc: "Praćenje performansi kroz kanale i optimizacija ROI-ja.", href: "/ads", icon: "📣" },
        { title: "BI i dashboardi", desc: "Custom real-time dashboardi prilagođeni tvojim KPI-jevima.", href: "/reports", icon: "📈" },
      ],
      testimonialsEyebrow: "Recenzije klijenata",
      testimonialsTitle: "Vole nas osnivači, agencije i analitičari",
      ctaTitle: "Spreman da tvoji podaci rade jače?",
      ctaSubtitle: "Zakaži besplatnih 30 minuta — bez prodaje, samo jasnoća.",
    },
    services: {
      eyebrow: "Usluge",
      title: "Otključaj snagu svojih podataka",
      subtitle: "End-to-end data analitika, inženjering i CRO usluge za e-commerce i marketing timove.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Saveti iz prakse podataka",
      subtitle: "Konkretni vodiči za analitiku, CRO, SEO i dashboard-e.",
      readMore: "Pročitaj članak",
      backToBlog: "Nazad na blog",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Hajde da napravimo tvoj data motor",
      subtitle: "Reci nam nešto o projektu. Odgovaramo u roku od jednog radnog dana.",
      firstName: "Ime",
      lastName: "Prezime",
      email: "Email",
      subject: "Naslov",
      message: "Kako možemo da pomognemo?",
      send: "Pošalji poruku",
      address: "Adresa",
      addressValue: "Kraljevo, Srbija",
      emailLabel: "Email",
      callLabel: "Telefon",
      successTitle: "Poruka primljena — hvala!",
      successBody: "Javljamo se u roku od jednog radnog dana.",
    },
  },
};
