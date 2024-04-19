import Image from "next/image";
import { bookVariants, speedVariants } from "@/islands/primitives/tw/twv";
import { cls } from "@/utils";

export function SpecialBook({
  size,
  hover,
  imageUrl,
  className,
  isBackground = false,
  type = "special",
  alt = "",
  speed,
  ...props
}) {
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
      {isBackground && (
        <div className="absolute inset-0 bg-gradient-to-t group-hover:from-black/80 group-hover:to-transparent" />
      )}
    </figure>
  );
}
