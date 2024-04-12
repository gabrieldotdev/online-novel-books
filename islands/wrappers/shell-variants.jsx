import * as React from "react";
import { shellVariants } from "@/islands/primitives/tw/twv";
import { cn } from "@/utils";

function Shell({ className, as: Comp = "section", variant, ...props }) {
  return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export const BaseShell = Shell;
export { Shell, shellVariants };
