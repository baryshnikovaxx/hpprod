import type { Metadata } from "next";
import CompactLanding from "../components/compact-landing";
import { landingOptions } from "../lib/landing";

export const metadata: Metadata = {
  title: "Съёмка и трансляция конференций за рубежом",
  description: "Русскоязычная команда для съёмки и трансляции вашей конференции. Подготовка площадки, режиссура и запись. Получите расчёт проекта.",
  alternates: { canonical: "https://headprod.live/conference-production" },
  openGraph: { title: "Съёмка конференций и прямой эфир", description: "Русскоязычная команда для вашего события за рубежом. Получите расчёт проекта.", url: "https://headprod.live/conference-production", images: [{url: "/landing/insforum.jpg", width: 960, height: 540, alt: "INSFORUM — проект Head Production"}] },
  robots: { index: false, follow: true },
};
export default async function Page({searchParams}: {searchParams: Promise<Record<string, string | string[] | undefined>>}) {
  const {variant} = landingOptions(await searchParams);
  return <CompactLanding kind="international" variant={variant} />;
}
