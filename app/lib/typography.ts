const NBSP = "\u00A0";

const SHORT_WORDS = [
  "и",
  "в",
  "во",
  "на",
  "к",
  "с",
  "со",
  "о",
  "об",
  "от",
  "по",
  "до",
  "из",
  "без",
  "для",
  "над",
  "под",
  "при",
  "а",
  "но",
  "или",
  "что",
  "как",
  "не",
  "я",
  "мы",
  "ты",
  "вы",
].join("|");

export function formatRuTypography(text: string): string {
  return text
    .replace(new RegExp(`(^|\\s)(${SHORT_WORDS})\\s`, "giu"), `$1$2${NBSP}`)
    .replace(/(\d+)\s(лет|год|года|годов|час|часа|часов|мин|минут|минуты|дня|дней|%)/giu, `$1${NBSP}$2`);
}
