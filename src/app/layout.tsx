import { draftMode } from "next/headers";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import Navigation from "@/components/Globals/Navigation/Navigation";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/Globals/ThemeToggle/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="en">
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
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
