"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import SiteHeader from "./components/site-header";
import { useLanguage } from "./components/language-provider";
import { formatRuTypography } from "./lib/typography";

type ClientLogo = {
  name: string;
  src: string;
};

function ClientLogoTile({ logo }: { logo: ClientLogo }) {
  const { lang } = useLanguage();
  return (
    <Image
      src={logo.src}
      alt={lang === "ru" ? `Логотип ${logo.name}` : `${logo.name} logo`}
      width={240}
      height={110}
      className="mx-5 max-h-16 w-auto shrink-0 object-contain opacity-90 md:mx-7 md:max-h-20"
    />
  );
}

function resolveViewerLocation() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const city = timeZone?.split("/").pop()?.replace(/_/g, " ");
  return city ? city.toUpperCase() : "TBILISI";
}

function formatViewerTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Home() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [viewerSignal, setViewerSignal] = useState(() => ({
    location: resolveViewerLocation(),
    time: formatViewerTime(),
  }));
  const ru = (text: string) => formatRuTypography(text);
  const featuredCases = isRu
    ? [
        {
          id: "zemfira",
          title: "ZEMFIRA",
          meta: "Тбилиси · Батуми · Ереван",
          tags: [
            "40 000 зрителей",
            "Аншлаг",
            "Год сотрудничества"
          ],
          desc: "Подготовка и видеосъёмка серии концертов в трёх городах.",
          visualLabel: "Серия концертов"
        },
        {
          id: "eapt",
          title: "EAPT",
          meta: "World Poker Tour · 2 страны",
          tags: [
            "2 страны",
            "3 года",
            "POVProduction"
          ],
          desc: "Трансляции международной покерной серии совместно с POVProduction.",
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
          meta: "Tbilisi · Batumi · Yerevan",
          tags: ["40,000 people", "Sold out", "Year-long partnership"],
          desc: "Full-cycle video production for a three-city concert series.",
          visualLabel: "Concert Series",
        },
        {
          id: "eapt",
          title: "EAPT",
          meta: "World Poker Tour · 2 countries",
          tags: ["Top 3 WPT", "3 years", "POVProduction"],
          desc: "Long-term poker broadcast project developed with POVProduction.",
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
    const updateSignal = () => {
      setViewerSignal({
        location: resolveViewerLocation(),
        time: formatViewerTime(),
      });
    };

    updateSignal();
    const timer = window.setInterval(updateSignal, 1000);
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
      setFormMessage(data?.message || (isRu ? "Спасибо! Ответим в течение 24 часов." : "Sent. We’ll reply within 24 hours."));
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

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50 selection:bg-indigo-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
           }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[-100px] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
            </div>
      <SiteHeader />

      <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:px-8">
          <div className="relative z-10 md:col-span-12">
            {!isRu ? <p className="mb-3 text-sm text-zinc-300">Based in Tbilisi · Working worldwide</p> : null}

            <h1 className="title-hero">
              {isRu
                ? ru("Съёмка мероприятий и прямые трансляции")
                : "High-end live event & broadcast production that feels effortless."}
            </h1>

            <p className="reading-copy mt-5">
              {isRu
                ? ru("Концерты, конференции, фестивали, спорт и киберспорт. Берём на себя подготовку, съёмку и эфир. Работаем в Европе, СНГ и по всему миру.")
                : "Conferences, concerts & festivals, esports and large-scale events. Full-cycle delivery from technical design to final output across the EU, CIS, and worldwide."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white transition-colors hover:from-indigo-300 hover:to-violet-300"
              >
                {isRu ? "Обсудить проект" : "Discuss your event"}
              </a>
              <a
                href="/work"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-indigo-300/50 hover:bg-white/10"
              >
                {isRu ? "Наши проекты" : "View case studies"}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "250+", v: isRu ? "завершённых проектов" : "projects delivered" },
                { k: "8", v: isRu ? "лет опыта" : "years experience" },
                { k: isRu ? "9 900+" : "9,900+", v: isRu ? "часов прямого эфира" : "hours live" },
              ].map((item) => (
                <div
                  key={item.v}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-red-400/80 shadow-[0_0_14px_rgba(248,113,113,0.8)]" />
                  <div className="text-2xl font-semibold">{item.k}</div>
                  <div className="mt-1 text-xs text-zinc-300">{item.v}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Proof points */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-10 sm:px-6 md:pb-16 lg:px-8">
        <div className="accent-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] py-7">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
               style={{
                 backgroundImage:
                   "linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                 backgroundSize: "42px 42px",
               }}
          />
          <div className="relative flex flex-col gap-5 px-5 sm:px-7 md:flex-row md:items-end md:justify-between">
            <h2 className="title-section max-w-3xl">
              {isRu
                ? "Нам доверяют"
                : "Trusted by projects and formats where mistakes are not an option."}
            </h2>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300 sm:flex sm:flex-wrap sm:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-400/10 px-3 py-2 text-red-100">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-400 shadow-[0_0_16px_rgba(248,113,113,0.95)]" />
                REC
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{isRu ? "ЭФИР" : "LIVE"}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{isRu ? "КАМЕРА 03" : "CAM 03"}</span>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-emerald-100">{isRu ? "СИГНАЛ В НОРМЕ" : "SIGNAL OK"}</span>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-emerald-100">{isRu ? "СИГНАЛ СТАБИЛЕН" : "SIGNAL LOCKED"}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{viewerSignal.location}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{viewerSignal.time}</span>
              <span className="col-span-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:col-span-1">{isRu ? "ЗАДЕРЖКА 0,2 с" : "LATENCY 0.2s"}</span>
            </div>
            </div>

          <div className="relative left-1/2 mt-7 w-screen -translate-x-1/2 overflow-hidden py-5">
            <div className="flex w-max animate-logo-marquee items-center">
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <ClientLogoTile key={`${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="title-section">{isRu ? "Что делаем" : "What we do"}</h2>
            <p className="reading-copy mt-3 text-sm">
              {isRu
                ? ru("Head Production — команда съёмки и прямых трансляций. Отвечаем за технику и эфир, чтобы вы могли сосредоточиться на самом событии.")
                : "Head Production is a live event and broadcast production company. We handle the technical complexity so organizers can focus on the event itself — and the audience gets a smooth, high-quality live experience."}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <p className="reading-copy text-sm text-zinc-200">
                {isRu
                  ? ru("Планируем работу на площадке, снимаем, готовим графику и ведём трансляцию. Согласовываем каждый этап — от подготовки и застройки до передачи материалов.")
                  : "From venue planning and signal routing to live directing, graphics, and multi-platform streaming — we deliver end-to-end production with clear communication and predictable results."}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  isRu ? "Подготовка и технический план" : "Pre-production & technical design",
                  isRu ? "Многокамерная съёмка и режиссура" : "Multi-camera live directing",
                  isRu ? "Эфирная графика и материалы партнёров" : "Broadcast graphics & sponsor integration",
                  isRu ? "Трансляция, запись и монтаж" : "Streaming + recording + deliverables",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="title-section">{isRu ? "Услуги" : "Services"}</h2>
            <p className="reading-copy-muted mt-2 text-sm">
              {isRu
                ? ru("Подбираем команду и оборудование под вашу площадку и формат.")
                : "Full-cycle live production, scaled to your venue and format."}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
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
          ].map((s) => (
            <div key={s.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="title-card">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="accent-border rounded-3xl border border-indigo-300/25 bg-gradient-to-r from-indigo-400/15 to-violet-400/15 p-6 md:p-10">
          <p className="title-section text-white">
            {isRu
              ? ru("Один стандарт качества для разных событий. Способ работы подбираем под вашу задачу.")
              : "Same standards, different formats. We adapt the workflow to the event, not the other way around."}
          </p>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="title-section mt-3">
              {isRu ? "Недавние проекты" : "A few recent productions."}
            </h2>
            <p className="reading-copy-muted mt-2 text-sm">
              {isRu
                ? ru("Несколько примеров нашей работы. По запросу покажем фотографии, состав оборудования и подробности съёмки.")
                : "Highlights from recent productions. We can expand these into full case studies with photos, setup details, gear lists, and outcomes."}
            </p>
          </div>
          <a
            href="/work"
            className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:mt-0"
          >
            {isRu ? "Все проекты" : "View all case studies"}
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {featuredCases.map((p) => (
            <div
              key={p.title}
              className="accent-border relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="relative">
                {"imageSrc" in p && p.imageSrc ? (
                  <div className="mb-5 flex aspect-[16/8] items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/40 px-6">
                    <Image src={p.imageSrc} alt={isRu ? p.title : `${p.title} visual`} width={220} height={96} className="max-h-16 w-auto object-contain" />
                  </div>
                ) : "visualLabel" in p && p.visualLabel ? (
                  <div className="mb-5 flex aspect-[16/8] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-400/15 via-zinc-900/70 to-violet-400/15 px-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-100/90">{p.visualLabel}</p>
                  </div>
                ) : null}

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-zinc-400">{p.meta}</p>
                </div>

                <h3 className="title-card mt-4">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={`/work#${p.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-white"
                >
                  {isRu ? "Подробнее" : "View details"} <span className="text-zinc-400">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core team */}
      <section id="founders" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 className="title-section text-center">{isRu ? "Команда" : "Core team"}</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
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
          ].map((f) => (
            <div key={f.name} className="accent-border rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-xl">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-zinc-900/70 p-1 ring-1 ring-white/15">
                  {f.photo ? (
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={192}
                      height={192}
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  ) : (
                    <span className="text-3xl font-semibold text-zinc-500">MB</span>
                  )}
                </div>
                <div className="mt-4 text-base font-semibold">{f.name}</div>
                <div className="mt-1 text-sm text-zinc-300">{f.role}</div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 underline decoration-zinc-500/60 underline-offset-4 transition-colors hover:text-indigo-200 hover:decoration-indigo-200/80"
                >
                  {isRu ? "Резюме" : "View CV"} <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 className="title-section">{isRu ? "Как работаем" : "How it works"}</h2>
        <p className="reading-copy-muted mt-2 text-sm">
          {isRu
            ? ru("Заранее согласовываем этапы, сроки и обязанности команды.")
            : "Clear steps, predictable delivery, and no surprises on show day."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
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
          ].map((p) => (
            <div key={p.n} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-zinc-400">{p.n}</div>
              <div className="mt-2 text-sm font-semibold">{p.t}</div>
              <div className="mt-2 text-sm text-zinc-300">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="title-section">{isRu ? "Обсудим проект" : "Let's talk"}</h2>
              <p className="reading-copy-muted mt-2 text-sm">
                {isRu
                  ? ru("Расскажите о событии. Предложим оборудование и план работы, обозначим сроки.")
                  : "Tell us about the event — we’ll suggest the setup, timeline, and next steps."}
              </p>

              <div className="mt-6 space-y-2 text-sm text-zinc-300">
                <div>
                  <span className="text-zinc-400">{isRu ? "Почта:" : "Email:"}</span> hello@headprod.live
                </div>
                <div>
                  <span className="text-zinc-400">Telegram:</span> @Hipete_HP
                </div>
              </div>
            </div>

            <form onSubmit={submitContactForm} className="md:col-span-7">
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
                  <p className="text-xs text-zinc-400">{isRu ? "Ответим в течение 24 часов." : "We’ll reply quickly!"}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-4 py-10 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} Head Production</div>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-white" href="/services">
              {isRu ? "Услуги" : "Services"}
            </a>
            <a className="transition-colors hover:text-white" href="/work">
              {isRu ? "Проекты" : "Work"}
            </a>
            <a className="transition-colors hover:text-white" href="/about">
              {isRu ? "О нас" : "About"}
            </a>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}