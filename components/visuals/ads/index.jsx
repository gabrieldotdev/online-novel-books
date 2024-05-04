import { AspectRatio } from "@/components/primitives/aspect-ratio";
import { cls } from "@/utils";
import Image from "next/image";
import { tv } from "tailwind-variants";

const adsVariants = tv({
	base: "w-full h-full overflow-hidden rounded-lg",
	variants: {
		size: {
			20: "h-[5rem]",
			30: "h-[7.5rem]",
			40: "h-[10rem]",
			50: "h-[12.5rem]",
		},
	},
	defaultVariants: {
		size: "20",
	},
});

export function Ads({ src, alt = "", size, className }) {
	return (
		<AspectRatio ratio="16/9" className={cls(adsVariants({ size }), className)}>
			<Image
				fill
				src={src}
				alt={alt}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover object-center"
			/>
		</AspectRatio>
	);
}
