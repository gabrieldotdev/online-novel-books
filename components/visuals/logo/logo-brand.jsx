import { Link } from "@/components/primitives/link";
import { cls } from "@/utils";
import Image from "next/image";

export function LogoBrand({ isSticky, color = "invert" }) {
	return (
		<Link>
			<Image
				src="/icon.svg"
				alt="logo"
				width={30}
				height={30}
				className={cls("w-[30px] h-30px", isSticky || color)}
			/>
		</Link>
	);
}
