import type { Metadata } from "next";
import ServiceLanding from "../components/service-landing";
import CompactLanding from "../components/compact-landing";
import { landingOptions } from "../lib/landing";
export const metadata: Metadata = {
  title: "Видеосъёмка и трансляция конференций",
  description: "Снимем выступления, выведем презентации, организуем прямой эфир и передадим записи докладов. Получите расчёт вашей конференции.",
  alternates: { canonical: "https://headprod.live/conference-streaming" },
  robots: { index: false, follow: true },
};
export default async function Page({searchParams}: {searchParams: Promise<Record<string, string | string[] | undefined>>}) {
  const params = await searchParams;
  const options = landingOptions(params);
  if (params.layout === "short") return <CompactLanding kind="conference" {...options} />;
  return <ServiceLanding service="conference" {...options} />;
}
