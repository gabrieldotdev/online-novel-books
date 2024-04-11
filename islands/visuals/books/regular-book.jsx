import Image from "next/image";
import { cls } from "@/utils";
import { tv } from "tailwind-variants";

const bookVariants = tv({
  base: "group relative h-auto flex items-center justify-center rounded-lg overflow-hidden",
  // slots: {
  //   before: "before:content-[''] before:absolute before:-left-5 before:w-10 before:h-full before:bg-gray-300",
  //   after: "after:content-[''] after:absolute after:-right-5 after:w-10 after:h-full after:bg-gray-300",
  // },
  variants: {
    size: {
      small: "w-14",
      medium: "w-24",
      large: "w-52",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const speedVariants = tv({
  base: "transition",
  variants: {
    hover: {
      scale105: "group-hover:scale-105",
      scale110: "group-hover:scale-110",
    },
    speed: {
      200: "duration-200",
      300: "duration-300",
      400: "duration-400",
    },
  },
  defaultVariants: {
    hover: "scale105",
    speed: "300",
  },
});

function RegularBook({ size, speed, hover, alt, imageUrl, className, ...props }) {
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

export { RegularBook, bookVariants, speedVariants };
