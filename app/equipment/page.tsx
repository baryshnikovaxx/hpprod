"use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";

export default function EquipmentPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const categories = [
    {
      title: isRu ? "Камеры и оптика" : "Cameras & Optics",
      items: isRu
        ? ["Кино- и broadcast-камеры", "Комплекты объективов", "Беспроводные видеопередатчики"]
        : ["Cinema and broadcast camera systems", "Lens kits", "Wireless video transmitters"],
    },
    {
      title: isRu ? "Switching и видео" : "Switching & Vision",
      items: isRu
        ? ["Видеомикшеры (switchers)", "Multiview-мониторинг", "Конвертеры и роутеры сигнала"]
        : ["Live switchers", "Multiview monitoring", "Signal converters and routers"],
    },
    {
      title: isRu ? "Аудио" : "Audio",
      items: isRu
        ? ["Цифровые пульты", "Беспроводные микрофоны", "IFB и in-ear мониторинг"]
        : ["Digital consoles", "Wireless microphones", "IFB and in-ear monitoring"],
    },
    {
      title: isRu ? "Стриминг-стек" : "Streaming Stack",
      items: isRu
        ? ["Энкодеры (RTMP/SRT)", "Устройства записи", "Резервные uplink-схемы"]
        : ["Encoders (RTMP/SRT)", "Recording units", "Redundant uplink setups"],
    },
    {
      title: isRu ? "Связь (Comms)" : "Comms",
      items: isRu
        ? ["Интерком-системы", "Связь продюсера и сцены", "Маршрутизация talkback"]
        : ["Intercom systems", "Producer and stage comms", "Talkback routing"],
    },
    {
      title: isRu ? "Питание и резерв" : "Power & Backup",
      items: isRu
        ? ["UPS и распределение питания", "Резервная запись", "Антикризисные комплекты"]
        : ["UPS and power distribution", "Backup capture", "Contingency kits"],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Оборудование" : "Equipment"}</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          {isRu ? "Технический каталог" : "Technical catalog"}
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          {isRu
            ? "Ключевые категории продакшн-оборудования для конференций, киберспорта, концертов и гибридных событий."
            : "Core categories of production equipment used across conferences, esports, concerts, and hybrid events."}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">{category.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
