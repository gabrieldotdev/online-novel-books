import "@/styles/globals.scss";

import { DEFAULT_METADATA } from "@/data/meta";
import { BasicAnnouncement } from "@/islands/basic-announcement";
import { MultilayeredAnnouncement } from "@/islands/multilayered-announcement";
import { NextThemesProvider } from "@/islands/providers/theme-provider";
import { siteConfig } from "@/settings/app";
import { fontJMono, geistSans } from "@/styles/fonts";
import { cls } from "@/utils";

export const metadata = {
  ...DEFAULT_METADATA,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  openGraph: {
    ...DEFAULT_METADATA.openGraph,
    url: siteConfig.url.base,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cls(
          "min-h-screen bg-background font-sans antialiased mx-auto w-full max-w-[2560px]",
          fontJMono.variable,
        )}
      >
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystems disableTransitionOnChange>
          {children}
          <BasicAnnouncement />
          <MultilayeredAnnouncement />
        </NextThemesProvider>
      </body>
    </html>
  );
}
