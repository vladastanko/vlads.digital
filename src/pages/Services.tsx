import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLang } from "@/i18n/LangProvider";
import { services } from "@/data/services";
import { getServiceCover } from "@/data/serviceCovers";
import { setSEO } from "@/lib/seo";

const Services = () => {
  const { lang, t } = useLang();

  useEffect(() => {
    setSEO({
      title:
        lang === "sr"
          ? "Usluge — Data analitika, CRO, SEO i Google Ads | Vlad's Digital"
          : "Services — Data Analytics, CRO, SEO & Google Ads | Vlad's Digital",
      description:
        lang === "sr"
          ? "Kompletna ponuda data i growth usluga: GA4 i GTM, BigQuery pipeline-i, Looker Studio dashboardi, CRO, SEO audit i Google Ads tracking za e-commerce."
          : "Full-service data and growth offering: GA4 & GTM, BigQuery pipelines, Looker Studio dashboards, CRO, SEO audits and Google Ads tracking for ecommerce.",
      path: "/services",
      lang,
      keywords:
        "data analytics services, ecommerce analytics, GA4, BigQuery, Looker Studio, CRO services, SEO audit, Google Ads management",
    });
  }, [lang, t]);

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
          <div className="grid gap-6 md:grid-cols-2">
            {all.map((s) => {
              const href = `/${s.slug}`;
              const cover = getServiceCover(href);
              return (
                <LocalizedLink
                  key={s.slug}
                  to={href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    {cover && (
                      <img
                        src={cover}
                        alt=""
                        width={1280}
                        height={720}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute left-6 top-6">
                      <ServiceIcon href={href} size="lg" />
                    </div>
                    <div className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground/80 backdrop-blur transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">{s.hero.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.hero.subtitle}</p>
                  </div>
                </LocalizedLink>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Services;
