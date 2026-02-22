import { NextResponse } from "next/server";

type ContactPayload = {
  source?: string;
  lang?: "ru" | "en";
  name?: string;
  contact?: string;
  message?: string;
  consent?: boolean | string;
  website?: string; // honeypot
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function resolveConsent(value: unknown): boolean {
  return value === true || value === "true" || value === "on" || value === "1";
}

function formatText(data: Required<Omit<ContactPayload, "website">>): string {
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
  ].join("\n");
}

async function sendToTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });
}

async function sendToWebhook(payload: object) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;

  await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Silent bot trap
    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const resolvedLang: "en" | "ru" = clean(body.lang) === "en" ? "en" : "ru";
    const t = {
      consentRequired:
        resolvedLang === "ru"
          ? "Нужно согласие с политикой конфиденциальности."
          : "Please agree to the privacy policy.",
      missingFields:
        resolvedLang === "ru"
          ? "Пожалуйста, заполните имя, контакт и короткое сообщение."
          : "Please fill in name, contact and a brief message.",
      success:
        resolvedLang === "ru"
          ? "Заявка отправлена. Мы ответим в течение 24 часов."
          : "Sent. We’ll reply within 24 hours.",
      failed:
        resolvedLang === "ru"
          ? "Не удалось отправить заявку. Попробуйте ещё раз."
          : "Failed to submit request. Please try again.",
    };

    const payload: Required<Omit<ContactPayload, "website">> = {
      source: clean(body.source) || "website",
      lang: resolvedLang,
      name: clean(body.name),
      contact: clean(body.contact),
      consent: resolveConsent(body.consent),
      message: clean(body.message),
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

    const text = formatText(payload);
    console.log("[contact] request\n" + text);

    await Promise.allSettled([
      sendToTelegram(text),
      sendToWebhook({
        type: "contact_request",
        createdAt: new Date().toISOString(),
        ...payload,
      }),
    ]);

    return NextResponse.json({ ok: true, message: t.success });
  } catch (error) {
    console.error("[contact] submission error:", error);
    return NextResponse.json({ ok: false, error: "Failed to submit request." }, { status: 500 });
  }
}
