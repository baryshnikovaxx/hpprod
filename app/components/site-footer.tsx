"use client";
import { useLanguage } from "./language-provider";

export default function SiteFooter() {
  const { lang } = useLanguage();
  const ru = lang === "ru";
  return <footer className="site-footer">
    <a href="/" className="site-wordmark" aria-label="Head Production">HEAD<br />PRODUCTION</a>
    <div><span className="site-copyright">© {new Date().getFullYear()} HEAD PRODUCTION</span>
      <nav aria-label={ru ? "Навигация внизу страницы" : "Footer navigation"}>
        <a href="/services">{ru ? "Услуги" : "Services"}</a><a href="/work">{ru ? "Проекты" : "Work"}</a><a href="/about">{ru ? "О нас" : "About"}</a><a href="/#contact">{ru ? "Контакты" : "Contact"}</a><a href="/privacy">{ru ? "Конфиденциальность" : "Privacy"}</a>
      </nav>
    </div>
    <a href="#page-top" className="site-back-top">{ru ? "НАВЕРХ" : "BACK TO TOP"} ↑</a>
  </footer>;
}
