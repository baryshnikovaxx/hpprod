import Image from "next/image";
import Link from "next/link";
import EstimateForm from "./estimate-form";
import LandingHeroVideo from "./landing-hero-video";
import { landingRegions, type LandingRegion, type LandingVariant } from "../lib/landing";
import base from "./service-landing.module.css";
import s from "./compact-landing.module.css";

type Props = { kind: "conference" | "international" | "concert"; region?: LandingRegion; variant?: LandingVariant };

const conferenceCases = [
  {name: "INSFORUM", image: "/landing/insforum.jpg", alt: "Выступающие на сцене INSFORUM", fact: "1 300 участников · 2 дня · 7 камер", text: "Четыре камеры на сцене, три в YouTube-студии. Съёмка выступлений, дискуссий и режиссура программы."},
  {name: "Пётр Осипов", image: "/landing/petr-osipov.jpg", alt: "Пётр Осипов с микрофоном", fact: "Годовая программа · 2 года сотрудничества", text: "Съёмка образовательных событий, передача изображения и координация технической команды."},
];
const concertCases = [
  {name: "Пошлая Молли", image: "/cases/poshlaya-molly/showreel.jpg", alt: "Концерт группы Пошлая Молли", fact: "3 500 зрителей · Open air · 2025–2026", text: "Два концерта. Съёмка с камер и дрона, режиссура трансляции, изображение и графика для большого экрана."},
  {name: "Земфира", image: "/cases/zemfira/showreel.jpg", alt: "Сцена и аудитория на концерте Земфиры", fact: "Серия концертов · 2024–2025", text: "Многокамерная и аэросъёмка. Подготовка и работа видеокоманды на всей серии концертов."},
];

export default function CompactLanding({kind, region = "all", variant = "no_price"}: Props) {
  const concert = kind === "concert";
  const international = kind === "international";
  const service = concert ? "concert" : "conference";
  const leadRegion = international ? "international" : region;
  const cases = concert ? concertCases : conferenceCases;
  const scope = concert ? [
    ["Съёмка и запись", "Артисты, зал и детали сцены. Подберём камеры и позиции под площадку и программу."],
    ["Изображение на экраны", "Крупные планы и переключения в ритме концерта. Согласуем работу с командой сцены."],
    ["Прямая трансляция", "Соберём изображение и звук в эфир. Проверим подключение и передадим запись."],
  ] : [
    ["Подготовка", "Согласуем с площадкой камеры, звук и интернет. Составим смету и проверим подключения до начала."],
    ["Съёмка и эфир", "Покажем спикеров, слайды и вопросы из зала. При необходимости подключим удалённых участников."],
    ["Готовая запись", "Передадим запись программы. Отдельные доклады и короткие ролики включим в смету по запросу."],
  ];
  const faq = concert ? [
    ["Нужна только съёмка или только экраны?", "Можно заказать отдельную задачу или весь комплекс. Уточним формат, количество камер и результат, который нужен после концерта."],
    ["Что нужно для расчёта?", "Для начала достаточно контакта. Затем обсудим площадку, длительность и программу, нужны ли экраны, прямой эфир и монтаж. От этого зависит смета."],
    ["Как подготовить прямой эфир?", "До концерта проверим звук и интернет, согласуем платформу, технический план и доступные резервные решения. Публичную трансляцию и использование музыки согласовываем с организатором."],
  ] : [
    ["Можно заказать только видеосъёмку?", "Да. Можно снять выступления без прямого эфира или добавить удалённых спикеров. Состав работ подбираем под задачу."],
    [international ? "Как подготовить событие из другой страны?" : "Как начинается работа?", international ? "Обсудим задачу на русском, согласуем технические вопросы с вашей площадкой, состав команды и смету. Дату и место уточним лично — их не нужно указывать в форме." : "Уточним программу и условия площадки, предложим оборудование и команду. Дату и место можно обсудить после заявки."],
    ["Что влияет на стоимость?", "Длительность, количество залов и камер, выезд команды, прямой эфир и монтаж. До начала работ согласуем смету, а перед эфиром проверим подключения и обсудим резервные решения."],
  ];
  return <main id="page-top" lang="ru" className={`${base.page} ${s.page}`}>
    <header className={s.header}>
      <Link href="/" className={base.wordmark} aria-label="Head Production — главная">HEAD<br />PRODUCTION</Link>
      <a href="#estimate">Обсудить проект <span aria-hidden>↗</span></a>
    </header>
    <section className={s.hero} aria-labelledby="landing-title">
      <div className={s.heroCopy}>
        <p className={s.kicker}>{concert ? "Для организаторов концертов и артистов" : international ? "Для организаторов событий за рубежом" : landingRegions[region]}</p>
        <h1 id="landing-title">{concert ? <>Съёмка концертов<br />и прямые трансляции</> : <>Съёмка конференций<br />и прямой эфир</>}</h1>
        <p className={s.intro}>{concert ? "Сцена, зал, эмоции. Снимем концерт, выведем изображение на экраны и в эфир. От подготовки до готовой записи." : international ? "Русскоязычная команда для вашего события за рубежом. Согласуем технику с площадкой, снимем выступления и проведём трансляцию." : "Снимем выступления, покажем слайды и подключим онлайн-аудиторию. Подготовка, режиссура и запись — в одних руках."}</p>
        <a className={base.button} href="#estimate">Получить расчёт <span aria-hidden>↗</span></a>
        <p className={s.note}>Состав команды, техника и смета под вашу задачу</p>
        {!concert && variant === "from_price" && <p className={s.price}>Проекты от 600 € <span>Итоговая смета зависит от формата и состава работ</span></p>}
      </div>
      <div className={s.film}>
        <LandingHeroVideo {...(concert ? {src: "/cases/ggate/showreel.mp4", poster: "/cases/ggate/showreel.jpg"} : {})} />
        <p className={s.filmCaption}>{concert ? "GGate Awards · концертная программа" : "Кадры проектов нашей команды"}</p>
      </div>
    </section>
    <section className={s.proof} aria-labelledby="cases-title">
      <div className={s.sectionHeading}><h2 id="cases-title">{concert ? "Уже в нашем кадре" : "Наши проекты"}</h2><p><span>250+ проектов команды</span><br /><span>9900+ часов прямого эфира</span></p></div>
      <div className={s.cases}>{cases.map(project => <article key={project.name}>
        <Image src={project.image} alt={project.alt} width={960} height={540} loading="eager" sizes="(max-width: 700px) 90vw, 44vw" className={s.caseImage} />
        <p className={s.fact}>{project.fact}</p><h3>{project.name}</h3><p className={s.caseCopy}>{project.text}</p>
      </article>)}</div>
    </section>
    <section className={s.scope} aria-labelledby="included-title">
      <div className={s.sectionHeading}><h2 id="included-title">{concert ? "От сцены до зрителя" : "Берём на себя техническую часть"}</h2><p>{concert ? "Нужную задачу или весь проект" : "Вы ведёте событие — мы ведём эфир"}</p></div>
      <div className={s.scopeItems}>{scope.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className={s.questions}>{faq.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>)}</div>
    </section>
    <section id="estimate" className={`${base.contact} ${s.contact}`} aria-labelledby="estimate-title">
      <div><p className={s.kicker}>Начнём с вашей задачи</p><h2 id="estimate-title">{concert ? "Рассчитаем ваш концерт" : "Рассчитаем вашу конференцию"}</h2><p>Оставьте контакт — уточним задачу и подготовим смету. Дату, площадку и программу можно обсудить позже.</p><p className={base.reply}>Ответим шустро</p><a href="https://t.me/Hipete_HP" target="_blank" rel="noreferrer">Удобнее в Telegram? Напишите нам ↗</a></div>
      <EstimateForm service={service} region={leadRegion} variant={concert ? "no_price" : variant} layout="short" />
    </section>
  </main>;
}
