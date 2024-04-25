import { ExtraNav } from "@/components/navigation/extra-nav";

export default function ExtraLayout({ children }) {
  return (
    <>
      <ExtraNav />
      {children}
    </>
  );
}
