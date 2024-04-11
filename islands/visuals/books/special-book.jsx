import Image from "next/image";
import { cls } from "@/utils";

import { bookVariants, speedVariants } from "./regular-book";

function SpecialBook({ type = "special", size, speed, hover, alt, imageUrl, className, ...props }) {
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

export { SpecialBook };
