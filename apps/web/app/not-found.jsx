import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function NotFound() {
	return (
		<div className="flex flex-col place-items-center justify-center h-screen">
			<Image
				className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				style={{ width: "auto", height: "auto" }}
				src="/logo.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
			/>
			<h1 className="text-4xl font-bold mt-8">404 - Page Not Found</h1>
			<Link href="/" passHref>
				<span className="text-blue-500 hover:underline mt-4">Go back home</span>
			</Link>
		</div>
	);
}
