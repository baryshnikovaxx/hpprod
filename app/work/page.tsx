"use client";

import Image from "next/image";
import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

type CaseStudy = {
  title: string;
  locationYear: string;
  format: string;
  scale: string;
  role: string;
  responsibilities: string[];
  result: string;
  coverHint: string;
  coverSrc?: string;
  note?: string;
};

export default function WorkPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  const cases: CaseStudy[] = isRu
    ? [
        {
          title: "ZEMFIRA — Concert Series",
          locationYear: "Тбилиси · Ереван · Батуми · 2024–2025",
          format: "Крупномасштабные концертные шоу",
          scale: "Площадки на многотысячную аудиторию",
          role: "Полноценный видеопродакшн-партнёр.",
          responsibilities: [
            "Многокамерное производство (до 16 камер)",
            "4K workflow",
            "Live switching и маршрутизация сигнала",
            "Полная координация видео на площадке",
            "Аэросъёмка (drone production)",
            "Запись и пост-материалы",
          ],
          result:
            "Стабильный и качественный многокамерный концертный продакшн в нескольких международных локациях.",
          coverHint: "Обложка кейса ZEMFIRA (добавить фото)",
          coverSrc: "/cases/zemfira-cover.jpg",
        },
        {
          title: "Esports Tournaments (NDA)",
          locationYear: "International · 2024–2025",
          format: "Студийные и аренные турниры",
          scale:
            "Высоконагруженные live broadcast-среды со сложными signal workflow. Детали доступны по запросу (NDA).",
          role: "Broadcast production и техническая координация.",
          responsibilities: [
            "Многокамерный live-продакшн",
            "Интеграция игровых фидов в broadcast workflow",
            "Live-графика и оверлеи",
            "Стриминг на несколько платформ",
            "Координация broadcast-инженеров и live-режиссёров",
            "Мониторинг сигнала и системы резервирования",
          ],
          result:
            "Технически стабильные турнирные трансляции в условиях высокой нагрузки и прямого эфира.",
          note: "Selected projects under NDA. Full details available upon request.",
          coverHint: "Обложка кейса Esports NDA (добавить фото)",
          coverSrc: "/cases/esports-cover.jpg",
        },
        {
          title: "Deep Purple — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "Международный концертный продакшн",
          scale: "Крупная концертная площадка с повышенными требованиями к стабильности сигнала.",
          role: "Многокамерный live-продакшн.",
          responsibilities: [
            "Видеокоординация broadcast-уровня",
            "Многокамерная режиссура",
            "Маршрутизация и мониторинг сигнала",
            "Технический супервизинг на площадке",
          ],
          result: "Надёжный live-продакшн для международного концертного тура.",
          coverHint: "Обложка кейса Deep Purple (добавить фото)",
        },
        {
          title: "Poshaya Molly — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "Концертный live-продакшн",
          scale: "Высокоэнергичная площадка с плотным таймингом и короткими окнами на подготовку.",
          role: "Видеопродакшн и live-покрытие.",
          responsibilities: [
            "Двухкамерный live-продакшн",
            "Маршрутизация сигнала",
            "Запись и передача контента",
          ],
          result: "Эффективное и стабильное live-покрытие в динамичной концертной среде.",
          coverHint: "Обложка кейса Poshaya Molly (добавить фото)",
        },
      ]
    : [
        {
          title: "ZEMFIRA — Concert Series",
          locationYear: "Tbilisi · Yerevan · Batumi · 2024–2025",
          format: "Large-scale live concerts",
          scale: "Multi-thousand audience venues.",
          role: "Full video production partner.",
          responsibilities: [
            "Multi-camera production (up to 16 cameras)",
            "4K workflow",
            "Live switching and signal routing",
            "Full video coordination on-site",
            "Aerial video (drone production)",
            "Recording and post-event materials",
          ],
          result:
            "Stable, high-quality multi-camera concert production across multiple international locations.",
          coverHint: "ZEMFIRA case cover (add image)",
          coverSrc: "/cases/zemfira-cover.jpg",
        },
        {
          title: "Esports Tournaments (NDA)",
          locationYear: "International · 2024–2025",
          format: "Studio and arena tournaments",
          scale:
            "High-load live broadcast environments with complex signal workflows. Details available upon request (NDA projects).",
          role: "Broadcast production and technical coordination.",
          responsibilities: [
            "Multi-camera live production",
            "Integration of game feeds into broadcast workflow",
            "Live graphics and overlays",
            "Streaming to multiple platforms",
            "Coordination of broadcast engineers and live directors",
            "Signal monitoring and redundancy systems",
          ],
          result:
            "Technically stable tournament broadcasts delivered under high-pressure live conditions.",
          note: "Selected projects under NDA. Full details available upon request.",
          coverHint: "Esports NDA case cover (add image)",
          coverSrc: "/cases/esports-cover.jpg",
        },
        {
          title: "Deep Purple — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "International concert production",
          scale: "Large venue delivery with strict live reliability requirements.",
          role: "Multi-camera live production.",
          responsibilities: [
            "Broadcast-grade video coordination",
            "Multi-camera directing",
            "Signal routing and monitoring",
            "On-site technical supervision",
          ],
          result: "Reliable live production for an international touring artist.",
          coverHint: "Deep Purple case cover (add image)",
        },
        {
          title: "Poshaya Molly — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "Live concert production",
          scale: "High-energy show environment with tight timing windows.",
          role: "Video production and live coverage.",
          responsibilities: [
            "Two-camera live production",
            "Signal routing",
            "Recording and content delivery",
          ],
          result: "Efficient and stable live coverage in a high-energy concert environment.",
          coverHint: "Poshaya Molly case cover (add image)",
        },
      ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Кейсы" : "Projects / Work"}</p>
          <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
            {isRu ? "Избранные проекты" : "Selected case studies"}
          </h1>
          <p className="reading-copy-muted mt-5 text-sm md:text-base">
            {isRu
              ? ru("Ключевые кейсы с высоким уровнем ответственности, сложной координацией и предсказуемым техническим результатом.")
              : "A focused selection of high-responsibility projects with complex coordination and reliable technical delivery."}
          </p>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {cases.map((item) => (
              <article key={item.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                {item.coverSrc ? (
                  <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/30">
                    <Image src={item.coverSrc} alt={`${item.title} cover`} fill className="object-cover object-center" />
                  </div>
                ) : (
                  <div className="mb-6 flex aspect-[16/7] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-zinc-900/40 px-4 text-center text-xs uppercase tracking-[0.16em] text-zinc-400 md:text-sm">
                    {item.coverHint}
                  </div>
                )}

                <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">{item.title}</h2>
                <p className="mt-2 text-sm text-zinc-400">{item.locationYear}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{isRu ? "Формат" : "Format"}</p>
                    <p className="mt-2 text-sm text-zinc-200">{item.format}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/35 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{isRu ? "Масштаб" : "Scale"}</p>
                    <p className="mt-2 text-sm text-zinc-200">{item.scale}</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/35 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{isRu ? "Наша роль" : "Our role"}</p>
                  <p className="mt-2 text-sm text-zinc-200">{item.role}</p>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                    {isRu ? "Ключевые зоны ответственности" : "Key responsibilities"}
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-200 md:grid-cols-2">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-200/90">{isRu ? "Результат" : "Result"}</p>
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
          <div className="rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-300/15 to-violet-300/15 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
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
