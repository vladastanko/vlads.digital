import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";
import type { ServiceContent } from "@/data/services";
import { serviceSEO } from "@/data/serviceSEO";
import { setSEO } from "@/lib/seo";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

export const ServicePage = ({ content }: { content: { en: ServiceContent; sr: ServiceContent } }) => {
  const { lang, t } = useLang();
  const c = content[lang];

  useEffect(() => {
    const seo = serviceSEO[c.slug]?.[lang];
    setSEO({
      title: seo?.title ?? `${c.hero.title} — Vlad's Digital`,
      description: seo?.description ?? c.hero.subtitle.slice(0, 158),
      keywords: seo?.keywords,
      path: `/${c.slug}`,
      lang,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: c.hero.title,
        description: seo?.description ?? c.hero.subtitle,
        provider: {
          "@type": "ProfessionalService",
          name: "Vlad's Digital",
          url: "https://vlads.digital/",
        },
        areaServed: "Worldwide",
        url: `https://vlads.digital/${c.slug}`,
      },
    });
  }, [c, lang]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-glow" />
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="container-x py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="text-base">{c.icon}</span>
              {c.hero.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              {c.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={CALENDLY} target="_blank" rel="noreferrer">
                  {t.home.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">{t.services.eyebrow}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">{c.approachTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.approach.map((a, i) => (
              <div key={a.title} className="group rounded-2xl border border-border bg-gradient-card p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 font-display text-sm font-bold text-primary">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-gradient-card p-8 md:p-12">
            <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">{c.detailTitle}</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {c.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <h2 className="mb-12 font-display text-3xl font-bold md:text-4xl">{c.resultsTitle}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {c.results.map((r) => (
              <div key={r.metric} className="surface-card glow-border rounded-2xl p-7">
                <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{r.metric}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};
