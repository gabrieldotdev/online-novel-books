import Image from "next/image";
import { Link } from "@/components/primitives/link";
import { cls } from "@/utils";

export function LogoBrand({ isSticky, src = "icon.svg", color = "invert", width = 30, height = 30, className }) {
  return (
    <Link>
      <Image
        src={src}
        alt="logo"
        width={width}
        height={height}
        className={cls("w-[30px] h-30px", isSticky || color, className)}
      />
    </Link>
  );
}
