import Image from "next/image";
import { cls } from "@/utils";

export function IconImage({ src, alt = "", width = 32, height = 32 }) {
  return (
    <div
      className="shrink-0"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        lineHeight: `${height}px`,
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
