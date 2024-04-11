import Link from "next/link";
import SiteCarousel from "@/islands/navigation/site-carousel";
import { CompressionShell } from "@/islands/wrappers/compression-shell";
import { Shell } from "@/islands/wrappers/shell-variants";

export default function Home() {
  return (
    <Shell as="div">
      <Shell variant="compact" className="flex">
        <CompressionShell>
          <Link href="/about">
            <h3>山海提灯</h3>
          </Link>
        </CompressionShell>
        <CompressionShell className="flex-initial w-full overflow-hidden">
          <SiteCarousel />
        </CompressionShell>
        <CompressionShell>
          <Link href="/about">
            <h3>跃千愁新书：山海提灯</h3>
          </Link>
        </CompressionShell>
      </Shell>
      <Shell variant="compact" className="flex">
        <CompressionShell>
          <Link href="/about">
            <h3>跃千愁新书：山海提灯</h3>
          </Link>
        </CompressionShell>
      </Shell>
    </Shell>
  );
}
