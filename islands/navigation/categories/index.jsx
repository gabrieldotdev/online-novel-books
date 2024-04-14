"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/core/link";
import { Icons } from "@/islands/icons";
import { Button, buttonVariants } from "@/islands/primitives/button";
import { Separator } from "@/islands/primitives/separator";
import { labelVariants } from "@/islands/primitives/tw/twv";
import { BaseShell } from "@/islands/wrappers/shell-variants";
import { allCategories, popularCategories } from "@/settings/other";
import { cls } from "@/utils";

const FastLink = React.memo(({ href, children }) => (
  <Link href={href} variant="sm" target="_blank" className="group">
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
    <BaseShell className="flex items-start">
      <div
        className={cls("flex space-x-2 flex-shrink-0", buttonVariants({ variant: "none", size: "sm" }))}
        style={{ padding: "0" }}
      >
        {popularCategories.map((category) => (
          <FastLink key={category.label} href={category.href}>
            {category.icon}
            {category.label}
          </FastLink>
        ))}
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
              size="sm"
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
      <Button variant="none" size="chip" onClick={toggleCategories}>
        {isCategoryListOpen ? <Icons.chevronUp size={16} /> : <Icons.chevronDown size={16} />}
      </Button>
    </BaseShell>
  );
}
