import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LangProvider";

export const ServicesGrid = () => {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.home.whatWeDoEyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            {t.home.whatWeDoTitle}
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {t.home.whatWeDoSubtitle}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.services.map((s, idx) => (
            <Link
              key={s.href}
              to={s.href}
              className="group relative flex flex-col rounded-2xl border border-border bg-gradient-card p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/60 text-foreground/60 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {s.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-border to-transparent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
