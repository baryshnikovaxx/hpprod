"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./work.module.css";
import SiteHeader from "../components/site-header";
import ShowreelVideo from "../components/showreel-video";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

const projects = [
  {
    "id": "zemfira",
    "title": [
      "ZEMFIRA",
      "ZEMFIRA"
    ],
    "context": [
      "Тбилиси · Батуми · Ереван · 2024–2025",
      "Tbilisi · Batumi · Yerevan · 2024–2025"
    ],
    "scale": [
      "Серия концертов · до 40 000 зрителей · аншлаги",
      "Concert series · up to 40,000 attendees · sold out"
    ],
    "work": [
      "Многокамерная съёмка и съёмка с дрона.",
      "Multi-camera filming and drone coverage."
    ],
    "showreel": "/cases/zemfira"
  },
  {
    "id": "g-gate",
    "title": [
      "GGate Awards",
      "GGate Awards"
    ],
    "context": [
      "2025 · 2026",
      "2025 · 2026"
    ],
    "scale": [
      "7 000 участников · 150 компаний",
      "7,000 participants · 150 companies"
    ],
    "work": [
      "Съёмка форума и концертов, координация сцены и эфира. Среди артистов — Валерий Меладзе, Яникс и Иван Дорн.",
      "Forum and concert filming, stage and broadcast coordination. Artists included Valery Meladze, Yanix and Ivan Dorn."
    ],
    "showreel": "/cases/ggate"
  },
  {
    "id": "poshlaya-molly",
    "title": [
      "Пошлая Молли",
      "Poshlaya Molly"
    ],
    "context": [
      "Тбилиси · 2025 · 2026",
      "Tbilisi · 2025 · 2026"
    ],
    "scale": [
      "Два концерта · 3 500 зрителей · open air",
      "Two concerts · 3,500 attendees · open air"
    ],
    "work": [
      "Съёмка с камер и дрона, режиссура трансляции, изображение и графика на LED-экране.",
      "Multi-camera and drone filming, live direction, LED screen output and graphics."
    ],
    "showreel": "/cases/poshlaya-molly"
  },
  {
    "id": "eapt",
    "title": [
      "EAPT",
      "EAPT"
    ],
    "context": [
      "Грузия · Армения",
      "Georgia · Armenia"
    ],
    "scale": [
      "Три года сотрудничества",
      "Three years of collaboration"
    ],
    "work": [
      "Эксклюзивный технический партнёр. Вместе с POVProduction — многодневные эфиры, съёмка игровых столов и эфирная графика.",
      "Exclusive technical partner. Multi-day broadcasts, table coverage and live graphics in collaboration with POVProduction."
    ],
    "still": "/cases/eapt/chips.jpg"
  },
  {
    "id": "adam-port",
    "title": [
      "Adam Port",
      "Adam Port"
    ],
    "context": [
      "",
      ""
    ],
    "scale": [
      "6 500 гостей · 12 часов эфира",
      "6,500 guests · 12-hour broadcast"
    ],
    "work": [
      "Съёмка управляемыми PTZ-камерами и контроль сигнала на протяжении эфира.",
      "Remote-controlled PTZ filming and signal monitoring throughout the broadcast."
    ]
  },
  {
    "id": "godovaya-petr-osipov",
    "title": [
      "Годовая программа, Пётр Осипов",
      "GODOVAYA, Petr Osipov"
    ],
    "context": [
      "",
      ""
    ],
    "scale": [
      "Два года · 550 студентов · 360 м²",
      "Two years · 550 students · 360 m²"
    ],
    "work": [
      "Подготовили полностью затемнённое пространство, обеспечили съёмку, передачу изображения и работу технической команды.",
      "Prepared a fully blacked-out space, handled filming, video output and technical crew coordination."
    ]
  },
  {
    "id": "gama",
    "title": [
      "GAMA",
      "GAMA"
    ],
    "context": [
      "Батуми · Тбилиси",
      "Batumi · Tbilisi"
    ],
    "scale": [
      "",
      ""
    ],
    "work": [
      "Подготовка съёмки, проведение трансляции и передача записей заказчику.",
      "Shoot planning, live broadcasting and delivery of recordings."
    ]
  },
  {
    "id": "ifc",
    "title": [
      "IFC",
      "IFC"
    ],
    "context": [
      "Тбилисский дворец спорта",
      "Tbilisi Sport Palace"
    ],
    "scale": [
      "Аншлаг",
      "Sold out"
    ],
    "work": [
      "Оснастили арену техникой, провели многокамерную трансляцию и координировали эфир.",
      "Arena equipment, multi-camera broadcasting and live coordination."
    ]
  },
  {
    "id": "eastvswest-armwrestling",
    "title": [
      "EASTVSWEST ARMWRESTLING",
      "EASTVSWEST ARMWRESTLING"
    ],
    "context": [
      "Batumi Sport Palace",
      "Batumi Sport Palace"
    ],
    "scale": [
      "3 000+ онлайн-зрителей",
      "3,000+ online viewers"
    ],
    "work": [
      "Многокамерная трансляция турнира, оформление сцены и техническое оснащение. Заказчик — компания из США.",
      "Multi-camera tournament broadcast, stage design and technical equipment for a US-based client."
    ]
  },
  {
    "id": "sepultura",
    "title": [
      "Sepultura",
      "Sepultura"
    ],
    "context": [
      "",
      ""
    ],
    "scale": [
      "1 000 зрителей",
      "1,000 attendees"
    ],
    "work": [
      "Видеосъёмка и запись концерта.",
      "Concert filming and recording."
    ]
  },
  {
    "id": "1winmediapoker",
    "title": [
      "1winmediapoker",
      "1winmediapoker"
    ],
    "context": [
      "",
      ""
    ],
    "scale": [
      "",
      ""
    ],
    "work": [
      "Спроектировали и оснастили комментаторскую зону для покерного эфира.",
      "Designed and equipped the commentary area for a poker broadcast."
    ]
  }
];

export default function WorkPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const language = isRu ? 0 : 1;
  const ru = (text: string) => formatRuTypography(text);

  useEffect(() => {
    const revealHash = () => {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    };
    revealHash();
    window.addEventListener("hashchange", revealHash);
    return () => window.removeEventListener("hashchange", revealHash);
  }, []);

  return (
    <main id="page-top" className="broadcast-page page-work relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />

      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <h1 className="title-hero mt-3">
            {isRu ? "Проекты" : "Case studies"}
          </h1>
          <p className="reading-copy-muted mt-5 text-sm md:text-base">
            {isRu
              ? ru("Концерты, форумы и спортивные события. В кадре — масштаб, за кадром — наша работа.")
              : "Concerts, conferences and sports. The scale on screen. Our work behind it."}
          </p>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className={styles.grid}>
            {projects.map((item, index) => (
              <article id={item.id} key={item.id} className={`${styles.project} ${index === 0 ? styles.lead : ""}`}>
                {item.showreel && <ShowreelVideo
                  src={item.showreel + "/showreel.mp4"}
                  poster={item.showreel + "/showreel.jpg"}
                  label={item.title[language] + (isRu ? ": шоурил без звука" : ": silent showreel")}
                  isRu={isRu}
                />}
                <div className={styles.copy}>
                  <div>
                    <h2>{item.title[language]}</h2>
                    {item.context[language] && <p className={styles.context}>{item.context[language]}</p>}
                  </div>
                  <div className={styles.story}>
                    {item.scale[language] && <p className={styles.scale}>{item.scale[language]}</p>}
                    <p className={styles.work}>{item.work[language]}</p>
                  </div>
                  {item.still && <Image src={item.still} alt={isRu ? "Покерные фишки на турнире EAPT" : "Poker chips at EAPT"} width={1280} height={720} sizes="(max-width: 700px) 100vw, 560px" className={styles.still} />}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
          <div className={styles.contact}>
            <h2 className="title-section-inverse">
              {isRu ? "Обсудить проект" : "Discuss a Project"}
            </h2>
            <p className="reading-copy-muted mt-3 text-sm md:text-base">
              {isRu
                ? ru("Расскажите о задаче. Предложим план съёмки и трансляции с учётом площадки, формата и сроков.")
                : "Share your brief and we will propose a production setup aligned with your format, venue, and timeline."}
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              {isRu ? "Связаться" : "Get in touch"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
