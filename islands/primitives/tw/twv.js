/**
 * This file is used to define the Tailwind CSS variants that can be used in the component.
 *
 * Used in other components
 *
 * Properties:
 * ...
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
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-7 rounded-md px-3",
      lg: "h-11 rounded-lg px-6",
      icon: "h-10 w-10 rounded-md",
      chip: "h-7 w-7 rounded-md",
    },
  },
  defaultVariants: {
    variant: "link",
  },
});

export const shellVariants = tv({
  base: "grid items-center py-2 md:py-4",
  variants: {
    variant: {
      default: "container mx-auto",
      compact: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const wpsAsVariants = tv({
  slots: {
    header: "z-50 relative mx-auto w-full",
    navbar: "absolute flex px-6 w-full h-[3.5rem] items-center top-0 z-[1000]",
    navbarContent: "flex items-center justify-between h-full space-x-2 md:justify-end",
  },
  variants: {
    fixed: {
      true: "fixed bg-background text-foreground inset-0",
      false: "text-white",
    },
  },
});

export const bookVariants = tv({
  base: "group relative h-auto flex items-center justify-center rounded-lg overflow-hidden",
  // slots: {
  //   before: "before:content-[''] before:absolute before:-left-5 before:w-10 before:h-full before:bg-gray-300",
  //   after: "after:content-[''] after:absolute after:-right-5 after:w-10 after:h-full after:bg-gray-300",
  // },
  variants: {
    size: {
      small: "w-14",
      medium: "w-24",
      large: "w-48",
      larger: "w-52",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const speedVariants = tv({
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
