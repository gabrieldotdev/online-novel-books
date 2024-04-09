import React from "react";
import { cls } from "@/utils";

import { boundaryVariants } from "./boundary";

export function SegmentBoundary({ children, className, variant, color, border, radius, animate }) {
  return (
    <div
      className={cls(
        boundaryVariants({
          variant,
          color,
          border,
          radius,
          animate,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
