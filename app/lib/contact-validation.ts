import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export type ContactMethod = "phone" | "email" | "telegram";
export function validateContact(raw: unknown, method?: unknown, lang: "ru" | "en" = "ru") {
  const value = typeof raw === "string" ? raw.trim() : "";
  const fail = (ru: string, en: string) => ({ ok: false as const, error: lang === "ru" ? ru : en });
  if (!value || value.length > 200) return fail("Укажите контакт для связи.", "Enter your contact details.");
  const kind = method || (value.startsWith("@") || /^(https:\/\/)?t\.me\//i.test(value) ? "telegram" : value.includes("@") ? "email" : "phone");
  if (kind === "phone") {
    // Accept international numbers and familiar Russian 8/7/ten-digit notation.
    if (!/^\+?[\d\s().-]+$/.test(value)) return fail("Введите номер с кодом страны, например +7 916 123-45-67.", "Enter a phone number with country code, e.g. +44 7911 123456.");
    const phone = parsePhoneNumberFromString(value, { defaultCountry: "RU", extract: false });
    if (!phone?.isValid() || phone.ext || /^(\d)\1+$/.test(phone.nationalNumber)) return fail("Проверьте номер: нужен код страны и полный номер телефона.", "Check the country code and enter the complete phone number.");
    return { ok: true as const, value: phone.number, method: "phone" as const };
  }
  if (kind === "email") {
    const parts = value.split("@");
    const [local = "", domain = ""] = parts;
    const labels = domain.split(".");
    if (parts.length !== 2 || local.length > 64 || !/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local) || local.startsWith(".") || local.endsWith(".") || local.includes("..") || labels.length < 2 || !labels.every(label => /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label)) || !/^[A-Za-z]{2,63}$/.test(labels.at(-1)!)) return fail("Проверьте почту: например name@company.ru.", "Enter a valid email, e.g. name@company.com.");
    return { ok: true as const, value: `${local}@${domain.toLowerCase()}`, method: "email" as const };
  }
  if (kind === "telegram") {
    const username = value.replace(/^(?:https:\/\/)?t\.me\//i, "").replace(/^@/, "").replace(/\/$/, "");
    if (!/^[A-Za-z][A-Za-z0-9_]{4,31}$/.test(username)) return fail("Укажите @username: 5–32 латинские буквы, цифры или подчёркивания. Имя профиля не подойдёт.", "Enter @username: 5–32 Latin letters, digits or underscores, not a display name.");
    return { ok: true as const, value: `@${username}`, method: "telegram" as const };
  }
  return fail("Выберите способ связи.", "Choose a contact method.");
}

export function validContactName(value: string) {
  return value.trim().length >= 2 && value.trim().length <= 100 && /\p{L}/u.test(value) && !/[\r\n<>]/.test(value);
}
