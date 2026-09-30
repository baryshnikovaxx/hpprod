import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Geist_Mono, Golos_Text } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import MetrikaNavigation from "./components/metrika-navigation";
import "./broadcast.css";
import { LanguageProvider } from "./components/language-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || "https://head-production.vercel.app";

const englishMetadata: Metadata = {
  metadataBase: new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`),
  title: {
    default: "Head Production",
    template: "%s | Head Production",
  },
  description:
    "Head Production delivers live event and broadcast production: multi-camera workflows, streaming, technical setup, and reliable live delivery.",
  applicationName: "Head Production",
  keywords: [
    "live production",
    "broadcast production",
    "multi-camera",
    "streaming",
    "event production",
    "technical production",
    "Head Production",
  ],
  icons: {
    icon: [
      { url: "/hp-icon.svg?v=hp1", type: "image/svg+xml" },
      { url: "/icon.png?v=hp1", type: "image/png" },
      { url: "/favicon.ico?v=hp1", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png?v=hp1", type: "image/png" }],
    shortcut: ["/favicon.ico?v=hp1"],
  },
  openGraph: {
    type: "website",
    siteName: "Head Production",
    title: "Head Production",
    description:
      "Live event and broadcast production with engineering-first workflows and reliable delivery.",
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: "Head Production" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Head Production",
    description:
      "Live event and broadcast production with engineering-first workflows and reliable delivery.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  if (cookieStore.get("site-lang")?.value === "en") return englishMetadata;

  const title = "Head Production — съёмка мероприятий и прямые трансляции";
  const description = "Снимаем концерты, конференции и турниры. Готовим технику, ведём прямые трансляции и передаём записи. Работаем по всему миру.";
  return {
    ...englishMetadata,
    title: { default: title, template: "%s | Head Production" },
    description,
    keywords: ["съёмка мероприятий", "прямые трансляции", "многокамерная съёмка", "эфирная графика", "Head Production"],
    openGraph: { ...englishMetadata.openGraph, title, description },
    twitter: { ...englishMetadata.twitter, title, description },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("site-lang")?.value;
  const initialLang = cookieLang === "en" || cookieLang === "ru" ? cookieLang : "ru";

  const analyticsEnabled = process.env.NODE_ENV === "production" &&
    (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");

  return (
    <html lang={initialLang}>
      <head>
        {analyticsEnabled && <>
          <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MSN888WF');` }} />
          <script id="yandex-metrika" dangerouslySetInnerHTML={{ __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=113227786','ym');ym(113227786,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});` }} />
        </>}
      </head>
      <body
        className={`${golos.variable} ${geistMono.variable} antialiased`}
      >
        {analyticsEnabled && <>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MSN888WF" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" /></noscript>
          <noscript><div><img src="https://mc.yandex.ru/watch/113227786" style={{ position: "absolute", left: "-9999px" }} alt="" /></div></noscript>
        </>}
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
        {analyticsEnabled && <Suspense fallback={null}><MetrikaNavigation /></Suspense>}
      </body>
    </html>
  );
}
