import React from "react";
import Image from "next/image";
import { cls } from "@/utils";
import { tv } from "tailwind-variants";

const adsVariants = tv({
  base: "w-full h-20 overflow-hidden relative rounded-lg",
});

export default function Ads({ alt, imageUrl, className, ...props }) {
  return (
    <figure className={cls(adsVariants(), className)} {...props}>
      <Image src={imageUrl} alt={alt} layout="fill" fill="responsive" className="object-cover object-center" />
    </figure>
  );
}
