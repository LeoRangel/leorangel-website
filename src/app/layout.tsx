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
