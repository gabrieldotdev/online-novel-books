import React from "react";
import { Separator } from "@/islands/primitives/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/islands/primitives/tooltip";
import { labelVariants } from "@/islands/primitives/tw/twv";
import { cls } from "@/utils";
import { BadgeHelp, Github } from "lucide-react";

import { FacetedFilter } from "./faceted-filter";

const filterOptions = [
  {
    value: "backlog",
    label: "Backlog",
    icon: Github,
  },
  {
    value: "todo",
    label: "Todo",
    icon: Github,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Github,
  },
  {
    value: "done",
    label: "Done",
    icon: Github,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: Github,
  },
];

export function Toolbar({ children }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <FacetedFilter options={filterOptions} title="Phổ biến" />
        <FacetedFilter options={filterOptions} title="Bộ sưu tập" />
      </div>
      <div className="flex items-center">
        <span className="hidden lg:block text-xs text-gray-500 mr-1">Có 1.097.614 tác phẩm liên quan</span>
        <Tooltip>
          <TooltipTrigger>
            <BadgeHelp size={14} />
          </TooltipTrigger>
          <TooltipContent>
            <p className={cls("w-48 text-center", labelVariants({ size: "xs" }))}>
              Sử dụng các bộ lọc để tìm kiếm tác phẩm một cách dễ dàng hơn.
            </p>
          </TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="ml-3 h-3" />
        {children}
      </div>
    </div>
  );
}
