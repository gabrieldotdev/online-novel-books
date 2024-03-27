"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/islands/primitives/card";
import { cls } from "@/utils";

export function CarouselCards({
  title,
  description,
  imageUrl,
  selectedIndex,
  className,
  ...props
}) {
  return (
    <Card
      className={cls(
        "relative flex-auto flex-shrink overflow-hidden",
        "min-w-[13rem] w-full h-[16rem] ml-3",
        "duration-200 transform-gpu",
        selectedIndex ? "" : "my-4",
        className,
      )}
      {...props}
    >
      <CardHeader className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-transparent to-black/50">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        style={{ width: "100%", height: "100%" }}
        className="object-cover w-full h-full"
      />
    </Card>
  );
}
