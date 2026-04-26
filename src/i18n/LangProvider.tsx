import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dict, type Lang } from "./dict";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof dict)["en"];
  /** Prefix a canonical (EN) path with the current language. */
  localizePath: (path: string) => string;
  /** Strip the /sr prefix to get the canonical EN path. */
  stripLangPath: (path: string) => string;
};

const LangContext = createContext<LangCtx | null>(null);

const SR_PREFIX = "/sr";

const isSrPath = (pathname: string) =>
  pathname === SR_PREFIX || pathname.startsWith(`${SR_PREFIX}/`);

const stripLang = (pathname: string) => {
  if (pathname === SR_PREFIX) return "/";
  if (pathname.startsWith(`${SR_PREFIX}/`)) return pathname.slice(SR_PREFIX.length);
  return pathname;
};

const localize = (path: string, lang: Lang) => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return clean;
  if (clean === "/") return SR_PREFIX;
  return `${SR_PREFIX}${clean}`;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Lang = isSrPath(location.pathname) ? "sr" : "en";

  const setLang = (l: Lang) => {
    const canonical = stripLang(location.pathname);
    const next = localize(canonical, l) + location.search + location.hash;
    if (next !== location.pathname + location.search + location.hash) {
      navigate(next, { replace: false });
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang,
      t: dict[lang],
      localizePath: (path: string) => localize(path, lang),
      stripLangPath: stripLang,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang, location.pathname],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};

/** Build a path with the current language prefix. */
export const useLocalizedPath = () => {
  const { localizePath } = useLang();
  return localizePath;
};
