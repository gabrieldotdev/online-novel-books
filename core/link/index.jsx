"use client";

import * as React from "react";
import Link from "next/link";
import { buttonVariants } from "@/islands/primitives/tw-variants/tv";
import { cls } from "@/utils";

const ExtendedLink = React.forwardRef(({ className, variant, size, color, href, ...props }, ref) => {
  const variantClasses = buttonVariants({ variant, size, color });
  const linkHref = href ?? "/";

  return <Link {...props} href={linkHref} className={cls(variantClasses, className)} ref={ref} />;
});

export { ExtendedLink as Link };
