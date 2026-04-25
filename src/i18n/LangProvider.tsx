import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang } from "./dict";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof dict)["en"];
};

const LangContext = createContext<LangCtx | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem("vd-lang") as Lang | null;
    return stored === "sr" || stored === "en" ? stored : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("vd-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
