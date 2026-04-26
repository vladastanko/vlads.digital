import { useEffect } from "react";
import {
  ArrowRight,
  Check,
  Database,
  LineChart,
  Workflow,
  Globe2,
  ShoppingBag,
  BarChart3,
  Megaphone,
  Users2,
  Server,
  ShieldCheck,
  Zap,
  Search,
  Wrench,
  LayoutDashboard,
  Rocket,
  Star,
  X,
} from "lucide-react";
import { LandingHeader } from "@/components/LandingHeader";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";
import { setSEO } from "@/lib/seo";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

const copy = {
  en: {
    metaTitle: "End-to-End Analytics System — Data Pipeline + Custom Dashboard App | Vlad's Digital",
    metaDesc:
      "Connect Shopify, GA4, Ads & CRM into BigQuery and get a custom dashboard app hosted on your domain. From $500.",
    eyebrow: "End-to-End Analytics System",
    heroTitle: "Your Data. Your System.",
    heroAccent: "Your Advantage.",
    heroSub:
      "I don't just build dashboards — I build complete analytics systems. Connect your sources (Shopify, GA4, Ads, CRM), structure everything in BigQuery, and ship a custom dashboard app — hosted on your domain.",
    primaryCta: "Book a free call",
    secondaryCta: "See what's included",
    badges: ["Top Rated on Upwork", "5.0 ★ (32 reviews)", "100% Job Success"],
    flow: {
      title: "End-to-End Data Flow",
      sub: "Automated · Reliable · Scalable",
      cols: [
        { title: "Sources", items: ["Shopify", "GA4", "Meta Ads", "Google Ads", "CRM", "More…"] },
        { title: "ETL & Transform", items: ["Cloud Functions", "Airbyte", "SQL"] },
        { title: "BigQuery", items: ["Single Source of Truth"] },
        { title: "Dashboard App", items: ["Custom Web App"] },
      ],
    },
    track: {
      title: "What You Can Track",
      items: [
        { icon: BarChart3, title: "Revenue & Profit", desc: "Total revenue, costs and true contribution margin." },
        { icon: Megaphone, title: "Marketing Performance", desc: "ROAS, CAC, spend and channel attribution." },
        { icon: ShoppingBag, title: "Product Performance", desc: "Which products and SKUs drive profit." },
        { icon: Users2, title: "User Behavior", desc: "Funnels, retention, events and engagement." },
        { icon: LineChart, title: "Attribution", desc: "Multi-touch attribution across all channels." },
        { icon: Wrench, title: "Custom Metrics", desc: "Tailored KPIs that match your business." },
      ],
    },
    stack: {
      title: "Built With Modern Tech",
      items: ["Google Cloud", "BigQuery", "SQL", "Claude / Lovable", "Vercel"],
      bullets: [
        "Scalable cloud infrastructure",
        "Custom frontend (fast & flexible)",
        "Advanced data modeling",
        "Secure & reliable hosting",
      ],
    },
    hosted: {
      title: "Hosted On Your Domain",
      sub: "Seamless. Secure. Part of your website.",
      url: "https://dashboard.yoursite.com",
    },
    who: {
      title: "Who This Is For",
      items: [
        { icon: ShoppingBag, title: "E-commerce Brands", desc: "Scale with clear data on sales, profit & marketing." },
        { icon: Server, title: "SaaS Companies", desc: "Understand growth, usage and user behavior." },
        { icon: Users2, title: "Data-Driven Teams", desc: "A single source of truth for smarter decisions." },
      ],
      foot: "If you outgrew spreadsheets and basic dashboards, this is for you.",
    },
    diff: {
      title: "Why This Is Different",
      bad: { label: "Most freelancers", items: ["Connect tools", "Build static dashboards", "Limited customization", "You're still doing manual work"] },
      good: { label: "What I deliver", items: ["Full data pipeline", "Custom web app dashboard", "Tailored to your business logic", "Automated & scalable system"] },
      foot: "I build analytics systems that drive real decisions.",
    },
    steps: {
      title: "How It Works",
      items: [
        { icon: Search, title: "Discovery", desc: "Review your data sources, tracking and goals." },
        { icon: Database, title: "Data Setup", desc: "Connect sources and build a clean pipeline into BigQuery." },
        { icon: LayoutDashboard, title: "Dashboard", desc: "Design and develop your custom analytics web app." },
        { icon: Rocket, title: "Deploy", desc: "Host on your domain (Vercel / your server) and hand off." },
      ],
    },
    pricing: {
      title: "Service Tiers",
      sub: "Transparent scope. Pick what fits your stage. Custom quotes available on request.",
      tiers: [
        {
          name: "Starter",
          price: "From $500",
          delivery: "2 days",
          features: ["1–2 data sources", "Basic dashboard (hosted)", "10 charts", "1 scenario", "1 model variation"],
          highlight: false,
        },
        {
          name: "Standard",
          price: "From $1,500",
          delivery: "5 days",
          features: ["Multi-source pipeline", "Custom dashboard app", "30 charts", "3 scenarios", "Model documentation", "Data validation"],
          highlight: true,
        },
        {
          name: "Advanced",
          price: "From $3,000",
          delivery: "15 days",
          features: ["Full ETL into BigQuery", "Custom web app + mobile-ready", "Unlimited charts", "5 scenarios & model variations", "Full documentation", "Validation & QA"],
          highlight: false,
        },
      ],
      addons: [
        "Fast Delivery (+$200–$500)",
        "Additional Revision (+$200)",
        "Additional Scenario (+$400)",
        "Additional Model Variation (+$400)",
      ],
      cta: "Request a quote",
    },
    reviews: {
      title: "What Clients Say",
      sub: "5.0 average across 32 reviews — Top Rated on Upwork.",
      items: [
        { name: "Aya A.", project: "App Client Looker Dashboard", text: "Vladimir followed all my requirements and did his best to fix the data discrepancies in my dashboard. He gave additional recommendations on how to handle my project. Enjoyed working with Vladimir!" },
        { name: "Thomas S.", project: "GA4 & Tag Manager Setup", text: "Vlad really knows his stuff." },
        { name: "Tomas P.", project: "Complex MySQL Query Help", text: "Vladimir was a huge help with a complex MySQL query. He quickly understood the logic, proposed efficient solutions, and explained everything clearly. Clean, optimized, well-documented SQL." },
        { name: "Maurice S.", project: "BigQuery + Looker Studio", text: "Great work from Vlad — understands you well, takes direction well, and is quick. Would definitely use again." },
      ],
    },
    final: {
      title: "Ready to build your analytics system?",
      sub: "Let's turn your data into a powerful advantage.",
      steps: [
        { icon: "💬", title: "Talk", desc: "Tell me about your goals and data sources." },
        { icon: "⚙️", title: "Build", desc: "I'll design and build your custom system." },
        { icon: "🚀", title: "Grow", desc: "Use better data to make smarter decisions, faster." },
      ],
      cta: "Let's get started",
    },
  },
  sr: {
    metaTitle: "End-to-End Analytics System — Data Pipeline + Custom Dashboard | Vlad's Digital",
    metaDesc:
      "Povezujem Shopify, GA4, Ads i CRM u BigQuery i isporučujem custom dashboard aplikaciju na tvom domenu. Od $500.",
    eyebrow: "End-to-End Analytics System",
    heroTitle: "Tvoji podaci. Tvoj sistem.",
    heroAccent: "Tvoja prednost.",
    heroSub:
      "Ne pravim samo dashboarde — pravim kompletne analitičke sisteme. Povezujem tvoje izvore (Shopify, GA4, Ads, CRM), sve strukturišem u BigQuery i isporučujem custom dashboard aplikaciju — hostovanu na tvom domenu.",
    primaryCta: "Zakazi besplatan poziv",
    secondaryCta: "Pogledaj šta je uključeno",
    badges: ["Top Rated na Upwork-u", "5.0 ★ (32 recenzije)", "100% uspešnost"],
    flow: {
      title: "End-to-End tok podataka",
      sub: "Automatizovano · Pouzdano · Skalabilno",
      cols: [
        { title: "Izvori", items: ["Shopify", "GA4", "Meta Ads", "Google Ads", "CRM", "I više…"] },
        { title: "ETL i transformacija", items: ["Cloud Functions", "Airbyte", "SQL"] },
        { title: "BigQuery", items: ["Jedan izvor istine"] },
        { title: "Dashboard aplikacija", items: ["Custom Web App"] },
      ],
    },
    track: {
      title: "Šta možeš da pratiš",
      items: [
        { icon: BarChart3, title: "Prihod i profit", desc: "Ukupan prihod, troškovi i stvarna kontribuciona marža." },
        { icon: Megaphone, title: "Marketing performanse", desc: "ROAS, CAC, potrošnja i atribucija po kanalima." },
        { icon: ShoppingBag, title: "Proizvodi", desc: "Koji proizvodi i SKU-ovi donose profit." },
        { icon: Users2, title: "Ponašanje korisnika", desc: "Funneli, retencija, događaji i angažovanje." },
        { icon: LineChart, title: "Atribucija", desc: "Multi-touch atribucija kroz sve kanale." },
        { icon: Wrench, title: "Custom metrike", desc: "KPI-jevi prilagođeni tvom biznisu." },
      ],
    },
    stack: {
      title: "Izgrađeno modernom tehnologijom",
      items: ["Google Cloud", "BigQuery", "SQL", "Claude / Lovable", "Vercel"],
      bullets: [
        "Skalabilna cloud infrastruktura",
        "Custom frontend (brz i fleksibilan)",
        "Napredno modelovanje podataka",
        "Sigurno i pouzdano hostovanje",
      ],
    },
    hosted: {
      title: "Hostovano na tvom domenu",
      sub: "Bešavno. Sigurno. Deo tvog sajta.",
      url: "https://dashboard.tvojsajt.com",
    },
    who: {
      title: "Za koga je ovo",
      items: [
        { icon: ShoppingBag, title: "E-commerce brendovi", desc: "Skaliraj uz jasne podatke o prodaji, profitu i marketingu." },
        { icon: Server, title: "SaaS kompanije", desc: "Razumi rast, korišćenje i ponašanje korisnika." },
        { icon: Users2, title: "Data-driven timovi", desc: "Jedan izvor istine za pametnije odluke." },
      ],
      foot: "Ako si prerastao spreadsheete i osnovne dashboarde — ovo je za tebe.",
    },
    diff: {
      title: "Zašto je ovo drugačije",
      bad: { label: "Većina freelancera", items: ["Povezuje alate", "Pravi statične dashboarde", "Ograničena prilagodljivost", "Ti i dalje radiš ručno"] },
      good: { label: "Šta ja isporučujem", items: ["Kompletan data pipeline", "Custom web dashboard aplikaciju", "Prilagođeno tvojoj poslovnoj logici", "Automatizovan i skalabilan sistem"] },
      foot: "Pravim analitičke sisteme koji vode do stvarnih odluka.",
    },
    steps: {
      title: "Kako funkcioniše",
      items: [
        { icon: Search, title: "Discovery", desc: "Pregled tvojih izvora, trackinga i ciljeva." },
        { icon: Database, title: "Postavka", desc: "Povezujem izvore i gradim čist pipeline u BigQuery." },
        { icon: LayoutDashboard, title: "Dashboard", desc: "Dizajn i razvoj tvoje custom analitičke web aplikacije." },
        { icon: Rocket, title: "Deploy", desc: "Hostovanje na tvom domenu (Vercel / server) i predaja." },
      ],
    },
    pricing: {
      title: "Paketi",
      sub: "Transparentan obim. Izaberi šta odgovara tvojoj fazi. Custom ponuda dostupna na upit.",
      tiers: [
        {
          name: "Starter",
          price: "Od $500",
          delivery: "2 dana",
          features: ["1–2 izvora podataka", "Osnovni dashboard (hostovan)", "10 grafikona", "1 scenario", "1 varijacija modela"],
          highlight: false,
        },
        {
          name: "Standard",
          price: "Od $1,500",
          delivery: "5 dana",
          features: ["Multi-source pipeline", "Custom dashboard aplikacija", "30 grafikona", "3 scenarija", "Dokumentacija modela", "Validacija podataka"],
          highlight: true,
        },
        {
          name: "Advanced",
          price: "Od $3,000",
          delivery: "15 dana",
          features: ["Kompletan ETL u BigQuery", "Custom web app + mobile-ready", "Neograničeno grafikona", "5 scenarija i varijacija", "Puna dokumentacija", "Validacija i QA"],
          highlight: false,
        },
      ],
      addons: [
        "Brza isporuka (+$200–$500)",
        "Dodatna revizija (+$200)",
        "Dodatni scenario (+$400)",
        "Dodatna varijacija modela (+$400)",
      ],
      cta: "Zatraži ponudu",
    },
    reviews: {
      title: "Šta klijenti kažu",
      sub: "Prosek 5.0 na 32 recenzije — Top Rated na Upwork-u.",
      items: [
        { name: "Aya A.", project: "App Client Looker Dashboard", text: "Vladimir je ispoštovao sve zahteve i otklonio nepoklapanja u podacima. Dao je i dodatne preporuke. Uživala sam u saradnji." },
        { name: "Thomas S.", project: "GA4 & Tag Manager Setup", text: "Vlad zaista poznaje svoj posao." },
        { name: "Tomas P.", project: "Complex MySQL Query Help", text: "Vladimir je bio ogromna pomoć sa kompleksnim MySQL upitom. Brzo je razumeo logiku, predložio efikasna rešenja i sve jasno objasnio." },
        { name: "Maurice S.", project: "BigQuery + Looker Studio", text: "Odličan rad — razume klijenta, prima sugestije i brz je. Definitivno bismo opet sarađivali." },
      ],
    },
    final: {
      title: "Spreman za svoj analitički sistem?",
      sub: "Pretvorimo tvoje podatke u stvarnu prednost.",
      steps: [
        { icon: "💬", title: "Razgovor", desc: "Ispričaj mi o ciljevima i izvorima podataka." },
        { icon: "⚙️", title: "Izgradnja", desc: "Dizajniram i gradim tvoj custom sistem." },
        { icon: "🚀", title: "Rast", desc: "Bolji podaci → pametnije i brže odluke." },
      ],
      cta: "Krenimo",
    },
  },
} as const;

const EndToEndAnalytics = () => {
  const { lang } = useLang();
  const c = copy[lang];

  useEffect(() => {
    setSEO({
      title: c.metaTitle,
      description: c.metaDesc,
      path: "/end-to-end-analytics",
      lang,
      keywords:
        "end-to-end analytics, data pipeline, custom dashboard, BigQuery, GA4, Shopify, Looker Studio alternative, analytics system, data engineering",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "End-to-End Analytics System",
        description: c.metaDesc,
        provider: {
          "@type": "ProfessionalService",
          name: "Vlad's Digital",
          url: "https://vlads.digital/",
        },
        areaServed: "Worldwide",
        offers: { "@type": "Offer", priceCurrency: "USD", price: "500", url: "https://vlads.digital/end-to-end-analytics" },
      },
    });
  }, [c, lang]);

  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-glow" />
          <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
          <div className="container-x py-20 md:py-28">
            <div className="mx-auto max-w-4xl text-center animate-fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <Workflow className="h-3.5 w-3.5" />
                {c.eyebrow}
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                {c.heroTitle}
                <br />
                <span className="text-gradient">{c.heroAccent}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {c.heroSub}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={CALENDLY} target="_blank" rel="noreferrer">
                    {c.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#whats-included">{c.secondaryCta}</a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {c.badges.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/40 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur">
                    <Star className="h-3 w-3 text-primary" /> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DATA FLOW */}
        <section id="whats-included" className="py-20 md:py-28">
          <div className="container-x">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-5xl">{c.flow.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-primary">{c.flow.sub}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {c.flow.cols.map((col, i) => (
                <div key={col.title} className="relative">
                  <div className="surface-card glow-border h-full rounded-2xl p-6">
                    <div className="mb-4 inline-flex h-9 items-center rounded-full bg-primary/10 px-3 text-xs font-bold uppercase tracking-wider text-primary">
                      {col.title}
                    </div>
                    <ul className="space-y-2.5">
                      {col.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 rounded-lg border border-border/60 bg-surface/40 px-3 py-2 text-sm text-foreground/90">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < c.flow.cols.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN TRACK */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-5xl">{c.track.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {c.track.items.map((it) => (
                <div key={it.title} className="group rounded-2xl border border-border bg-gradient-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-5xl">{c.stack.title}</h2>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
              {c.stack.items.map((s) => (
                <span key={s} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-2.5 text-sm font-semibold text-foreground/90 backdrop-blur">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  {s}
                </span>
              ))}
            </div>
            <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
              {c.stack.bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 rounded-xl border border-border bg-gradient-card p-4 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOSTED ON YOUR DOMAIN */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <div className="surface-card glow-border mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
              <div className="mb-6 text-center">
                <h2 className="font-display text-3xl font-bold md:text-4xl">{c.hosted.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-primary">{c.hosted.sub}</p>
              </div>
              <div className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-border bg-surface/60 px-5 py-3 backdrop-blur">
                <Globe2 className="h-4 w-4 text-primary" />
                <code className="truncate font-mono text-sm text-foreground/90">{c.hosted.url}</code>
                <ShieldCheck className="ml-auto h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-5xl">{c.who.title}</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {c.who.items.map((it) => (
                <div key={it.title} className="rounded-2xl border border-border bg-gradient-card p-7 text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow-primary">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm italic text-primary">{c.who.foot}</p>
          </div>
        </section>

        {/* WHY DIFFERENT */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-5xl">{c.diff.title}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-7">
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-destructive">
                  <X className="h-4 w-4" /> {c.diff.bad.label}
                </div>
                <ul className="space-y-3">
                  {c.diff.bad.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/40 bg-primary/5 p-7 shadow-glow-primary">
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  <Check className="h-4 w-4" /> {c.diff.good.label}
                </div>
                <ul className="space-y-3">
                  {c.diff.good.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center font-display text-lg text-gradient">{c.diff.foot}</p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-5xl">{c.steps.title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.steps.items.map((s, i) => (
                <div key={s.title} className="group relative rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <s.icon className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="font-display text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-5xl">{c.pricing.title}</h2>
              <p className="mt-3 text-base text-muted-foreground">{c.pricing.sub}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {c.pricing.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl border p-7 transition-all ${
                    tier.highlight
                      ? "border-primary/50 bg-gradient-card shadow-elegant md:-translate-y-3"
                      : "border-border bg-gradient-card hover:-translate-y-1"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow-primary">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground/70">
                    {tier.name}
                  </div>
                  <div className="font-display text-4xl font-bold text-gradient">{tier.price}</div>
                  <div className="mt-1 text-xs text-muted-foreground">⏱ {tier.delivery}</div>
                  <ul className="mt-6 space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={tier.highlight ? "hero" : "outline"} className="mt-7 w-full">
                    <a href={CALENDLY} target="_blank" rel="noreferrer">
                      {c.pricing.cta}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <div className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">Add-ons</div>
              <div className="flex flex-wrap justify-center gap-2">
                {c.pricing.addons.map((a) => (
                  <span key={a} className="rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-foreground/80">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold md:text-5xl">{c.reviews.title}</h2>
              <p className="mt-3 text-base text-muted-foreground">{c.reviews.sub}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {c.reviews.items.map((r) => (
                <div key={r.name} className="rounded-2xl border border-border bg-gradient-card p-7">
                  <div className="mb-3 flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
                  <div className="mt-4 border-t border-border/50 pt-4">
                    <div className="font-display text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.project}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 md:py-28">
          <div className="container-x">
            <div className="surface-card glow-border relative overflow-hidden rounded-3xl p-10 md:p-16">
              <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-60" />
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl font-bold md:text-5xl">{c.final.title}</h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.final.sub}</p>
                <div className="my-10 grid gap-5 sm:grid-cols-3">
                  {c.final.steps.map((s) => (
                    <div key={s.title} className="rounded-2xl border border-border bg-surface/40 p-6 text-center backdrop-blur">
                      <div className="mb-3 text-3xl">{s.icon}</div>
                      <div className="font-display text-base font-semibold">{s.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="hero" size="xl">
                  <a href={CALENDLY} target="_blank" rel="noreferrer">
                    {c.final.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default EndToEndAnalytics;
