import * as React from "react";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const shellVariants = cva("grid items-center", {
  variants: {
    variant: {
      default: "",
      centered: "container flex h-[100dvh] max-w-2xl flex-col justify-center",
      markdown: "container max-w-3xl gap-0 py-8 md:py-10 lg:py-10",
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
