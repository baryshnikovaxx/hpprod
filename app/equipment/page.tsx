"use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

type StackCategory = {
  title: string;
  items: string[];
};

export default function EquipmentPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  const stackCategories: StackCategory[] = isRu
    ? [
        {
          title: "Cameras",
          items: [
            "Sony FX3",
            "Sony FX6",
            "Additional cinema cameras (available in catalog)",
            "4K как стандарт, 8K — для отдельных сетапов",
            "Large multi-camera capabilities",
          ],
        },
        {
          title: "Optics",
          items: ["Professional lens kits", "Prime and zoom sets", "Full-frame support"],
        },
        {
          title: "Aerial Systems",
          items: [
            "DJI drones",
            "DJI Inspire (available only with certified operator)",
            "Aerial video & photo production",
          ],
        },
        {
          title: "Broadcast & Switching",
          items: ["ATEM systems", "Video switchers", "Signal routing systems", "Recorders", "Monitoring systems"],
        },
        {
          title: "Streaming & Encoding",
          items: ["Professional encoders", "Multi-platform streaming systems", "Redundancy setups"],
        },
        {
          title: "Audio",
          items: ["Professional microphones", "Mixers", "Audio routing systems"],
        },
        {
          title: "Lighting",
          items: ["Professional lighting kits", "Event-ready lighting solutions"],
        },
        {
          title: "Communication & Infrastructure",
          items: ["Intercom systems", "Power distribution", "On-site signal control hardware"],
        },
      ]
    : [
        {
          title: "Cameras",
          items: [
            "Sony FX3",
            "Sony FX6",
            "Additional cinema cameras (available in catalog)",
            "4K standard, 8K available",
            "Large multi-camera capabilities",
          ],
        },
        {
          title: "Optics",
          items: ["Professional lens kits", "Prime and zoom sets", "Full-frame support"],
        },
        {
          title: "Aerial Systems",
          items: ["DJI drones", "DJI Inspire (available only with certified operator)", "Aerial video & photo production"],
        },
        {
          title: "Broadcast & Switching",
          items: ["ATEM systems", "Video switchers", "Signal routing systems", "Recorders", "Monitoring systems"],
        },
        {
          title: "Streaming & Encoding",
          items: ["Professional encoders", "Multi-platform streaming systems", "Redundancy setups"],
        },
        {
          title: "Audio",
          items: ["Professional microphones", "Mixers", "Audio routing systems"],
        },
        {
          title: "Lighting",
          items: ["Professional lighting kits", "Event-ready lighting solutions"],
        },
        {
          title: "Communication & Infrastructure",
          items: ["Intercom systems", "Power distribution", "On-site signal control hardware"],
        },
      ];

  const faq = isRu
    ? [
        {
          q: ru("Можно арендовать оборудование без команды?"),
          a: ru("Да, большинство позиций доступно в dry hire."),
        },
        {
          q: ru("Вы можете собрать кастомный сетап?"),
          a: ru("Да. Мы собираем комплекты оборудования под требования проекта."),
        },
        {
          q: ru("Вы поддерживаете международные проекты?"),
          a: ru("Да. При необходимости берём на себя доставку, логистику и таможню."),
        },
        {
          q: ru("Когда лучше бронировать?"),
          a: ru("Рекомендуем бронировать заранее, но short-notice запросы тоже возможны при доступности."),
        },
      ]
    : [
        {
          q: "Can we rent equipment without a crew?",
          a: "Yes, most units are available for dry hire.",
        },
        {
          q: "Can you build a custom setup?",
          a: "Yes. We assemble equipment packages based on project requirements.",
        },
        {
          q: "Do you support international projects?",
          a: "Yes. We manage delivery, logistics and customs when needed.",
        },
        {
          q: "When should we book?",
          a: "We recommend booking in advance, but short-notice requests may be possible depending on availability.",
        },
      ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Оборудование" : "Equipment"}</p>
          <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-7xl">
            Technical Capabilities
          </h1>
          <p className="reading-copy mt-5 text-sm md:text-base">
            {isRu
              ? ru("Мы работаем на собственном парке техники и предоставляем rental-решения для продакшн-команд и независимых проектов.")
              : "We operate on our own equipment fleet and provide rental solutions for production teams and independent projects."}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "4K workflow standard",
              "8K available for selected setups",
              "Extensive camera fleet",
              isRu ? ru("Каталог оборудования доступен на отдельном rental-сайте") : "Equipment catalog available via separate rental website",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{isRu ? "Production capability" : "Production capability"}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Core Technical Stack</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stackCategories.map((category) => (
              <article key={category.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-zinc-100">{category.title}</h3>
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

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Rental</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Equipment Rental</h2>
            <p className="reading-copy mt-4 text-sm md:text-base">
              {isRu
                ? ru("Если вам нужно оборудование без полной продакшн-команды или вы хотите расширить свой сетап, можно арендовать технику напрямую в нашем in-house rental-направлении.")
                : "If you need equipment without a full production team or want to expand your setup, you can rent gear directly from our in-house rental division."}
            </p>
            <p className="mt-3 text-sm text-zinc-300">
              {isRu
                ? ru("Этот rental принадлежит тем же фаундерам, что и Head Production — это не сторонний партнёр.")
                : "This rental is owned by the same founders as Head Production. It is our in-house rental, not a third-party partner."}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                isRu ? ru("Most equipment доступно в dry hire") : "Most equipment is available for dry hire",
                isRu
                  ? ru("Некоторые позиции (например DJI Inspire) доступны только с сертифицированным оператором")
                  : "Some units (e.g. DJI Inspire drone) are available only with certified operator",
                isRu ? ru("Custom equipment packages available") : "Custom equipment packages available",
                isRu ? ru("Delivery available") : "Delivery available",
                isRu ? ru("Pickup available") : "Pickup available",
                isRu
                  ? ru("International projects supported (логистика и таможня при необходимости)")
                  : "International projects supported (we handle logistics and customs if required)",
                isRu ? ru("Early booking recommended") : "Early booking recommended",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/35 px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/15 to-violet-300/15 p-6 md:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Explore Full Rental Catalog</h2>
            <p className="reading-copy-muted mt-3 text-sm md:text-base">
              {isRu
                ? ru("Полный список оборудования и актуальную доступность смотрите в выделенном rental-каталоге.")
                : "View the complete equipment list and availability in our dedicated rental catalog."}
            </p>
            <a
              href="https://whynotbilisi.com/?utm_source=headproduction&utm_medium=referral&utm_campaign=rental&utm_content=equipment_page"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Open Rental Catalog
            </a>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
          <div className="mt-6 space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-zinc-100">
                  <span>{item.q}</span>
                  <span className="text-base text-zinc-400 transition-colors group-open:text-cyan-200">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-zinc-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
