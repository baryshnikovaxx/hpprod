"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import styles from "./home.module.css";
import SiteHeader from "./components/site-header";
import { useLanguage } from "./components/language-provider";
import { formatRuTypography } from "./lib/typography";

type ClientLogo = {
  name: string;
  src: string;
};

export default function Home() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [utcTime, setUtcTime] = useState("— — : — — : — —");
  const ru = (text: string) => formatRuTypography(text);
  const featuredCases = isRu
    ? [
        {
          id: "zemfira",
          title: "ZEMFIRA",
          meta: "Тбилиси · Батуми · Ереван · 2024–2025",
          tags: [
            "40 000 зрителей",
            "Аншлаг",
            "2024–2025"
          ],
          desc: "Подготовка и видеосъёмка серии концертов в трёх городах.",
          visualLabel: "Серия концертов"
        },
        {
          id: "eapt",
          title: "EAPT",
          meta: "Грузия · Армения",
          tags: [
            "2 страны",
            "3 года",
            "POVProduction"
          ],
          desc: "Три года сотрудничества, проекты в Грузии и Армении. Мы — эксклюзивный технический партнёр турнира. Трансляции проводим совместно с POVProduction.",
          imageSrc: "/clients/eapt.png"
        },
        {
          id: "adam-port",
          title: "Adam Port",
          meta: "6 500 гостей · 12 часов",
          tags: [
            "PTZ-камеры",
            "Прямой эфир",
            "6 500 гостей"
          ],
          desc: "12-часовая трансляция с дистанционно управляемыми PTZ-камерами.",
          visualLabel: "PTZ-съёмка"
        }
      ]
    : [
        {
          id: "zemfira",
          title: "ZEMFIRA",
          meta: "Tbilisi · Batumi · Yerevan · 2024–2025",
          tags: ["40,000 people", "Sold out", "2024–2025"],
          desc: "Full-cycle video production for a three-city concert series.",
          visualLabel: "Concert Series",
        },
        {
          id: "eapt",
          title: "EAPT",
          meta: "Georgia · Armenia",
          tags: ["2 countries", "3 years", "POVProduction"],
          desc: "Three years of collaboration on projects in Georgia and Armenia. We are the tournament’s exclusive technical partner, producing broadcasts with POVProduction.",
          imageSrc: "/clients/eapt.png",
        },
        {
          id: "adam-port",
          title: "Adam Port",
          meta: "6500 guests · 12 hours",
          tags: ["PTZ workflow", "Live broadcast", "Large audience"],
          desc: "Long-form broadcast with a PTZ workflow for a large-scale live event.",
          visualLabel: "PTZ Workflow",
        },
      ];
  const clientLogos: ClientLogo[] = [
    { name: "GGATE", src: "/clients/ggate.png" },
    { name: "GAMA", src: "/clients/gama.png" },
    { name: "Poshlaya Molly", src: "/clients/poshlaya-molly.png" },
    { name: "EAPT", src: "/clients/eapt.png" },
    { name: "SEPULTURA", src: "/clients/sepultura.png" },
    { name: "1WIN", src: "/clients/1win.png" },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setUtcTime(new Date().toISOString().slice(11, 19));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    setFormMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "home",
      lang,
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: String(formData.get("consent") ?? "") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as null | { ok?: boolean; error?: string; message?: string };
      if (!res.ok) {
        throw new Error(
          data?.error ||
            (isRu ? "Не удалось отправить заявку. Попробуйте ещё раз." : "Failed to submit request. Please try again."),
        );
      }

      form.reset();
      setFormState("success");
      setFormMessage(data?.message || (isRu ? "Спасибо! Ответим шустро." : "Sent. We’ll reply within 24 hours."));
    } catch (e) {
      setFormState("error");
      setFormMessage(
        e instanceof Error
          ? e.message
          : isRu
            ? "Не удалось отправить заявку. Попробуйте ещё раз."
            : "Failed to submit request. Please try again.",
      );
    }
  };


  const capabilities = [
            {
              title: isRu ? "Прямые трансляции" : "Live broadcast production",
              desc: isRu
                ? "Съёмка с нескольких камер, режиссура и контроль сигнала — от подготовки до завершения эфира."
                : "Multi-camera setup, directing, switching, monitoring — the full live control room workflow.",
            },
            {
              title: isRu ? "Конференции и гибридные события" : "Conferences & hybrid events",
              desc: isRu
                ? "Объединяем участников в зале и онлайн: подключаем выступающих, презентации и синхронный перевод."
                : "Presentations, remote speakers, translation channels, audience engagement, clean delivery.",
            },
            {
              title: isRu ? "Концерты, фестивали и киберспорт" : "Concerts, festivals, esports",
              desc: isRu
                ? "Передаём атмосферу события и держим темп трансляции — даже на большой площадке с насыщенной программой."
                : "Fast-paced live coverage built for pressure, dynamic environments, and large audiences.",
            },
            {
              title: isRu ? "Эфирная графика" : "Broadcast graphics",
              desc: isRu
                ? "Титры, табло и материалы партнёров в едином оформлении события."
                : "Lower thirds, overlays, scoreboards, sponsor placements, branded visual packages.",
            },
            {
              title: isRu ? "Трансляции на разные платформы" : "Streaming to any platform",
              desc: isRu
                ? "YouTube, Twitch и корпоративные площадки. При необходимости подключаем резервные каналы."
                : "YouTube, Twitch, corporate platforms — RTMP/SRT workflows, redundancy where needed.",
            },
            {
              title: isRu ? "Запись и монтаж" : "Recording & post-deliverables",
              desc: isRu
                ? "Сохраняем записи, монтируем лучшие моменты и передаём материалы организаторам и партнёрам."
                : "Clean recordings, highlight assets, and organized delivery for organizers and partners.",
            },
          ];
  const team = [
            {
              name: isRu ? "Петр Бабицкий" : "Peter Babitsky",
              photo: "/founders/peter-babitsky.jpg",
              role: isRu ? "Продюсер · Режиссёр трансляций" : "Producer · Broadcast Director",
              since: isRu ? "Работает с 2019 года" : "In the field since 2019",
            },
            {
              name: isRu ? "Никита Приймак" : "Nikita Priimak",
              photo: "/founders/nikita-priimak.jpg",
              role: isRu ? "Продюсер · Технический директор" : "Producer · Technical Director",
              since: isRu ? "Работает с 2019 года" : "In the field since 2019",
            },
            {
              name: isRu ? "Максим Буторин" : "Maxim Butorin",
              photo: "/founders/maxim-butorin.jpg",
              role: isRu ? "Технический директор · Оператор-постановщик" : "Technical Director · DOP",
              since: isRu ? "Работает с 2016 года" : "In the field since 2016",
            },
          ];
  const process = [
            {
              n: "01",
              t: isRu ? "Задача" : "Brief",
              d: isRu ? "Обсуждаем формат, площадку, дату и требования к трансляции." : "Format, venue, date, platforms, requirements.",
            },
            {
              n: "02",
              t: isRu ? "План" : "Design",
              d: isRu
                ? "Подбираем камеры, звук и графику. Готовим схему трансляции."
                : "Technical plan: cameras, audio, graphics, streaming.",
            },
            {
              n: "03",
              t: isRu ? "Подготовка" : "Setup",
              d: isRu ? "Устанавливаем оборудование, проверяем соединения и проводим репетицию." : "On-site build, routing, tests, rehearsals.",
            },
            {
              n: "04",
              t: isRu ? "Эфир" : "Live",
              d: isRu ? "Ведём трансляцию, следим за сигналом и координируем команду." : "Directing, monitoring, backups, comms.",
            },
            {
              n: "05",
              t: isRu ? "Материалы" : "Deliver",
              d: isRu ? "Передаём записи и смонтированные лучшие моменты." : "Recordings, highlights, assets, handover.",
            },
          ];

  return (
    <main className={styles.home}>
      <a className={styles.skipLink} href="#intro">{isRu ? "К содержанию" : "Skip to content"}</a>
      <SiteHeader variant="broadcast" />

      <section className={styles.hero} aria-labelledby="home-title">
        <Image src="/cases/esports-cover.jpg" alt={isRu ? "Рабочие места эфирной команды на мероприятии" : "Production crew at a live event"} fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroTop}>
          <span className={styles.meta}><i className={styles.recDot} aria-hidden="true" /> LIVE PRODUCTION</span>
          <span className={styles.meta}>TBILISI / WORLDWIDE</span>
        </div>
        <div className={styles.heroTitle}>
          <p className={styles.meta}>{isRu ? "Съёмка мероприятий и прямые трансляции" : "LIVE EVENT & BROADCAST"}</p>
          <h1 id="home-title">WE MAKE<br />IT LIVE</h1>
        </div>
        <div className={styles.heroBottom}>
          <p>{isRu
            ? ru("Концерты, конференции, фестивали, спорт и киберспорт. Берём на себя подготовку, съёмку и эфир. Работаем в Европе, СНГ и по всему миру.")
            : "Conferences, concerts & festivals, esports and large-scale events. Full-cycle delivery from technical design to final output across the EU, CIS, and worldwide."}</p>
          <div className={styles.heroActions}>
            <a className={styles.action} href="#contact">{isRu ? "Обсудить проект" : "Discuss your event"}<span aria-hidden="true">↗</span></a>
            <a className={styles.textLink} href="#selected-work">{isRu ? "Наши проекты" : "Selected work"}<span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className={styles.heroCaption}><span>HEAD PRODUCTION / {isRu ? "АРХИВ СЪЁМОК" : "PRODUCTION ARCHIVE"}</span><span>UTC <time suppressHydrationWarning>{utcTime}</time></span></div>
      </section>

      <section id="intro" className={styles.intro} aria-labelledby="intro-title">
        <div className={styles.sectionLabel}><span className={styles.meta}>01 / {isRu ? "СТУДИЯ" : "THE STUDIO"}</span><h2 id="intro-title">{isRu ? "О нас" : "About us"}</h2></div>
        <div className={styles.introBody}>
          <p className={styles.statement}>{isRu ? ru("Мы — команда съёмки и прямых трансляций. Отвечаем за технику и эфир, чтобы вы могли сосредоточиться на самом событии.") : "Head Production is a live event and broadcast production company. We handle the technical complexity so organizers can focus on the event itself — and the audience gets a smooth, high-quality live experience."}</p>
          <p className={styles.bodyCopy}>{isRu ? ru("Планируем работу на площадке, снимаем, готовим графику и ведём трансляцию. Согласовываем каждый этап — от подготовки и застройки до передачи материалов.") : "From venue planning and signal routing to live directing, graphics, and multi-platform streaming — we deliver end-to-end production with clear communication and predictable results."}</p>
          <ul className={styles.disciplines}>{[
            isRu ? "Подготовка и технический план" : "Pre-production & technical design",
            isRu ? "Многокамерная съёмка и режиссура" : "Multi-camera live directing",
            isRu ? "Эфирная графика и материалы партнёров" : "Broadcast graphics & sponsor integration",
            isRu ? "Трансляция, запись и монтаж" : "Streaming + recording + deliverables",
          ].map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <dl className={styles.stats}>
          <div><dt>250+</dt><dd>{isRu ? "завершённых проектов" : "projects delivered"}</dd></div>
          <div><dt>8</dt><dd>{isRu ? "лет опыта" : "years experience"}</dd></div>
          <div><dt>{isRu ? "9 900+" : "9,900+"}</dt><dd>{isRu ? "часов прямого эфира" : "hours live"}</dd></div>
        </dl>
      </section>

      <section id="selected-work" className={styles.projects} aria-labelledby="projects-title">
        <div className={styles.sectionHead}>
          <div><p className={styles.meta}>02 / {isRu ? "ПРОЕКТЫ" : "SELECTED WORK"}</p><h2 id="projects-title">{isRu ? "В центре события" : "Inside the moment"}</h2></div>
          <a href="/work" className={styles.textLink}>{isRu ? "Все проекты" : "View all case studies"}<span aria-hidden="true">↗</span></a>
        </div>
        <p className={styles.projectsLead}>{isRu ? ru("Несколько примеров нашей работы. По запросу покажем фотографии, состав оборудования и подробности съёмки.") : "Highlights from recent productions. We can expand these into full case studies with photos, setup details, gear lists, and outcomes."}</p>
        <article className={styles.mainProject}>
          <a className={styles.projectPhoto} href="/work#zemfira" aria-label={isRu ? "Проект ZEMFIRA — подробнее" : "ZEMFIRA — view details"}>
            <Image src="/cases/zemfira-cover.jpg" alt={isRu ? "Земфира на сцене" : "Zemfira on stage"} fill sizes="(max-width: 700px) 100vw, 92vw" />
            <span className={styles.photoLabel}>01 / {isRu ? "КОНЦЕРТНАЯ СЕРИЯ" : "CONCERT SERIES"}</span>
            <span className={styles.photoArrow} aria-hidden="true">↗</span>
          </a>
          <div className={styles.projectCaption}>
            <h3><a href="/work#zemfira">ZEMFIRA</a></h3>
            <div><p className={styles.meta}>{featuredCases[0].meta}</p><p>{featuredCases[0].desc}</p></div>
            <ul className={styles.projectFacts}>{featuredCases[0].tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
          </div>
        </article>
        <div className={styles.projectPair}>
          <article className={styles.pokerProject}>
            <div className={styles.pokerIdentity}><span className={styles.meta}>02 / POKER BROADCAST</span><Image src="/clients/eapt.png" alt="EAPT" width={537} height={242} sizes="(max-width: 700px) 70vw, 30vw" /><span className={styles.meta}>EAPT × POVPRODUCTION</span></div>
            <div className={styles.smallProjectCaption}><h3><a href="/work#eapt">EAPT <span aria-hidden="true">↗</span></a></h3><p className={styles.meta}>{featuredCases[1].meta}</p><p>{featuredCases[1].desc}</p><ul className={styles.inlineFacts}>{featuredCases[1].tags.map(tag=><li key={tag}>{tag}</li>)}</ul></div>
          </article>
          <article className={styles.musicProject}>
            <p className={styles.meta}>03 / {isRu ? "МУЗЫКА / ПРЯМОЙ ЭФИР" : "MUSIC / LIVE BROADCAST"}</p>
            <div className={styles.duration} aria-label={isRu ? "12 часов трансляции" : "12 hours live"}>12<span>H</span></div>
            <p className={styles.meta}>PTZ / {isRu ? "6 500 ГОСТЕЙ" : "6,500 GUESTS"}</p>
            <div className={styles.smallProjectCaption}><h3><a href="/work#adam-port">Adam Port <span aria-hidden="true">↗</span></a></h3><p>{featuredCases[2].desc}</p><ul className={styles.inlineFacts}>{featuredCases[2].tags.map(tag=><li key={tag}>{tag}</li>)}</ul></div>
          </article>
        </div>
        <div className={styles.clients}><p className={styles.meta}>{isRu ? "НАМ ДОВЕРЯЮТ" : "SELECTED CLIENTS"}</p><div>{clientLogos.map(logo=><Image key={logo.name} src={logo.src} alt={isRu ? 'Логотип '+logo.name : logo.name+' logo'} width={240} height={110} sizes="(max-width: 700px) 28vw, 12vw" />)}</div></div>
      </section>

      <section id="services" className={styles.services} aria-labelledby="services-title">
        <div className={styles.sectionLabel}><p className={styles.meta}>03 / CAPABILITIES</p><h2 id="services-title">{isRu ? "Услуги" : "Capabilities"}</h2><p>{isRu ? ru("Подбираем команду и оборудование под вашу площадку и формат.") : "Full-cycle live production, scaled to your venue and format."}</p><a className={styles.textLink} href="/services">{isRu ? "Все направления" : "Explore services"}<span aria-hidden="true">↗</span></a></div>
        <div className={styles.serviceIndex}>{capabilities.map((service,i)=><details key={service.title} className={styles.service}>
          <summary><span className={styles.meta}>{String(i+1).padStart(2,'0')}</span><h3>{service.title}</h3><span className={styles.serviceToggle} aria-hidden="true">+</span></summary>
          <div className={styles.serviceDescription}><p>{service.desc}</p></div>
        </details>)}</div>
        <p id="industries" className={styles.industries}>{isRu ? ru("Один стандарт качества для разных событий. Способ работы подбираем под вашу задачу.") : "Same standards, different formats. We adapt the workflow to the event, not the other way around."}</p>
      </section>

      <section id="founders" className={styles.team} aria-labelledby="team-title">
        <div className={styles.sectionHead}><div><p className={styles.meta}>04 / {isRu ? "КОМАНДА" : "THE CREW"}</p><h2 id="team-title">{isRu ? "По ту сторону эфира" : "Behind the live"}</h2></div><a href="/about" className={styles.textLink}>{isRu ? "О нас" : "About us"}<span aria-hidden="true">↗</span></a></div>
        <div className={styles.teamPhotos}>{team.map((person,i)=><figure key={person.name} className={styles.teamPerson}>
          <div className={styles.teamImage}><Image src={person.photo} alt={person.name} fill sizes={i===2 ? '(max-width: 700px) 44vw, 45vw' : '(max-width: 700px) 90vw, 23vw'} /><span className={styles.photoLabel}>CREW / 0{i+1}</span></div>
          <figcaption><h3>{person.name}</h3><p>{person.role}</p><span className={styles.meta}>{person.since}</span><a className={styles.textLink} href="#contact">{isRu ? "Резюме" : "View CV"}<span aria-hidden="true">↗</span></a></figcaption>
        </figure>)}</div>
      </section>

      <section className={styles.process} aria-labelledby="process-title"><div className={styles.sectionLabel}><p className={styles.meta}>05 / WORKFLOW</p><h2 id="process-title">{isRu ? "Как работаем" : "How it works"}</h2><p>{isRu ? ru("Заранее согласовываем этапы, сроки и обязанности команды.") : "Clear steps, predictable delivery, and no surprises on show day."}</p></div><ol>{process.map(step=><li key={step.n}><span className={styles.meta}>{step.n}</span><h3>{step.t}</h3><p>{step.d}</p></li>)}</ol></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.contactHeading}><p className={styles.meta}><i className={styles.recDot} aria-hidden="true" /> {isRu ? "СЛЕДУЮЩИЙ ПРОЕКТ" : "YOUR NEXT PRODUCTION"}</p><h2 id="contact-title">{isRu ? <>Обсудим<br />проект</> : <>Let’s<br />talk</>}</h2><p>{isRu ? ru("Расскажите о событии. Предложим оборудование и план работы, обозначим сроки.") : "Tell us about the event — we’ll suggest the setup, timeline, and next steps."}</p><div className={styles.contacts}><a href="mailto:hello@headprod.live">hello@headprod.live ↗</a><a href="https://t.me/Hipete_HP" target="_blank" rel="noreferrer">Telegram / @Hipete_HP ↗</a></div></div>
<form onSubmit={submitContactForm} className={styles.form}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Ваше имя" : "Name"}</div>
                  <input
                    name="name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder={isRu ? "Ваше имя" : "Your name"}
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">{isRu ? "Как с вами связаться" : "Preferred contact"}</div>
                  <input
                    name="contact"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder={isRu ? "Почта, телефон или имя в Telegram" : "WhatsApp / Telegram / Email + your handle"}
                  />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <div className="text-xs text-zinc-400">{isRu ? "О проекте" : "Message"}</div>
                  <textarea
                    name="message"
                    required
                    className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder={
                      isRu
                        ? "Формат, площадка, дата и что нужно снять или показать в эфире"
                        : "Format, platforms, venue, number of speakers, anything important…"
                    }
                  />
                </label>
                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
                <label className="flex items-start gap-2 sm:col-span-2">
                  <input
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-zinc-900 accent-indigo-400"
                  />
                  <span className="text-xs text-zinc-400">
                    {isRu ? "Даю согласие на обработку персональных данных в соответствии с " : "I agree to the processing of personal data according to the "}
                    <a href="/privacy" className="underline decoration-zinc-500/70 underline-offset-2 hover:text-zinc-200">
                      {isRu ? "политикой конфиденциальности" : "privacy policy"}
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white transition-colors hover:from-indigo-300 hover:to-violet-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formState === "loading" ? (isRu ? "Отправляем…" : "Sending...") : isRu ? "Отправить заявку" : "Send request"}
                </button>
              </div>

              <div aria-live="polite" className="mt-4">
                {formState === "success" ? (
                  <div className="rounded-2xl border border-indigo-300/25 bg-indigo-300/10 px-4 py-3 text-sm text-zinc-100">
                    <div className="font-semibold">{isRu ? "Заявка отправлена" : "Request sent"}</div>
                    <div className="mt-1 text-sm text-zinc-200">{formMessage}</div>
                  </div>
                ) : formState === "error" ? (
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-zinc-100">
                    <div className="font-semibold">{isRu ? "Не удалось отправить заявку" : "Submission failed"}</div>
                    <div className="mt-1 text-sm text-zinc-200">{formMessage}</div>
                  </div>
                ) : (
                  <p className="text-xs text-zinc-400">{isRu ? "Ответим шустро." : "We’ll reply quickly!"}</p>
                )}
              </div>
            </form>
      </section>
      <footer className={styles.footer}><a href="#home-title" className={styles.wordmark}>HEAD<br />PRODUCTION</a><div><span className={styles.meta}>© {new Date().getFullYear()} HEAD PRODUCTION</span><nav aria-label={isRu ? "Навигация внизу страницы" : "Footer navigation"}><a href="/services">{isRu ? "Услуги" : "Services"}</a><a href="/work">{isRu ? "Проекты" : "Work"}</a><a href="/about">{isRu ? "О нас" : "About"}</a></nav></div><a href="#home-title" className={styles.meta}>{isRu ? "НАВЕРХ" : "BACK TO TOP"} ↑</a></footer>
    </main>
  );
}
