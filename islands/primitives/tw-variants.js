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
