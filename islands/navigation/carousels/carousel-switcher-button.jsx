import React from "react";
import { Badge } from "@/islands/primitives/badge";
import { cls } from "@/utils";

export default function CarouselSwitcherButton({
  label,
  selectedIndex,
  handleScrollTo,
  className,
  ...props
}) {
  return (
    <Badge
      className={cls(
        "flex-grow-0 flex-shrink-0 cursor-pointer",
        selectedIndex
          ? "bg-primary"
          : "text-foreground hover:text-background bg-gray-200/60",
        className,
      )}
      onClick={handleScrollTo}
      {...props}
    >
      {label}
    </Badge>
  );
}
