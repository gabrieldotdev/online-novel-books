"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import bannersData from "./config";

export function Banner() {
  return (
    <picture className="absolute top-0 left-0 w-full h-full bg-[#1a1a1a]">
      {/* <source
        srcset="/assets/visuals/2024-03-20/01b79b5b5b38d7305a0ca1780c24662cc5a59f18.png@1c.webp"
        type="image/webp"
      /> */}
      {/* <img src="/assets/visuals/2024-03-20/01b79b5b5b38d7305a0ca1780c24662cc5a59f18.png@1c.webp" alt="" /> */}
    </picture>
  );
}
