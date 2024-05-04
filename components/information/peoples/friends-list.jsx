import { UserAvatar } from "@/components/account/user-avatar";
import { Icons } from "@/components/icons";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/primitives/card";
import { Separator } from "@/components/primitives/separator";
import Link from "next/link";

import { NovelItem } from "../books/_comps/novel-item";

export function FriendsList() {
	return (
		<Card className="border-none shadow-none bg-white">
			<CardHeader className="flex flex-row items-center justify-between space-y-0">
				<CardTitle>Quan tâm</CardTitle>
				<Link href="/profile/d.wxs" className="group flex items-center">
					<CardDescription className="text-xs">Tất cả</CardDescription>
					<Icons.chevronRight size={16} className="group-hover:animate-jumpR" />
				</Link>
			</CardHeader>
			<Separator />
			<CardContent className="space-y-3 mt-3">
				{Array.from({ length: 7 }).map((_, idx) => (
					<Link
						key={idx}
						href="/profile/d.wxs"
						className="flex items-center justify-between w-full space-x-3"
					>
						<div className="flex flex-col space-y-1">
							<CardTitle>D.Wxs</CardTitle>
							<CardDescription className="line-clamp-1">
								Chưa có thông tin
							</CardDescription>
						</div>
						<UserAvatar
							src="/assets/images/600.webp"
							fallback={idx + 1}
							className="w-10 h-10 text-base"
						/>
					</Link>
				))}
			</CardContent>
		</Card>
	);
}
