import { cls } from "@/utils";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "../../icons";
import { Shell } from "../shell-variants";

export function AuthFormContent({
	imageUrl,
	className,
	type = "sign-in",
	title = type === "sign-in" ? "Đăng nhập để sử dụng" : "Tạo tài khoản mới",
	children,
}) {
	return (
		<Shell
			className={cls(
				"relative flex items-center justify-center self-center min-h-screen sm:max-w-xl lg:max-w-none lg:grid-cols-2 md:py-0 md:px-0",
				className,
			)}
		>
			{/* Section for the logo and additional information */}
			<div className="relative hidden flex-col p-10 text-white lg:flex dark:border-r h-[calc(100dvh-4rem)] w-96 rounded-3xl overflow-hidden">
				<div className="absolute z-20 inset-0 bg-background/20" />
				<Image
					src={imageUrl}
					alt=""
					fill
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="z-20 flex relative items-center justify-between text-lg font-medium">
					{/* <NavbarBrand src={"/icon.svg"} className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] invert" /> */}
					<Link href="/" className="group flex items-center space-x-2">
						<Icons.arrowBigLeftDash size={18} className="text-white" />
						<span className="flex items-center space-x-2 text-sm text-white/80 group-hover:underline">
							Quay lại
						</span>
					</Link>
				</div>
			</div>
			{/* Section for the authentication form */}
			<div className="relative flex flex-col items-center justify-center w-full h-screen p-10 lg:w-2/3 overflow-hidden">
				<div className="mx-auto h-full flex flex-shrink-0 w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
						{type === "sign-in" ? (
							<p className="text-muted-foreground">
								hoặc{" "}
								<Link
									href="/sign-up"
									className="underline hover:text-foreground duration-100 transition-colors"
								>
									Tạo tài khoản mới
								</Link>
							</p>
						) : type === "sign-up" ? (
							<p className="text-muted-foreground">
								Bạn đã có tài khoản?{" "}
								<Link
									href="/sign-in"
									className="underline hover:text-foreground duration-100 transition-colors"
								>
									Đăng nhập ngay
								</Link>
							</p>
						) : null}
					</div>
					{children}
					<p className="px-8 text-center text-sm text-muted-foreground">
						Bằng cách tiếp tục, bạn đồng ý với{" "}
						<Link
							href="/terms"
							className="underline underline-offset-4 hover:text-primary"
						>
							Điều khoản dịch vụ
						</Link>{" "}
						và{" "}
						<Link
							href="/privacy"
							className="underline underline-offset-4 hover:text-primary"
						>
							Chính sách bảo mật
						</Link>
						.
					</p>
				</div>
			</div>
		</Shell>
	);
}
