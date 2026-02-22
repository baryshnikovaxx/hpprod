"use client";

import { useMemo, useState } from "react";
import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";

type RoleGroup = {
  id: string;
  title: string;
  lead: string;
  roles: string[];
  note: string;
};

export default function CrewSolutionsPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const [activeGroupId, setActiveGroupId] = useState("leadership");

  const content = useMemo(
    () =>
      isRu
        ? {
            eyebrow: "Crew Solutions",
            title: "Команда на проект",
            subtitle:
              "Подключаем полную команду или отдельных специалистов под ваш формат. Работаем как самостоятельный продакшен или как часть международной команды.",
            intro:
              "Аккуратно встраиваемся в существующие процессы и соблюдаем технические стандарты проекта, чтобы усилить ваш продакшен без лишней нагрузки на внутреннюю команду.",
            quickNav: "Быстрый переход",
            keyRolesTitle: "Ключевые роли",
            keyRolesLead:
              "Выберите направление, чтобы увидеть состав команды и зону ответственности",
            formatsTitle: "Форматы работы",
            formats: [
              "Полная команда под ключ",
              "Подключение отдельных специалистов",
              "Расширение существующей продакшен-команды",
              "Технический суппорт для международных проектов",
            ],
            approachTitle: "Подход",
            approachText:
              "Наша задача — обеспечить стабильный продакшен без технических сюрпризов. Мы заранее согласовываем структуру работы, распределяем зоны ответственности и соблюдаем тайминг проекта.",
            stickyTitle: "Как мы подключаемся",
            stickyPoints: [
              "Оцениваем формат и текущую структуру проекта",
              "Согласовываем роли и технические зоны ответственности",
              "Интегрируемся в вашу команду и процессы",
              "Поддерживаем стабильность эфира на всех этапах",
            ],
            contactTitle: "Контакт",
            contactLead:
              "Если вам нужно усилить команду или собрать продакшен под конкретный формат — напишите нам",
            cta: "Обсудить проект",
            roleGroups: [
              {
                id: "leadership",
                title: "Руководство и координация",
                lead: "Эти роли отвечают за архитектуру эфира, технические решения и стабильность процесса.",
                roles: [
                  "Режиссёр трансляции",
                  "Технический директор",
                  "Продюсер проекта",
                  "Production manager",
                ],
                note: "Берём на себя управленческий контур и держим проект в целостной логике от препродакшна до эфира.",
              },
              {
                id: "video",
                title: "Видео и режиссура",
                lead: "Обеспечиваем чистый сигнал, грамотную режиссуру и визуальную целостность трансляции.",
                roles: [
                  "Операторы (мультикамерная съёмка)",
                  "Видеоинженер",
                  "Инженер по коммутации сигнала",
                  "Оператор графики",
                ],
                note: "Настраиваем процесс так, чтобы режиссёрская и инженерная части работали синхронно в одном темпе.",
              },
              {
                id: "streaming",
                title: "Стриминг и broadcast",
                lead: "Работаем с прямыми эфирами, гибридными форматами и многоплатформенной трансляцией.",
                roles: [
                  "Стриминг-инженер",
                  "Инженер кодирования сигнала",
                  "Специалист по выдаче на платформы",
                ],
                note: "Проектируем надёжную схему выдачи с резервированием и контролем качества сигнала.",
              },
              {
                id: "light-sound",
                title: "Свет и звук",
                lead: "Контролируем сценическое и эфирное качество изображения и звука.",
                roles: ["Светорежиссёр", "Звукорежиссёр"],
                note: "Выстраиваем стабильную световую и аудио-среду, которая одинаково хорошо работает на площадке и в эфире.",
              },
              {
                id: "aerial",
                title: "Aerial video & photo",
                lead: "Аэросъёмка в 4K для мероприятий, фестивалей и рекламных проектов.",
                roles: ["Drone operator"],
                note: "Работаем безопасно и с учётом требований площадки, усиливая масштаб и визуальный язык проекта.",
              },
            ] as RoleGroup[],
          }
        : {
            eyebrow: "Crew Solutions",
            title: "Project crew solutions",
            subtitle:
              "Hire a full team or bring in specific specialists for your production. We can work as an independent unit or as part of an international crew.",
            intro:
              "We integrate smoothly into existing workflows and align with technical standards, so your production gets stronger without process friction.",
            quickNav: "Quick navigation",
            keyRolesTitle: "Key roles",
            keyRolesLead: "Pick a direction to see role coverage and responsibility scope",
            formatsTitle: "Working formats",
            formats: [
              "Full turnkey crew",
              "Dedicated specialists on demand",
              "Extension of your existing production team",
              "Technical support for international projects",
            ],
            approachTitle: "Approach",
            approachText:
              "Our goal is stable production without technical surprises. We align the workflow structure in advance, define clear responsibility zones, and keep timing disciplined.",
            stickyTitle: "How we onboard",
            stickyPoints: [
              "Assess event format and current delivery structure",
              "Align roles and technical responsibility zones",
              "Integrate into your team and workflow",
              "Maintain stable output through all production stages",
            ],
            contactTitle: "Contact",
            contactLead:
              "If you need to strengthen your team or assemble a production crew for a specific format, reach out",
            cta: "Discuss your project",
            roleGroups: [
              {
                id: "leadership",
                title: "Leadership and coordination",
                lead: "These roles own broadcast architecture, technical decisions, and process stability.",
                roles: ["Broadcast director", "Technical director", "Project producer", "Production manager"],
                note: "We hold the leadership layer and keep delivery coherent from pre-production to final output.",
              },
              {
                id: "video",
                title: "Video and directing",
                lead: "We ensure clean signal flow, strong directing, and visual consistency across the show.",
                roles: [
                  "Camera operators (multi-camera)",
                  "Video engineer",
                  "Signal switching engineer",
                  "Graphics operator",
                ],
                note: "We align directing and engineering operations so both layers move in one synchronized tempo.",
              },
              {
                id: "streaming",
                title: "Streaming and broadcast",
                lead: "We support live shows, hybrid formats, and multi-platform delivery.",
                roles: ["Streaming engineer", "Signal encoding engineer", "Platform delivery specialist"],
                note: "We design resilient output architecture with redundancy and continuous signal quality control.",
              },
              {
                id: "light-sound",
                title: "Lighting and audio",
                lead: "We maintain stage and on-air quality of picture and sound.",
                roles: ["Lighting director", "Audio director"],
                note: "We build a reliable light and audio environment that performs both on-site and in-stream.",
              },
              {
                id: "aerial",
                title: "Aerial video and photo",
                lead: "4K aerial capture for events, festivals, and branded productions.",
                roles: ["Drone operator"],
                note: "We operate safely, aligned with venue requirements, and use aerial footage to enhance scale.",
              },
            ] as RoleGroup[],
          },
    [isRu],
  );

  const activeGroup =
    content.roleGroups.find((group) => group.id === activeGroupId) ?? content.roleGroups[0];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{content.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-zinc-300 md:text-lg">{content.subtitle}</p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-400 md:text-base">{content.intro}</p>

          <div className="mt-7">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">{content.quickNav}</p>
            <div className="flex flex-wrap gap-2">
              {content.roleGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 transition-colors hover:border-cyan-200/60 hover:text-white"
                >
                  {group.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1400px] gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-4 lg:col-span-8">
            <article className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">{content.keyRolesTitle}</h2>
              <p className="mt-2 text-sm text-zinc-300">{content.keyRolesLead}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {content.roleGroups.map((group) => (
                  <button
                    key={group.id}
                    id={group.id}
                    type="button"
                    onClick={() => setActiveGroupId(group.id)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      activeGroup.id === group.id
                        ? "border-cyan-300/60 bg-cyan-300/20 text-cyan-100"
                        : "border-white/15 bg-white/5 text-zinc-200 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {group.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/30 p-5">
                <h3 className="text-lg font-semibold text-zinc-100">{activeGroup.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{activeGroup.lead}</p>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-200 md:grid-cols-2">
                  {activeGroup.roles.map((role) => (
                    <li key={role} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-zinc-300">{activeGroup.note}</p>
              </div>
            </article>

            <article className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">{content.formatsTitle}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-200 md:grid-cols-2">
                {content.formats.map((format) => (
                  <li key={format} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-violet-300/80" />
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">{content.approachTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">{content.approachText}</p>
            </article>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-zinc-100">{content.stickyTitle}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {content.stickyPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/15 to-violet-300/15 p-6">
                <h3 className="text-lg font-semibold text-white">{content.contactTitle}</h3>
                <p className="mt-2 text-sm text-zinc-200">{content.contactLead}</p>
                <div className="mt-4 space-y-1 text-sm text-zinc-100">
                  <a href="mailto:hello@headprod.com" className="block transition-colors hover:text-cyan-200">
                    hello@headprod.com
                  </a>
                  <a href="https://t.me/hp_prod" className="block transition-colors hover:text-cyan-200">
                    Telegram: @hp_prod
                  </a>
                </div>
                <a
                  href="/#contact"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  {content.cta}
                </a>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
