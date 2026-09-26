import Script from "next/script";

/** Enable only on production deployments with a configured GA4 stream. */
export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const deployment = process.env.VERCEL_ENV;
  if (
    process.env.NODE_ENV !== "production" ||
    (deployment && deployment !== "production") ||
    !measurementId ||
    !/^G-[A-Z0-9]+$/.test(measurementId)
  ) return null;

  return (
    <>
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        ` }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
