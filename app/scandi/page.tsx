"use client";

import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

export default function ScandiPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  const copy = isRu
    ? {
        eyebrow: "Scandi Beta ))",
        title: "Креативный продакшн в скандинавской эстетике ))",
        subtitle:
          ru("Временная альтернативная версия сайта: светлая палитра, много воздуха, акцент на типографику и чистую структуру."),
        ctaPrimary: "Обсудить проект",
        ctaSecondary: "Вернуться к основной версии",
        manifestoTitle: "Подход",
        manifesto:
          ru("Мы создаём визуально смелые, но инженерно точные трансляции для мероприятий, брендов и культурных форматов."),
        blocks: [
          {
            t: "Direction ))",
            d: ru("Арт-направление, режиссура и визуальная драматургия в единой концепции."),
          },
          {
            t: "Craft ))",
            d: ru("Свет, камера, графика и звук как цельная система, а не набор подрядчиков."),
          },
          {
            t: "Pace ))",
            d: ru("Темп эфира, ритм монтажа и динамика кадра под аудиторию и платформу."),
          },
        ],
        projectsTitle: "Избранные форматы",
        projects: [
          "Brand launch / immersive stage",
          "Hybrid summit / editorial broadcast",
          "Festival live narrative / multi-camera language",
        ],
      }
    : {
        eyebrow: "Scandi Beta ))",
        title: "Creative production in a Scandinavian mood ))",
        subtitle:
          "Temporary alternative website concept: light palette, generous whitespace, typography-first hierarchy, and clean storytelling.",
        ctaPrimary: "Start a project",
        ctaSecondary: "Back to main version",
        manifestoTitle: "Approach",
        manifesto:
          "We design visually bold and engineering-reliable broadcasts for events, brands, and culture-driven formats.",
        blocks: [
          { t: "Direction ))", d: "Art direction, show directing, and visual dramaturgy in one coherent concept." },
          { t: "Craft ))", d: "Light, camera, graphics, and sound as one system, not disconnected vendors." },
          { t: "Pace ))", d: "Live tempo, editing rhythm, and motion language tuned to audience and platform." },
        ],
        projectsTitle: "Selected formats",
        projects: [
          "Brand launch / immersive stage",
          "Hybrid summit / editorial broadcast",
          "Festival live narrative / multi-camera language",
        ],
      };

  return (
    <main className="min-h-screen bg-[#f6f6f3] text-[#161616]">
      <div className="pointer-events-none fixed right-[-54px] top-20 z-10 -rotate-90 rounded-full bg-[#ff4fd8] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_30px_rgba(255,79,216,0.35)]">
        LIVE SIGNAL ))
      </div>
      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 md:py-24">
        <div className="mb-10 flex items-center justify-between">
          <a href="/" className="text-sm font-medium tracking-[0.12em] text-[#6d6d6a] uppercase">
            Head Production
          </a>
          <a
            href="/"
            className="rounded-full border border-[#1e1e1d]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1e1e1d] transition hover:bg-[#1e1e1d] hover:text-white"
          >
            {copy.ctaSecondary}
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.22em] text-[#7b7b78]">{copy.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.02em] md:text-7xl">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#4b4b48] md:text-lg">{copy.subtitle}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="/#contact"
            className="rounded-full bg-[#161616] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            {copy.ctaPrimary}
          </a>
          <a
            href="/work"
            className="rounded-full border border-[#1e1e1d]/20 px-6 py-3 text-sm font-semibold text-[#1e1e1d] transition hover:bg-[#ecece8]"
          >
            {isRu ? "Посмотреть кейсы" : "View case studies"}
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] gap-5 px-6 pb-12 md:grid-cols-3">
        {copy.blocks.map((item) => (
          <article key={item.t} className="rounded-3xl border border-[#202020]/12 bg-white/70 p-6 backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6f6f6c]">{item.t}</h2>
            <p className="mt-3 text-base leading-8 text-[#2d2d2b]">{item.d}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-20">
        <div className="rounded-[28px] border border-[#1f1f1e]/15 bg-[#ecece8] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[#6f6f6c]">{copy.manifestoTitle}</p>
          <p className="mt-4 max-w-3xl text-2xl leading-tight tracking-[-0.01em] text-[#171716] md:text-4xl">
            {copy.manifesto}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1f1f1e]/15 bg-white/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#444]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff4fd8]" />
            {isRu ? "Неожиданный акцент ))" : "Unexpected accent ))"}
          </div>

          <div className="mt-10 border-t border-[#1f1f1e]/15 pt-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#6f6f6c]">{copy.projectsTitle}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {copy.projects.map((project) => (
                <div key={project} className="rounded-2xl bg-white/70 px-4 py-3 text-sm text-[#252523]">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
