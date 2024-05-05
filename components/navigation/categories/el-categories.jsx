"use client";

import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { Link } from "@/components/primitives/link";
import { Separator } from "@/components/primitives/separator";
import { Shell } from "@/components/wrappers/shell-variants";
import { siteConfig } from "@/configs/app";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cls } from "@/utils";

export function ElCategories() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  const { contentRef, showPrevButton, showNextButton, handleScroll } = useScrollPosition();

  return (
    <Shell as="div" className="flex bg-white rounded-xl gap-0 px-6 py-4 md:py-4">
      <div className="flex items-center">
        {siteConfig.menu.map((category) => (
          <Link key={category.label} href={category.href} size="sm" className="group pl-0 space-x-0.5">
            <em className="group-hover:animate-jump">{category.icon}</em>
            <span>{category.label}</span>
          </Link>
        ))}
        <Separator orientation="vertical" className="mx-2 h-3 " />
      </div>

      <section className="relative flex items-center overflow-hidden">
        <div ref={contentRef} className="flex flex-grow items-center space-x-2 overflow-x-auto scrollbar-hide">
          {siteConfig.categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={cls("hover:bg-order", isActive(category.href) && "bg-order")}
              size="sm"
            >
              {category.label}
            </Link>
          ))}
        </div>
        {/* Previous */}
        {showPrevButton && (
          <div className="absolute inset-y-0 left-0 flex items-center justify-start w-20 bg-gradient-to-r from-white via-white to-transparent">
            <Button size="chip" className="hover:bg-order rounded-full" onClick={() => handleScroll("left")}>
              <Icons.chevronLeft size={16} />
            </Button>
          </div>
        )}
        {/* Next */}
        {showNextButton && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-end w-20 bg-gradient-to-l from-white via-white to-transparent">
            <Button size="chip" className="hover:bg-order rounded-full" onClick={() => handleScroll("right")}>
              <Icons.chevronRight size={16} />
            </Button>
          </div>
        )}
      </section>
      <div className="flex items-center">
        <Separator orientation="vertical" className="mx-2 h-3 " />
        <Link href="/categories" size="sm" className="pr-0 text-foreground/60 hover:text-foreground">
          <span>Trung tâm trợ giúp</span>
        </Link>
        <Link href="/#" size="sm" className="pr-0 group space-x-0.5 text-foreground/60 hover:text-foreground">
          <em className="group-hover:animate-jump">🛠️</em>
          <span>Đang phát triển</span>
        </Link>
      </div>
    </Shell>
  );
}
