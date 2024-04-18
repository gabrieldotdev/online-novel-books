"use client";

import * as React from "react";
import { Button } from "@/islands/primitives/button";
import { fontMono, fontRoboto } from "@/styles/fonts";

export default function OptionsTest({ onChange }) {
  const [themeColor, setThemeColor] = React.useState("bg-[#111111]"); // default theme color
  const [maxWidth, setMaxWidth] = React.useState("max-w-[800px]"); // default max width
  const [fontFamily, setFontFamily] = React.useState(fontMono.className); // default font family
  const [fontSize, setFontSize] = React.useState("text-base"); // default font size
  const [lineHeight, setLineHeight] = React.useState("leading-[1.5]"); // default line height

  const handleThemeColorChange = (newThemeColor) => {
    setThemeColor(newThemeColor);
  };

  const handleMaxWidthChange = (newMaxWidth) => {
    setMaxWidth(newMaxWidth);
  };

  const handleFontFamilyChange = (newFontFamily) => {
    setFontFamily(newFontFamily);
  };

  const handleFontSizeChange = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const handleLineHeightChange = (newLineHeight) => {
    setLineHeight(newLineHeight);
  };

  React.useEffect(() => {
    onChange({
      themeColor,
      maxWidth,
      fontFamily,
      fontSize,
      lineHeight,
    });
  }, [themeColor, maxWidth, fontFamily, fontSize, lineHeight]);

  return (
    <div className="p-4 bg-gray-200">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Theme color</label>
        <div className="mt-1 grid grid-cols-3 gap-4">
          {/* <button onClick={() => handleThemeColorChange("bg-red-500")} className="h-8 w-8 rounded-full bg-red-500" /> */}
          <Button
            onClick={() => handleThemeColorChange("bg-[#111111]")}
            className="h-8 w-8 rounded-full bg-[#111111]"
          />
          <Button
            onClick={() => handleThemeColorChange("bg-green-500")}
            className="h-8 w-8 rounded-full bg-green-500"
          />
          <Button onClick={() => handleThemeColorChange("bg-sky-500")} className="h-8 w-8 rounded-full bg-sky-500" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Max width</label>
        <div className="mt-1 grid grid-cols-3 gap-4">
          <Button onClick={() => handleMaxWidthChange("max-w-[680px]")} className="h-8 w-8 rounded-full bg-gray-500">
            Tự động
          </Button>
          <Button onClick={() => handleMaxWidthChange("max-w-[800px]")} className="h-8 w-8 rounded-full bg-gray-500">
            800px
          </Button>
          <Button onClick={() => handleMaxWidthChange("max-w-[1000px]")} className="h-8 w-8 rounded-full bg-gray-500">
            1000px
          </Button>
          <Button onClick={() => handleMaxWidthChange("max-w-[1200px]")} className="h-8 w-8 rounded-full bg-gray-500">
            1200px
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Font family</label>
        <div className="mt-1 grid grid-cols-2 gap-4">
          <Button
            onClick={() => handleFontFamilyChange(fontMono.className)}
            className="h-8 w-8 rounded-full bg-gray-500"
          >
            Mono
          </Button>
          <Button
            onClick={() => handleFontFamilyChange(fontRoboto.className)}
            className="h-8 w-8 rounded-full bg-gray-500"
          >
            Roboto
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Font size</label>
        <div className="mt-1 grid grid-cols-3 gap-4">
          <Button onClick={() => handleFontSizeChange("text-sm")} className="h-8 w-8 rounded-full bg-gray-500">
            Small
          </Button>
          <Button onClick={() => handleFontSizeChange("text-base")} className="h-8 w-8 rounded-full bg-gray-500">
            Base
          </Button>
          <Button onClick={() => handleFontSizeChange("text-lg")} className="h-8 w-8 rounded-full bg-gray-500">
            Large
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Line height</label>
        <div className="mt-1 grid grid-cols-3 gap-4">
          <Button
            onClick={() => handleLineHeightChange("leading-[normal]")}
            className="h-8 w-8 rounded-full bg-gray-500"
          >
            Normal
          </Button>
          <Button onClick={() => handleLineHeightChange("leading-[1.5]")} className="h-8 w-8 rounded-full bg-gray-500">
            1.5
          </Button>
          <Button onClick={() => handleLineHeightChange("leading-[1.75]")} className="h-8 w-8 rounded-full bg-gray-500">
            1.75
          </Button>
          <Button onClick={() => handleLineHeightChange("leading-[2]")} className="h-8 w-8 rounded-full bg-gray-500">
            2
          </Button>
        </div>
      </div>
    </div>
  );
}
