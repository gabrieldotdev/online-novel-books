"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/core/link";
import { Icons } from "@/islands/icons";
import { Button, buttonVariants } from "@/islands/primitives/button";
import { Separator } from "@/islands/primitives/separator";
import { labelVariants } from "@/islands/primitives/tw-variants/tv";
import { Shell } from "@/islands/wrappers/shell-variants";
import { allCategories } from "@/settings/app";
import { cls } from "@/utils";
import { Crown, Flame } from "lucide-react";

const FastLink = React.memo(({ href, children }) => (
  <Link href={href} target="_blank" className="group">
    <div className={cls("flex items-center gap-x-1", "group-hover:animate-jump")}>{children}</div>
  </Link>
));

export function Categories() {
  const pathname = usePathname();
  const [isCategoryListOpen, setIsCategoryListOpen] = React.useState(false);
  const [maxVisibleCategories, setMaxVisibleCategories] = React.useState(() => allCategories.length);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const maxVisibleCategories = Math.floor(width);
        setMaxVisibleCategories(maxVisibleCategories);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCategories = () => setIsCategoryListOpen((prev) => !prev);
  const isActive = (href) => pathname === href;

  return (
    <Shell className="flex items-start justify-between">
      <div
        className={cls("flex space-x-2 flex-shrink-0", buttonVariants({ variant: "none", size: "chip" }))}
        style={{ padding: "0" }}
      >
        <FastLink href="/categories/popular">
          <Crown size={16} /> Phổ biến
        </FastLink>
        <FastLink href="/categories/hot">
          <Flame size={16} /> Hot
        </FastLink>
      </div>
      <div className="flex items-center w-full" ref={containerRef}>
        <Separator orientation="vertical" className="mx-2 h-3" />
        <div
          className={cls(
            "relative inline-flex flex-wrap items-center gap-2",
            isCategoryListOpen ? "" : "w-full overflow-hidden max-h-7",
          )}
        >
          {allCategories.slice(0, isCategoryListOpen ? allCategories.length : maxVisibleCategories).map((category) => (
            <Link
              key={category.label}
              href={category.href}
              size="chip"
              className={cls(
                isActive(category.href)
                  ? "border border-dashed"
                  : "bg-foreground/10 text-foreground hover:bg-foreground/15",
                labelVariants(),
              )}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
      <Button variant="none" size="chip-icon" onClick={toggleCategories}>
        {isCategoryListOpen ? <Icons.chevronUp size={16} /> : <Icons.chevronDown size={16} />}
      </Button>
    </Shell>
  );
}
