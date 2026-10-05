"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import type { LandingRegion, LandingService, LandingVariant } from "../lib/landing";
import s from "./service-landing.module.css";
import ContactField from "./contact-field";
import { validateContact, validContactName } from "../lib/contact-validation";

type AnalyticsWindow = Window & { dataLayer?: Record<string, unknown>[]; ym?: (...args: unknown[]) => void };
export default function EstimateForm({service, region, variant, layout = "full"}: {service: LandingService; region: LandingRegion; variant: LandingVariant; layout?: "full" | "short"}) {
  const [status,setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error,setError] = useState("");
  const pending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  function track(event: string, extra: Record<string, string> = {}) {
    try {
      if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) return;
      const w = window as AnalyticsWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({event, lead_type: service, landing_region: region, price_variant: variant, landing_layout: layout, ...extra});
      w.ym?.(113227786, "reachGoal", event, {service, region, variant, landing_layout: layout, ...extra});
    } catch { /* Tracking must not interrupt the form. */ }
  }
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      try {
        if (!/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) {
          const w = window as AnalyticsWindow;
          w.dataLayer = w.dataLayer || [];
          w.dataLayer.push({event: "estimate_form_view", lead_type: service, landing_region: region, price_variant: variant, landing_layout: layout});
          w.ym?.(113227786, "reachGoal", "estimate_form_view", {service, region, variant, landing_layout: layout});
        }
      } catch { /* Best effort analytics. */ }
      observer.disconnect();
    }, {threshold: 0.1});
    observer.observe(form);
    return () => observer.disconnect();
  }, [service, region, variant, layout]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const contact = validateContact(values.get("contact"), values.get("contactMethod"));
    if (!validContactName(String(values.get("name") || "")) || !contact.ok) {
      track("estimate_validation_error", {field: !contact.ok ? "contact" : "name"});
      setError(!contact.ok ? contact.error : "Укажите имя: минимум два символа, включая буквы."); setStatus("error");
      (form.elements.namedItem(!contact.ok ? "contact" : "name") as HTMLInputElement)?.focus();
      return;
    }
    pending.current = true; setStatus("sending"); setError("");
    const params = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "yclid"].map(key=>[key, (params.get(key)||"").slice(0,200)]));
    try {
      const response = await fetch("/api/contact", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({
        source: `landing:${service}:${region}:${variant}${layout === "short" ? ":short" : ""}`, lang:"ru", name: String(values.get("name")).trim(), contact: contact.value, contactMethod: contact.method, consent: values.get("consent") === "on", website: values.get("website"),
        message: [`Запрос расчёта: ${{webinar: "вебинар", conference: "конференция", concert: "концерт"}[service]}`, String(values.get("message") || "Детали обсудим при связи.")].join("\n"),
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
          w.dataLayer.push({event:"generate_lead", lead_type:service, landing_region:region, price_variant:variant, landing_layout:layout});
          w.ym?.(113227786, "reachGoal", "estimate_sent", {service, region, variant, landing_layout:layout});
        }
      } catch { /* Analytics must never turn a delivered lead into a form error. */ }
      form.reset();
    } catch (err) {track("estimate_delivery_error"); setError(err instanceof Error ? err.message : "Не удалось отправить заявку."); setStatus("error");}
    finally {pending.current = false;}
  }
  if(status === "success") return <div className={s.success} role="status"><h3>Заявка получена</h3><p>Свяжемся выбранным способом, уточним задачу и подготовим смету.</p></div>;
  return <form ref={formRef} onInput={() => {if (!started.current) {started.current = true; track("estimate_form_start");}}} onInvalid={(event) => {const field = (event.target as HTMLInputElement).name; if (["name", "contact", "consent"].includes(field)) track("estimate_validation_error", {field});}} onSubmit={submit} className={`${s.form} ym-hide-content`} aria-label="Заявка на расчёт">
    <label>Ваше имя<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Как к вам обращаться" /></label>
    <ContactField />
    <label>Пару слов о проекте <span>(необязательно)</span><textarea name="message" rows={layout === "short" ? 2 : 3} maxLength={2000} placeholder={service === "concert" ? "Что за концерт, нужны ли экраны, запись или прямой эфир" : "Сколько спикеров, нужен ли прямой эфир, что важно учесть"} /></label>
    <div className={s.trap} aria-hidden="true"><label>Ваш сайт<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className={s.consent}><input type="checkbox" name="consent" required /><span>Согласен на обработку данных для ответа на заявку. <a href="/privacy" target="_blank" rel="noreferrer">Политика конфиденциальности</a></span></label>
    {status === "error" && <p className={s.error} role="alert">{error}</p>}
    <button className={s.button} disabled={status === "sending"} type="submit">{status === "sending" ? "Отправляем…" : "Получить расчёт"}<span aria-hidden>↗</span></button>
  </form>;
}
