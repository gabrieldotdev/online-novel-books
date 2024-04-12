import { wpsAsVariants } from "@/islands/primitives/tw/twv";
import { cn } from "@/utils";

export function Header({ children, className }) {
  const { header } = wpsAsVariants({});
  return <header className={cn(header(), className)}>{children}</header>;
}
