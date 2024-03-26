import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { titleVariants } from "@/islands/primitives/tw-v";
import { cls } from "@/utils";

export function LogoBrand({ isSticky }) {
  return (
    <Link href="/" className="mr-6 flex items-center justify-center space-x-1">
      <Image
        src="/icon.svg"
        alt="Logo"
        width={30}
        height={30}
        style={{ width: "30px", height: "30px" }}
        className={cls(
          "relative drop-shadow-[0_0_0.3rem_#ffffff70]",
          isSticky ? "" : "invert",
        )}
      />
      <span
        className={cls("hidden font-medium sm:inline-block", titleVariants())}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
