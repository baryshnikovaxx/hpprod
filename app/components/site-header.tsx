"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Services", hash: "#services" },
  { label: "Industries", hash: "#industries" },
  { label: "Founders", hash: "#founders" },
  { label: "Contact", hash: "#contact" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toSection = (hash: string) => (isHomePage ? hash : `/${hash}`);

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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950">
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/15" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-zinc-100">Head Production</div>
              <div className="text-xs text-zinc-400">Live Event & Broadcast</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={toSection(item.hash)}
                className="transition-colors duration-200 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={toSection("#contact")}
            className="hidden rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:from-cyan-200 hover:to-violet-200 md:inline-flex"
          >
            Start a Project
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition-colors duration-200 hover:border-white/30 hover:text-cyan-200 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
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
              <p className="text-sm font-semibold text-zinc-100">Menu</p>
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
                  key={item.label}
                  href={toSection(item.hash)}
                  onClick={closeMobileMenu}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 transition-colors duration-200 hover:bg-white/10 hover:text-cyan-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={toSection("#contact")}
              onClick={closeMobileMenu}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-4 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:from-cyan-200 hover:to-violet-200"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
