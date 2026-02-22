"use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";

type ServiceItem = {
  id: string;
  title: string;
  lead: string;
  includedTitle: string;
  included: string[];
  note: string;
};

export default function ServicesPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const content = isRu
    ? {
        eyebrow: "Услуги",
        title: "Продакшн без лишней сложности",
        subtitle:
          "Полный цикл, собственная техника и команда. Подключаемся на любом этапе — от идеи до финального эфира. Работаем с живыми площадками, студиями и гибридными форматами.",
        quickNav: "Быстрый переход",
        asideTitle: "Почему с нами спокойно",
        asidePoints: [
          "До 16 камер в одном сетапе",
          "4K workflow и резервирование сигнала",
          "Собственный парк техники и команда",
          "Подключаемся на любом этапе проекта",
        ],
        ctaTitle: "Обсудим задачу и предложим рабочую схему",
        ctaText: "Опишем сетап, тайминг и бюджет под ваш формат",
        ctaButton: "Связаться",
        services: [
          {
            id: "live-event-production",
            title: "1. Продакшн живых событий",
            lead: "Полный цикл для конференций, форумов, церемоний, концертов и фестивалей.",
            includedTitle: "Что входит",
            included: [
              "режиссура и техническое продюсирование",
              "многокамерная съёмка до 16 камер",
              "4K workflow",
              "свет и звук",
              "графика и титры",
              "запись и архивирование материала",
              "резервирование сигнала",
            ],
            note: "Заранее проектируем архитектуру продакшна, тестируем оборудование и выстраиваем стабильную работу на площадке.",
          },
          {
            id: "broadcast-production",
            title: "2. Broadcast-продакшн",
            lead: "Мультикамерная режиссура и телевизионная логика эфира.",
            includedTitle: "Что входит",
            included: [
              "коммутация и маршрутизация сигнала",
              "режиссёрский пульт",
              "мониторинг и контроль сигнала",
              "прямая выдача на платформы",
              "стриминг в несколько направлений",
              "работа с комментаторскими позициями",
            ],
            note: "Подходит для крупных событий с высокими требованиями к стабильности и качеству.",
          },
          {
            id: "esports-production",
            title: "3. Продакшн киберспорта",
            lead: "Турнирный формат с динамичной режиссурой.",
            includedTitle: "Что входит",
            included: [
              "студийные и аренные трансляции",
              "оверлеи и игровая графика",
              "комментаторские зоны",
              "интеграция с платформами",
              "быстрый монтаж хайлайтов",
            ],
            note: "Работаем в турнирной логике, держим тайминг и темп эфира.",
          },
          {
            id: "streaming-hybrid",
            title: "4. Стриминг и гибридные события",
            lead: "Онлайн и офлайн в едином опыте, без ощущения второго экрана.",
            includedTitle: "Что входит",
            included: [
              "подключение удалённых спикеров",
              "перевод и синхрон",
              "резервные каналы связи",
              "мультиплатформенная трансляция",
              "запись отдельных потоков",
            ],
            note: "Проектируем гибридную архитектуру так, чтобы технические риски были минимальны.",
          },
          {
            id: "technical-setup",
            title: "5. Полный технический сетап",
            lead: "Собственный парк техники позволяет не зависеть от сторонних подрядчиков.",
            includedTitle: "Что входит",
            included: [
              "до 16 камер",
              "4K оборудование",
              "режиссёрские станции",
              "стриминг-серверы",
              "профессиональный свет и звук",
              "системы коммутации",
            ],
            note: "Отвечаем за всю техническую инфраструктуру проекта от старта до финальной выдачи.",
          },
          {
            id: "aerial-video-photo",
            title: "6. Aerial video & photo",
            lead: "Аэросъёмка для мероприятий, фестивалей и рекламных проектов.",
            includedTitle: "Что входит",
            included: [
              "дроны с профессиональными камерами",
              "съёмка в 4K",
              "согласование и подготовка",
              "безопасная работа на площадке",
            ],
            note: "Используем аэросъёмку как инструмент, который усиливает масштаб и визуальный язык события.",
          },
          {
            id: "crew-engineering",
            title: "7. Команда и инженерия",
            lead: "Опытные операторы, режиссёры и инженеры.",
            includedTitle: "Что входит",
            included: [
              "техническое руководство проекта",
              "контроль качества сигнала",
              "резервные решения",
              "чёткое распределение ролей",
            ],
            note: "Работаем спокойно и системно даже в сложных условиях.",
          },
        ] as ServiceItem[],
      }
    : {
        eyebrow: "Services",
        title: "Production without unnecessary complexity",
        subtitle:
          "Full cycle, in-house equipment, and an experienced crew. We can join at any stage, from concept to final output. We work with live venues, studios, and hybrid formats.",
        quickNav: "Quick navigation",
        asideTitle: "Why teams trust us",
        asidePoints: [
          "Up to 16 cameras in one setup",
          "4K workflow with signal redundancy",
          "In-house equipment and core crew",
          "Flexible involvement at any project stage",
        ],
        ctaTitle: "Tell us the brief and we will map the setup",
        ctaText: "We will define the technical flow, timeline, and budget for your format",
        ctaButton: "Get in touch",
        services: [
          {
            id: "live-event-production",
            title: "1. Live event production",
            lead: "End-to-end delivery for conferences, forums, ceremonies, concerts, and festivals.",
            includedTitle: "Included",
            included: [
              "directing and technical producing",
              "multi-camera production up to 16 cameras",
              "4K workflow",
              "lighting and sound",
              "graphics and titles",
              "recording and archive delivery",
              "signal redundancy",
            ],
            note: "We plan the production architecture in advance, test all equipment, and build a stable on-site workflow.",
          },
          {
            id: "broadcast-production",
            title: "2. Broadcast production",
            lead: "Multi-camera directing with full broadcast-grade control logic.",
            includedTitle: "Included",
            included: [
              "signal switching and routing",
              "director control station",
              "signal monitoring and quality control",
              "live platform delivery",
              "multi-destination streaming",
              "commentary position workflows",
            ],
            note: "Best fit for high-stakes events with strict reliability and quality requirements.",
          },
          {
            id: "esports-production",
            title: "3. Esports production",
            lead: "Tournament-ready format with fast and dynamic directing.",
            includedTitle: "Included",
            included: [
              "studio and arena broadcasts",
              "overlays and game graphics",
              "commentary zones",
              "platform integrations",
              "rapid highlight editing",
            ],
            note: "We work in tournament tempo, maintain timing discipline, and keep the stream pace sharp.",
          },
          {
            id: "streaming-hybrid",
            title: "4. Streaming and hybrid events",
            lead: "Online and offline combined into one consistent audience experience.",
            includedTitle: "Included",
            included: [
              "remote speaker integration",
              "translation and simultaneous interpretation",
              "backup communication channels",
              "multi-platform streaming",
              "separate stream recording",
            ],
            note: "We design hybrid architecture to minimize technical risk and maintain continuity.",
          },
          {
            id: "technical-setup",
            title: "5. Full technical setup",
            lead: "Our own equipment park allows independent delivery without third-party dependencies.",
            includedTitle: "Included",
            included: [
              "up to 16 cameras",
              "4K equipment",
              "director workstations",
              "streaming servers",
              "professional lighting and sound",
              "signal switching systems",
            ],
            note: "We take full responsibility for the technical infrastructure from setup to final output.",
          },
          {
            id: "aerial-video-photo",
            title: "6. Aerial video and photo",
            lead: "Aerial capture for events, festivals, and branded productions.",
            includedTitle: "Included",
            included: [
              "drones with professional cameras",
              "4K aerial capture",
              "permissions and pre-production planning",
              "safe on-site operation",
            ],
            note: "We use aerial footage to expand the visual scale and strengthen event storytelling.",
          },
          {
            id: "crew-engineering",
            title: "7. Crew and engineering",
            lead: "Experienced camera operators, directors, and engineers.",
            includedTitle: "Included",
            included: [
              "technical project leadership",
              "signal quality supervision",
              "backup strategies",
              "clear role distribution",
            ],
            note: "Our team works calmly and systematically even under demanding conditions.",
          },
        ] as ServiceItem[],
      };

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
          <div className="mt-7">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">{content.quickNav}</p>
            <div className="flex flex-wrap gap-2">
              {content.services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 transition-colors hover:border-cyan-200/60 hover:text-white"
                >
                  {service.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1400px] gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-4 lg:col-span-8">
            {content.services.map((service) => (
              <article
                id={service.id}
                key={service.id}
                className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
              >
                <h2 className="text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">{service.lead}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-zinc-400">{service.includedTitle}</p>
                <ul className="mt-3 grid gap-2 text-sm text-zinc-200 md:grid-cols-2">
                  {service.included.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/35 px-4 py-3 text-sm leading-relaxed text-zinc-300">
                  {service.note}
                </p>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-zinc-100">{content.asideTitle}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {content.asidePoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-violet-300/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/15 to-violet-300/15 p-6">
                <h3 className="text-lg font-semibold text-white">{content.ctaTitle}</h3>
                <p className="mt-2 text-sm text-zinc-200">{content.ctaText}</p>
                <a
                  href="/#contact"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  {content.ctaButton}
                </a>
              </div>
            </div>
          </aside>
        </div>
        </section>
      </div>
    </main>
  );
}
