import React from "react";
import Link from "next/link";
import { labelVariants } from "@/islands/primitives/tw-variants";

export function Categories() {
  return (
    <>
      <div>
        <Link href="/categories" className={labelVariants()}>
          {/* Icon */}
          <font>Năng động</font>
          {/* Title */}
        </Link>
      </div>
    </>
  );
}
