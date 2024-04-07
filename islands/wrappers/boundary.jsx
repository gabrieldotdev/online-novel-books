import React from "react";
import { cls } from "@/utils";

export function Boundary({ children, className, justify = "center" }) {
  return (
    <div
      className={cls(
        {
          "flex": true,
          "justify-center": justify === "center",
          "justify-start": justify === "start",
          "justify-end": justify === "end",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
