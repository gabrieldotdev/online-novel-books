import { cn } from "@/utils";

import { shellVariants } from "./shell-variants";

export function CompressionShell({ className, as: Comp = "div", variant = "compact", ...props }) {
  return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}
