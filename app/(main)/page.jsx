import Link from "next/link";
import SiteCarousel from "@/islands/navigation/site-carousel";
import { Button } from "@/islands/primitives/button";
import { labelVariants } from "@/islands/primitives/tw-variants";
import { Banner } from "@/islands/visuals/banner";
import { Boundary } from "@/islands/wrappers/boundary";
import { SegmentBoundary } from "@/islands/wrappers/segment-boundary";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";

export default function Home() {
  return (
    <Shell as="div">
      <Boundary className="flex flex-col lg:flex-row space-x-2">
        <SegmentBoundary border="solid" className={cls("hidden lg:block flex-none w-20 min-w-20")}>
          <Link href="/about">
            <h3>山海提灯</h3>
          </Link>
        </SegmentBoundary>
        <SegmentBoundary border="none">
          <div className="flex-initial w-full overflow-hidden">
            <SiteCarousel />
          </div>
        </SegmentBoundary>
        <SegmentBoundary className={cls("hidden lg:block flex-none w-64 min-w-64")}>
          <Link href="/about">
            <h3>跃千愁新书：山海提灯</h3>
          </Link>
        </SegmentBoundary>
        <Button>Cập nhật</Button>
      </Boundary>
    </Shell>
  );
}
