import "@/styles/globals.scss";

import { siteConfig } from "@/config/site";
import { fullURL } from "@/data/meta/builder";
import { NextThemesProvider } from "@/islands/providers/theme-provider";
import { SingleToaster } from "@/islands/single-toaster";
import { SonnerToaster } from "@/islands/sonner-toaster";
import { fontSans } from "@/styles/fonts";
import { cls } from "@/utils";

export const metadata = {
  metadataBase: fullURL(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.author,
  publisher: siteConfig.author,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  applicationName: siteConfig.name,
  alternates: {
    canonical: fullURL(),
  },

  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cls(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
        )}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SingleToaster />
          <SonnerToaster />
        </NextThemesProvider>
      </body>
    </html>
  );
}
