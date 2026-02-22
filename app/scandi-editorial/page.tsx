"use client";

import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

export default function ScandiEditorialPage() {
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
    <main className="min-h-screen overflow-x-clip bg-[#f5f5f2] text-[#141414]">
      <div className="pointer-events-none fixed left-4 top-20 z-20 text-2xl text-[#ff3bbf] md:text-4xl">✶</div>
      <div className="pointer-events-none fixed right-6 top-40 z-20 text-xl text-[#111] md:text-3xl">→</div>
      <div className="pointer-events-none fixed bottom-8 right-8 z-20 text-2xl text-[#ff3bbf] md:text-4xl">✷</div>

      <section className="mx-auto w-full max-w-[1320px] px-5 py-12 md:px-8 md:py-16">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#646460]">
            Head Production ✶
          </a>
          <a
            href="/"
            className="rounded-full border border-[#111]/20 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#111] transition hover:bg-[#111] hover:text-white"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1320px] px-5 pb-10 md:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#787874]">{copy.eyebrow}</p>
        <h1 className="mt-3 max-w-6xl text-5xl font-semibold leading-[0.92] tracking-[-0.03em] md:text-[110px]">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#3f3f3c] md:text-2xl md:leading-10">{copy.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
          >
            {copy.ctaPrimary} <span>→</span>
          </a>
          <a
            href="/scandi"
            className="inline-flex items-center gap-2 rounded-full border border-[#111]/20 bg-white/65 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#111]"
          >
            {isRu ? "Более спокойная версия" : "Calmer version"} <span>✶</span>
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1320px] gap-4 px-5 pb-14 md:grid-cols-12 md:px-8">
        <article className="rounded-[28px] border border-[#111]/15 bg-white/75 p-6 md:col-span-4 md:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#767672]">{copy.blocks[0].t}</p>
          <p className="mt-3 text-base leading-8 text-[#232321]">{copy.blocks[0].d}</p>
        </article>
        <article className="rounded-[28px] border border-[#111]/15 bg-[#ecece7] p-6 md:col-span-4 md:translate-y-8 md:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#767672]">{copy.blocks[1].t}</p>
          <p className="mt-3 text-base leading-8 text-[#232321]">{copy.blocks[1].d}</p>
        </article>
        <article className="rounded-[28px] border border-[#111]/15 bg-white/75 p-6 md:col-span-4 md:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#767672]">{copy.blocks[2].t}</p>
          <p className="mt-3 text-base leading-8 text-[#232321]">{copy.blocks[2].d}</p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1320px] px-5 pb-24 md:px-8">
        <div className="rounded-[34px] border border-[#111]/15 bg-[#e9e9e4] p-7 md:p-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#6f6f6a]">
            {copy.manifestoTitle} ✶
          </p>
          <p className="mt-4 max-w-5xl text-3xl leading-[1.03] tracking-[-0.02em] text-[#161615] md:text-6xl">
            {copy.manifesto}
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ff3bbf] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            {isRu ? "Неожиданный акцент ))" : "Unexpected accent ))"} <span>✷</span>
          </div>

          <div className="mt-10 border-t border-[#111]/15 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#6f6f6a]">{copy.projectsTitle} →</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {copy.projects.map((project, idx) => (
                <div key={project} className="rounded-2xl border border-[#111]/10 bg-white/80 px-4 py-3 text-sm text-[#262624]">
                  <span className="mr-1 text-[#ff3bbf]">✶</span>
                  {idx + 1}. {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
