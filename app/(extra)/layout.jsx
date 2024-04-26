import { ExtraNav } from "@/components/navigation/extra-nav";
import { GeneralShell } from "@/components/wrappers/general-shell";

export default function ExtraLayout({ children }) {
  return (
    <section>
      <ExtraNav />
      {children}
    </section>
  );
}
