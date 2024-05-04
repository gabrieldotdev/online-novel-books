import "@/styles/globals.scss";

import { BasicNotice } from "@/components/basic-notice";
import { MultilayeredAnnouncement } from "@/components/multilayered-announcement";
import { TooltipProvider } from "@/components/providers/tooltip-provider";
import { siteConfig } from "@/configs/app";
import { DEFAULT_METADATA } from "@/data/meta";
import { fontRoboto } from "@/styles/fonts";
import { cls } from "@/utils";

export const metadata = {
	...DEFAULT_METADATA,
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	openGraph: {
		...DEFAULT_METADATA.openGraph,
		url: siteConfig.url.base,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cls(
					"min-h-screen bg-background antialiased mx-auto w-full max-w-[2560px]",
					fontRoboto.className,
				)}
			>
				<TooltipProvider>{children}</TooltipProvider>
				<MultilayeredAnnouncement />
				<BasicNotice />
			</body>
		</html>
	);
}
