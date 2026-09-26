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
          title: "Камеры",
          items: [
            "Sony FX3",
            "Sony FX6",
            "Другие кинокамеры — в каталоге",
            "Комплекты для многокамерной съёмки"
          ]
        },
        {
          title: "Оптика",
          items: [
            "Профессиональные комплекты объективов",
            "Объективы с постоянным и переменным фокусным расстоянием",
            "Оптика для полнокадровых камер"
          ]
        },
        {
          title: "Аэросъёмка",
          items: [
            "Дроны DJI",
            "DJI Inspire — только с сертифицированным оператором",
            "Фото и видео с воздуха"
          ]
        },
        {
          title: "Управление эфиром",
          items: [
            "Системы ATEM",
            "Видеомикшеры",
            "Системы распределения сигнала",
            "Рекордеры",
            "Системы контроля изображения и звука"
          ]
        },
        {
          title: "Передача и кодирование видео",
          items: [
            "Профессиональные устройства кодирования видео",
            "Системы трансляции на несколько платформ",
            "Резервные решения"
          ]
        },
        {
          title: "Звук",
          items: [
            "Профессиональные микрофоны",
            "Микшерные пульты",
            "Системы распределения звукового сигнала"
          ]
        },
        {
          title: "Свет",
          items: [
            "Профессиональные комплекты света",
            "Освещение для мероприятий"
          ]
        },
        {
          title: "Связь и питание",
          items: [
            "Системы служебной связи",
            "Распределение электропитания",
            "Оборудование для контроля сигнала на площадке"
          ]
        }
      ]
    : [
        {
          title: "Cameras",
          items: [
            "Sony FX3",
            "Sony FX6",
            "Additional cinema cameras (available in catalog)",
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
          q: "Можно арендовать технику без команды?",
          a: "Да, большую часть оборудования. Проверим совместимость, подберём комплект и объясним, как его подключить."
        },
        {
          q: "Подберёте комплект под наш проект?",
          a: "Да. Учтём площадку, число камер, задачи трансляции и записи, резервирование и расписание команды."
        },
        {
          q: "Поможете с проектом в другой стране?",
          a: "Да. Поможем с перевозкой, документами и таможенным оформлением."
        },
        {
          q: "Когда лучше бронировать?",
          a: "Заранее, особенно в высокий сезон. Если техника нужна срочно, напишите — проверим наличие и предложим варианты."
        }
      ]
    : [
        {
          q: "Can we rent equipment without a crew?",
          a: "Yes. Most units are available for dry hire. We can also help verify compatibility and assemble a practical package for your setup.",
        },
        {
          q: "Can you build a custom setup?",
          a: "Yes. We build equipment packages around your format, camera plan, streaming needs, recording scope, and backup requirements.",
        },
        {
          q: "Do you support international projects?",
          a: "Yes. We support international projects and can help with delivery planning, logistics coordination, and customs paperwork when required.",
        },
        {
          q: "When should we book?",
          a: "We recommend booking in advance, especially during peak periods. Short-notice requests may still be possible depending on availability.",
        },
      ];

  return (
    <main className="broadcast-page page-equipment relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <h1 className="title-hero mt-3">
            {isRu ? "Оборудование для съёмки и эфира" : "Technical Capabilities"}
          </h1>
          <p className="reading-copy mt-5 text-sm md:text-base">
            {isRu
              ? ru("Работаем на собственной технике и сдаём её в аренду съёмочным командам и независимым проектам.")
              : "We operate on our own equipment fleet and provide rental solutions for production teams and independent projects."}
          </p>

        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="equipment-index">
            {stackCategories.map((category) => (
              <article key={category.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="title-card text-zinc-100">{category.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
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
            <h2 className="title-section mt-2">{isRu ? "Аренда оборудования" : "Equipment Rental"}</h2>
            <p className="reading-copy mt-4 text-sm md:text-base">
              {isRu
                ? ru("Технику можно арендовать отдельно от команды — для самостоятельной съёмки или в дополнение к вашему комплекту.")
                : "If you need equipment without a full production team or want to expand your setup, you can rent gear directly from our in-house rental division."}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                isRu ? ru("Подберём оборудование под проект") : "We assemble the right equipment packages for your project",
                isRu ? ru("Доставим или подготовим к самовывозу") : "We deliver or prepare for pickup",
                isRu ? ru("Спланируем перевозку и поможем с таможенным оформлением") : "We plan logistics and support customs handling",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/35 px-4 py-3 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-indigo-300/30 bg-gradient-to-r from-indigo-400/15 to-violet-400/15 p-6 md:p-8">
            <h2 className="title-section-inverse">
              {isRu ? "Каталог оборудования" : "Explore Full Rental Catalog"}
            </h2>
            <p className="reading-copy-muted mt-3 text-sm md:text-base">
              {isRu
                ? ru("Полный список техники и её доступность — в каталоге аренды.")
                : "View the complete equipment list and availability in our dedicated rental catalog."}
            </p>
            <a
              href="https://whynotbilisi.com/?utm_source=headproduction&utm_medium=referral&utm_campaign=rental&utm_content=equipment_page"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              {isRu ? "Открыть каталог" : "Open Rental Catalog"}
            </a>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="title-section">{isRu ? "Вопросы и ответы" : "FAQ"}</h2>
          {isRu ? (
            <p className="mt-3 text-sm text-zinc-300">
              Самовывоз — в Тбилиси. В других странах организуем доставку или передачу техники через партнёров с учётом вашего графика.
            </p>
          ) : (
            <p className="mt-3 text-sm text-zinc-300">
              Pickup is available in Tbilisi. For other countries, we can arrange partner handoff points or scheduled delivery.
            </p>
          )}
          <div className="mt-6 space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-zinc-100 md:text-lg">
                  <span>{item.q}</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-zinc-900/40 text-xl leading-none text-zinc-300 transition-colors group-open:border-indigo-300/40 group-open:text-indigo-200">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-zinc-300 md:text-base">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
