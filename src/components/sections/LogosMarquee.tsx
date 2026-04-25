import { useLang } from "@/i18n/LangProvider";
import logoConverted from "@/assets/logos/logo-converted.svg";
import logoIsoclean from "@/assets/logos/logo-isoclean.png";
import logoVakulski from "@/assets/logos/logo-vakulski.png";
import logoPinksquare from "@/assets/logos/logo-pinksquare.png";
import logoDotcom from "@/assets/logos/logo-dotcom.svg";
import logoMuppetkids from "@/assets/logos/logo-muppetkids.png";
import logoSinnapse from "@/assets/logos/logo-Sinnapse.png";
import logoGlobalRegency from "@/assets/logos/logo-GlobalRegency.svg";

const logos = [
  { src: logoConverted, alt: "Converted Co" },
  { src: logoIsoclean, alt: "Isoclean" },
  { src: logoVakulski, alt: "Vakulski Group" },
  { src: logoPinksquare, alt: "Pink Square" },
  { src: logoDotcom, alt: "DotCom Design" },
  { src: logoMuppetkids, alt: "Muppet Kids" },
  { src: logoSinnapse, alt: "Sinnapse" },
  { src: logoGlobalRegency, alt: "Global Regency" },
];

export const LogosMarquee = () => {
  const { t } = useLang();
  return (
    <section className="relative border-y border-border/40 bg-surface/30 py-12">
      <div className="container-x mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t.home.trustedBy}
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex h-14 shrink-0 items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full max-h-12 w-auto object-contain opacity-60 grayscale brightness-200 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
