import Ads from "@/islands/visuals/ads";
import { BaseShell } from "@/islands/wrappers/shell-variants";

export default function Home() {
  return (
    <BaseShell as="div" className="pt-0 lg:pt-0">
      <Ads
        imageUrl="https://images.unsplash.com/photo-1712675009273-5a6c46663fbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ads"
      />
    </BaseShell>
  );
}
