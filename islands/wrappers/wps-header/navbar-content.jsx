import { wpsAsVariants } from "@/islands/primitives/tw/twv";
import { cn } from "@/utils";

export function NavbarContent({ children, className }) {
  const { navbarContent } = wpsAsVariants({});
  return <section className={cn(navbarContent(), className)}>{children}</section>;
}
