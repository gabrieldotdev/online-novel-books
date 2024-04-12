import "@/styles/globals.scss";

import { DEFAULT_METADATA } from "@/data/meta";
import { BasicNotice } from "@/islands/basic-notice";
import { MultilayeredAnnouncement } from "@/islands/multilayered-announcement";
import { TooltipProvider } from "@/islands/primitives/tooltip";
import { NextThemesProvider } from "@/islands/providers/theme-provider";
import { siteConfig } from "@/settings/app";
import { fontMono } from "@/styles/fonts";
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
          fontMono.className,
        )}
      >
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystems disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
          <MultilayeredAnnouncement />
          <BasicNotice />
        </NextThemesProvider>
      </body>
    </html>
  );
}
