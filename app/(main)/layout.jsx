import SiteFooter from "@/components/navigation/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";

export default function MainLayout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
