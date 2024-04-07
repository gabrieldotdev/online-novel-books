import React from "react";
import { cls } from "@/utils";
import { tv } from "tailwind-variants";

const boundaryVariants = tv({
  base: "border",
  variants: {
    variant: {
      none: "",
      small: "p-3 lg:p-5",
      default: "p-2 lg:p-4",
    },
    color: {
      default: "border-gray-700",
      none: "border-transparent",
    },
    border: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
      double: "border-double",
      none: "border-none",
    },
    radius: {
      none: "rounded-none",
      small: "rounded-sm",
      default: "rounded-md",
      large: "rounded-lg",
      larger: "rounded-xl",
      full: "rounded-full",
    },
    animate: {
      none: "text-foreground",
      rerender: "text-foreground animate-[rerender_1s_ease-in-out_1]",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
    border: "none",
    radius: "none",
    animate: "rerender",
  },
});

export function SegmentBoundary({ children, className, variant, color, border, radius, animate }) {
  return (
    <div
      className={cls(
        boundaryVariants({
          variant,
          color,
          border,
          radius,
          animate,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
