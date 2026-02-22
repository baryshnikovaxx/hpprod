"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import SiteHeader from "./components/site-header";
import { useLanguage } from "./components/language-provider";
import { formatRuTypography } from "./lib/typography";

export default function Home() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const [showShowreelPopup, setShowShowreelPopup] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ru = (text: string) => formatRuTypography(text);
  const featuredCases = isRu
    ? [
        {
          id: "zemfira-concert-series",
          title: "ZEMFIRA — Concert Series",
          meta: "Тбилиси · Ереван · Батуми · 2024–2025",
          tags: ["Concert", "Multi-camera", "4K", "Aerial"],
          desc: "Многокамерный концертный продакшн в трёх городах с единым качеством выдачи.",
        },
        {
          id: "esports-tournaments-nda",
          title: "Esports Tournaments (NDA)",
          meta: "International · 2024–2025",
          tags: ["Esports", "Live graphics", "Streaming", "Redundancy"],
          desc: "Стабильные турнирные трансляции под высокой нагрузкой и жёстким матчевым таймингом.",
        },
        {
          id: "deep-purple-live-tbilisi",
          title: "Deep Purple — Live in Tbilisi",
          meta: "Tbilisi · 2025",
          tags: ["Concert", "Broadcast", "Signal control", "On-site"],
          desc: "Надёжная прямая видеовыдача для международного артиста без сбоев в эфирной цепочке.",
        },
      ]
    : [
        {
          id: "zemfira-concert-series",
          title: "ZEMFIRA — Concert Series",
          meta: "Tbilisi · Yerevan · Batumi · 2024–2025",
          tags: ["Concert", "Multi-camera", "4K", "Aerial"],
          desc: "Multi-camera concert production across three cities with consistent output quality.",
        },
        {
          id: "esports-tournaments-nda",
          title: "Esports Tournaments (NDA)",
          meta: "International · 2024–2025",
          tags: ["Esports", "Live graphics", "Streaming", "Redundancy"],
          desc: "Stable tournament broadcasts under high pressure and strict match timing.",
        },
        {
          id: "deep-purple-live-tbilisi",
          title: "Deep Purple — Live in Tbilisi",
          meta: "Tbilisi · 2025",
          tags: ["Concert", "Broadcast", "Signal control", "On-site"],
          desc: "Reliable live output for an international touring artist.",
        },
      ];

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "home",
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
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50 selection:bg-indigo-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
           }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />
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
            {!isRu ? <p className="mb-3 text-sm text-zinc-300">Based in Tbilisi · Working worldwide · English-speaking crew</p> : null}

            <h1 className="title-hero">
              {isRu
                ? ru("Продакшн мероприятий и трансляций без сбоев")
                : "High-end live event & broadcast production that feels effortless."}
            </h1>

            <p className="reading-copy mt-5">
              {isRu
                ? ru("Конференции, концерты, фестивали, киберспорт, спортивные события и любые другие ивенты. Полный цикл — от технического дизайна до идеального эфира. Масштабируемая многокамерная архитектура, производство в 4K и более 100 реализованных проектов.")
                : "Conferences, concerts & festivals, esports and large-scale events. Full-cycle delivery from technical design to final output. Scalable multi-camera architecture, 4K workflow, and 100+ events delivered."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white transition-colors hover:from-indigo-300 hover:to-violet-300"
              >
                {isRu ? "Обсудить проект" : "Discuss your event"}
              </a>
              <button
                type="button"
                onClick={() => setShowShowreelPopup(true)}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-indigo-300/50 hover:bg-white/10"
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

          </div>

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
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 underline decoration-zinc-500/60 underline-offset-4 transition-colors hover:text-indigo-200 hover:decoration-indigo-200"
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
            <h2 className="title-section mt-3">
              {isRu
                ? "Нам доверяют проекты, где ошибка недопустима"
                : "Trusted for live shows where failure isn't an option."}
            </h2>
              </div>
            </div>

        <div className="mt-8 overflow-hidden">
          <div className="relative">
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200/10 to-transparent" />
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
            <h2 className="title-section">{isRu ? "Что делаем" : "What we do"}</h2>
            <p className="reading-copy mt-3 text-sm">
              {isRu
                ? ru("Head Production — команда видеопродакшена и трансляций. Берём на себя техническую часть, чтобы вы занимались содержанием события, а аудитория получала стабильную и качественную трансляцию бесшовно и спокойно.")
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
            <h2 className="title-section">{isRu ? "Услуги" : "Services"}</h2>
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
                ? "Оверлеи, табло, интеграции партнёров и фирменные визуальные пакеты — вовремя и чётко."
                : "Lower thirds, overlays, scoreboards, sponsor placements, branded visual packages.",
            },
            {
              title: isRu ? "Стриминг на любые платформы" : "Streaming to any platform",
              desc: isRu
                ? "YouTube, Twitch и любые корпоративные платформы — резервирование при необходимости."
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
              <h3 className="title-card">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="accent-border rounded-3xl border border-indigo-300/25 bg-gradient-to-r from-indigo-400/15 to-violet-400/15 p-6 md:p-10">
          <p className="title-section text-white">
            {isRu
              ? ru("Одинаково высокий стандарт для разных форматов. Мы адаптируем рабочий процесс под событие, а не наоборот.")
              : "Same standards, different formats. We adapt the workflow to the event, not the other way around."}
          </p>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Кейсы" : "Selected projects"}</p>
            <h2 className="title-section mt-3">
              {isRu ? "Недавние проекты" : "A few recent productions."}
            </h2>
            <p className="reading-copy-muted mt-2 text-sm">
              {isRu
                ? ru("Коротко о недавних реализациях. По запросу раскрываем каждый проект в полноценный кейс с фото, сетапом, списком техники и результатами.")
                : "Highlights from recent productions. We can expand these into full case studies with photos, setup details, gear lists, and outcomes."}
            </p>
          </div>
          <a
            href="/work"
            className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:mt-0"
          >
            {isRu ? "Смотреть все кейсы" : "View all case studies"}
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredCases.map((p) => (
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

                <h3 className="title-card mt-4">{p.title}</h3>
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

                <a
                  href={`/work#${p.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-white"
                >
                  {isRu ? "Подробнее" : "View details"} <span className="text-zinc-400">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="title-section">{isRu ? "Основатели" : "Founders"}</h2>
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
                  className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 underline decoration-zinc-500/60 underline-offset-4 transition-colors hover:bg-gradient-to-r hover:from-indigo-200 hover:to-violet-200 hover:bg-clip-text hover:text-transparent hover:decoration-indigo-200/80"
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
        <h2 className="title-section">{isRu ? "Как работаем" : "How it works"}</h2>
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
              <h2 className="title-section">{isRu ? "Обсудим проект" : "Let's talk"}</h2>
              <p className="reading-copy-muted mt-2 text-sm">
                {isRu
                  ? ru("Расскажите о задаче — предложим сетап, таймлайн и следующий шаг.")
                  : "Tell us about the event — we’ll suggest the setup, timeline, and next steps."}
              </p>

              <div className="mt-6 space-y-2 text-sm text-zinc-300">
                <div>
                  <span className="text-zinc-400">Email:</span> hello@headprod.live
                </div>
                <div>
                  <span className="text-zinc-400">Telegram:</span> @Hipete_HP
                </div>
                <div>
                  {isRu ? "Тбилиси, Грузия" : "Tbilisi, Georgia"}
                </div>
              </div>
            </div>

            <form onSubmit={submitContactForm} className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Имя" : "Name"}</div>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder={isRu ? "Ваше имя" : "Your name"}
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Предпочтительный контакт" : "Preferred contact"}</div>
                  <input
                    name="contact"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder={isRu ? "WhatsApp, Telegram или Email + ваш контакт" : "WhatsApp / Telegram / Email + your handle"}
                  />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Сообщение" : "Message"}</div>
                  <textarea
                    name="message"
                    required
                    className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder={
                      isRu
                        ? "Формат, платформы, площадка, количество спикеров, любые важные детали..."
                        : "Format, platforms, venue, number of speakers, anything important…"
                    }
                  />
                </label>
                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
                <label className="flex items-start gap-2 sm:col-span-2">
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
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white transition-colors hover:from-indigo-300 hover:to-violet-300 disabled:cursor-not-allowed disabled:opacity-70"
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