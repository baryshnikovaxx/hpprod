"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./work.module.css";
import SiteHeader from "../components/site-header";
import ShowreelVideo from "../components/showreel-video";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

type CaseStudy = {
  id: string;
  title: string;
  locationYear: string;
  format: string;
  scale: string;
  role: string;
  responsibilities: string[];
  result: string;
  coverSrc?: string;
  mediaFit?: "cover" | "contain";
  visualLabel?: string;
  note?: string;
  showreel?: string;
  still?: string;
  showreelSeconds?: number;
};

export default function WorkPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  const cases: CaseStudy[] = isRu
    ? [
        {
          id: "eapt",
          still: "/cases/eapt/chips.jpg",
          showreelSeconds: 15,
          title: "EAPT",
          locationYear: "Грузия · Армения",
          format: "Трансляции покерной серии.",
          scale: "Три года сотрудничества, проекты в Грузии и Армении.",
          role: "Эксклюзивный технический партнёр турнира. Подготовка и проведение трансляций совместно с POVProduction.",
          responsibilities: [
            "Многодневные эфиры",
            "съёмка игровых столов",
            "эфирная графика",
            "организация трансляций в двух странах"
          ],
          result: "Выстроили постоянную работу над трансляциями международной покерной серии.",
          coverSrc: "/clients/eapt.png",
          mediaFit: "contain"
        },
        {
          id: "adam-port",
          title: "Adam Port",
          locationYear: "6 500 гостей · 12 часов",
          format: "Музыкальное событие.",
          scale: "6 500 гостей · 12 часов",
          role: "Подготовка и проведение прямой трансляции.",
          responsibilities: [
            "Съёмка дистанционно управляемыми PTZ-камерами",
            "работа продолжительной эфирной смены",
            "контроль сигнала"
          ],
          result: "Провели стабильную 12-часовую трансляцию события для 6 500 гостей.",
          visualLabel: "PTZ-съёмка"
        },
        {
          id: "godovaya-petr-osipov",
          title: "Годовая программа, Пётр Осипов",
          locationYear: "2 года · 550 студентов",
          format: "Образовательное событие.",
          scale: "550 студентов, 360 м² полностью затемнённого пространства.",
          role: "Видеосъёмка и техническое обеспечение.",
          responsibilities: [
            "Подготовка затемнённого пространства",
            "съёмка и передача изображения",
            "координация технической команды"
          ],
          result: "Разработали техническую схему для регулярных образовательных событий.",
          visualLabel: "Полное затемнение"
        },
        {
          id: "g-gate",
          showreel: "/cases/ggate",
          showreelSeconds: 15,
          title: "GGate Awards",
          locationYear: "2025 · 2026",
          format: "Форум и концертная программа.",
          scale: "7 000 участников · 150 компаний. Ivan Dorn, Big Baby Tape, T-Fest, Валерий Меладзе, Яникс.",
          role: "Техническое обеспечение и съёмка события.",
          responsibilities: [
            "Координация сцены и эфира",
            "видеоматериалы для аудитории",
            "съёмка выступлений артистов"
          ],
          result: "Объединили деловую и концертную программы в одном процессе съёмки и трансляции.",
          coverSrc: "/clients/ggate.png",
          mediaFit: "contain"
        },
        {
          id: "gama",
          title: "GAMA",
          locationYear: "Батуми · Тбилиси",
          format: "Съёмка и трансляция полного цикла.",
          scale: "Проекты в двух городах — от подготовки до завершения эфира.",
          role: "Подготовка и реализация проекта целиком.",
          responsibilities: [
            "Планирование",
            "съёмка",
            "трансляция",
            "передача итоговых материалов"
          ],
          result: "Организовали все этапы работы над проектами в Батуми и Тбилиси.",
          coverSrc: "/clients/gama.png",
          mediaFit: "contain"
        },
        {
          id: "ifc",
          title: "IFC",
          locationYear: "Тбилисский дворец спорта · Аншлаг",
          format: "Трансляция с большой арены.",
          scale: "Все билеты проданы.",
          role: "Полный цикл подготовки и проведения трансляции.",
          responsibilities: [
            "Техническое оснащение арены",
            "многокамерная трансляция",
            "координация эфира"
          ],
          result: "Обеспечили съёмку и трансляцию события при полном зале.",
          visualLabel: "Трансляция с арены"
        },
        {
          id: "eastvswest-armwrestling",
          title: "EASTVSWEST ARMWRESTLING",
          locationYear: "Batumi Sport Palace · Батуми",
          format: "Трансляция турнира по армрестлингу.",
          scale: "3 000+ онлайн-зрителей.",
          role: "Полный цикл подготовки и проведения трансляции.",
          responsibilities: ["Многокамерная трансляция", "Оформление сцены", "Техническое оснащение"],
          result: "Подготовили сцену и технику, организовали многокамерную трансляцию турнира.",
          note: "Заказчик — компания из США.",
        },
        {
          id: "sepultura",
          title: "Sepultura",
          locationYear: "1 000 зрителей",
          format: "Концертная съёмка.",
          scale: "1 000 зрителей",
          role: "Видеосъёмка концерта.",
          responsibilities: [
            "Съёмка выступления",
            "работа с динамикой сцены",
            "запись материала"
          ],
          result: "Обеспечили видеосъёмку и запись концерта международной группы.",
          coverSrc: "/clients/sepultura.png",
          mediaFit: "contain"
        },
        {
          id: "poshlaya-molly",
          showreel: "/cases/poshlaya-molly",
          title: "Пошлая Молли",
          locationYear: "Тбилиси · 2025 · 2026",
          format: "Концертная съёмка.",
          scale: "3 500 зрителей · Open air. Большой LED-экран и графика в реальном времени.",
          role: "Видеосъёмка и визуальное сопровождение двух концертов в Тбилиси — в 2025 и 2026 годах.",
          responsibilities: [
            "Съёмка с дрона",
            "многокамерная съёмка",
            "режиссура трансляции",
            "работа с LED-экраном и графикой"
          ],
          result: "Выпустили два концерта в Тбилиси. На каждом согласовали работу экрана, графики и камер в едином визуальном оформлении.",
          coverSrc: "/clients/poshlaya-molly.png",
          mediaFit: "contain"
        },
        {
          id: "zemfira",
          showreel: "/cases/zemfira",
          showreelSeconds: 15,
          title: "ZEMFIRA",
          locationYear: "Тбилиси · Батуми · Ереван · 2024–2025",
          format: "Серия концертов",
          scale: "До 40 000 зрителей на концерте. Все билеты проданы.",
          role: "Полный цикл видеосъёмки в 2024–2025 годах.",
          responsibilities: [
            "Многокамерная съёмка",
            "видео и аэросъёмка",
            "работа в трёх городах"
          ],
          result: "Сохранили единое качество изображения и стабильную передачу видео на всей серии концертов.",
          coverSrc: "/cases/zemfira/showreel.jpg"
        },
        {
          id: "1winmediapoker",
          title: "1winmediapoker",
          locationYear: "Комментаторская зона",
          format: "Трансляция покерного медиапроекта.",
          scale: "Полная разработка зоны для комментаторов.",
          role: "Проектирование технической системы трансляции.",
          responsibilities: [
            "Оснащение комментаторской зоны",
            "организация эфира",
            "разработка технической схемы"
          ],
          result: "Подготовили комментаторскую зону к работе в прямом эфире.",
          coverSrc: "/cases/esports-cover.jpg"
        }
      ]
    : [
        {
          id: "eapt",
          still: "/cases/eapt/chips.jpg",
          showreelSeconds: 15,
          title: "EAPT",
          locationYear: "Georgia · Armenia",
          format: "Poker broadcast series",
          scale: "Three years of collaboration on projects in Georgia and Armenia.",
          role: "Exclusive technical partner of the tournament. Broadcast production in collaboration with POVProduction.",
          responsibilities: ["Multi-day broadcast", "Table and game zone workflow", "Graphics and live pipeline", "2 countries"],
          result: "A long-term broadcast system for an international poker series.",
          coverSrc: "/clients/eapt.png",
          mediaFit: "contain",
        },
        {
          id: "adam-port",
          title: "Adam Port",
          locationYear: "6500 guests · 12 hours",
          format: "Music live event",
          scale: "6500 attendees and a 12-hour broadcast.",
          role: "Live broadcast production.",
          responsibilities: ["PTZ workflow", "Long-form live shift", "Signal monitoring"],
          result: "A stable 12-hour live broadcast for a large-scale venue.",
          visualLabel: "PTZ Workflow",
        },
        {
          id: "godovaya-petr-osipov",
          title: "GODOVAYA Petr Osipov",
          locationYear: "2 years · 550 students",
          format: "Educational event",
          scale: "550 students and 360 sq. m of total blackout.",
          role: "Video and technical production.",
          responsibilities: ["Blackout environment", "Capture and output", "Technical coordination"],
          result: "A predictable production setup for a recurring educational format.",
          visualLabel: "Total Blackout",
        },
        {
          id: "g-gate",
          showreel: "/cases/ggate",
          showreelSeconds: 15,
          title: "GGate Awards",
          locationYear: "2025 · 2026",
          format: "Forum and live show",
          scale: "7000 participants, 150 companies, Ivan Dorn, Big Baby Tape, T-Fest, Valery Meladze, Yanix.",
          role: "Live event production.",
          responsibilities: ["Stage and broadcast logic", "Large-audience content", "Artist blocks"],
          result: "One production workflow for the business and concert parts of the event.",
          coverSrc: "/clients/ggate.png",
          mediaFit: "contain",
        },
        {
          id: "gama",
          title: "GAMA",
          locationYear: "Batumi · Tbilisi",
          format: "Full-cycle production",
          scale: "Two cities and full-cycle preparation.",
          role: "End-to-end production.",
          responsibilities: ["Planning", "Capture", "Broadcast", "Final delivery"],
          result: "A complete production pipeline for projects in Batumi and Tbilisi.",
          coverSrc: "/clients/gama.png",
          mediaFit: "contain",
        },
        {
          id: "ifc",
          title: "IFC",
          locationYear: "Tbilisi Sport Palace · Sold out",
          format: "Large arena broadcast",
          scale: "Sold-out Tbilisi Sport Palace.",
          role: "Full-cycle production.",
          responsibilities: ["Arena infrastructure", "Multi-camera output", "Live coordination"],
          result: "A full production setup for a sold-out Sport Palace event.",
          visualLabel: "Arena Production",
        },
        {
          id: "eastvswest-armwrestling",
          title: "EASTVSWEST ARMWRESTLING",
          locationYear: "Batumi Sport Palace · Batumi",
          format: "Sports event broadcast · Armwrestling",
          scale: "3,000+ online viewers.",
          role: "Full-cycle broadcast production.",
          responsibilities: ["Multicam broadcast", "Stage design", "Technical equipment"],
          result: "Delivered stage design, technical equipment and multi-camera coverage for the event.",
          note: "Client: a US-based company.",
        },
        {
          id: "sepultura",
          title: "Sepultura",
          locationYear: "1000 attendees",
          format: "Concert live production",
          scale: "1000 attendees on site.",
          role: "Video production.",
          responsibilities: ["Live coverage", "Stage dynamics", "Recording"],
          result: "Reliable concert coverage for an international artist.",
          coverSrc: "/clients/sepultura.png",
          mediaFit: "contain",
        },
        {
          id: "poshlaya-molly",
          showreel: "/cases/poshlaya-molly",
          title: "Poshlaya Molly",
          locationYear: "Tbilisi · 2025 · 2026",
          format: "Concert live production",
          scale: "3,500 attendees · Open air. Real-time visuals and a large LED wall.",
          role: "Video production and live coverage for two concerts in Tbilisi, in 2025 and 2026.",
          responsibilities: ["Drone filming", "Multi-camera filming", "Live broadcast direction", "LED screen and live graphics"],
          result: "Delivered two concerts in Tbilisi with synchronized screens, graphics, and live camera output.",
          coverSrc: "/clients/poshlaya-molly.png",
          mediaFit: "contain",
        },
        {
          id: "zemfira",
          showreel: "/cases/zemfira",
          showreelSeconds: 15,
          title: "ZEMFIRA",
          locationYear: "Tbilisi · Batumi · Yerevan · 2024–2025",
          format: "Concert series",
          scale: "All shows sold out, up to 40,000 people at once.",
          role: "Full-cycle video production across 2024–2025.",
          responsibilities: ["Multi-camera production", "Video and aerial coverage", "Three cities"],
          result: "Consistent visual quality and stable output across the full concert series.",
          coverSrc: "/cases/zemfira/showreel.jpg",
        },
        {
          id: "1winmediapoker",
          title: "1winmediapoker",
          locationYear: "Caster zone",
          format: "Poker media broadcast",
          scale: "Full broadcast development for the caster zone.",
          role: "Broadcast development.",
          responsibilities: ["Caster zone", "Live workflow", "Technical logic"],
          result: "A ready-to-run broadcast environment for a poker media project.",
          coverSrc: "/cases/esports-cover.jpg",
        },
      ];

  useEffect(() => {
    const revealHash = () => {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      const details = target.querySelector("details");
      if (details) details.open = true;
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    };
    revealHash();
    window.addEventListener("hashchange", revealHash);
    return () => window.removeEventListener("hashchange", revealHash);
  }, []);

  const featuredIds = ["zemfira", "g-gate", "poshlaya-molly"];
  const featured = featuredIds.flatMap(id => cases.filter(item => item.id === id));
  const archive = cases.filter(item => !featuredIds.includes(item.id));
  const facts = (item: CaseStudy) => (
    <div className={styles.facts}>
      <dl>
        <div><dt>{isRu ? "Формат" : "Format"}</dt><dd>{item.format}</dd></div>
        <div><dt>{isRu ? "Масштаб" : "Scale"}</dt><dd>{item.scale}</dd></div>
        <div><dt>{isRu ? "Наша роль" : "Our role"}</dt><dd>{item.role}</dd></div>
      </dl>
      <div><h3>{isRu ? "Что сделали" : "Key responsibilities"}</h3>
        <ul>{item.responsibilities.map(point => <li key={point}>{point}</li>)}</ul>
        {item.note && <p className={styles.note}>{item.note}</p>}
      </div>
    </div>
  );

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
          <div className={styles.featured}>
            {featured.map((item, index) => (
              <article id={item.id} key={item.id} className={`${styles.project} ${index === 0 ? styles.lead : ""}`}>
                <ShowreelVideo
                  src={item.showreel + "/showreel.mp4"}
                  poster={item.showreel + "/showreel.jpg"}
                  label={item.title + (isRu ? ": шоурил без звука" : ": silent showreel")}
                  isRu={isRu}
                />
                <div className={styles.caption}>
                  <div><h2>{item.title}</h2><p className={styles.location}>{item.locationYear}</p></div>
                  <p className={styles.description}>{item.role}</p>
                </div>
                <details className={styles.featureDetails}>
                  <summary>{isRu ? "О проекте" : "About the project"}<span aria-hidden="true" className={styles.plus}>+</span></summary>
                  {facts(item)}
                </details>
              </article>
            ))}
          </div>
          <div className={styles.archive}>
            <h2 className={styles.archiveTitle}>{isRu ? "Другие проекты" : "More projects"}</h2>
            {archive.map(item => (
              <article id={item.id} key={item.id} className={styles.archiveItem}>
                <details>
                  <summary>
                    <h3>{item.title}</h3>
                    <span className={styles.archiveLocation}>{item.locationYear}</span>
                    <span className={styles.plus} aria-hidden="true">+</span>
                  </summary>
                  <div className={styles.archiveBody}>
                    {item.still && <Image src={item.still} alt={isRu ? "Покерные фишки на турнире EAPT" : "Poker chips at EAPT"} width={1280} height={720} sizes="(max-width: 700px) 100vw, 560px" className={styles.still} />}
                    {facts(item)}
                  </div>
                </details>
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
