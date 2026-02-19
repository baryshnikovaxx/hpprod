"use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const serviceGroups = [
    {
      title: isRu ? "Продакшн живых событий" : "Live Event Production",
      desc: isRu
        ? "Полный цикл для конференций, саммитов, церемоний и брендовых мероприятий."
        : "End-to-end production for conferences, summits, ceremonies, and branded live formats.",
    },
    {
      title: isRu ? "Broadcast-продакшн" : "Broadcast Production",
      desc: isRu
        ? "Мультикамерная режиссура, коммутация, маршрутизация сигнала, мониторинг, графика и выдача."
        : "Multi-camera directing, switching, signal routing, monitoring, graphics, and delivery.",
    },
    {
      title: isRu ? "Продакшн киберспорта" : "Esports Production",
      desc: isRu
        ? "Турнирный формат: оверлеи, комментаторские, динамичная режиссура и выдача на платформы."
        : "Tournament-ready workflows: overlays, commentary, dynamic switching, and platform output.",
    },
    {
      title: isRu ? "Стриминг и гибридные события" : "Streaming & Hybrid Events",
      desc: isRu
        ? "Надёжная гибридная архитектура с удалёнными спикерами, переводом и резервированием."
        : "Reliable hybrid architecture with remote speakers, translation channels, and backups.",
    },
    {
      title: isRu ? "Полный технический сетап" : "Full Technical Setup",
      desc: isRu
        ? "План камер, связь, звук, видео, маршрутизация и операционный контроль на площадке."
        : "Camera plan, comms, audio, vision, routing, and onsite operational control.",
    },
    {
      title: isRu ? "Команда и инженерия" : "Crew & Engineering",
      desc: isRu
        ? "Опытные операторы, инженеры и техническое руководство для сложных проектов."
        : "Experienced operators, engineers, and technical leadership for high-pressure shows.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Услуги" : "Services"}</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          {isRu ? "Понятная структура, полный цикл" : "Clear structure. Full-cycle delivery."}
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          {isRu
            ? "Услуги сгруппированы по практическим задачам, чтобы быстро выбрать нужный объём работ."
            : "Services are grouped by real production needs, so your team can quickly choose the right scope."}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((service) => (
            <article key={service.title} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
