import { SiteHeader } from "@/islands/navigation/site-header";
import { ThemesGeneralSwitcher } from "@/islands/switchers/themes-general-switcher";
import { GeneralShell } from "@/islands/wrappers/general-shell";

export default function MainLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <GeneralShell>{children}</GeneralShell>
    </>
  );
}
