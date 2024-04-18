/**
 * This file is used to define the Tailwind CSS variants that can be used in the component.
 *
 * Used in shadcn/ui components
 *
 * Properties:
 * ...
 *
 * @see https://cva.style/docs
 */
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        none: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-7 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10 rounded-md",
        chip: "h-7 w-7 rounded-md",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
