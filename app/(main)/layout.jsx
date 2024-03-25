import { SiteHeader } from "@/islands/navigation/site-header";
import { ThemesGeneralSwitcher } from "@/islands/switchers/themes-general-switcher";

export default function MainLayout({ children }) {
  return <section className="min-h-screen">
    <SiteHeader />
    <ThemesGeneralSwitcher />
    {children}
    </section>;
}
