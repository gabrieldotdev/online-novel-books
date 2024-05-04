"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";

export function StoryLine({ description }) {
	return (
		<Card className="border-none shadow-none bg-white">
			<CardHeader className="flex flex-row items-center justify-between space-x-2 space-y-0">
				<CardTitle className="text-2xl shrink-0">
					Giới thiệu về cốt truyện
				</CardTitle>
				<div className="border-b border-dashed border-border w-full" />
			</CardHeader>
			<CardContent>
				<CardDescription className="font-medium leading-6">
					Tôi là một xác sống, một xác sống biết suy nghĩ. Là một xác sống, tôi
					chỉ cần sống một cách chậm rãi mỗi ngày. Bởi vì tôi rất yếu, không thể
					cạy cổ được những người lớn, đói đến mức mỗi ngày chỉ có thể sống mơ
					màng, đầu óc hầu như không thể vận động. Không thể cạy cổ được, ngoài
					việc sống mơ màng, nằm đó chẳng làm được gì khác cả. Bởi vì đã chết
					một lần rồi, vì vậy ngay cả việc chờ chết cũng khó. Cho đến một ngày,
					tôi bị một pháp sư xác sống triệu hồi đến một thế giới khác, hắn dường
					như đã ra lệnh gì đó cho tôi, nhưng tôi không hiểu hắn đang nói gì,
					ngược lại tôi đã giết hắn. Bằng cách nuốt chửng não của pháp sư xác
					sống, tôi đã thu được ngôn ngữ chung của lục địa, kiến thức cơ bản về
					phép thuật, triệu hồi xác sống và một số kiến thức cơ bản khác.
				</CardDescription>
			</CardContent>
			<CardFooter className="flex flex-wrap justify-start gap-2">
				<Link href="/" size="sm" className="bg-order rounded-full">
					Xem thêm
				</Link>
				<Link href="/" size="sm" className="bg-order rounded-full">
					Huyền thoại đồng nhân
				</Link>
				<Link href="/" size="sm" className="bg-order rounded-full">
					Xác sống
				</Link>
			</CardFooter>
		</Card>
	);
}
