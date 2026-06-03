 "use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

export default function AboutPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const metrics = [
    { k: isRu ? "8 лет" : "8 years", v: isRu ? ru("в продакшне мероприятий") : "experience in live production" },
    { k: "250+", v: isRu ? "реализованных проектов" : "projects delivered" },
    { k: "12+", v: isRu ? "стран и регионов" : "countries and regions" },
  ];

  const submitContactForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    setFormMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source: "about-contact",
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
      setFormMessage(data?.message || (isRu ? "Заявка отправлена. Мы ответим в течение 24 часов." : "Sent. We’ll reply within 24 hours."));
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
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <h1 className="title-hero mt-3">
          {isRu ? "Надёжный продакшн для live-событий" : "Reliable production for live events."}
        </h1>
        <p className="reading-copy mt-5 max-w-3xl">
          {isRu
            ? ru("Делаем надёжный продакшн для конференций, киберспорта, фестивалей и крупных трансляций. Уже реализовывали проекты в Европе, США, Грузии, Казахстане, ОАЭ, Сербии, Кыргызстане, Армении, России, Турции, Китае и Индонезии. Мы уверенно работаем со сложными задачами, постоянно учимся и развиваемся, потому что любим масштаб, темп и ответственность прямого эфира.")
            : "We build reliable production for conferences, esports, festivals, and large-scale broadcasts. We have delivered projects across Europe, the US, Georgia, Kazakhstan, the UAE, Serbia, Kyrgyzstan, Armenia, Russia, Turkey, China, and Indonesia. We are confident with complex briefs and keep learning because we love the scale, pace, and responsibility of live work."}
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.v} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl font-semibold text-white">{m.k}</div>
              <div className="mt-1 text-sm text-zinc-300">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="title-section text-center">{isRu ? "Команда" : "Core team"}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              name: isRu ? "Петр Бабицкий" : "Peter Babitsky",
              photo: "/founders/peter-babitsky.jpg",
              role: isRu ? "Продюсер · Режиссёр трансляций" : "Producer · Broadcast Director",
              since: isRu ? "В сфере с 2019 года" : "In the field since 2019",
            },
            {
              name: isRu ? "Никита Приймак" : "Nikita Priimak",
              photo: "/founders/nikita-priimak.jpg",
              role: isRu ? "Продюсер · Технический директор" : "Producer · Technical Director",
              since: isRu ? "В сфере с 2019 года" : "In the field since 2019",
            },
            {
              name: isRu ? "Максим Буторин" : "Maxim Butorin",
              photo: "/founders/maxim-butorin.jpg",
              role: isRu ? "Технический директор · Оператор-постановщик" : "Technical Director · DOP",
              since: isRu ? "В сфере с 2016 года" : "In the field since 2016",
            },
          ].map((f) => (
            <article key={f.name} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-zinc-900/70 p-1">
                  <Image src={f.photo} alt={f.name} width={192} height={192} className="h-full w-full rounded-full object-cover" />
                </div>
                <h3 className="title-card mt-4 text-zinc-100">{f.name}</h3>
                <p className="mt-1 text-sm text-zinc-300">{f.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{f.since}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1400px] gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="title-section">{isRu ? "Контакты" : "Contact"}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {isRu
                  ? ru("Расскажите о проекте — формате, площадке, датах и задачах. Мы предложим следующий шаг.")
                  : "Tell us about your project: format, venue, dates, and goals. We will suggest the next step."}
              </p>
              <div className="mt-5 space-y-2 text-sm text-zinc-300">
                <p><span className="text-zinc-400">Email:</span> hello@headprod.live</p>
                <p><span className="text-zinc-400">Telegram:</span> @Hipete_HP</p>
              </div>
            </div>

            <form onSubmit={submitContactForm} className="grid gap-3 md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
                  placeholder={isRu ? "Имя" : "Name"}
                />
                <input
                  name="contact"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
                  placeholder={isRu ? "WhatsApp, Telegram или Email" : "WhatsApp / Telegram / Email"}
                />
              </div>
              <textarea
                name="message"
                required
                className="min-h-[130px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
                placeholder={isRu ? "Формат, площадка, дата, количество гостей, что нужно снять или транслировать" : "Format, venue, date, audience size, what you need captured or streamed"}
              />
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
              <label className="mt-1 flex items-start gap-2">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-white/30 bg-zinc-900 accent-indigo-400"
                />
                <span className="text-xs text-zinc-400">
                  {isRu ? "Я согласен(а) на обработку персональных данных в соответствии с " : "I agree to the processing of personal data according to the "}
                  <a href="/privacy" className="underline decoration-zinc-500/70 underline-offset-2 hover:text-zinc-200">
                    {isRu ? "политикой конфиденциальности" : "privacy policy"}
                  </a>
                  .
                </span>
              </label>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="interactive-gradient inline-flex justify-center rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formState === "loading" ? (isRu ? "Отправка..." : "Sending...") : isRu ? "Отправить заявку" : "Send request"}
              </button>

              <div aria-live="polite" className="mt-1">
                {formState === "success" ? (
                  <div className="rounded-2xl border border-indigo-300/25 bg-indigo-300/10 px-4 py-3 text-sm text-zinc-100">
                    <div className="font-semibold">{isRu ? "Заявка отправлена" : "Request sent"}</div>
                    <div className="mt-1 text-sm text-zinc-200">{formMessage}</div>
                  </div>
                ) : formState === "error" ? (
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-zinc-100">
                    <div className="font-semibold">{isRu ? "Не отправилось" : "Submission failed"}</div>
                    <div className="mt-1 text-sm text-zinc-200">{formMessage}</div>
                  </div>
                ) : (
                  <p className="text-xs text-zinc-400">{isRu ? "Ответим быстро!" : "We’ll reply quickly!"}</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="title-section">{isRu ? "Хотите работать с нами?" : "Want to work with us?"}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            {isRu
              ? ru("Мы всегда в поиске талантливых операторов, инженеров, режиссёров и специалистов по трансляциям — под отдельные проекты и на постоянное сотрудничество. Пишите на почту и приложите ссылки на работы.")
              : "We are always looking for talented operators, engineers, directors, producers, and live production specialists for project-based work and long-term collaboration. Email us with a short intro, your experience, city, and links to your work."}
          </p>
          <a
            href="mailto:hello@headprod.live?subject=Work%20with%20Head%20Production"
            className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-indigo-400 to-violet-400 px-5 py-3 text-sm font-semibold text-white transition-colors hover:from-indigo-300 hover:to-violet-300"
          >
            hello@headprod.live
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-4 py-10 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>Head Production 2026 · Georgia · Tbilisi</div>
          <Link href="/privacy" className="transition-colors hover:text-white">
            {isRu ? "Политика конфиденциальности" : "Privacy Policy"}
          </Link>
        </div>
      </footer>
      </div>
    </main>
  );
}
