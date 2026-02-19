"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

type NavKey = "services" | "work" | "equipment" | "about" | "contact";

const navItems: ReadonlyArray<{ key: NavKey; href: string }> = [
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "equipment", href: "/equipment" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const isRu = lang === "ru";

  const labels: Record<NavKey | "startProject" | "menu", string> = {
    services: isRu ? "Услуги" : "Services",
    work: isRu ? "Кейсы" : "Work",
    equipment: isRu ? "Оборудование" : "Equipment",
    about: isRu ? "О нас" : "About",
    contact: isRu ? "Контакты" : "Contact",
    startProject: isRu ? "Старт проекта" : "Start a Project",
    menu: isRu ? "Меню" : "Menu",
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 isolate border-b border-white/10 bg-zinc-950">
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-zinc-100">Head Production</div>
              <div className="text-xs text-zinc-400">
                {isRu ? "Лайв-события и трансляции" : "Live Event & Broadcast"}
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-cyan-200"
              >
                {labels[item.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded px-2 py-1 text-xs transition-colors ${
                  !isRu ? "bg-white/15 text-white" : "text-zinc-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={`rounded px-2 py-1 text-xs transition-colors ${
                  isRu ? "bg-white/15 text-white" : "text-zinc-300 hover:text-white"
                }`}
              >
                RU
              </button>
            </div>

            <a
              href="/#contact"
              className="hidden h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-4 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:from-cyan-200 hover:to-violet-200 md:inline-flex"
            >
              {labels.startProject}
            </a>

            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition-colors duration-200 hover:border-white/30 hover:text-cyan-200 md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 md:hidden"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeMobileMenu();
          }}
        >
          <div className="ml-auto h-full w-[86%] max-w-sm border-l border-white/10 bg-zinc-950 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-zinc-100">{labels.menu}</p>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-zinc-300 transition-colors duration-200 hover:text-cyan-200"
                onClick={closeMobileMenu}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 transition-colors duration-200 hover:bg-white/10 hover:text-cyan-200"
                >
                  {labels[item.key]}
                </a>
              ))}
            </nav>
            <a
              href="/#contact"
              onClick={closeMobileMenu}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-4 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:from-cyan-200 hover:to-violet-200"
            >
              {labels.startProject}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
