import { wpsAsVariants } from "@/islands/primitives/tw/twv";
import { cn } from "@/utils";

export function Navbar({ children, className, isSticky }) {
  const { navbar } = wpsAsVariants({});
  return (
    <nav className={cn(navbar(), isSticky && "fixed bg-background text-foreground inset-0", className)}>{children}</nav>
  );
}
