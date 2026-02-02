import { draftMode } from "next/headers";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import { PreviewNotice } from "@molecules/PreviewNotice/PreviewNotice";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@organisms/Footer";
import { siteInfo } from "@/data/siteInfo";
import { JsonLd } from "@/components/seo/JsonLd";
import { personJsonLd } from "@/data/structured-data/person";
import { websiteJsonLd } from "@/data/structured-data/website";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang={siteInfo.language} dir="ltr" suppressHydrationWarning>
      <head>
        {/* Favicon package */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <meta name="theme-color" content="#ffffff" />

        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body
        className={`prose prose-neutral dark:prose-invert max-w-none ${inter.className}`}
      >
        {isEnabled && <PreviewNotice />}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
