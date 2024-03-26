import { tv } from "tailwind-variants";

export const titleVariants = tv({
  base: "leading-7 tracking-tight text-[14px]",
  variants: {
    size: {
      xs: "text-[14px]",
      sm: "text-[16px]",
      lg: "text-[18px]",
      xl: "text-[20px]",
      "2xl": "text-[22px]",
      "3xl": "text-[24px]",
      "4xl": "text-[26px]",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});
