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
      xs: "text-xs",
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
      flat: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      link: "text-primary",
    },
    size: {
      small: "rounded-sm h-6 px-2",
      medium: "rounded-md h-8 px-4",
      large: "rounded-lg h-10 px-6",
      icon: "rounded-full h-10 w-10",
      chip: "rounded-md h-7 px-3",
      chipIcon: "rounded-md h-7 w-7",
      link: "",
    },
    color: {},
  },
  defaultVariants: {
    variant: "link",
    size: "link",
  },
});
