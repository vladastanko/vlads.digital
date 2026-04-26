import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import heroBg from "@/assets/hero-bg.jpg";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="space-y-1">
    <div className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">{value}</div>
    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
  </div>
);

export const Hero = () => {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="container-x relative pb-20 pt-16 md:pb-32 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              Data analytics · CRO · BI · 8+ years
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {t.home.heroTitle}{" "}
              <span className="text-gradient">{t.home.heroTitleAccent}</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.home.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl">
                <a href={CALENDLY} target="_blank" rel="noreferrer">
                  {t.home.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">{t.home.secondaryCta}</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4">
              <Stat value="8+" label={t.home.statsExperience} />
              <Stat value="120+" label={t.home.statsProjects} />
              <Stat value="$50M+" label={t.home.statsRevenue} />
              <Stat value="+24%" label={t.home.statsConversion} />
            </div>
          </div>

          {/* Decorative dashboard mock */}
          <div className="relative hidden lg:block">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardMock = () => (
  <div className="relative animate-fade-up [animation-delay:200ms]">
    <div className="absolute -inset-8 -z-10 bg-gradient-glow blur-3xl" />
    <div className="surface-card glow-border relative rounded-2xl p-6 shadow-elegant">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Revenue</div>
          <div className="font-display text-2xl font-bold text-foreground">$284,512</div>
        </div>
        <div className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">+24.6%</div>
      </div>

      <svg viewBox="0 0 320 140" className="w-full">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 110 L40 95 L80 100 L120 75 L160 80 L200 50 L240 60 L280 30 L320 40 L320 140 L0 140 Z" fill="url(#g1)" />
        <path d="M0 110 L40 95 L80 100 L120 75 L160 80 L200 50 L240 60 L280 30 L320 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {[110, 95, 100, 75, 80, 50, 60, 30, 40].map((y, i) => (
          <circle key={i} cx={i * 40} cy={y} r="3" fill="hsl(var(--primary))" />
        ))}
      </svg>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        {[
          { l: "Sessions", v: "48.2k", d: "+12%" },
          { l: "Conv. rate", v: "3.84%", d: "+0.6%" },
          { l: "AOV", v: "$92", d: "+8%" },
        ].map((m) => (
          <div key={m.l} className="rounded-lg border border-border/60 bg-surface/60 p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
            <div className="font-display text-base font-bold text-foreground">{m.v}</div>
            <div className="text-[10px] font-semibold text-primary">{m.d}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Floating chip */}
    <div className="absolute -left-6 top-1/2 -translate-y-1/2 surface-card hidden xl:block rounded-xl px-4 py-3 shadow-card">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Live</div>
      <div className="font-display text-sm font-bold text-foreground">GA4 → BigQuery</div>
    </div>
  </div>
);
