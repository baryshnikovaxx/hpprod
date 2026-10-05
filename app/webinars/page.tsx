import type { Metadata } from "next";
import ServiceLanding from "../components/service-landing";
import { landingOptions } from "../lib/landing";
export const metadata: Metadata = {
  title: "Организация вебинаров под ключ",
  description: "Подготовим спикеров, настроим звук и презентации, проведём трансляцию и передадим запись. Получите расчёт вашего вебинара.",
  alternates: { canonical: "https://headprod.live/webinars" },
  robots: { index: false, follow: true },
};
export default async function Page({searchParams}: {searchParams: Promise<Record<string, string | string[] | undefined>>}) {
  return <ServiceLanding service="webinar" {...landingOptions(await searchParams)} />;
}
