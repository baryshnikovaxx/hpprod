import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Geist_Mono, Golos_Text } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`),
  title: {
    default: "Head Production",
    template: "%s | Head Production",
  },
  description:
    "Head Production delivers live event and broadcast production: multi-camera workflows, streaming, technical setup, and in-house rental solutions.",
  applicationName: "Head Production",
  keywords: [
    "live production",
    "broadcast production",
    "multi-camera",
    "streaming",
    "event production",
    "equipment rental",
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
      "Live event and broadcast production with engineering-first workflows, reliable delivery, and in-house rental support.",
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: "Head Production" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Head Production",
    description:
      "Live event and broadcast production with engineering-first workflows and in-house rental support.",
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
      </body>
    </html>
  );
}
