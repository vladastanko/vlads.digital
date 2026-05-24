import { ArrowRight, BarChart3, CalendarCheck, CheckCircle2, Clock, ShieldCheck, Sparkles, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useLang } from "@/i18n/LangProvider";
import { setSEO } from "@/lib/seo";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

type Copy = {
  badge: string;
  title1: string;
  titleAccent: string;
  subtitle: string;
  cta: string;
  microtrust: string;
  benefitsTitle: string;
  benefits: { icon: typeof BarChart3; title: string; desc: string }[];
  whatTitle: string;
  what: string[];
  forWhomTitle: string;
  forWhom: string[];
  finalTitle: string;
  finalSubtitle: string;
  stats: { value: string; label: string }[];
};

const CONTENT: Record<"en" | "sr", Copy> = {
  en: {
    badge: "Free 30-min strategy call",
    title1: "Turn your traffic into",
    titleAccent: "measurable revenue.",
    subtitle:
      "Book a free 30-minute call. We'll review your analytics, find the biggest growth leaks and give you a clear action plan — no strings attached.",
    cta: "Schedule a free call",
    microtrust: "No obligation · 30 minutes · Google Meet or Zoom",
    benefitsTitle: "What you walk away with",
    benefits: [
      { icon: Target, title: "Clear next steps", desc: "A prioritized list of fixes that will impact revenue first." },
      { icon: BarChart3, title: "Analytics health check", desc: "We spot tracking gaps, broken events and bad attribution." },
      { icon: TrendingUp, title: "Growth opportunities", desc: "CRO, ads and SEO levers we'd pull in your business." },
    ],
    whatTitle: "On the call we'll cover",
    what: [
      "Quick audit of your GA4, Ads & funnel",
      "Top 3 conversion leaks in your store/site",
      "Where to invest budget for fastest ROI",
      "Custom roadmap — no generic advice",
    ],
    forWhomTitle: "Perfect for",
    forWhom: [
      "E-commerce founders doing $20k+/month",
      "Marketing teams who can't trust their data",
      "Agencies that need expert analytics support",
      "Anyone burning ad budget without clarity",
    ],
    finalTitle: "Ready to grow with data, not guesses?",
    finalSubtitle: "Pick a time that works — calendar opens in a new tab.",
    stats: [
      { value: "8+", label: "Years experience" },
      { value: "120+", label: "Projects delivered" },
      { value: "$50M+", label: "Revenue tracked" },
      { value: "+24%", label: "Avg. conversion lift" },
    ],
  },
  sr: {
    badge: "Besplatan 30-min strateški poziv",
    title1: "Pretvori saobraćaj u",
    titleAccent: "merljiv prihod.",
    subtitle:
      "Zakaži besplatan poziv od 30 minuta. Pregledaćemo tvoju analitiku, naći najveće propuste i dati ti jasan plan akcije — bez obaveze.",
    cta: "Zakaži besplatan poziv",
    microtrust: "Bez obaveze · 30 minuta · Google Meet ili Zoom",
    benefitsTitle: "Šta dobijaš sa poziva",
    benefits: [
      { icon: Target, title: "Jasni naredni koraci", desc: "Prioritizovana lista popravki koje prvo donose prihod." },
      { icon: BarChart3, title: "Provera analitike", desc: "Otkrivamo rupe u trackingu, polomljene evente i lošu atribuciju." },
      { icon: TrendingUp, title: "Prilike za rast", desc: "CRO, ads i SEO poluge koje bismo povukli u tvom biznisu." },
    ],
    whatTitle: "Na pozivu pokrivamo",
    what: [
      "Brzi audit GA4, Ads-a i funnel-a",
      "Top 3 propusta u konverziji",
      "Gde uložiti budžet za najbrži ROI",
      "Custom roadmap — bez generičkih saveta",
    ],
    forWhomTitle: "Idealno za",
    forWhom: [
      "E-commerce osnivače sa $20k+/mesec",
      "Marketing timove koji ne veruju svojim podacima",
      "Agencije kojima treba ekspert za analitiku",
      "Sve koji troše ad budžet bez jasnoće",
    ],
    finalTitle: "Spreman za rast sa podacima, a ne nagađanjem?",
    finalSubtitle: "Izaberi termin — kalendar se otvara u novom tabu.",
    stats: [
      { value: "8+", label: "Godina iskustva" },
      { value: "120+", label: "Projekata" },
      { value: "$50M+", label: "Praćenog prihoda" },
      { value: "+24%", label: "Prosečan rast konverzija" },
    ],
  },
};

const Book = () => {
  const { lang } = useLang();
  const c = CONTENT[lang];

  useEffect(() => {
    setSEO({
      title:
        lang === "sr"
          ? "Zakaži besplatan strateški poziv | Vlad's Digital"
          : "Book a Free Strategy Call | Vlad's Digital",
      description:
        lang === "sr"
          ? "Besplatan 30-minutni poziv: audit analitike, top propusti u konverziji i custom plan rasta za tvoj biznis."
          : "Free 30-minute strategy call: analytics audit, top conversion leaks and a custom growth plan for your business.",
      path: "/book",
      lang,
      type: "website",
    });
  }, [lang]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Minimal header — no nav, no distractions */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="container-x flex h-18 items-center justify-between py-4">
          <Logo />
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={CALENDLY} target="_blank" rel="noreferrer">
              {c.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={heroBg} alt="" aria-hidden className="h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
            <div className="absolute inset-0 grid-bg opacity-40" />
          </div>

          <div className="container-x relative pb-16 pt-14 md:pb-24 md:pt-20">
            <div className="mx-auto max-w-3xl text-center space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {c.badge}
              </div>

              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                {c.title1} <span className="text-gradient">{c.titleAccent}</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {c.subtitle}
              </p>

              <div className="flex flex-col items-center gap-3 pt-2">
                <Button asChild variant="hero" size="xl" className="text-base">
                  <a href={CALENDLY} target="_blank" rel="noreferrer">
                    <CalendarCheck className="h-5 w-5" />
                    {c.cta}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  {c.microtrust}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4">
                {c.stats.map((s) => (
                  <div key={s.label} className="space-y-1">
                    <div className="font-display text-2xl font-bold tracking-tight text-gradient md:text-3xl">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16 md:py-24">
          <div className="container-x">
            <h2 className="text-center font-display text-3xl font-bold md:text-4xl">{c.benefitsTitle}</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {c.benefits.map((b) => (
                <div
                  key={b.title}
                  className="surface-card group rounded-2xl border border-border/60 bg-surface/40 p-7 transition-all hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow-primary">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT + FOR WHOM */}
        <section className="pb-16 md:pb-24">
          <div className="container-x grid gap-8 md:grid-cols-2">
            <div className="surface-card rounded-2xl border border-border/60 bg-surface/40 p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl font-bold">{c.whatTitle}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {c.what.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card rounded-2xl border border-border/60 bg-surface/40 p-8">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl font-bold">{c.forWhomTitle}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {c.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="pb-24">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-10 text-center md:p-16 shadow-elegant">
              <div className="absolute inset-0 -z-10 opacity-60 bg-gradient-glow" />
              <div className="absolute right-0 top-0 -z-10 h-64 w-64 -translate-y-1/3 translate-x-1/4 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 translate-y-1/3 -translate-x-1/4 rounded-full bg-secondary/20 blur-3xl" />

              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
                {c.finalTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">{c.finalSubtitle}</p>
              <div className="mt-8">
                <Button asChild variant="hero" size="xl">
                  <a href={CALENDLY} target="_blank" rel="noreferrer">
                    <CalendarCheck className="h-5 w-5" />
                    {c.cta}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8">
        <div className="container-x text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vlad's Digital
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
};

export default Book;
