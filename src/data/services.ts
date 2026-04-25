export type ServiceContent = {
  slug: string;
  icon: string;
  hero: { eyebrow: string; title: string; subtitle: string };
  approachTitle: string;
  approach: { title: string; desc: string }[];
  detailTitle: string;
  details: string[];
  resultsTitle: string;
  results: { metric: string; desc: string }[];
};

export const services: Record<string, { en: ServiceContent; sr: ServiceContent }> = {
  "e-commerce": {
    en: {
      slug: "e-commerce",
      icon: "🛒",
      hero: {
        eyebrow: "E-commerce",
        title: "Unlock explosive e-commerce growth",
        subtitle:
          "Transform your online store with data-driven strategies, customer-centric optimizations, and actionable insights that maximize revenue and efficiency.",
      },
      approachTitle: "Our proven e-commerce optimization approach",
      approach: [
        { title: "Business deep dive", desc: "Detailed audit of your business — inventory, sales channels, marketing, ops, and customer service efficiency." },
        { title: "Data integration & dashboarding", desc: "Centralized real-time dashboards that combine sales, marketing, inventory and customer data." },
        { title: "Customer journey & funnel optimization", desc: "Behavior analysis, funnel leak detection, and personalized journeys to grow LTV." },
        { title: "Continuous testing & CRO", desc: "Full CRO audit, A/B testing and ongoing optimization to maximize revenue per visitor." },
      ],
      detailTitle: "Our e-commerce services include",
      details: [
        "🔍 Full business analysis (sales, marketing, ops, inventory)",
        "📊 Custom Looker Studio dashboards integrating all KPIs",
        "🛒 Customer segmentation and buying behavior analysis",
        "🚀 Funnel creation, optimization and journey mapping",
        "🧠 CRO audit and implementation",
        "⚙️ A/B testing for features, offers and funnels",
        "📈 Marketing performance tracking and cost optimization",
        "🗂️ Inventory flow and supply chain efficiency review",
      ],
      resultsTitle: "Real results we've achieved",
      results: [
        { metric: "+12.5% conversion rate", desc: "After funnel redesign and journey optimization for a leading Shopify store." },
        { metric: "−18% cost per acquisition", desc: "Through marketing cost optimization and better audience targeting." },
        { metric: "+45% revenue in 6 months", desc: "Achieved by implementing data-driven CRO and upsell funnels." },
      ],
    },
    sr: {
      slug: "e-commerce",
      icon: "🛒",
      hero: {
        eyebrow: "E-commerce",
        title: "Otključaj eksplozivan rast e-commerce-a",
        subtitle:
          "Transformiši online prodavnicu kroz data-driven strategije, optimizacije usmerene na korisnika i konkretne uvide koji maksimiziraju prihod i efikasnost.",
      },
      approachTitle: "Naš proveren pristup e-commerce optimizaciji",
      approach: [
        { title: "Dubinska analiza biznisa", desc: "Detaljan audit biznisa — zalihe, prodajni kanali, marketing, operacije i korisnička podrška." },
        { title: "Integracija podataka i dashboardi", desc: "Centralizovani real-time dashboardi koji kombinuju prodaju, marketing, zalihe i korisničke podatke." },
        { title: "Customer journey i funnel optimizacija", desc: "Analiza ponašanja, detekcija curenja u funnel-u i personalizovane putanje za rast LTV-a." },
        { title: "Kontinuirano testiranje i CRO", desc: "Kompletan CRO audit, A/B testovi i stalna optimizacija za maksimalan prihod po posetiocu." },
      ],
      detailTitle: "Naše e-commerce usluge uključuju",
      details: [
        "🔍 Kompletna analiza biznisa (prodaja, marketing, operacije, zalihe)",
        "📊 Custom Looker Studio dashboardi sa svim KPI",
        "🛒 Segmentacija kupaca i analiza ponašanja",
        "🚀 Kreiranje funnel-a, optimizacija i mapiranje putanja",
        "🧠 CRO audit i implementacija",
        "⚙️ A/B testovi za funkcije, ponude i funnel-e",
        "📈 Praćenje marketing performansi i optimizacija troškova",
        "🗂️ Pregled toka zaliha i efikasnosti lanca snabdevanja",
      ],
      resultsTitle: "Rezultati koje smo postigli",
      results: [
        { metric: "+12.5% konverzije", desc: "Nakon redizajna funnel-a i optimizacije putanja za vodeću Shopify prodavnicu." },
        { metric: "−18% cena akvizicije", desc: "Optimizacijom marketing troškova i boljim ciljanjem publike." },
        { metric: "+45% prihoda za 6 meseci", desc: "Implementacijom data-driven CRO strategija i upsell funnel-a." },
      ],
    },
  },
  "web-analytics": {
    en: {
      slug: "web-analytics",
      icon: "📊",
      hero: {
        eyebrow: "Web Analytics",
        title: "Maximize your website's potential",
        subtitle:
          "Leverage powerful data-driven insights to optimize your website, enhance user behavior tracking, and drive conversions with advanced analytics tools.",
      },
      approachTitle: "Our proven analytics framework",
      approach: [
        { title: "GA4 setup & integration", desc: "Comprehensive GA4 setup with custom events and full integration with your stack." },
        { title: "Mixpanel & Matomo tracking", desc: "Deeper insights into engagement, retention and behavior." },
        { title: "GTM implementation & tagging", desc: "Flexible tag management for detailed tracking without changing site code." },
        { title: "Behavior analysis", desc: "User journey mapping, funnel optimization and friction point identification." },
      ],
      detailTitle: "Our advanced analytics services include",
      details: [
        "🔍 Full GA4 setup with custom event tracking",
        "📊 Data integration from GA4, Mixpanel and Matomo into Looker Studio",
        "🛠️ GTM implementation with custom triggers and tags",
        "🚀 Funnel creation and optimization across touchpoints",
        "🧠 In-depth user behavior analysis",
        "⚙️ Continuous tag testing and data accuracy debugging",
        "📈 Looker Studio dashboards for key metrics visualization",
        "🔗 Integration with marketing tools for 360° performance view",
      ],
      resultsTitle: "Proven analytics results",
      results: [
        { metric: "+30% website engagement", desc: "Enhanced UX through funnel analysis and heatmap tracking." },
        { metric: "+25% user retention", desc: "Custom tracking and journey mapping reduced bounce across key segments." },
        { metric: "+18% funnel efficiency", desc: "Refined funnel stages reduced friction and improved user flow." },
      ],
    },
    sr: {
      slug: "web-analytics",
      icon: "📊",
      hero: {
        eyebrow: "Web Analitika",
        title: "Iskoristi maksimum svog sajta",
        subtitle:
          "Koristi snažne data-driven uvide za optimizaciju sajta, bolje praćenje ponašanja korisnika i veće konverzije sa naprednim analitičkim alatima.",
      },
      approachTitle: "Naš proveren analitički framework",
      approach: [
        { title: "GA4 setup i integracija", desc: "Kompletna GA4 postavka sa custom event-ima i integracija sa tvojim stack-om." },
        { title: "Mixpanel i Matomo tracking", desc: "Dublji uvidi u engagement, retenciju i ponašanje korisnika." },
        { title: "GTM implementacija", desc: "Fleksibilan tag menadžment za detaljno praćenje bez izmene koda." },
        { title: "Analiza ponašanja", desc: "Mapiranje putanja, optimizacija funnel-a i identifikacija problema." },
      ],
      detailTitle: "Naše napredne analitičke usluge",
      details: [
        "🔍 Kompletan GA4 setup sa custom event tracking-om",
        "📊 Integracija podataka iz GA4, Mixpanel-a i Matomo-a u Looker Studio",
        "🛠️ GTM implementacija sa custom okidačima i tagovima",
        "🚀 Kreiranje i optimizacija funnel-a kroz sve dodirne tačke",
        "🧠 Detaljna analiza ponašanja korisnika",
        "⚙️ Kontinuirani QA tagova i tačnosti podataka",
        "📈 Looker Studio dashboardi sa ključnim metrikama",
        "🔗 Integracija sa marketing alatima za 360° pregled",
      ],
      resultsTitle: "Rezultati u web analitici",
      results: [
        { metric: "+30% engagement-a", desc: "Bolji UX kroz analizu funnel-a i heatmap tracking." },
        { metric: "+25% retencije", desc: "Custom tracking i mapiranje putanja smanjili bounce." },
        { metric: "+18% efikasnosti funnel-a", desc: "Rafinisanje koraka funnel-a smanjilo friction." },
      ],
    },
  },
  cro: {
    en: {
      slug: "cro",
      icon: "🎯",
      hero: {
        eyebrow: "CRO",
        title: "Boost your conversion rate",
        subtitle:
          "Turn more visitors into loyal customers with proven CRO. Behavior analysis, A/B testing and ongoing optimization that grow revenue without higher ad spend.",
      },
      approachTitle: "Our proven CRO approach",
      approach: [
        { title: "Heatmaps & session recording", desc: "Hotjar/Crazy Egg to identify friction, hotspots and click patterns." },
        { title: "A/B & split testing", desc: "Continuously test CTAs, layouts and copy to maximize conversions." },
        { title: "Funnel analysis", desc: "Identify drop-offs and optimize end-to-end paths to purchase." },
        { title: "UX & UI enhancements", desc: "Streamline design for clarity and conversion intent." },
      ],
      detailTitle: "Our CRO services include",
      details: [
        "📈 Full funnel analysis to identify drop-off points",
        "🛠️ A/B and split testing for key conversion elements",
        "🔧 Continuous landing page and CTA optimization",
        "🧠 Advanced segmentation and personalization",
        "⚙️ UX/UI improvements based on behavior data",
        "🔗 Integration with GA4 and Looker Studio for tracking",
      ],
      resultsTitle: "Proven CRO results",
      results: [
        { metric: "+18% conversion rate", desc: "Optimized landing pages, flows and CTAs through targeted A/B tests." },
        { metric: "−15% bounce rate", desc: "Refined messaging, page speed and content alignment." },
        { metric: "+22% revenue per visitor", desc: "Friction reduction in checkout and personalized recommendations." },
      ],
    },
    sr: {
      slug: "cro",
      icon: "🎯",
      hero: {
        eyebrow: "CRO",
        title: "Podigni konverziju sajta",
        subtitle:
          "Pretvori više posetilaca u kupce uz proverene CRO tehnike. Analiza ponašanja, A/B testovi i optimizacija koje rastu prihod bez većeg ad budžeta.",
      },
      approachTitle: "Naš proveren CRO pristup",
      approach: [
        { title: "Heatmape i snimci sesija", desc: "Hotjar/Crazy Egg za identifikaciju trenja i obrazaca klikova." },
        { title: "A/B i split testovi", desc: "Stalno testiranje CTA-ova, layout-a i tekstova za maksimalnu konverziju." },
        { title: "Analiza funnel-a", desc: "Identifikacija drop-off-a i optimizacija putanja do kupovine." },
        { title: "UX i UI poboljšanja", desc: "Pojednostavljenje dizajna radi jasnoće i konverzije." },
      ],
      detailTitle: "Naše CRO usluge",
      details: [
        "📈 Kompletna analiza funnel-a za identifikaciju drop-off tačaka",
        "🛠️ A/B i split testovi za ključne elemente konverzije",
        "🔧 Stalna optimizacija landing-a i CTA-ova",
        "🧠 Napredna segmentacija i personalizacija",
        "⚙️ UX/UI poboljšanja zasnovana na podacima",
        "🔗 Integracija sa GA4 i Looker Studio",
      ],
      resultsTitle: "Dokazani CRO rezultati",
      results: [
        { metric: "+18% konverzije", desc: "Optimizovane landing strane, tokovi i CTA-ovi kroz ciljane A/B testove." },
        { metric: "−15% bounce", desc: "Bolja poruka, brzina strane i usklađenost sa namerom." },
        { metric: "+22% prihoda po posetiocu", desc: "Smanjenje trenja u checkout-u i personalizovane preporuke." },
      ],
    },
  },
  seo: {
    en: {
      slug: "seo",
      icon: "🔎",
      hero: {
        eyebrow: "SEO",
        title: "SEO insights & Search Console analysis",
        subtitle:
          "Discover exactly how your site performs in search. Through GSC analysis and SEO auditing we reveal opportunities, technical issues and actionable improvements.",
      },
      approachTitle: "Our proven SEO approach",
      approach: [
        { title: "Google Search Console analysis", desc: "Deep dive into rankings, CTR, impressions and content opportunities." },
        { title: "SEO audit & on-page optimization", desc: "Comprehensive technical and on-page audit with concrete fixes." },
        { title: "Technical SEO & site speed", desc: "Mobile-friendliness, crawlability, indexation and Core Web Vitals." },
        { title: "Content & keyword strategy", desc: "Keyword research and content roadmap to grow organic traffic." },
      ],
      detailTitle: "Our SEO & GSC services include",
      details: [
        "🔍 Full Google Search Console analysis",
        "📊 Comprehensive SEO audit (on-page + technical)",
        "🛠️ Keyword research and competitor analysis",
        "⚙️ Technical SEO: speed, mobile, crawlability",
        "📈 Data-driven recommendations to grow rankings",
        "🔗 Integration with GA4 and Looker Studio",
      ],
      resultsTitle: "Proven SEO results",
      results: [
        { metric: "+28% organic traffic", desc: "Targeted keyword optimization and technical improvements." },
        { metric: "+18% CTR improvement", desc: "Refined titles, meta descriptions and structured data." },
        { metric: "+22% keyword growth", desc: "Better rankings via content and on-page best practices." },
      ],
    },
    sr: {
      slug: "seo",
      icon: "🔎",
      hero: {
        eyebrow: "SEO",
        title: "SEO uvidi i Search Console analiza",
        subtitle:
          "Otkrij kako tvoj sajt zapravo stoji u pretrazi. Kroz GSC analizu i SEO audit otkrivamo prilike, tehničke probleme i konkretna poboljšanja.",
      },
      approachTitle: "Naš proveren SEO pristup",
      approach: [
        { title: "Google Search Console analiza", desc: "Detaljno: rangiranje, CTR, prikazi i prilike za sadržaj." },
        { title: "SEO audit i on-page optimizacija", desc: "Kompletan tehnički i on-page audit sa konkretnim ispravkama." },
        { title: "Tehnički SEO i brzina", desc: "Mobile-friendly, crawlability, indeksacija i Core Web Vitals." },
        { title: "Sadržaj i keyword strategija", desc: "Keyword research i content roadmap za rast organike." },
      ],
      detailTitle: "Naše SEO i GSC usluge",
      details: [
        "🔍 Kompletna Google Search Console analiza",
        "📊 Sveobuhvatan SEO audit (on-page + tehnički)",
        "🛠️ Keyword research i analiza konkurencije",
        "⚙️ Tehnički SEO: brzina, mobile, crawlability",
        "📈 Preporuke zasnovane na podacima za bolji ranking",
        "🔗 Integracija sa GA4 i Looker Studio",
      ],
      resultsTitle: "Dokazani SEO rezultati",
      results: [
        { metric: "+28% organic saobraćaja", desc: "Ciljana keyword optimizacija i tehnička poboljšanja." },
        { metric: "+18% CTR", desc: "Bolji title-ovi, meta opisi i structured data." },
        { metric: "+22% rast keyword-a", desc: "Bolji ranking kroz on-page best practice." },
      ],
    },
  },
  ads: {
    en: {
      slug: "ads",
      icon: "📣",
      hero: {
        eyebrow: "Google Ads",
        title: "Google Ads & marketing performance tracking",
        subtitle:
          "Get complete visibility into ad ROI. We set up, monitor and optimize Google Ads with precision — tracking every click, conversion and cost across channels.",
      },
      approachTitle: "Our data-driven Google Ads approach",
      approach: [
        { title: "Campaign setup & optimization", desc: "Targeting, ad copy and bidding tuned for performance." },
        { title: "Advanced tracking & analytics", desc: "Server-side tracking and offline conversion uploads." },
        { title: "Bid management & budget allocation", desc: "Continuous bid and budget optimization across channels." },
        { title: "Cross-channel integration", desc: "Unified reporting via GA4, Looker Studio and custom dashboards." },
      ],
      detailTitle: "Our Google Ads services include",
      details: [
        "📊 Search, Display, PMax and Video campaign management",
        "🔍 Advanced keyword research and targeting",
        "📈 Conversion tracking and ROI measurement",
        "🛠️ Continuous A/B testing and ad copy optimization",
        "💰 Bid management and strategic budget allocation",
        "🔗 Cross-channel tracking and integration with GA4 and Looker Studio",
      ],
      resultsTitle: "Proven Google Ads results",
      results: [
        { metric: "+27% click-through rate", desc: "Better targeting and creative led to a strong CTR uplift." },
        { metric: "+19% conversion rate", desc: "Optimized creatives and landing pages improved conversions." },
        { metric: "−17% cost per acquisition", desc: "Bid adjustments and audience refinement reduced CPA." },
      ],
    },
    sr: {
      slug: "ads",
      icon: "📣",
      hero: {
        eyebrow: "Google Ads",
        title: "Google Ads i praćenje performansi",
        subtitle:
          "Potpuna vidljivost ROI-ja oglasa. Postavljamo, pratimo i optimizujemo Google Ads kampanje precizno — svaki klik, konverzija i trošak.",
      },
      approachTitle: "Naš data-driven Google Ads pristup",
      approach: [
        { title: "Setup i optimizacija kampanja", desc: "Targeting, ad copy i bidding podešeni za performanse." },
        { title: "Napredan tracking", desc: "Server-side tracking i offline conversion upload." },
        { title: "Bid menadžment", desc: "Kontinuirana optimizacija ponuda i budžeta kroz kanale." },
        { title: "Cross-channel integracija", desc: "Jedinstven reporting kroz GA4, Looker Studio i custom dashboard-e." },
      ],
      detailTitle: "Naše Google Ads usluge",
      details: [
        "📊 Vođenje Search, Display, PMax i Video kampanja",
        "🔍 Napredan keyword research i targeting",
        "📈 Conversion tracking i merenje ROI-ja",
        "🛠️ Kontinuirano A/B testiranje i optimizacija ad copy-a",
        "💰 Bid menadžment i strateška alokacija budžeta",
        "🔗 Integracija sa GA4 i Looker Studio",
      ],
      resultsTitle: "Dokazani Google Ads rezultati",
      results: [
        { metric: "+27% CTR", desc: "Bolji targeting i kreative." },
        { metric: "+19% konverzije", desc: "Optimizovane kreative i landing strane." },
        { metric: "−17% CPA", desc: "Optimizacija ponuda i publike smanjila trošak akvizicije." },
      ],
    },
  },
  reports: {
    en: {
      slug: "reports",
      icon: "📈",
      hero: {
        eyebrow: "BI & Dashboards",
        title: "Dashboards for smarter decisions",
        subtitle:
          "See everything, miss nothing. Tailored real-time dashboards combining data from every corner of your business — for faster, better decisions.",
      },
      approachTitle: "Our data-driven BI approach",
      approach: [
        { title: "Custom dashboards", desc: "Designed around the metrics that move your business." },
        { title: "Real-time data integration", desc: "Multi-source pipelines for live insights." },
        { title: "Actionable insights", desc: "Not just charts — clear next-step recommendations." },
        { title: "Beautiful visualization", desc: "Clean visuals that surface trends and KPIs at a glance." },
      ],
      detailTitle: "Our BI & dashboard services include",
      details: [
        "📊 Custom dashboards designed around your goals",
        "🔗 Multi-source integration (GA4, Ads, CRM, BigQuery, Sheets)",
        "📈 Real-time tracking for fast decisions",
        "🔍 KPI visualization and trend analysis",
        "🧠 Actionable insights for strategic decisions",
        "📉 Automated reports and alerts",
      ],
      resultsTitle: "Proven BI results",
      results: [
        { metric: "+25% faster decisions", desc: "Real-time dashboards streamlined access to critical data." },
        { metric: "+28% revenue accuracy", desc: "Consolidated marketing and sales data improved forecasting." },
        { metric: "−32% reporting time", desc: "Automation removed manual reporting overhead." },
      ],
    },
    sr: {
      slug: "reports",
      icon: "📈",
      hero: {
        eyebrow: "BI i Dashboardi",
        title: "Dashboardi za pametnije odluke",
        subtitle:
          "Vidi sve, ne propusti ništa. Real-time dashboardi prilagođeni biznisu — za brže i bolje odluke.",
      },
      approachTitle: "Naš data-driven BI pristup",
      approach: [
        { title: "Custom dashboardi", desc: "Dizajnirani oko metrika koje pomeraju biznis." },
        { title: "Real-time integracija", desc: "Multi-source pipeline-ovi za žive uvide." },
        { title: "Konkretni uvidi", desc: "Ne samo grafike — jasne preporuke za sledeći korak." },
        { title: "Lepa vizualizacija", desc: "Čisti vizuali koji odmah otkrivaju trendove i KPI-ove." },
      ],
      detailTitle: "Naše BI i dashboard usluge",
      details: [
        "📊 Custom dashboardi prilagođeni ciljevima",
        "🔗 Multi-source integracija (GA4, Ads, CRM, BigQuery, Sheets)",
        "📈 Real-time praćenje za brze odluke",
        "🔍 Vizualizacija KPI-ova i analiza trendova",
        "🧠 Konkretni uvidi za strateške odluke",
        "📉 Automatizovani izveštaji i alerti",
      ],
      resultsTitle: "Dokazani BI rezultati",
      results: [
        { metric: "+25% brže odluke", desc: "Real-time dashboardi olakšali pristup kritičnim podacima." },
        { metric: "+28% tačnost prihoda", desc: "Konsolidovani podaci poboljšali forecast." },
        { metric: "−32% vreme reportinga", desc: "Automatizacija uklonila ručni rad." },
      ],
    },
  },
};
