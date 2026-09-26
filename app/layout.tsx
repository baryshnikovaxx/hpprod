import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Geist_Mono, Golos_Text } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/google-analytics";
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
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
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

  return (
    <html lang={initialLang}>
      <body
        className={`${golos.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
