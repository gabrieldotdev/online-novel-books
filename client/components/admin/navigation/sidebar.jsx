"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { useSidebar } from "@/hooks/use-sidebar";
import { cls } from "@/utils/cn-classes";
import { admItems } from "@/utils/common";

import { AdminNav } from "./admin-nav";

export function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = React.useState(false);
  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <aside
      className={cls(
        "group relative hidden h-screen border-r pt-16 lg:block w-72",
        status && "duration-500",
        isOpen ? "w-64" : "w-[78px]",
      )}
    >
      <Icons.chevronLeft
        size={26}
        className={cls(
          "absolute -right-2 top-16 w-4 h-8 cursor-pointer rounded-full border bg-accent hover:bg-border",
          "group-hover:block hidden",
          !isOpen && "rotate-180",
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <AdminNav items={admItems} />
        </div>
      </div>
    </aside>
  );
}
