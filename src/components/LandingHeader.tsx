import { useState } from "react";
import { Globe } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

export const LandingHeader = () => {
  const { lang, setLang, t } = useLang();
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo />
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/40 px-3 py-2 text-sm font-medium text-foreground/80 backdrop-blur transition-colors hover:border-primary/60 hover:text-foreground"
              aria-label="Language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase">{lang}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-xl border border-border bg-popover shadow-card">
                {(["en", "sr"] as const).map((l) => (
                  <button
                    key={l}
                    onMouseDown={() => setLang(l)}
                    className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-surface ${
                      lang === l ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {l === "en" ? "English" : "Srpski"}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={CALENDLY} target="_blank" rel="noreferrer">
              {t.nav.schedule} →
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
