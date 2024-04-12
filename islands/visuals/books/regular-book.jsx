import Image from "next/image";
import { bookVariants, speedVariants } from "@/islands/primitives/tw/twv";
import { cls } from "@/utils";

export function RegularBook({ size, speed, hover, alt, imageUrl, className, ...props }) {
  return (
    <figure className={cls(bookVariants({ size }), className)} {...props}>
      <Image
        src={imageUrl}
        alt={alt}
        width={208}
        height={288}
        style={{ width: "auto", height: "auto" }}
        className={cls("object-cover object-center", speedVariants(speed, hover))}
      />
    </figure>
  );
}
