import { UserAvatar } from "@/components/account/user-avatar";
import { Icons } from "@/components/icons";
import { HonorImage } from "@/components/information/books/_comps/honor-item";
import { Button } from "@/components/primitives/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/primitives/card";
import { cls } from "@/utils";

export function VemPeople() {
	return (
		<Card
			className={cls(
				"flex overflow-hidden border-none shadow-none bg-transparent",
				"md:h-[212px] h-[150px] p-6",
			)}
			style={{
				backgroundImage:
					"url('https://revo.zongheng.com/home/2024/shen_bg.a3e33d75.jpg')",
				backgroundSize: "100% 100%",
			}}
		>
			<UserAvatar
				src="/assets/images/600.webp"
				alt="Wxs Dev"
				fallback="N"
				className="w-24 h-24"
			/>
			<CardHeader className="flex-grow justify-start py-0 space-y-3">
				<div className="flex justify-between items-center">
					<CardTitle className="text-brown text-2xl">Hoang Thai Ninh</CardTitle>
					<CardDescription className="text-brown opacity-80">
						Joined Vibeverse.com on July 16, 2014
					</CardDescription>
				</div>
				{/* Honor // Danh hiệu */}
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-2">
						{Array.from({ length: 3 }).map((_, idx) => (
							<span
								key={idx}
								className="flex items-center h-[22px] rounded-full space-x-1 pl-2 pr-2"
								style={{ background: "rgba(28, 28, 28, 0.05)" }}
							>
								<em className="p-0.5 rounded-full bg-background">
									<HonorImage
										src="https://qdfepccdn.qidian.com/www.qidian.com/images/book/badges/rongyao_2_v3.png"
										width={15}
										height={15}
									/>
								</em>
								<CardDescription className="text-xs text-brown font-medium">
									Kí giả vương
								</CardDescription>
							</span>
						))}
					</div>
					<Button size="sm" className="flex items-center bg-white rounded-full">
						<Icons.userRoundPlus size={16} className="mr-1" />
						Theo dõi
					</Button>
				</div>
				{/* ???? */}
				<div className="flex flex-grow">???????</div>
				{/* Introduction // Giới thiệu */}
				<div className="flex items-center space-x-2">
					<CardTitle className="shrink-0 text-sm text-brown">
						Giới thiệu
					</CardTitle>
					<CardDescription className="text-brown line-clamp-1">
						Hiện tại đang làm việc tại công ty FPT Software. Tôi là một người
						yêu thích công nghệ và muốn chia sẻ kiến thức của mình với mọi
						người. Hiện tại đang làm việc tại công ty FPT Software. Tôi là một
						người yêu thích công nghệ và muốn chia sẻ kiến thức của mình với mọi
						người.
					</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}
