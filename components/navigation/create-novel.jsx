import { cls } from "@/utils";
import React from "react";

import { Icons } from "../icons";
import { Link } from "../primitives/link";

export function CreateNovel({
	isSticky,
	content = "Tạo truyện mới",
	color = "text-white/80 border-white/20",
}) {
	return (
		<Link
			href="/create-novel"
			size="default"
			variant="outline"
			className={cls(
				"rounded-xl space-x-2",
				isSticky ? "text-foreground/80" : color,
			)}
		>
			<Icons.penTool size={16} />
			<span className="hidden lg:inline-flex">{content}</span>
		</Link>
	);
}
