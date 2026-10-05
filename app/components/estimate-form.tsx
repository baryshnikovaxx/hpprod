"use client";
import { useRef, useState, type FormEvent } from "react";
import type { LandingRegion, LandingService, LandingVariant } from "../lib/landing";
import s from "./service-landing.module.css";

type AnalyticsWindow = Window & { dataLayer?: Record<string, unknown>[]; ym?: (...args: unknown[]) => void };
export default function EstimateForm({service, region, variant}: {service: LandingService; region: LandingRegion; variant: LandingVariant}) {
  const [status,setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error,setError] = useState("");
  const pending = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    pending.current = true; setStatus("sending"); setError("");
    const params = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "yclid"].map(key=>[key, (params.get(key)||"").slice(0,200)]));
    try {
      const response = await fetch("/api/contact", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({
        source: `landing:${service}:${region}:${variant}`, lang:"ru", name: values.get("name"), contact: values.get("contact"), consent: values.get("consent") === "on", website: values.get("website"),
        message: [`Запрос расчёта: ${service === "webinar" ? "вебинар" : "конференция"}`, `Дата: ${values.get("date") || "не определена"}`, `Город / формат: ${values.get("location") || "обсудим"}`, String(values.get("message") || "Детали обсудим при связи.")].join("\n"),
        attribution,
      })});
      const result = await response.json();
      if (!response.ok || !result.ok || !result.delivered) throw new Error(result.error || "Не удалось отправить. Попробуйте ещё раз или напишите нам в Telegram.");
      setStatus("success");
      // No form values or contact details go into analytics.
      const w = window as AnalyticsWindow;
      try {
        if (!/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) {
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({event:"generate_lead", lead_type:service, landing_region:region, price_variant:variant});
          w.ym?.(113227786, "reachGoal", "estimate_sent", {service, region, variant});
        }
      } catch { /* Analytics must never turn a delivered lead into a form error. */ }
      form.reset();
    } catch (err) {setError(err instanceof Error ? err.message : "Не удалось отправить заявку."); setStatus("error");}
    finally {pending.current = false;}
  }
  if(status === "success") return <div className={s.success} role="status"><h3>Заявка отправлена</h3><p>Спасибо! Свяжемся с вами и уточним детали для расчёта.</p></div>;
  return <form onSubmit={submit} className={`${s.form} ym-hide-content`} aria-label="Заявка на расчёт">
    <label>Ваше имя<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Как к вам обращаться" /></label>
    <label>Телефон, почта или Telegram<input name="contact" required minLength={3} maxLength={200} placeholder="Куда вам ответить" /></label>
    <div className={s.formRow}><label>Дата, если известна<input name="date" type="date" /></label><label>Город или онлайн<input name="location" maxLength={150} defaultValue={region === "moscow" ? "Москва" : region === "spb" ? "Санкт-Петербург" : region === "turkey" ? "Турция" : ""} placeholder="Где планируется событие" /></label></div>
    <label>Пару слов о проекте <span>(необязательно)</span><textarea name="message" rows={3} maxLength={2000} placeholder="Сколько спикеров, нужен ли прямой эфир, что важно учесть" /></label>
    <div className={s.trap} aria-hidden="true"><label>Ваш сайт<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className={s.consent}><input type="checkbox" name="consent" required /><span>Согласен на обработку данных для ответа на заявку. <a href="/privacy" target="_blank" rel="noreferrer">Политика конфиденциальности</a></span></label>
    {status === "error" && <p className={s.error} role="alert">{error}</p>}
    <button className={s.button} disabled={status === "sending"} type="submit">{status === "sending" ? "Отправляем…" : "Получить расчёт"}<span aria-hidden>↗</span></button>
  </form>;
}
