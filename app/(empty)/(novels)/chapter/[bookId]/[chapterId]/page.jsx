"use client";

import * as React from "react";
import OptionsTest from "@/app/_islands/options-test";
import { Icons } from "@/islands/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/islands/primitives/breadcrumb";
import { Button } from "@/islands/primitives/button";
import { labelVariants } from "@/islands/primitives/tw/twv";
import { BaseShell, Shell } from "@/islands/wrappers/shell-variants";
import { NavbarBrand } from "@/islands/wrappers/wps-header/navbar-brand";
import { fontMono } from "@/styles/fonts";
import { cls } from "@/utils";

export default function Chapter({ params }) {
  const [options, setOptions] = React.useState({
    themeColor: "bg-[#111111]",
    maxWidth: "max-w-[800px]",
    fontFamily: fontMono.className,
    fontSize: "text-base",
    lineHeight: "leading-[1.5]",
  });

  const handleOptionsChange = (newOptions) => {
    setOptions(newOptions);
  };

  return (
    <BaseShell
      as="div"
      className={cls("p-0 md:p-0 divide-y", options.maxWidth, options.themeColor, options.fontFamily)}
    >
      <Shell variant="compact" className="relative w-[inherit] px-6 py-0 md:py-0">
        <nav className="h-[inherit] w-[inherit]">
          <div className="flex items-center justify-between h-14">
            <NavbarBrand src={"/icon.svg"} className="dark:invert" />
            <Button variant="none" size="none" className="ml-auto">
              <span className={labelVariants()}>Đăng nhập</span>
            </Button>
          </div>
        </nav>
      </Shell>
      <div className="relative min-h-screen z-[1] divide-y">
        <Shell variant="compact" className="relative w-[inherit] px-6 py-0 md:py-0 h-14">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icons.arrowRight size={14} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Icons.arrowRight size={14} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Shell>
        <Shell variant="compact" className="relative w-[inherit] px-6 py-0 md:py-0">
          <OptionsTest onChange={handleOptionsChange} />
          <div className={cls("p-6", options.fontSize, options.lineHeight)}>
            <h1 className="text-3xl font-bold">Chapter {params.chapterId}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero euismod, fermentum odio nec,
              vestibulum purus. Nam auctor, arcu nec ultrices luctus, purus nunc consequat libero, nec fermentum nunc
              sapien auctor nunc
            </p>
          </div>
        </Shell>
      </div>
    </BaseShell>
  );
}
