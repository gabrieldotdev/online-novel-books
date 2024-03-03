import '@/styles/globals.scss';

import { geistSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          geistSans.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
