// import { SiteHeader } from "@/islands/navigation/site-header";
import { GeneralShell } from "@/islands/wrappers/general-shell";

export default function MainLayout({ children }) {
  return (
    <>
      {/* <SiteHeader /> */}
      <GeneralShell>{children}</GeneralShell>
    </>
  );
}
