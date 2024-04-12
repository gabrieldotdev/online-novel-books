import Image from "next/image";
import { bookVariants, speedVariants } from "@/islands/primitives/tw/twv";
import { cls } from "@/utils";

export function SpecialBook({ type = "special", size, speed, hover, alt, imageUrl, className, ...props }) {
  return (
    <figure className={cls(bookVariants({ type, size }), className)} {...props}>
      <Image
        src={imageUrl}
        alt={alt}
        width={208}
        height={288}
        style={{ width: "auto", height: "auto" }}
        className={cls("object-cover", speedVariants(speed, hover))}
      />
    </figure>
  );
}
