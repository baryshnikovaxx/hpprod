"use client";

import Image from "next/image";
import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

type CaseStudy = {
  id: string;
  title: string;
  locationYear: string;
  format: string;
  scale: string;
  role: string;
  responsibilities: string[];
  result: string;
  coverSrc?: string;
  mediaFit?: "cover" | "contain";
  visualLabel?: string;
  note?: string;
};

export default function WorkPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  const cases: CaseStudy[] = isRu
    ? [
        {
          id: "eapt",
          title: "EAPT",
          locationYear: "World Poker Tour · 2 страны",
          format: "Покерная broadcast-серия",
          scale: "Top 3 World Poker Tour и 3 года партнёрства.",
          role: "Broadcast production в коллаборации с POVProduction.",
          responsibilities: ["Многодневная трансляция", "Игровая зона и столы", "Графика и эфирный workflow", "2 страны"],
          result: "Долгосрочная broadcast-система для международной покерной серии.",
          coverSrc: "/clients/eapt.png",
          mediaFit: "contain",
        },
        {
          id: "adam-port",
          title: "Adam Port",
          locationYear: "6500 гостей · 12 часов",
          format: "Музыкальное live-событие",
          scale: "6500 зрителей и 12-часовая трансляция.",
          role: "Live broadcast production.",
          responsibilities: ["PTZ workflow", "Длительная эфирная смена", "Мониторинг сигнала"],
          result: "Стабильный 12-часовой live broadcast для большой площадки.",
          visualLabel: "PTZ Workflow",
        },
        {
          id: "godovaya-petr-osipov",
          title: "GODOVAYA Petr Osipov",
          locationYear: "2 года · 550 студентов",
          format: "Образовательное событие",
          scale: "550 студентов и 360 м² total blackout.",
          role: "Видео и технический продакшн.",
          responsibilities: ["Blackout-пространство", "Съёмка и вывод", "Техническая координация"],
          result: "Предсказуемый production setup для повторяющегося образовательного формата.",
          visualLabel: "Total Blackout",
        },
        {
          id: "g-gate",
          title: "G Gate",
          locationYear: "7000 участников · 150 компаний",
          format: "Форум и live-шоу",
          scale: "7000 участников, 150 компаний, Ivan Dorn, Big Baby Tape, T-Fest.",
          role: "Live event production.",
          responsibilities: ["Сцена и эфирная логика", "Контент для большой аудитории", "Артистические блоки"],
          result: "Единый production workflow для деловой и концертной частей события.",
          coverSrc: "/clients/ggate.png",
          mediaFit: "contain",
        },
        {
          id: "gama",
          title: "GAMA",
          locationYear: "Батуми · Тбилиси",
          format: "Full-cycle production",
          scale: "Два города и полный цикл подготовки.",
          role: "Продакшн под ключ.",
          responsibilities: ["Планирование", "Съёмка", "Трансляция", "Финальная выдача"],
          result: "Полный production pipeline для проектов в Батуми и Тбилиси.",
          coverSrc: "/clients/gama.png",
          mediaFit: "contain",
        },
        {
          id: "ifc",
          title: "IFC",
          locationYear: "Tbilisi Sport Palace · Sold out",
          format: "Крупная аренная трансляция",
          scale: "Sold out Tbilisi Sport Palace.",
          role: "Full-cycle production.",
          responsibilities: ["Аренная инфраструктура", "Многокамерная выдача", "Эфирная координация"],
          result: "Полный production setup для sold-out события во Дворце спорта.",
          visualLabel: "Arena Production",
        },
        {
          id: "sepultura",
          title: "Sepultura",
          locationYear: "1000 зрителей",
          format: "Концертный live-продакшн",
          scale: "1000 зрителей на площадке.",
          role: "Видео production.",
          responsibilities: ["Live coverage", "Сценическая динамика", "Запись материала"],
          result: "Надёжное концертное покрытие для международного артиста.",
          coverSrc: "/clients/sepultura.png",
          mediaFit: "contain",
        },
        {
          id: "poshlaya-molly",
          title: "Poshlaya Molly",
          locationYear: "3000 зрителей",
          format: "Концертный live-продакшн",
          scale: "3000 зрителей, real-time visuals и большой LED-экран.",
          role: "Видеопродакшн и live-покрытие.",
          responsibilities: ["Real-time visuals", "Massive LED wall", "Live video workflow"],
          result: "Энергичное визуальное шоу с синхронной работой экрана и live-видео.",
          coverSrc: "/clients/poshlaya-molly.png",
          mediaFit: "contain",
        },
        {
          id: "zemfira",
          title: "ZEMFIRA",
          locationYear: "Тбилиси · Батуми · Ереван",
          format: "Серия sold-out концертов",
          scale: "Все концерты sold out, до 40 000 человек за раз.",
          role: "Full-cycle video production и годовое партнёрство.",
          responsibilities: ["Многокамерное производство", "Видео и аэросъёмка", "Три города"],
          result: "Единый визуальный стандарт и стабильная выдача на всей серии концертов.",
          coverSrc: "/cases/zemfira-cover.jpg",
        },
        {
          id: "1winmediapoker",
          title: "1winmediapoker",
          locationYear: "Caster zone",
          format: "Poker media broadcast",
          scale: "Полная разработка broadcast-зоны для комментаторов.",
          role: "Broadcast development.",
          responsibilities: ["Caster zone", "Эфирный workflow", "Техническая логика"],
          result: "Готовая broadcast-среда для покерного медиапроекта.",
          coverSrc: "/cases/esports-cover.jpg",
        },
      ]
    : [
        {
          id: "eapt",
          title: "EAPT",
          locationYear: "World Poker Tour · 2 countries",
          format: "Poker broadcast series",
          scale: "Top 3 World Poker Tour and a 3-year partnership.",
          role: "Broadcast production developed with POVProduction.",
          responsibilities: ["Multi-day broadcast", "Table and game zone workflow", "Graphics and live pipeline", "2 countries"],
          result: "A long-term broadcast system for an international poker series.",
          coverSrc: "/clients/eapt.png",
          mediaFit: "contain",
        },
        {
          id: "adam-port",
          title: "Adam Port",
          locationYear: "6500 guests · 12 hours",
          format: "Music live event",
          scale: "6500 attendees and a 12-hour broadcast.",
          role: "Live broadcast production.",
          responsibilities: ["PTZ workflow", "Long-form live shift", "Signal monitoring"],
          result: "A stable 12-hour live broadcast for a large-scale venue.",
          visualLabel: "PTZ Workflow",
        },
        {
          id: "godovaya-petr-osipov",
          title: "GODOVAYA Petr Osipov",
          locationYear: "2 years · 550 students",
          format: "Educational event",
          scale: "550 students and 360 sq. m of total blackout.",
          role: "Video and technical production.",
          responsibilities: ["Blackout environment", "Capture and output", "Technical coordination"],
          result: "A predictable production setup for a recurring educational format.",
          visualLabel: "Total Blackout",
        },
        {
          id: "g-gate",
          title: "G Gate",
          locationYear: "7000 participants · 150 companies",
          format: "Forum and live show",
          scale: "7000 participants, 150 companies, Ivan Dorn, Big Baby Tape, T-Fest.",
          role: "Live event production.",
          responsibilities: ["Stage and broadcast logic", "Large-audience content", "Artist blocks"],
          result: "One production workflow for the business and concert parts of the event.",
          coverSrc: "/clients/ggate.png",
          mediaFit: "contain",
        },
        {
          id: "gama",
          title: "GAMA",
          locationYear: "Batumi · Tbilisi",
          format: "Full-cycle production",
          scale: "Two cities and full-cycle preparation.",
          role: "End-to-end production.",
          responsibilities: ["Planning", "Capture", "Broadcast", "Final delivery"],
          result: "A complete production pipeline for projects in Batumi and Tbilisi.",
          coverSrc: "/clients/gama.png",
          mediaFit: "contain",
        },
        {
          id: "ifc",
          title: "IFC",
          locationYear: "Tbilisi Sport Palace · Sold out",
          format: "Large arena broadcast",
          scale: "Sold-out Tbilisi Sport Palace.",
          role: "Full-cycle production.",
          responsibilities: ["Arena infrastructure", "Multi-camera output", "Live coordination"],
          result: "A full production setup for a sold-out Sport Palace event.",
          visualLabel: "Arena Production",
        },
        {
          id: "sepultura",
          title: "Sepultura",
          locationYear: "1000 attendees",
          format: "Concert live production",
          scale: "1000 attendees on site.",
          role: "Video production.",
          responsibilities: ["Live coverage", "Stage dynamics", "Recording"],
          result: "Reliable concert coverage for an international artist.",
          coverSrc: "/clients/sepultura.png",
          mediaFit: "contain",
        },
        {
          id: "poshlaya-molly",
          title: "Poshlaya Molly",
          locationYear: "3000 attendees",
          format: "Concert live production",
          scale: "3000 attendees, real-time visuals, and a massive LED wall.",
          role: "Video production and live coverage.",
          responsibilities: ["Real-time visuals", "Massive LED wall", "Live video workflow"],
          result: "A high-energy visual show with synchronized screen and live video output.",
          coverSrc: "/clients/poshlaya-molly.png",
          mediaFit: "contain",
        },
        {
          id: "zemfira",
          title: "ZEMFIRA",
          locationYear: "Tbilisi · Batumi · Yerevan",
          format: "Sold-out concert series",
          scale: "All shows sold out, up to 40,000 people at once.",
          role: "Full-cycle video production and year-long partnership.",
          responsibilities: ["Multi-camera production", "Video and aerial coverage", "Three cities"],
          result: "Consistent visual quality and stable output across the full concert series.",
          coverSrc: "/cases/zemfira-cover.jpg",
        },
        {
          id: "1winmediapoker",
          title: "1winmediapoker",
          locationYear: "Caster zone",
          format: "Poker media broadcast",
          scale: "Full broadcast development for the caster zone.",
          role: "Broadcast development.",
          responsibilities: ["Caster zone", "Live workflow", "Technical logic"],
          result: "A ready-to-run broadcast environment for a poker media project.",
          coverSrc: "/cases/esports-cover.jpg",
        },
      ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <h1 className="title-hero mt-3">
            {isRu ? "Кейсы" : "Case studies"}
          </h1>
          <p className="reading-copy-muted mt-5 text-sm md:text-base">
            {isRu
              ? ru("О масштабе, формате, зоне ответственности и результате. По запросу раскрываем проекты подробнее.")
              : "About scale, format, responsibility, and result. Full project details are available on request."}
          </p>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((item) => (
              <article id={item.id} key={item.id} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                {item.coverSrc ? (
                  <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/30">
                    <Image
                      src={item.coverSrc}
                      alt={`${item.title} cover`}
                      fill
                      className={item.mediaFit === "contain" ? "object-contain object-center p-8" : "object-cover object-center"}
                    />
                  </div>
                ) : item.visualLabel ? (
                  <div className="mb-6 flex aspect-[16/7] items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-indigo-400/15 via-zinc-900/70 to-violet-400/15 px-6 text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-indigo-200/80">{isRu ? "Кейс" : "Case"}</p>
                      <p className="mt-2 text-base font-semibold text-zinc-100">{item.visualLabel}</p>
                    </div>
                  </div>
                ) : null}

                <h2 className="title-card text-zinc-100">{item.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-400">{item.locationYear}</p>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{isRu ? "Формат" : "Format"}</p>
                    <p className="mt-2 text-sm text-zinc-200">{item.format}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{isRu ? "Масштаб" : "Scale"}</p>
                    <p className="mt-2 text-sm text-zinc-200">{item.scale}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/35 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{isRu ? "Наша роль" : "Our role"}</p>
                  <p className="mt-2 text-sm text-zinc-200">{item.role}</p>
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {isRu ? "Ключевые зоны ответственности" : "Key responsibilities"}
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-zinc-200">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-indigo-300/25 bg-indigo-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-indigo-200/90">{isRu ? "Результат" : "Result"}</p>
                  <p className="mt-2 text-sm text-zinc-100">{item.result}</p>
                </div>

                {item.note ? (
                  <p className="mt-4 text-xs text-zinc-400">{item.note}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-indigo-300/25 bg-gradient-to-r from-indigo-400/15 to-violet-400/15 p-6 md:p-8">
            <h2 className="title-section-inverse">
              {isRu ? "Обсудить проект" : "Discuss a Project"}
            </h2>
            <p className="reading-copy-muted mt-3 text-sm md:text-base">
              {isRu
                ? ru("Опишите задачу, и мы предложим рабочую продакшн-схему под ваш формат, площадку и тайминг.")
                : "Share your brief and we will propose a production setup aligned with your format, venue, and timeline."}
            </p>
            <a
              href="/#contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              {isRu ? "Связаться" : "Get in touch"}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
