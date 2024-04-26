import Image from "next/image";
import { Button } from "@/components/primitives/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/primitives/tooltip";

export function HonorItem({ src, alt = "", value, width = 30, height = 30 }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" className="hover:bg-border shrink-0">
          <HonorImage src={src} alt={alt} width={width} height={height} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{value}</TooltipContent>
    </Tooltip>
  );
}

export function HonorImage({ src, alt = "", width = 30, height = 30 }) {
  return <Image src={src} alt={alt} width={width} height={height} className="rounded-full" />;
}
