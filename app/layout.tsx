import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";

import { ThemeScript } from "@/components/theme-toggle";
import { site, type Locale } from "@/lib/site";

import "./globals.css";

export const instant = false;

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f3f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  category: "business",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale: Locale = (await headers()).get("x-locale") === "en" ? "en" : "ar";

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${grotesk.variable} ${plex.variable} ${locale === "ar" ? "locale-ar" : ""} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`flex min-h-full flex-col bg-canvas text-ink dark:bg-night dark:text-[#f3f4f6] ${locale === "ar" ? "font-arabic" : "font-sans"}`}
      >
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
