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
          scale: "Три города, арены и площадки на многотысячную аудиторию.",
          role: "Полноценный видеопродакшн-партнёр.",
          responsibilities: [
            "Многокамерное производство",
            "4K-пайплайн съёмки и записи",
            "Live-switching и маршрутизация сигнала",
            "Координация видео и аэросъёмки на площадке",
          ],
          result:
            "Стабильная многокамерная выдача и одинаковый визуальный стандарт во всех локациях.",
          coverSrc: "/cases/zemfira-cover.jpg",
        },
        {
          title: "Esports Tournaments (NDA)",
          locationYear: "International · 2024–2025",
          format: "Студийные и аренные турниры",
          scale: "Высоконагруженные эфиры с игровыми фидами и параллельными выходами.",
          role: "Broadcast production и техническая координация.",
          responsibilities: [
            "Многокамерный live-продакшн",
            "Интеграция игровых фидов в эфирный контур",
            "Live-графика и оверлеи",
            "Мониторинг сигнала и системы резервирования",
          ],
          result:
            "Стабильные турнирные трансляции под высокой нагрузкой и жёстким таймингом матчей.",
          note: "Selected projects under NDA. Full details available upon request.",
          coverSrc: "/cases/esports-cover.jpg",
        },
        {
          title: "Deep Purple — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "Международный концертный продакшн",
          scale: "Крупная площадка с плотным шоу-флоу и высокими требованиями к надёжности.",
          role: "Многокамерный live-продакшн.",
          responsibilities: [
            "Видеокоординация broadcast-уровня",
            "Многокамерная режиссура",
            "Маршрутизация и мониторинг сигнала",
            "Технический супервизинг на площадке",
          ],
          result: "Надёжная прямая видеовыдача для международного артиста без сбоев в эфирной цепочке.",
        },
        {
          title: "Poshaya Molly — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "Концертный live-продакшн",
          scale: "Высокоэнергичное шоу с короткими окнами на подготовку.",
          role: "Видеопродакшн и live-покрытие.",
          responsibilities: [
            "Двухкамерный live-продакшн",
            "Маршрутизация сигнала",
            "Запись и передача контента",
          ],
          result: "Стабильное двухкамерное покрытие и оперативная передача материалов после события.",
        },
      ]
    : [
        {
          title: "ZEMFIRA — Concert Series",
          locationYear: "Tbilisi · Yerevan · Batumi · 2024–2025",
          format: "Large-scale live concerts",
          scale: "Three cities, arena and large-venue delivery for multi-thousand audiences.",
          role: "Full video production partner.",
          responsibilities: [
            "Multi-camera concert production",
            "4K capture-to-record workflow",
            "Live switching and signal routing",
            "On-site video and aerial coordination",
          ],
          result:
            "Stable multi-camera delivery with consistent visual quality across all locations.",
          coverSrc: "/cases/zemfira-cover.jpg",
        },
        {
          title: "Esports Tournaments (NDA)",
          locationYear: "International · 2024–2025",
          format: "Studio and arena tournaments",
          scale: "High-load live broadcast environments with game feeds and parallel output chains.",
          role: "Broadcast production and technical coordination.",
          responsibilities: [
            "Multi-camera live production",
            "Integration of game feeds into broadcast workflow",
            "Live graphics and overlays",
            "Signal monitoring and redundancy systems",
          ],
          result:
            "Technically stable tournament broadcasts under high pressure and strict match timing.",
          note: "Selected projects under NDA. Full details available upon request.",
          coverSrc: "/cases/esports-cover.jpg",
        },
        {
          title: "Deep Purple — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "International concert production",
          scale: "Large venue setup with strict reliability requirements and tightly scheduled show flow.",
          role: "Multi-camera live production.",
          responsibilities: [
            "Broadcast-grade video coordination",
            "Multi-camera directing",
            "Signal routing and monitoring",
            "On-site technical supervision",
          ],
          result: "Reliable live production with clean and stable broadcast output for an international touring artist.",
        },
        {
          title: "Poshaya Molly — Live in Tbilisi",
          locationYear: "Tbilisi · 2025",
          format: "Live concert production",
          scale: "High-energy concert environment with short setup windows.",
          role: "Video production and live coverage.",
          responsibilities: [
            "Two-camera live production",
            "Signal routing",
            "Recording and content delivery",
          ],
          result: "Efficient two-camera coverage with stable recording and fast post-event handover.",
        },
      ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Кейсы" : "Projects / Work"}</p>
          <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-7xl">
            {isRu ? "Избранные проекты" : "Selected case studies"}
          </h1>
          <p className="reading-copy-muted mt-5 text-sm md:text-base">
            {isRu
              ? ru("Ключевые кейсы с высоким уровнем ответственности, сложной координацией и предсказуемым техническим результатом.")
              : "A focused selection of high-responsibility projects with complex coordination and reliable technical delivery."}
          </p>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((item) => (
              <article key={item.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                {item.coverSrc ? (
                  <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/30">
                    <Image src={item.coverSrc} alt={`${item.title} cover`} fill className="object-cover object-center" />
                  </div>
                ) : null}

                <h2 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">{item.title}</h2>
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
