import Image from "next/image";
import { Link } from "@/core/link";
import { cls } from "@/utils";

export function NavbarBrand({ href = "/", alt = "", src, children, className }) {
  return (
    <Link href={href} className="group mr-4 flex items-center justify-center space-x-1">
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        style={{ width: "30px", height: "30px" }}
        className={cls("relative drop-shadow-[0_0_0.3rem_#ffffff70]", className)}
      />
      {children}
    </Link>
  );
}
