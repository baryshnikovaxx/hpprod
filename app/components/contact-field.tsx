"use client";
import { useEffect, useId, useRef, useState } from "react";
import { validateContact, type ContactMethod } from "../lib/contact-validation";
import s from "./contact-field.module.css";

export default function ContactField({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const id = useId();
  const [method, setMethod] = useState<ContactMethod>("phone");
  const [values, setValues] = useState({phone: "", email: "", telegram: ""});
  const [error, setError] = useState("");
  const field = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const form = field.current?.closest("form");
    const reset = () => { setValues({phone: "", email: "", telegram: ""}); setError(""); setMethod("phone"); };
    form?.addEventListener("reset", reset);
    return () => form?.removeEventListener("reset", reset);
  }, []);
  const ru = lang === "ru";
  const label = method === "phone" ? (ru ? "Номер телефона" : "Phone number") : method === "email" ? (ru ? "Электронная почта" : "Email") : "Telegram";
  const hint = method === "phone" ? (ru ? "С кодом страны: +7, +90, +995 или другим" : "Include country code: +7, +90, +995 or another") : method === "email" ? (ru ? "Рабочая или личная почта для ответа" : "An email address where we can reach you") : (ru ? "Имя пользователя из настроек Telegram, не имя профиля" : "Your Telegram username, not your display name");
  return <div className={s.field} ref={field}>
    <label htmlFor={`${id}-method`}>{ru ? "Как удобнее связаться?" : "How should we contact you?"}</label>
    <select id={`${id}-method`} name="contactMethod" value={method} onChange={e => {setMethod(e.target.value as ContactMethod); setError("");}}>
      <option value="phone">{ru ? "По телефону" : "Phone"}</option><option value="email">{ru ? "По почте" : "Email"}</option><option value="telegram">Telegram</option>
    </select>
    <label htmlFor={`${id}-contact`}>{label}</label>
    <input key={method} id={`${id}-contact`} name="contact" required maxLength={method === "phone" ? 40 : 200} type={method === "phone" ? "tel" : method === "email" ? "email" : "text"} autoComplete={method === "phone" ? "tel" : method === "email" ? "email" : "off"} autoCapitalize="none" spellCheck={false} value={values[method]} placeholder={method === "phone" ? "+7 916 123-45-67" : method === "email" ? "name@company.ru" : "@username"} aria-invalid={!!error} aria-describedby={`${id}-hint${error ? ` ${id}-error` : ""}`} onChange={e => {setValues({...values, [method]: e.target.value}); e.currentTarget.setCustomValidity(""); setError("");}} onBlur={e => {if (!e.target.value.trim()) return; const result = validateContact(e.target.value, method, lang); e.target.setCustomValidity(result.ok ? "" : result.error); setError(result.ok ? "" : result.error);}} onInvalid={e => {const result = validateContact(e.currentTarget.value, method, lang); setError(result.ok ? "" : result.error);}} />
    <small id={`${id}-hint`}>{hint}</small>
    {error && <p id={`${id}-error`} role="alert">{error}</p>}
  </div>;
}
