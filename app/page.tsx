"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import styles from "./home.module.css";
import SiteHeader from "./components/site-header";
import HeroFilm from "./components/hero-film";
import ShowreelVideo from "./components/showreel-video";
import { useLanguage } from "./components/language-provider";
import { formatRuTypography } from "./lib/typography";

export default function Home() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const ru = (text: string) => formatRuTypography(text);
  const featuredCases = [
    { id: "zemfira", title: "ZEMFIRA", video: "/cases/zemfira", description: isRu ? "СЕРИЯ КОНЦЕРТОВ · Тбилиси, Батуми, Ереван · 2024–2025" : "CONCERT SERIES · Tbilisi, Batumi, Yerevan · 2024–2025" },
    { id: "g-gate", title: "GGate Awards", video: "/cases/ggate", description: isRu ? "Церемония награждения и афтепати с концертами Яникса и Валерия Меладзе." : "Awards ceremony and afterparty with concerts by Yanix and Valery Meladze." },
    { id: "poshlaya-molly", title: isRu ? "Пошлая Молли" : "Poshlaya Molly", video: "/cases/poshlaya-molly", description: isRu ? "Два концерта в Тбилиси · 2025–2026. 3 500 зрителей, open air, съёмка с камер и дрона." : "Two concerts in Tbilisi · 2025–2026. 3,500 attendees, open air, camera and drone coverage." },
  ];

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
                ? "Съёмка с нескольких камер, режиссура и контроль сигнала — от подготовки до завершения эфира. Чётко и спокойно, без тупняка."
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
                ? "Сцена живёт своим ритмом. Ловим момент и держим зрителя в центре события."
                : "Fast-paced live coverage built for pressure, dynamic environments, and large audiences.",
            },
            {
              title: isRu ? "Эфирная графика и удалённые трансляции" : "Broadcast graphics & remote production",
              desc: isRu
                ? "Титры, табло и материалы партнёров в едином оформлении события. Подключаем удалённых участников и ведём эфир из любой точки."
                : "Lower thirds, scoreboards and sponsor graphics. Remote guests and live production from any location.",
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
                ? "Эфир закончился — история остаётся. Собираем лучшие моменты в монтаж и передаём готовые материалы."
                : "Clean recordings, highlight assets, and organized delivery for organizers and partners.",
            },
          ];
  const team = [
            {
              name: isRu ? "Петр Бабицкий" : "Peter Babitsky",
              photo: "/founders/peter-babitsky.jpg",
              role: isRu ? "Продюсер · Режиссёр трансляций" : "Producer · Broadcast Director",
              since: isRu ? "В сфере с 2016 года" : "In the field since 2016",
            },
            {
              name: isRu ? "Никита Приймак" : "Nikita Priimak",
              photo: "/founders/nikita-priimak.jpg",
              role: isRu ? "Продюсер · Технический директор" : "Producer · Technical Director",
              since: isRu ? "В сфере с 2016 года" : "In the field since 2016",
            },
            {
              name: isRu ? "Максим Буторин" : "Maxim Butorin",
              photo: "/founders/maxim-butorin.jpg",
              role: isRu ? "Технический директор · Оператор-постановщик" : "Technical Director · DOP",
              since: isRu ? "В сфере с 2016 года" : "In the field since 2016",
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
        <HeroFilm />
        <div className={styles.heroShade} />
        <div className={styles.heroTitle}>
          <h1 id="home-title">WE MAKE<br />IT LIVE</h1>
        </div>
        <div className={styles.heroBottom}>
          <p><span className={styles.mobileHeroLead}>{isRu ? "Съёмка мероприятий и прямые трансляции. " : "Live event filming and broadcasts. "}</span>{isRu
            ? ru("Концерты, конференции, фестивали, спорт и киберспорт. Берём на себя подготовку, съёмку и эфир. Работаем в Европе, СНГ и по всему миру.")
            : "Conferences, concerts & festivals, esports and large-scale events. Full-cycle delivery from technical design to final output across the EU, CIS, and worldwide."}</p>
          <div className={styles.heroActions}>
            <a className={styles.action} href="#contact">{isRu ? "Обсудить проект" : "Discuss your event"}<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 19 19 5M5 5h14v14" /></svg></a>
          </div>
        </div>
      </section>

      <section id="intro" className={styles.intro} aria-labelledby="intro-title">
        <div className={styles.sectionLabel}><h2 id="intro-title">{isRu ? "О нас" : "About us"}</h2></div>
        <div className={styles.introBody}>
          <p className={styles.statement}>{isRu ? ru("Мы — команда съёмки и прямых трансляций. Отвечаем за технику и эфир, чтобы вы могли сосредоточиться на самом событии.") : "Head Production is a live event and broadcast production company. We handle the technical complexity so organizers can focus on the event itself — and the audience gets a smooth, high-quality live experience."}</p>
          <p className={styles.bodyCopy}>{isRu ? ru("На площадке — по плану, в кадре — жизнь. Согласовываем каждый этап: от подготовки и застройки до передачи материалов.") : "From venue planning and signal routing to live directing, graphics, and multi-platform streaming — we deliver end-to-end production with clear communication and predictable results."}</p>
        </div>
        <dl className={styles.stats}>
          <div><dt>250+</dt><dd>{isRu ? "завершённых проектов" : "projects delivered"}</dd></div>
          <div><dt>8</dt><dd>{isRu ? "лет опыта" : "years experience"}</dd></div>
          <div><dt>{isRu ? "9 900+" : "9,900+"}</dt><dd>{isRu ? "часов прямого эфира" : "hours live"}</dd></div>
        </dl>
      </section>

      <section id="selected-work" className={styles.projects} aria-labelledby="projects-title">
        <div className={styles.sectionHead}>
          <div><h2 id="projects-title">{isRu ? "Вот, что мы делаем" : "Here’s what we do"}</h2></div>
          <a href="/work" className={styles.textLink}>{isRu ? "Все проекты" : "View all case studies"}<span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.videoProjects}>{featuredCases.map(project => (
          <article key={project.id} className={styles.videoProject}>
            <ShowreelVideo src={project.video + "/showreel.mp4"} poster={project.video + "/showreel.jpg"} label={project.title} isRu={isRu} />
            <div className={styles.videoCaption}>
              <h3><a href={"/work#" + project.id}>{project.title} ↗</a></h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}</div>
      </section>

      <section id="services" className={styles.services} aria-labelledby="services-title">
        <div className={styles.sectionLabel}><h2 id="services-title">{isRu ? "Услуги" : "Capabilities"}</h2><p>{isRu ? ru("Подбираем команду и оборудование под вашу площадку и формат.") : "Full-cycle live production, scaled to your venue and format."}</p><a className={styles.textLink} href="/services">{isRu ? "Все направления" : "Explore services"}<span aria-hidden="true">↗</span></a></div>
        <div className={styles.serviceIndex}>{capabilities.map(service=><details key={service.title} className={styles.service}>
          <summary><h3>{service.title}</h3><span className={styles.serviceToggle} aria-hidden="true">+</span></summary>
          <div className={styles.serviceDescription}><p>{service.desc}</p></div>
        </details>)}</div>
        <p id="industries" className={styles.industries}>{isRu ? ru("Один стандарт качества для разных событий. Способ работы подбираем под вашу задачу.") : "Same standards, different formats. We adapt the workflow to the event, not the other way around."}</p>
      </section>

      <section id="founders" className={styles.team} aria-labelledby="team-title">
        <div className={styles.sectionHead}><div><h2 id="team-title">{isRu ? "По ту сторону эфира" : "Behind the live"}</h2></div><a href="/about" className={styles.textLink}>{isRu ? "О нас" : "About us"}<span aria-hidden="true">↗</span></a></div>
        <div className={styles.teamPhotos}>{team.map(person=><figure key={person.name} className={styles.teamPerson}>
          <div className={styles.teamImage}><Image src={person.photo} alt={person.name} fill sizes="(max-width: 700px) 96px, 176px" /></div>
          <figcaption><h3>{person.name}</h3><p>{person.role}</p><span className={styles.meta}>{person.since}</span></figcaption>
        </figure>)}</div>
      </section>

      <section className={styles.process} aria-labelledby="process-title"><div className={styles.sectionLabel}><h2 id="process-title">{isRu ? "Как работаем" : "How it works"}</h2><p>{isRu ? ru("Заранее согласовываем этапы, сроки и обязанности команды.") : "Clear steps, predictable delivery, and no surprises on show day."}</p></div><ol>{process.map(step=><li key={step.n}><h3>{step.t}</h3><p>{step.d}</p></li>)}</ol></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.contactHeading}><h2 id="contact-title">{isRu ? <>Обсудим<br />проект</> : <>Let’s<br />talk</>}</h2><p>{isRu ? ru("Расскажите о событии. Предложим оборудование и план работы, обозначим сроки.") : "Tell us about the event — we’ll suggest the setup, timeline, and next steps."}</p><div className={styles.contacts}><a href="mailto:hello@headprod.live">hello@headprod.live ↗</a><a href="https://t.me/Hipete_HP" target="_blank" rel="noreferrer">Telegram / @Hipete_HP ↗</a></div></div>
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
