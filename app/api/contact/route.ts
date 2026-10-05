import { NextResponse } from "next/server";
import { validateContact, validContactName } from "../../lib/contact-validation";

type ContactPayload = {
  source?: string;
  lang?: "ru" | "en";
  name?: string;
  contact?: string;
  contactMethod?: string;
  message?: string;
  consent?: boolean | string;
  website?: string; // honeypot
  attribution?: Record<string, string>;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function resolveConsent(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === "1";
}

type CleanPayload = Required<Omit<ContactPayload, "website" | "attribution">> & { attribution: Record<string, string> };
function formatText(data: CleanPayload): string {
  return [
    `New contact request`,
    ``,
    `Source: ${data.source}`,
    `Lang: ${data.lang}`,
    `Name: ${data.name}`,
    `Contact: ${data.contact}`,
    `Consent: ${data.consent ? "yes" : "no"}`,
    `Message:`,
    data.message,
    "",
    ...Object.entries(data.attribution).map(([key, value]) => `${key}: ${value}`),
  ].join("\n");
}

async function sendToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) return false;
  const result = await response.json();
  return result.ok === true;
}

async function sendToWebhook(payload: object) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(10000),
  });
  return response.ok;
}

export async function POST(req: Request) {
  let responseLang: "ru" | "en" = "en";
  try {
    const raw = await req.text();
    if (raw.length > 16000) return NextResponse.json({ ok: false, error: "Заявка слишком длинная." }, { status: 413 });
    let body: ContactPayload;
    try {
      body = JSON.parse(raw);
      if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("Invalid payload");
    } catch { return NextResponse.json({ ok: false, error: "Некорректная заявка." }, { status: 400 }); }

    // Silent bot trap
    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const resolvedLang: "en" | "ru" = clean(body.lang) === "en" ? "en" : "ru";
    responseLang = resolvedLang;
    const t = {
      consentRequired:
        resolvedLang === "ru"
          ? "Для отправки заявки нужно согласие на обработку персональных данных."
          : "Please agree to the privacy policy.",
      missingFields:
        resolvedLang === "ru"
          ? "Укажите имя, контакт для связи и кратко опишите задачу."
          : "Please fill in name, contact and a brief message.",
      success:
        resolvedLang === "ru"
          ? "Спасибо! Ответим шустро."
          : "Sent. We’ll get back to you soon.",
      failed:
        resolvedLang === "ru"
          ? "Не удалось отправить заявку. Попробуйте ещё раз."
          : "Failed to submit request. Please try again.",
    };

    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "yclid"].map(key => [key, clean(body.attribution?.[key]).slice(0, 200)]).filter(([,value])=>value));
    const payload: CleanPayload = {
      source: clean(body.source).slice(0, 150) || "website",
      lang: resolvedLang,
      name: clean(body.name),
      contact: clean(body.contact),
      contactMethod: clean(body.contactMethod),
      consent: resolveConsent(body.consent),
      message: clean(body.message),
      attribution,
    };

    if (!payload.consent) {
      return NextResponse.json(
        { ok: false, error: t.consentRequired },
        { status: 400 },
      );
    }

    if (payload.name.length < 2 || payload.contact.length < 3 || payload.message.length < 3) {
      return NextResponse.json(
        { ok: false, error: t.missingFields },
        { status: 400 },
      );
    }
    if (payload.name.length > 100 || payload.contact.length > 200 || payload.message.length > 3000) {
      return NextResponse.json({ ok: false, error: resolvedLang === "ru" ? "Сократите текст заявки." : "Please shorten the request." }, { status: 400 });
    }

    const contact = validateContact(payload.contact, payload.contactMethod, resolvedLang);
    if (!contact.ok || !validContactName(payload.name)) {
      return NextResponse.json({ ok: false, field: !contact.ok ? "contact" : "name", error: !contact.ok ? contact.error : (resolvedLang === "ru" ? "Укажите имя: минимум два символа, включая буквы." : "Enter your name, at least two characters including letters.") }, { status: 400 });
    }
    payload.contact = contact.value;
    payload.contactMethod = contact.method;

    const text = formatText(payload);
    const results = await Promise.allSettled([
      sendToTelegram(text),
      sendToWebhook({
        type: "contact_request",
        createdAt: new Date().toISOString(),
        ...payload,
      }),
    ]);
    const delivered = results.some(result => result.status === "fulfilled" && result.value === true);
    if (!delivered) {
      console.error("[contact] no delivery channel accepted the request");
      return NextResponse.json({ ok: false, error: t.failed }, { status: 503 });
    }
    return NextResponse.json({ ok: true, delivered: true, message: t.success });
  } catch (error) {
    console.error("[contact] submission error", error instanceof SyntaxError ? "invalid JSON" : "request failed");
    return NextResponse.json({ ok: false, error: responseLang === "ru" ? "Не удалось отправить заявку. Попробуйте ещё раз." : "Failed to submit request." }, { status: 500 });
  }
}
