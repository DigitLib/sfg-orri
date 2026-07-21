import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "sr" | "en";
export type Bi = { sr: string; en: string };

const LANG_KEY = "orri.lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (b: Bi) => string;
};

const I18nContext = createContext<Ctx | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const v = window.localStorage.getItem(LANG_KEY);
  return v === "sr" ? "sr" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(readInitialLang());
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_KEY, l);
    }
  };

  const t = (b: Bi) => b[lang];

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const bi = (sr: string, en: string): Bi => ({ sr, en });
