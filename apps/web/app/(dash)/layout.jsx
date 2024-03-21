import { DashNav } from "@/components/navbar/dash/dash-nav";

export const metadata = {
	title: {
		default: "Dashboard",
		template: "%s | Dashboard",
	},
	description: "Welcome to the dashboard",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function DashLayout({ children }) {
	return (
		<section className="min-h-screen">
			{/* <SiteHeader /> */}
			<DashNav />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{children}
			</main>
		</section>
	);
}
