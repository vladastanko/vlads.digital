import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { LocalizedLink } from "@/components/LocalizedLink";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getServiceCover } from "@/data/serviceCovers";

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
          {t.home.services.map((s, idx) => {
            const cover = getServiceCover(s.href);
            return (
              <LocalizedLink
                key={s.href}
                to={s.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                {/* Cover */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-5 top-5">
                    <ServiceIcon href={s.href} size="md" />
                  </div>
                  <div className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground/80 backdrop-blur transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-border to-transparent" />
                </div>
              </LocalizedLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};
