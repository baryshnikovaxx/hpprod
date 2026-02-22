 "use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";

export default function AboutPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const metrics = [
    { k: isRu ? "8 лет" : "8 years", v: isRu ? "в продакшне живых событий" : "experience in live production" },
    { k: "100+", v: isRu ? "реализованных проектов" : "events delivered" },
    { k: "20+", v: isRu ? "стран в портфолио" : "countries worked in" },
    { k: "EN", v: isRu ? "англоязычная команда" : "English-speaking crew" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "О нас" : "About"}</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          {isRu ? "История, команда, результат" : "History. Team. Execution."}
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          {isRu
            ? "Мы делаем надёжный продакшн для конференций, киберспорта, фестивалей и крупных трансляций. Работаем прозрачно, держим высокий инженерный стандарт и спокойно ведём проекты под нагрузкой."
            : "We build reliable live productions for conferences, esports, festivals, and large-scale broadcasts. The focus is simple: clean communication, strong engineering, and stable delivery under pressure."}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.v} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl font-semibold text-white">{m.k}</div>
              <div className="mt-1 text-sm text-zinc-300">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1400px] gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">{isRu ? "Контакты" : "Contact"}</h2>
          <div className="mt-4 space-y-2 text-sm text-zinc-300">
            <p><span className="text-zinc-400">Email:</span> hello@headprod.com</p>
            <p><span className="text-zinc-400">{isRu ? "Телефон:" : "Phone:"}</span> +995 000 00 00 00</p>
            <p><span className="text-zinc-400">{isRu ? "Базируемся:" : "Based in:"}</span> Тбилиси</p>
            <p><span className="text-zinc-400">{isRu ? "География:" : "Coverage:"}</span> {isRu ? "По всему миру" : "Worldwide"}</p>
          </div>
        </div>

        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">{isRu ? "Форма заявки" : "Request Form"}</h2>
          <form className="mt-4 grid gap-3">
            <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder={isRu ? "Имя" : "Name"} />
            <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder={isRu ? "Компания или бренд" : "Company"} />
            <input
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20"
              placeholder={isRu ? "WhatsApp, Telegram или Email для связи" : "WhatsApp / Telegram / Email"}
            />
            <textarea className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder={isRu ? "Коротко опишите задачу" : "Brief about your event"} />
            <button type="button" className="interactive-gradient inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950">
              {isRu ? "Отправить заявку" : "Send request"}
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/15 to-violet-300/15 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/90">
            {isRu ? "Crew Solutions" : "Crew Solutions"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {isRu ? "Команда под любой формат" : "Crew support for any production format"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-100/90 md:text-base">
            {isRu
              ? "На отдельной странице Crew Solutions собрали роли, форматы подключения и наш подход к работе в составе международных продакшен-команд."
              : "Our Crew Solutions page outlines key roles, onboarding formats, and how we integrate into international production teams."}
          </p>
          <a
            href="/crew-solutions"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            {isRu ? "Перейти к Crew Solutions" : "Go to Crew Solutions"} <span>→</span>
          </a>
        </div>
      </section>
      </div>
    </main>
  );
}
