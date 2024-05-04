import { useControl } from "@/hooks/use-control";
import React from "react";

import { LogoBrand } from "../visuals/logo/logo-brand";
import { UserMenu } from "./user-menu";

export function SubNav({ options }) {
	return (
		<div className="relative h-[3.5rem] w-[inherit] border-b border-input">
			<nav className="h-[inherit] w-[inherit] fixed top-0 z-[2]">
				<div
					className="flex justify-between items-center h-[3.5rem] border-b border-input px-6"
					style={{
						backgroundColor: options.themeColor,
						maxWidth: options.maxWidth,
					}}
				>
					<LogoBrand />
					<UserMenu />
				</div>
			</nav>
		</div>
	);
}
