"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

import { useRouter } from "next/navigation";

type Language = "en" | "ru";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang = "ru",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLang] = useState<Language>(initialLang);
  const router = useRouter();
  const previousLang = useRef(initialLang);

  useEffect(() => {
    const saved = window.localStorage.getItem("site-lang");
    if (saved === "en" || saved === "ru") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("site-lang", lang);
    document.cookie = `site-lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = lang;
    if (previousLang.current !== lang) {
      previousLang.current = lang;
      router.refresh();
    }
  }, [lang, router]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
