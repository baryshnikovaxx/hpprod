"use client";

import Image from "next/image";
import { useState } from "react";
import SiteHeader from "./components/site-header";
import { useLanguage } from "./components/language-provider";
import { formatRuTypography } from "./lib/typography";

export default function Home() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const [showShowreelPopup, setShowShowreelPopup] = useState(false);
  const ru = (text: string) => formatRuTypography(text);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50 selection:bg-cyan-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
           }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[-100px] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <SiteHeader />

      <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:px-8">
          <div className="relative z-10 md:col-span-12">
            <p className="mb-3 text-sm text-zinc-300">
              {isRu
                ? ru("Тбилиси · Работаем по всему миру · Англоязычная команда")
                : "Based in Tbilisi · Working worldwide · English-speaking crew"}
            </p>

            <h1 className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
              {isRu
                ? ru("Продакшн мероприятий и трансляций без сбоев")
                : "High-end live event & broadcast production that feels effortless."}
            </h1>

            <p className="reading-copy mt-5">
              {isRu
                ? ru("Конференции, концерты, фестивали, киберспорт и крупные события. Полный цикл — от технического дизайна до финального сигнала. Масштабируемая многокамерная архитектура, производство в 4K и более 100 реализованных проектов.")
                : "Conferences, concerts & festivals, esports and large-scale events. Full-cycle delivery from technical design to final output. Scalable multi-camera architecture, 4K workflow, and 100+ events delivered."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:from-cyan-200 hover:to-violet-200"
              >
                {isRu ? "Обсудить проект" : "Discuss your event"}
              </a>
              <button
                type="button"
                onClick={() => setShowShowreelPopup(true)}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-200/50 hover:bg-white/10"
              >
                {isRu ? "Смотреть шоурил" : "Watch showreel"}
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "8", v: isRu ? "лет опыта" : "years experience" },
                { k: "100+", v: isRu ? "реализованных проектов" : "events delivered" },
                { k: "∞", v: isRu ? "масштабируемый сетап камер" : "scalable camera setup" },
                { k: "4K", v: isRu ? "производство" : "workflow" },
              ].map((item) => (
                <div
                  key={item.v}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="text-2xl font-semibold">{item.k}</div>
                  <div className="mt-1 text-xs text-zinc-300">{item.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { href: "/services", label: isRu ? "Услуги" : "Services" },
                { href: "/work", label: isRu ? "Кейсы" : "Case studies" },
                { href: "/crew-solutions", label: isRu ? "Команда на проект" : "Crew solutions" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 transition-colors hover:border-cyan-200/60 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                  {isRu ? "Live production map" : "Live production map"}
                </p>
                <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
                  {isRu ? "система активна" : "system active"}
                </span>
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                <svg viewBox="0 0 420 120" className="h-24 w-full">
                  <path d="M10 80 C 80 20, 150 20, 220 80" stroke="url(#lineA)" strokeWidth="2.5" fill="none" />
                  <path d="M110 100 C 170 30, 250 30, 320 100" stroke="url(#lineB)" strokeWidth="2.5" fill="none" />
                  <path d="M210 85 C 270 25, 340 25, 410 85" stroke="url(#lineC)" strokeWidth="2.5" fill="none" />
                  <circle cx="10" cy="80" r="5" fill="#22d3ee" className="animate-pulse" />
                  <circle cx="220" cy="80" r="5" fill="#a78bfa" className="animate-pulse" />
                  <circle cx="410" cy="85" r="5" fill="#22d3ee" className="animate-pulse" />
                  <defs>
                    <linearGradient id="lineA" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.65" />
                    </linearGradient>
                    <linearGradient id="lineB" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.65" />
                    </linearGradient>
                    <linearGradient id="lineC" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              href: "/services",
              t: isRu ? "Нужна полная услуга" : "Need full-cycle services",
              d: isRu ? "Выберите формат и состав работ" : "Select scope and delivery format",
            },
            {
              href: "/work",
              t: isRu ? "Хотите кейсы и примеры" : "Want real case studies",
              d: isRu ? "Посмотрите реализованные проекты" : "Review recently delivered projects",
            },
            {
              href: "/crew-solutions",
              t: isRu ? "Нужно усилить команду" : "Need extra crew support",
              d: isRu ? "Подключим роли под ваш проект" : "Add specialist roles to your production",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="accent-border rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-cyan-200/60"
            >
              <div className="text-sm font-semibold text-zinc-100">{item.t}</div>
              <div className="mt-1 text-xs text-zinc-300">{item.d}</div>
            </a>
          ))}
        </div>
      </section>

      {showShowreelPopup && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowShowreelPopup(false);
          }}
        >
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950 p-6">
            <div className="flex items-start justify-between gap-4">
              <p className="text-base font-semibold text-zinc-100 md:text-lg">
                {isRu
                  ? "Упс, шоурил готовится. Хотите посмотреть кейсы?"
                  : "Oops, showreel is cooking. Wanna see some case studies?"}
              </p>
              <button
                type="button"
                onClick={() => setShowShowreelPopup(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-zinc-300 transition-colors hover:text-white"
                aria-label="Close popup"
              >
                ×
              </button>
            </div>
            <a
              href="/work"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 underline decoration-zinc-500/60 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-200"
            >
              {isRu ? "Перейти к кейсам" : "Go to case studies"} <span>→</span>
            </a>
          </div>
        </div>
      )}

      {/* Selected Clients */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-10 sm:px-6 md:pb-16 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Клиенты" : "Selected clients"}</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
              {isRu
                ? "Нам доверяют проекты, где ошибка недопустима"
                : "Trusted for live shows where failure isn't an option."}
            </h2>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="relative">
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent" />
            <div className="flex w-[200%] animate-marquee-slow items-center gap-4 py-6">
              {[
                "NOVA STAGE",
                "ATLAS SUMMIT",
                "VERTEX ESPORTS",
                "LUMEN FEST",
                "ORBIT MEDIA",
                "PULSE CONFERENCE",
                "AURORA EVENTS",
                "NEXUS LIVE",
                "HORIZON FORUM",
                "SPECTRA GROUP",
              ]
                .concat([
                  "NOVA STAGE",
                  "ATLAS SUMMIT",
                  "VERTEX ESPORTS",
                  "LUMEN FEST",
                  "ORBIT MEDIA",
                  "PULSE CONFERENCE",
                  "AURORA EVENTS",
                  "NEXUS LIVE",
                  "HORIZON FORUM",
                  "SPECTRA GROUP",
                ])
                .map((name, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="mx-1.5 flex h-14 items-center rounded-2xl bg-white/[0.07] px-7 text-sm font-semibold tracking-[0.18em] text-zinc-100 md:h-16 md:text-base"
                  >
                    {name}
                  </div>
                ))}
            </div>
          </div>
        </div>

      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{isRu ? "Что делаем" : "What we do"}</h2>
            <p className="reading-copy mt-3 text-sm">
              {isRu
                ? ru("Head Production — команда по продакшну событий и прямых эфиров. Берём на себя техническую часть, чтобы вы занимались содержанием события, а аудитория получала стабильную и качественную трансляцию.")
                : "Head Production is a live event and broadcast production company. We handle the technical complexity so your team can focus on the event itself — and your audience gets a smooth, high-quality live experience."}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <p className="reading-copy text-sm text-zinc-200">
                {isRu
                  ? ru("От планирования площадки и маршрутизации сигнала до live-режиссуры, графики и мультиплатформенного стриминга — реализуем проект под ключ с прозрачной коммуникацией и предсказуемым результатом.")
                  : "From venue planning and signal routing to live directing, graphics, and multi-platform streaming — we deliver end-to-end production with clear communication and predictable results."}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  isRu ? "Пре-продакшн и технический дизайн" : "Pre-production & technical design",
                  isRu ? "Мультикамерная режиссура" : "Multi-camera live directing",
                  isRu ? "Broadcast-графика и интеграция партнёров" : "Broadcast graphics & sponsor integration",
                  isRu ? "Стриминг + запись + итоговые материалы" : "Streaming + recording + deliverables",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{isRu ? "Услуги" : "Services"}</h2>
            <p className="reading-copy-muted mt-2 text-sm">
              {isRu
                ? ru("Полный цикл live-продакшна под вашу площадку и формат.")
                : "Full-cycle live production, scaled to your venue and format."}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: isRu ? "Broadcast-продакшн" : "Live broadcast production",
              desc: isRu
                ? "Мультикамерный сетап, режиссура, коммутация и мониторинг — полный цикл прямого эфира."
                : "Multi-camera setup, directing, switching, monitoring — the full live control room workflow.",
            },
            {
              title: isRu ? "Конференции и гибридные события" : "Conferences & hybrid events",
              desc: isRu
                ? "Презентации, удалённые спикеры, каналы перевода, вовлечение аудитории и чистая выдача."
                : "Presentations, remote speakers, translation channels, audience engagement, clean delivery.",
            },
            {
              title: isRu ? "Концерты, фестивали, киберспорт" : "Concerts, festivals, esports",
              desc: isRu
                ? "Динамичное live-покрытие для работы под давлением, в сложной среде и с большой аудиторией."
                : "Fast-paced live coverage built for pressure, dynamic environments, and large audiences.",
            },
            {
              title: isRu ? "Broadcast-графика" : "Broadcast graphics",
              desc: isRu
                ? "Lower thirds, оверлеи, табло, интеграции партнёров и фирменные визуальные пакеты."
                : "Lower thirds, overlays, scoreboards, sponsor placements, branded visual packages.",
            },
            {
              title: isRu ? "Стриминг на любые платформы" : "Streaming to any platform",
              desc: isRu
                ? "YouTube, Twitch и корпоративные платформы — процессы RTMP/SRT и резервирование при необходимости."
                : "YouTube, Twitch, corporate platforms — RTMP/SRT workflows, redundancy where needed.",
            },
            {
              title: isRu ? "Запись и пост-материалы" : "Recording & post-deliverables",
              desc: isRu
                ? "Чистые записи, хайлайты и структурированная передача материалов вашей команде и партнёрам."
                : "Clean recordings, highlight assets, and organized delivery for your team and partners.",
            },
          ].map((s) => (
            <div key={s.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{isRu ? "Где мы работаем" : "Where we work"}</h2>
        <p className="reading-copy-muted mt-2 text-sm">
          {isRu
            ? ru("Одинаково высокий стандарт для разных форматов. Мы адаптируем рабочий процесс под событие, а не наоборот.")
            : "Same standards, different formats. We adapt the workflow to the event, not the other way around."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Esports",
              points: isRu
                ? ["Турнирная режиссура в реальном времени", "Табло и оверлей-графика", "Настройка комментаторской студии"]
                : ["Tournament-ready live switching", "Live score/overlay graphics", "Commentator studio setups"],
            },
            {
              title: isRu ? "Конференции" : "Conferences",
              points: isRu
                ? ["Потоки спикеров и слайдов", "Гибрид + удаленные участники", "Перевод и чистый звук"]
                : ["Speaker & slide feeds", "Hybrid + remote guests", "Translation & clean audio"],
            },
            {
              title: isRu ? "Концерты и фестивали" : "Concerts & Festivals",
              points: isRu
                ? ["Координация сцены", "Мультикамерное live-покрытие", "LED и onsite-интеграция"]
                : ["Stage coordination", "Multi-camera live coverage", "LED & on-site integration"],
            },
          ].map((c) => (
            <div key={c.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Кейсы" : "Selected projects"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {isRu ? "Недавние проекты" : "A few recent productions."}
            </h2>
            <p className="reading-copy-muted mt-2 text-sm">
              {isRu
                ? ru("Коротко о недавних реализациях. По запросу раскрываем каждый проект в полноценный кейс с фото, сетапом, списком техники и результатами.")
                : "Highlights from recent productions. We can expand these into full case studies with photos, setup details, gear lists, and outcomes."}
            </p>
          </div>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:mt-0"
          >
            {isRu ? "Получить смету" : "Get a quote"}
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "International Business Conference (Hybrid)",
              meta: "Europe · 2025",
              tags: ["Hybrid", "Multi-cam", "Translation", "Slides"],
              desc: "Multi-camera live production with speaker feeds, slide routing, and translation channels. Stable streaming + clean recordings.",
            },
            {
              title: "Esports Tournament Broadcast",
              meta: "Dubai · 2024",
              tags: ["Esports", "Overlays", "Commentary", "Fast switching"],
              desc: "Tournament-ready switching, live score/overlay package, commentator studio workflow, platform streaming + highlight outputs.",
            },
            {
              title: "Concert / Festival Live Coverage",
              meta: "Turkey · 2024",
              tags: ["Live show", "Stage", "LED", "4K"],
              desc: "High-pressure live environment with stage coordination and multi-camera directing. Optimized routing and on-site comms.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="accent-border relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-zinc-400">{p.meta}</p>
                  <div className="rounded-full border border-white/10 bg-zinc-950/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    4K / scalable multicam
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-white"
                >
                  {isRu ? "Подробнее" : "View details"} <span className="text-zinc-400">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{isRu ? "Основатели" : "Founders"}</h2>
            <p className="mt-2 text-sm text-zinc-300">
              {isRu
                ? ru("Два практикующих специалиста: продакшн и инженерия, вместе на каждом проекте.")
                : "Two hands-on operators: production + engineering, working side by side on every show."}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              name: "Peter Babitsky",
              photo: "/founders/peter-babitsky.jpg",
              role: "Co-Founder · Executive Producer",
              bio: isRu
                ? ru("Планирование продакшна, шоу-флоу, координация площадки и коммуникация с клиентом. Международные проекты в разных форматах.")
                : "Production planning, show flow, venue coordination, and client communication. International delivery across formats.",
            },
            {
              name: "Nikita Priimak",
              photo: "/founders/nikita-priimak.jpg",
              role: "Co-Founder · Technical Director",
              bio: isRu
                ? ru("Broadcast-инжиниринг: маршрутизация, камера-пайплайн, звук, стриминг, резервирование и техническое руководство на площадке.")
                : "Broadcast engineering: routing, camera workflows, audio, streaming, redundancy, and on-site technical leadership.",
            },
          ].map((f, idx) => (
            <div key={idx} className="accent-border rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex flex-col items-center text-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-zinc-900/70 p-1 ring-1 ring-white/15">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    width={112}
                    height={112}
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 text-base font-semibold">{f.name}</div>
                <div className="mt-1 text-sm text-zinc-300">{f.role}</div>
              </div>
              <p className="mt-4 text-center text-sm leading-relaxed text-zinc-300">{f.bio}</p>
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 underline decoration-zinc-500/60 underline-offset-4 transition-colors hover:bg-gradient-to-r hover:from-cyan-200 hover:to-violet-200 hover:bg-clip-text hover:text-transparent hover:decoration-cyan-200/80"
                >
                  {isRu ? "Посмотреть CV" : "Download CV"}{" "}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{isRu ? "Как работаем" : "How it works"}</h2>
        <p className="reading-copy-muted mt-2 text-sm">
          {isRu
            ? ru("Прозрачные этапы, предсказуемая реализация и без сюрпризов в день события.")
            : "Clear steps, predictable delivery, and no surprises on show day."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            {
              n: "01",
              t: isRu ? "Бриф" : "Brief",
              d: isRu ? "Формат, площадка, дата, платформы, требования." : "Format, venue, date, platforms, requirements.",
            },
            {
              n: "02",
              t: isRu ? "Дизайн" : "Design",
              d: isRu
                ? "Технический план: камеры, звук, графика, стриминг."
                : "Technical plan: cameras, audio, graphics, streaming.",
            },
            {
              n: "03",
              t: isRu ? "Сетап" : "Setup",
              d: isRu ? "Монтаж на площадке, маршрутизация, тесты, репетиции." : "On-site build, routing, tests, rehearsals.",
            },
            {
              n: "04",
              t: "Live",
              d: isRu ? "Режиссура, мониторинг, резервы, связь." : "Directing, monitoring, backups, comms.",
            },
            {
              n: "05",
              t: isRu ? "Передача" : "Deliver",
              d: isRu ? "Записи, хайлайты, материалы, передача." : "Recordings, highlights, assets, handover.",
            },
          ].map((p) => (
            <div key={p.n} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-zinc-400">{p.n}</div>
              <div className="mt-2 text-sm font-semibold">{p.t}</div>
              <div className="mt-2 text-sm text-zinc-300">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{isRu ? "Обсудим проект" : "Let’s talk"}</h2>
              <p className="reading-copy-muted mt-2 text-sm">
                {isRu
                  ? ru("Расскажите о задаче — предложим сетап, таймлайн и следующий шаг.")
                  : "Tell us about the event — we’ll suggest the setup, timeline, and next steps."}
              </p>

              <div className="mt-6 space-y-2 text-sm text-zinc-300">
                <div>
                  <span className="text-zinc-400">Email:</span> hello@headprod.com
                </div>
                <div>
                  <span className="text-zinc-400">Telegram:</span> @hp_prod
                </div>
                <div>
                  <span className="text-zinc-400">{isRu ? "Базируемся:" : "Based in:"}</span>{" "}
                  {isRu ? "Тбилиси · Работаем по всему миру" : "Tbilisi · Worldwide production"}
                </div>
              </div>
            </div>

            <form className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">Name</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-600 focus:border-white/20"
                    placeholder={isRu ? "Ваше имя" : "Your name"}
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">Company</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder={isRu ? "Компания или бренд" : "Company / brand"}
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Дата события" : "Event date"}</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder={isRu ? "ДД/ММ/ГГГГ" : "DD/MM/YYYY"}
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Предпочтительный контакт" : "Preferred contact"}</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder={isRu ? "WhatsApp, Telegram или Email + ваш контакт" : "WhatsApp / Telegram / Email + your handle"}
                  />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Ориентировочный бюджет" : "Estimated budget"}</div>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-white/20">
                      <option value="">{isRu ? "Выберите диапазон" : "Select a range"}</option>
                      <option>{isRu ? "До $2k" : "Under $2k"}</option>
                      <option>{isRu ? "От $2k до $5k" : "$2k-$5k"}</option>
                      <option>{isRu ? "От $5k до $10k" : "$5k-$10k"}</option>
                      <option>{isRu ? "От $10k до $25k" : "$10k-$25k"}</option>
                      <option>{isRu ? "От $25k" : "$25k+"}</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-400">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Сообщение" : "Message"}</div>
                  <textarea
                    className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder={
                      isRu
                        ? "Формат, платформы, площадка, количество спикеров, любые важные детали..."
                        : "Format, platforms, venue, number of speakers, anything important…"
                    }
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:from-cyan-200 hover:to-violet-200"
                >
                  {isRu ? "Отправить заявку" : "Send request"}
                </button>
                <p className="text-xs text-zinc-400">
                  {isRu ? "Обычно отвечаем в течение 24 часов." : "We usually reply within 24 hours."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-4 py-10 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} Head Production</div>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-white" href="/services">
              {isRu ? "Услуги" : "Services"}
            </a>
            <a className="transition-colors hover:text-white" href="/work">
              {isRu ? "Кейсы" : "Work"}
            </a>
            <a className="transition-colors hover:text-white" href="/about">
              {isRu ? "О нас" : "About"}
            </a>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}