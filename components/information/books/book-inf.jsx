import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Book } from "@/components/visuals/book";
import { bookDetails } from "@/configs/other";
import { labelVariants } from "@/themes/twv";
import { cls } from "@/utils";

export function BookInf() {
	return (
		<Card className="flex flex-grow items-center border-none bg-transparent shadow-none">
			<CardHeader className="pl-0">
				<Book src="/assets/images/600.webp" alt="" size="xl" />
			</CardHeader>
			<div className="space-y-4 h-full">
				{/* title */}
				<CardContent className="p-0">
					<CardTitle className={cls("truncate", labelVariants({ size: "xl" }))}>
						Từ lúc bắt đầu, ta vô địch lĩnh vực
					</CardTitle>
					<div className="flex space-x-3">
						<CardDescription>
							<span className="text-foreground/90">Tác giả:</span>{" "}
							<Link href="#" className="text-foreground/90">
								Wxs Dev
							</Link>
						</CardDescription>
						<CardDescription className="text-foreground/60">
							Được chỉnh sửa: 2024-04-11 09:35:45
						</CardDescription>
					</div>
				</CardContent>
				{/* Tags */}
				<CardContent className="p-0 flex-grow">
					<CardDescription className="flex flex-wrap gap-2">
						{bookDetails.allTags.map((tag, index) => (
							<Link key={index} href={tag.href} size="sm" variant="outline">
								{tag.name}
							</Link>
						))}
					</CardDescription>
				</CardContent>
				{/* Nums */}
				<CardContent className="p-0 flex flex-grow space-x-3">
					{bookDetails.allNums.map((num, index) => (
						<CardDescription key={index} className="text-xs">
							<span
								className={cls(
									"text-foreground/80",
									labelVariants({ size: "lg" }),
								)}
							>
								{num.value}
							</span>{" "}
							{num.name}
						</CardDescription>
					))}
				</CardContent>
				{/* Chapter */}
				<CardContent className="p-0 flex-grow">
					<CardDescription className="line-clamp-2 text-foreground/80">
						<span className="text-foreground">Chương mới nhất:</span> Chương
						112: Vô địch
					</CardDescription>
				</CardContent>
				{/* Button */}
				<CardFooter className="p-0">
					<div className="flex items-center justify-between space-x-3">
						{bookDetails.allButton.map((button, index) => (
							<Link key={index} href={button.href} variant="outline" size="lg">
								{button.name}
							</Link>
						))}
					</div>
				</CardFooter>
			</div>
		</Card>
	);
}
