"use client";

import { useMemo, useState } from "react";
import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";

type Project = {
  title: string;
  category: "Esports" | "Conferences" | "Festivals" | "Corporate" | "Concerts";
  location: string;
  year: string;
  desc: string;
};

const FILTERS: Array<Project["category"]> = [
  "Esports",
  "Conferences",
  "Festivals",
  "Corporate",
  "Concerts",
];

const categoryLabel: Record<Project["category"], { en: string; ru: string }> = {
  Esports: { en: "Esports", ru: "Киберспорт" },
  Conferences: { en: "Conferences", ru: "Конференции" },
  Festivals: { en: "Festivals", ru: "Фестивали" },
  Corporate: { en: "Corporate", ru: "Корпоративные" },
  Concerts: { en: "Concerts", ru: "Концерты" },
};

const PROJECTS: Project[] = [
  {
    title: "Major Tournament Broadcast",
    category: "Esports",
    location: "Dubai",
    year: "2024",
    desc: "Fast switching, live overlays, commentator setup, multi-platform output, and clean highlight exports.",
  },
  {
    title: "International Leadership Summit",
    category: "Conferences",
    location: "Europe",
    year: "2025",
    desc: "Hybrid production with remote speakers, translation routing, and full recording package.",
  },
  {
    title: "Open-Air Music Festival",
    category: "Festivals",
    location: "Turkey",
    year: "2024",
    desc: "Large stage coverage, multi-camera directing, LED coordination, and resilient onsite communications.",
  },
  {
    title: "Global Brand Townhall",
    category: "Corporate",
    location: "Tbilisi",
    year: "2025",
    desc: "Corporate live stream with graphics package, CEO keynote support, and distributed viewing workflow.",
  },
  {
    title: "Live Concert Capture",
    category: "Concerts",
    location: "Belgrade",
    year: "2024",
    desc: "4K concert production with audience and stage camera blend, backup recording, and post-event delivery.",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | Project["category"]>("All");
  const { lang } = useLanguage();
  const isRu = lang === "ru";

  const projects = PROJECTS.map((project) => ({
    ...project,
    title:
      isRu && project.title === "Major Tournament Broadcast"
        ? "Трансляция крупного турнира"
        : isRu && project.title === "International Leadership Summit"
          ? "Международный лидерский саммит"
          : isRu && project.title === "Open-Air Music Festival"
            ? "Open-air музыкальный фестиваль"
            : isRu && project.title === "Global Brand Townhall"
              ? "Глобальный корпоративный townhall"
              : isRu && project.title === "Live Concert Capture"
                ? "Съемка live-концерта"
                : project.title,
    location:
      isRu && project.location === "Europe"
        ? "Европа"
        : isRu && project.location === "Turkey"
          ? "Турция"
          : isRu && project.location === "Belgrade"
            ? "Белград"
            : project.location,
    desc:
      isRu && project.desc === "Fast switching, live overlays, commentator setup, multi-platform output, and clean highlight exports."
        ? "Быстрый switching, live-оверлеи, комментаторская зона, мультиплатформенная выдача и чистые хайлайты."
        : isRu && project.desc === "Hybrid production with remote speakers, translation routing, and full recording package."
          ? "Гибридный продакшн с удаленными спикерами, маршрутизацией переводов и полным пакетом записи."
          : isRu && project.desc === "Large stage coverage, multi-camera directing, LED coordination, and resilient onsite communications."
            ? "Покрытие большой сцены, мультикамерная режиссура, координация LED и надежная onsite-связь."
            : isRu && project.desc === "Corporate live stream with graphics package, CEO keynote support, and distributed viewing workflow."
              ? "Корпоративный стрим с графическим пакетом, поддержкой keynote и распределенным просмотром."
              : isRu && project.desc === "4K concert production with audience and stage camera blend, backup recording, and post-event delivery."
                ? "4K-продакшн концерта с миксом сценических и зрительских камер, резервной записью и пост-выдачей."
                : project.desc,
  }));

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Кейсы / Проекты" : "Projects / Work"}</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          {isRu ? "Библиотека кейсов" : "Case studies library"}
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          {isRu
            ? "Отдельная страница со всеми кейсами и практическими деталями: сетап, условия реализации и результаты."
            : "Separate page for all cases with practical details on setup, delivery conditions, and outcomes."}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className={`rounded-full border px-4 py-2 text-sm ${
              activeFilter === "All"
                ? "border-cyan-300/50 bg-cyan-300/20 text-cyan-100"
                : "interactive-gradient border-white/15 bg-white/5 text-zinc-200"
            }`}
          >
            {isRu ? "Все" : "All"}
          </button>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm ${
                activeFilter === filter
                  ? "border-cyan-300/50 bg-cyan-300/20 text-cyan-100"
                  : "interactive-gradient border-white/15 bg-white/5 text-zinc-200"
              }`}
            >
              {isRu ? categoryLabel[filter].ru : categoryLabel[filter].en}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/15 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
                  {isRu ? categoryLabel[project.category].ru : categoryLabel[project.category].en}
                </span>
                <span className="text-xs text-zinc-400">
                  {project.location} · {project.year}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{project.desc}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
