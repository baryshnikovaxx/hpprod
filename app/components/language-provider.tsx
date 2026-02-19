"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "ru";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("site-lang");
    if (saved === "en" || saved === "ru") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("site-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
