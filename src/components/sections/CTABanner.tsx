import { ArrowRight } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

export const CTABanner = () => {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-10 md:p-16 shadow-elegant">
          <div className="absolute inset-0 -z-10 opacity-60 bg-gradient-glow" />
          <div className="absolute right-0 top-0 -z-10 h-64 w-64 -translate-y-1/3 translate-x-1/4 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 translate-y-1/3 -translate-x-1/4 rounded-full bg-secondary/20 blur-3xl" />

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{t.home.ctaSubtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <a href={CALENDLY} target="_blank" rel="noreferrer">
                  {t.home.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/contact">{t.nav.contact}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
