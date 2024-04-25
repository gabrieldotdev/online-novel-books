import { NextThemesProvider } from "@/components/providers/theme-provider";
import { GeneralShell } from "@/components/wrappers/general-shell";

export default function SubLayout({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystems disableTransitionOnChange>
      <GeneralShell>{children}</GeneralShell>
    </NextThemesProvider>
  );
}
