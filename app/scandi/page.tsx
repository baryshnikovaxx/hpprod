"use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

export default function ScandiPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  const copy = isRu
    ? {
        eyebrow: "Скандинавская версия · Черновик",
        title: "Выразительные трансляции. Сдержанная эстетика",
        subtitle: ru("Экспериментальная версия сайта: чёрно-белая палитра, фиолетовый акцент и выразительная типографика."),
        ctaPrimary: "Обсудить проект",
        ctaSecondary: "Основная версия",
        manifestoTitle: "Подход",
        manifesto: ru("Создаём выразительные трансляции с надёжной технической основой — для мероприятий, брендов и культурных проектов."),
        blocks: [
          {
            t: "Режиссура",
            d: ru("Объединяем художественное решение, режиссуру и развитие действия в кадре.")
          },
          {
            t: "Мастерство",
            d: ru("Согласовываем работу света, камер, графики и звука.")
          },
          {
            t: "Ритм",
            d: ru("Подбираем темп эфира и монтажа с учётом аудитории и площадки показа.")
          }
        ],
        projectsTitle: "Форматы",
        projects: [
          "Презентации брендов и сценические проекты с эффектом погружения",
          "Саммиты с очным и удалённым участием, продуманной программой эфира",
          "Фестивальные трансляции и многокамерная съёмка"
        ]
      }
    : {
        eyebrow: "Scandi Beta ))",
        title: "Creative production in a Scandinavian mood ))",
        subtitle:
          "Temporary alternative website concept: black and white palette, a purple accent, typography-first hierarchy, and clean storytelling.",
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
    <main className="broadcast-page page-scandi min-h-screen bg-[#f6f6f3] text-[#161616]">
      <SiteHeader />
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
            {isRu ? "Наши проекты" : "View case studies"}
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
            {isRu ? "Яркий акцент" : "Unexpected accent ))"}
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
