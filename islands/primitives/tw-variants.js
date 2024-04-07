/**
 * This file is used to define the Tailwind CSS variants that can be used in the component.
 *
 * Properties:
 * [main] - base | variant[...] | compoundVariants | defaultVariants || slots[...]
 * [other] - extend --> extend from other variants
 *
 * @see https://github.com/nextui-org/tailwind-variants
 */

import { tv } from "tailwind-variants";

export const labelVariants = tv({
  base: "leading-7 tracking-tight",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      none: "",
    },
    size: {
      default: "text-xs h-6 px-4",
      sm: "",
      lg: "",
      icon: "",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
