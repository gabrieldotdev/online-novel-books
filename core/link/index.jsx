import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/islands/primitives/button";
import { cls } from "@/utils";

const ExtendedLink = ({ className, variant, size, href, ...props }) => {
  const variantClasses = buttonVariants({ variant, size });
  const linkHref = href ?? "/";

  return <Link {...props} href={linkHref} className={cls(variantClasses, className)} />;
};

export { ExtendedLink as Link };
