import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceIcon } from "@/components/ServiceIcon";
import { useLang } from "@/i18n/LangProvider";
import { services } from "@/data/services";

const Services = () => {
  const { lang, t } = useLang();

  useEffect(() => {
    document.title = `${t.services.title} — Vlad's Digital`;
  }, [t]);

  const all = Object.values(services).map((s) => s[lang]);

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-glow" />
        <div className="container-x py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.services.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {t.services.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2">
            {all.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/60 text-foreground/60 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="mb-5">
                  <ServiceIcon href={`/${s.slug}`} size="lg" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">{s.hero.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.hero.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Services;
