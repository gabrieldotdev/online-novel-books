"use client";

import * as React from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { SubNav } from "@/components/navigation/sub-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/primitives/breadcrumb";
import { Button } from "@/components/primitives/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/primitives/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/primitives/tooltip";
import { OptionalControls } from "@/components/switchers/optional-controls";
import { Shell } from "@/components/wrappers/shell-variants";
import { fullURL } from "@/data/meta/builder";
import { useControl } from "@/hooks/use-control";
import { cls } from "@/utils";
import { Bookmark } from "lucide-react";

export default function ChapterPage({ params }) {
  const { options, handleOptionChange } = useControl();
  const { bookId, chapterId } = params;
  console.log(params);

  return (
    <Shell
      as="div"
      style={{ backgroundColor: options.themeColor, maxWidth: options.maxWidth }}
      className={cls("relative gap-0 p-0 md:p-0", options.fontFamily)}
    >
      <SubNav options={options} />
      <OptionalControls handleOptionChange={handleOptionChange} />
      <div className="relative min-h-screen z-[1] divide-y">
        <section className="grid items-center w-[inherit] px-6 h-14">
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
        </section>
        {/* Details */}
        <section className="grid items-center w-[inherit] p-6">
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
        </section>
        {/* Text */}
        <section className="relative grid items-center w-[inherit] p-0 py-4 md:p-6">
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
              <Button variant="outline" size="default" className="rounded-xl">
                Previous
              </Button>
              <Button variant="outline" size="default" className="rounded-xl">
                folder
              </Button>
              <Button variant="outline" size="default" className="rounded-xl">
                Next
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </Shell>
  );
}
