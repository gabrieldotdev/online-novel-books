import Image from "next/image";
import Link from "next/link";
import { labelVariants } from "@/islands/primitives/tw-variants";
import { siteConfig } from "@/settings/app";
import { cls } from "@/utils";

export function LogoBrand({ isSticky }) {
  return (
    <Link href="/" className="group mr-6 flex items-center justify-center space-x-1">
      <Image
        src="/icon.svg"
        alt="Logo"
        width={30}
        height={30}
        style={{ width: "30px", height: "30px" }}
        className={cls("relative drop-shadow-[0_0_0.3rem_#ffffff70]", isSticky ? "dark:invert" : "invert")}
      />
      <span className={cls("hidden font-medium sm:inline-block", "group-hover:animate-jump", labelVariants())}>{siteConfig.name}</span>
    </Link>
  );
}
