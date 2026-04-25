import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";
import { Logo } from "./Logo";

const CALENDLY = "https://calendly.com/vladsdigital444/30min";

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const items = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/blog", label: t.nav.blog },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                }`
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

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

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/40 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur md:hidden">
          <div className="container-x flex flex-col py-4">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-base text-foreground/80 last:border-0 hover:text-primary"
              >
                {it.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-4">
              <a href={CALENDLY} target="_blank" rel="noreferrer">
                {t.nav.schedule} →
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
