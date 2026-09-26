"use client";

import SiteHeader from "../components/site-header";
import { useLanguage } from "../components/language-provider";
import { formatRuTypography } from "../lib/typography";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isRu = lang === "ru";
  const ru = (text: string) => formatRuTypography(text);

  return (
    <main className="broadcast-page page-privacy relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <SiteHeader />
      <div className="pt-16">
        <section className="mx-auto w-full max-w-[1000px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <h1 className="title-hero mt-3">
            {isRu ? "Политика конфиденциальности" : "Privacy Policy"}
          </h1>
          <p className="reading-copy mt-6 text-sm md:text-base">
            {isRu
              ? ru("Используем ваши контактные данные, чтобы ответить на запрос, подготовить предложение и обсудить проект. Передаём персональные данные третьим лицам только при необходимости: для доставки, логистики или выполнения требований закона.")
              : "We use contact details only to respond to your request, prepare project proposals, and communicate during delivery. We do not share personal data with third parties unless required for logistics, delivery operations, or legal obligations."}
          </p>
          <p className="mt-4 text-sm text-zinc-300">
            {isRu
              ? ru("Чтобы уточнить, обновить или удалить свои данные, напишите на hello@headprod.live.")
              : "If you would like to review, update, or delete your data, contact us at hello@headprod.live."}
          </p>
        </section>
      </div>
    </main>
  );
}
