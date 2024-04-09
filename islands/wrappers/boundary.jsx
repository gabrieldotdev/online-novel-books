import { cls } from "@/utils";
import { tv } from "tailwind-variants";

export const boundaryVariants = tv({
  base: "border",
  variants: {
    variant: {
      default: "p-2",
      small: "p-3 lg:p-5",
      none: "",
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

export function Boundary({ children, className, ...props }) {
  return (
    <div className={cls(boundaryVariants(), className)} {...props}>
      {children}
    </div>
  );
}
