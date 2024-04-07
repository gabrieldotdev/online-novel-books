"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ExtendedLink } from "@/core/link";
import { Icons } from "@/islands/icons";
import { Button, buttonVariants } from "@/islands/primitives/button";
import { labelVariants } from "@/islands/primitives/tw-variants";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";
import { Crown, Flame } from "lucide-react";

const categories = [
  { name: "Tất cả", href: "/all" },
  { name: "Kịch", href: "/categories/drama" },
  { name: "Hành động", href: "/categories/action" },
  { name: "Phiêu lưu", href: "/categories/adventure" },
  { name: "Hài", href: "/categories/comedy" },
  { name: "Học đường", href: "/categories/school" },
  { name: "Harem", href: "/categories/harem" },
  { name: "Huyền bí", href: "/categories/mystery" },
  { name: "Kinh dị", href: "/categories/horror" },
  { name: "Lịch sử", href: "/categories/historical" },
  { name: "Mecha", href: "/categories/mecha" },
  { name: "Ngôn tình", href: "/categories/romance" },
  { name: "Huyền huyễn", href: "/categories/fantasy" },
  { name: "Trinh thám", href: "/categories/detective" },
  { name: "Truyện ngắn", href: "/categories/short-story" },
  { name: "Truyện tranh", href: "/categories/comic" },
  { name: "Viễn tưởng", href: "/categories/sci-fi" },
  { name: "Xuyên không", href: "/categories/reincarnation" },
  { name: "Yaoi", href: "/categories/yaoi" },
  { name: "Yuri", href: "/categories/yuri" },
  { name: "Đam mỹ", href: "/categories/bl" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/urban" },
  { name: "Đấu trí", href: "/categories/psychological" },
  { name: "Đồng nhân", href: "/categories/fan-fiction" },
  { name: "Đô thị", href: "/categories/city" },
];

const CategoryLink = React.memo(({ href, children }) => (
  <Link href={href} target="_blank" className="group">
    <div className={cls("flex items-center gap-x-1", "group-hover:animate-jump")}>{children}</div>
  </Link>
));

export function Categories() {
  const pathname = usePathname();
  const [isCategoryListOpen, setIsCategoryListOpen] = React.useState(false);
  const [maxVisibleCategories, setMaxVisibleCategories] = React.useState(() => categories.length);
  const containerRef = React.useRef(null);
  const categoryRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current && categoryRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const categoryWidth = categoryRef.current.offsetWidth;
      const visibleCategories = Math.floor(containerWidth / categoryWidth);
      setMaxVisibleCategories(visibleCategories);
    }
  }, [containerRef, categoryRef]);

  const toggleCategories = () => setIsCategoryListOpen((prev) => !prev);
  const isActive = (href) => pathname === href;

  return (
    <Shell
      as="div"
      className={cls(
        "relative flex items-start justify-between w-full px-20 py-3 space-x-3",
        "border-b ring-foreground/20",
      )}
    >
      {/* DIV 1 */}
      <div className={cls("flex space-x-2 flex-shrink-0", buttonVariants({ variant: "none", size: "chip" }))}>
        <CategoryLink href="/categories/popular">
          <Crown size={16} /> Phổ biến
        </CategoryLink>
        <CategoryLink href="/categories/hot">
          <Flame size={16} /> Hot
        </CategoryLink>
      </div>
      {/* DIV 2 */}
      <div className="flex items-center space-x-3.5 w-full" ref={containerRef}>
        <div className="w-[1px] h-3 bg-foreground" />
        <div
          className={cls(
            "relative inline-flex flex-wrap items-center gap-2",
            isCategoryListOpen ? "" : "w-full overflow-hidden max-h-7",
          )}
        >
          {categories.slice(0, isCategoryListOpen ? categories.length : maxVisibleCategories).map((category) => (
            <ExtendedLink
              key={category.name}
              href={category.href}
              size="chip"
              className={cls(
                isActive(category.href) ? "bg-foreground/5 text-foreground hover:bg-foreground/10" : "",
                labelVariants(),
              )}
              ref={categoryRef}
            >
              {category.name}
            </ExtendedLink>
          ))}
        </div>
      </div>
      {/* DIV 3 */}
      <Button variant="none" size="chip-icon" onClick={toggleCategories}>
        {isCategoryListOpen ? <Icons.chevronUp size={16} /> : <Icons.chevronDown size={16} />}
      </Button>
    </Shell>
  );
}
