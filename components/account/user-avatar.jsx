import React from "react";
import { cls } from "@/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../primitives/avatar";

export function UserAvatar({ alt = "", src, fallback, className }) {
  return (
    <Avatar className={cls("h-9 w-9", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="font-semibold text-2xl">{fallback}</AvatarFallback>
    </Avatar>
  );
}
