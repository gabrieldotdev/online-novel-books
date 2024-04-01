"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/islands/icons";
import { Button } from "@/islands/primitives/button";
import { cn } from "@/utils";

export function DialogShell({ children, className, ...props }) {
  const router = useRouter();

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [router]);

  return (
    <div className={cn(className)} {...props}>
      <Button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100" onClick={() => router.back()}>
        <Icons.close className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Close</span>
      </Button>
      {children}
    </div>
  );
}
