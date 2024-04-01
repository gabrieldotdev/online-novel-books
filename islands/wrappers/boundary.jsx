import React from "react";
import { cls } from "@/utils";

export const Boundary = ({ children, className, size = "default", color = "default", animateRerendering = true }) => {
  return (
    <div
      className={cls(
        "rounded-lg border border-dashed",
        {
          "": size === "none",
          "p-3 lg:p-5": size === "small",
          "p-4 lg:p-9": size === "default",
          "border-gray-700": color === "default",
          "text-foreground animate-[rerender_1s_ease-in-out_1]": animateRerendering,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
