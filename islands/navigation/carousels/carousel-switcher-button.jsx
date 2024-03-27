import React from "react";
import { Button } from "@/islands/primitives/button";
import { cls } from "@/utils";

export default function CarouselSwitcherButton({
  label,
  selectedIndex,
  handleScrollTo,
  className,
  ...props
}) {
  return (
    <Button
      className={cls(
        "h-4 rounded-full text-xs font-semibold px-2 py-1.5",
        selectedIndex
          ? "bg-primary"
          : "text-foreground hover:text-background bg-gray-200/60",
        className,
      )}
      onClick={handleScrollTo}
      {...props}
    >
      {label}
    </Button>
  );
}
