import type { Metadata } from "next";
import CompactLanding from "../components/compact-landing";

export const metadata: Metadata = {
  title: "Съёмка концертов и прямые трансляции",
  description: "Многокамерная съёмка концертов, изображение на экраны и прямой эфир. Опыт Земфиры, Пошлой Молли и GGate Awards. Рассчитаем ваш проект.",
  alternates: { canonical: "https://headprod.live/concert-streaming" },
  openGraph: { title: "Съёмка концертов и прямые трансляции", description: "Сцена, зал, эмоции. Камеры, изображение на экраны и прямой эфир. Получите расчёт концерта.", url: "https://headprod.live/concert-streaming", images: [{url: "/cases/poshlaya-molly/showreel.jpg", width: 960, height: 540, alt: "Пошлая Молли — проект Head Production"}] },
  robots: { index: false, follow: true },
};
export default function Page() { return <CompactLanding kind="concert" />; }
