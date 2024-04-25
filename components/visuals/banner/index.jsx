import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/primitives/aspect-ratio";

export function Banner() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="object-cover"
      />
    </AspectRatio>
  );
}
