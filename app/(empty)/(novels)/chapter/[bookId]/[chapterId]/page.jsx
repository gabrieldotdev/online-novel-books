"use client";

import * as React from "react";
import Image from "next/image";
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/islands/primitives/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/islands/primitives/tooltip";
import { labelVariants } from "@/islands/primitives/tw/twv";
import { BaseShell, Shell } from "@/islands/wrappers/shell-variants";
import { NavbarBrand } from "@/islands/wrappers/wps-header/navbar-brand";
import { fontMono, fontRoboto } from "@/styles/fonts";
import { cls } from "@/utils";
import { Bookmark } from "lucide-react";

export default function Chapter({ params }) {
  const [options, setOptions] = React.useState({
    themeColor: "bg-[#111111]",
    maxWidth: "max-w-[800px]",
    fontFamily: fontRoboto.className,
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
      <nav className="h-[inherit] w-[inherit] px-6">
        <div className="flex items-center justify-between h-14">
          <NavbarBrand src={"/icon.svg"} className="dark:invert" />
          <Button variant="none" size="none" className="ml-auto">
            <span className={labelVariants()}>Đăng nhập</span>
          </Button>
        </div>
      </nav>
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
        {/* Details */}
        <Shell variant="compact" className="relative w-[inherit] px-6">
          <Card className="bg-transparent text-center">
            <CardHeader>
              <figure className="group relative mx-auto h-auto flex items-center justify-center rounded-lg overflow-hidden mb-4 w-28">
                <Image
                  src="/assets/images/600.webp"
                  alt=""
                  width={208}
                  height={288}
                  style={{ width: "auto", height: "auto" }}
                  className={cls("object-cover object-center", "")}
                />
              </figure>
              <CardTitle className="text-foreground/80">
                Học thuyết gia tài năng hệ thống ({params.chapterId})
              </CardTitle>
              <CardDescription>Wxsdev</CardDescription>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
            </CardContent>
          </Card>
        </Shell>
        {/* Text */}
        <Shell variant="compact" className="relative w-[inherit] p-6">
          {/* <OptionsTest onChange={handleOptionsChange} /> */}
          {/* BookMark */}
          <div className="absolute top-0 right-20 cursor-pointer">
            <Tooltip>
              <TooltipTrigger asChild>
                <Bookmark size={24} className="text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </div>
          {/* Content */}
          <Card className="bg-transparent border-none">
            <CardHeader>
              <CardTitle className="text-foreground/80 line-clamp-1">Chương {params.chapterId}: ???</CardTitle>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center space-x-1">
                  <Icons.notebook size={12} className="text-muted-foreground" />
                  <CardDescription>Học thuyết gia tài năng hệ thống</CardDescription>
                </span>
                <span className="flex items-center space-x-1">
                  <Icons.penTool size={12} className="text-muted-foreground" />
                  <CardDescription>Wxsdev</CardDescription>
                </span>
                <span className="flex items-center space-x-1">
                  <Icons.clock size={12} className="text-muted-foreground" />
                  <CardDescription>2024-04-12 23:13:50</CardDescription>
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
              <CardDescription className="text-xl text-foreground/80 cursor-default">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt dolor repellat labore enim
                mollitia quam repellendus! Corrupti deserunt explicabo aperiam laboriosam repellendus aliquam iure
                minima delectus adipisci, et soluta.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex space-x-3">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                folder
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </CardFooter>
          </Card>
        </Shell>
      </div>
    </BaseShell>
  );
}
