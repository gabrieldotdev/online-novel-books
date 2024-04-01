import Link from "next/link";
import SiteCarousel from "@/islands/navigation/site-carousel";
import { labelVariants } from "@/islands/primitives/tw-variants";
import { Boundary } from "@/islands/wrappers/boundary";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";

export default function Home() {
  return (
    <Shell as="div">
      <div className="flex flex-col lg:flex-row space-x-2">
        <Boundary size="small" className={cls("hidden lg:block flex-none w-64 min-w-64", "text-center", labelVariants())}>
          <Link href="/about">
            <h3>跃千愁新书：山海提灯</h3>
          </Link>
        </Boundary>
        <div className="flex-initial w-full overflow-hidden">
          <SiteCarousel />
        </div>
        <Boundary size="small" className={cls("hidden lg:block flex-none w-64 min-w-64", "text-center", labelVariants())}>
          <Link href="/about">
            <h3>New Comics</h3>
          </Link>
        </Boundary>
      </div>
    </Shell>
  );
}
