import * as React from "react";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const shellVariants = cva("", {
  variants: {
    variant: {
      default: "container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20",
      compact: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Shell({ className, as: Comp = "section", variant, ...props }) {
  return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export { Shell, shellVariants };
