 "use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

export default function AboutPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const metrics = [
    { k: isRu ? "8 лет" : "8 years", v: isRu ? ru("в продакшне мероприятий") : "experience in live production" },
    { k: "100+", v: isRu ? "реализованных проектов" : "events delivered" },
    { k: "20+", v: isRu ? "стран в портфолио" : "countries worked in" },
    { k: "EN", v: isRu ? "англоязычная команда" : "English-speaking crew" },
  ];

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "about",
      lang,
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: String(formData.get("consent") ?? "") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submit failed");

      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "О нас" : "About"}</p>
        <h1 className="title-hero mt-3">
          {isRu ? "История, команда, результат" : "History. Team. Execution."}
        </h1>
        <p className="reading-copy mt-5 max-w-3xl">
          {isRu
            ? ru("Мы команда энтузиастов, для которых кино и видео — не просто профессия, а дело жизни. Делаем надёжный продакшн для конференций, киберспорта, фестивалей и крупных трансляций. Уже реализовывали проекты в Европе, США, Грузии, Казахстане, ОАЭ, Сербии, Кыргызстане, Армении, России, Турции, Китае и Индонезии. Мы уверенно работаем со сложными задачами, постоянно учимся и развиваемся, потому что любим масштаб, темп и ответственность живого эфира.")
            : "We are a team of enthusiasts for whom cinema and video are not just a profession, but a lifelong craft. We deliver reliable production for conferences, esports, festivals, and large-scale broadcasts. Our projects have run across Europe, the US, Georgia, Kazakhstan, UAE, Serbia, Kyrgyzstan, Armenia, Russia, Turkey, China, and Indonesia. We are comfortable with complex delivery, and we keep learning continuously because we genuinely enjoy the pace and responsibility of live production."}
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
          <h2 className="title-section">{isRu ? "Контакты" : "Contact"}</h2>
          <div className="mt-4 space-y-2 text-sm text-zinc-300">
            <p><span className="text-zinc-400">Email:</span> hello@headprod.live</p>
            <p><span className="text-zinc-400">Telegram:</span> @Hipete_HP</p>
            <p>{isRu ? "Тбилиси, Грузия" : "Tbilisi, Georgia"}</p>
          </div>
        </div>

        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="title-section">{isRu ? "Форма заявки" : "Request Form"}</h2>
          <form onSubmit={submitContactForm} className="mt-4 grid gap-3">
            <input
              name="name"
              required
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
              placeholder={isRu ? "Имя" : "Name"}
            />
            <input
              name="contact"
              required
              className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
              placeholder={isRu ? "WhatsApp, Telegram или Email для связи" : "WhatsApp / Telegram / Email"}
            />
            <textarea
              name="message"
              required
              className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
              placeholder={isRu ? "Коротко опишите задачу" : "Brief about your event"}
            />
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
            <label className="mt-1 flex items-start gap-2">
              <input
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-white/30 bg-zinc-900 accent-indigo-400"
              />
              <span className="text-xs text-zinc-400">
                {isRu ? "Я согласен(а) на обработку персональных данных в соответствии с " : "I agree to the processing of personal data according to the "}
                <a href="/privacy" className="underline decoration-zinc-500/70 underline-offset-2 hover:text-zinc-200">
                  {isRu ? "политикой конфиденциальности" : "privacy policy"}
                </a>
                .
              </span>
            </label>
            <button
              type="submit"
              disabled={formState === "loading"}
              className="interactive-gradient inline-flex justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isRu ? "Отправить заявку" : "Send request"}
            </button>
            <p className="text-xs text-zinc-400">
              {formState === "success"
                ? isRu
                  ? "Спасибо! Мы получили заявку и скоро свяжемся с вами."
                  : "Thank you! We received your request and will contact you soon."
                : formState === "error"
                  ? isRu
                    ? "Не удалось отправить форму. Попробуйте ещё раз."
                    : "Failed to submit the form. Please try again."
                  : isRu
                    ? "Обычно отвечаем в течение 24 часов."
                    : "We usually reply within 24 hours."}
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="title-section">{isRu ? "Основатели" : "Founders"}</h2>
        <p className="mt-3 text-sm text-zinc-300">
          {isRu
            ? ru("Практикующие продюсер и технический директор в индустрии с 2017 года. Одинаково уверенно работают в концертных, broadcast и турнирных форматах.")
            : "Hands-on producer and technical director in the industry since 2017, with strong delivery across concert, broadcast, and tournament formats."}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              name: "Peter Babitsky",
              photo: "/founders/peter-babitsky.jpg",
              role: isRu ? "Co-Founder · Executive Producer" : "Co-Founder · Executive Producer",
              bio: isRu
                ? ru("В индустрии с 2017 года. Отвечает за продакшн-архитектуру, коммуникацию с клиентом и ритм проекта. Любит документальное кино, живую музыку и сложные площадки.")
                : "In the industry since 2017. Leads production architecture, client communication, and project rhythm. Passionate about documentary cinema, live music, and complex venues.",
            },
            {
              name: "Nikita Priimak",
              photo: "/founders/nikita-priimak.jpg",
              role: isRu ? "Co-Founder · Technical Director" : "Co-Founder · Technical Director",
              bio: isRu
                ? ru("В индустрии с 2017 года. Ведёт инженерную часть: маршрутизацию, контроль сигнала, резервирование и стабильную работу в эфире. Не представляет жизнь без технологий, музыки и live-режиссуры.")
                : "In the industry since 2017. Leads engineering delivery: routing, signal quality, redundancy, and live reliability. Cannot imagine life without technology, music, and live directing.",
            },
          ].map((f) => (
            <article key={f.name} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full border border-white/20 bg-zinc-900/70 p-1">
                  <Image src={f.photo} alt={f.name} width={80} height={80} className="h-full w-full rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="title-card text-zinc-100">{f.name}</h3>
                  <p className="text-sm text-zinc-300">{f.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">{f.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-300/30 bg-gradient-to-r from-indigo-400/15 to-violet-400/15 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-100/90">
            {isRu ? "Crew Solutions" : "Crew Solutions"}
          </p>
          <h2 className="title-section-inverse mt-3">
            {isRu ? "Команда под любой формат" : "Crew support for any production format"}
          </h2>
          <p className="reading-copy mt-3 max-w-3xl text-sm text-zinc-100/90 md:text-base">
            {isRu
              ? ru("На отдельной странице Crew Solutions собрали роли, форматы подключения и наш подход к работе в составе международных продакшен-команд.")
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

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-4 py-10 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>Head Production 2026 · Georgia · Tbilisi</div>
          <Link href="/privacy" className="transition-colors hover:text-white">
            {isRu ? "Политика конфиденциальности" : "Privacy Policy"}
          </Link>
        </div>
      </footer>
      </div>
    </main>
  );
}
