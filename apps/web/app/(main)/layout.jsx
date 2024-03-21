import { SiteHeader } from "@/components/header/site-header";

export default function MainLayout({ children }) {
	return (
		<section className="min-h-screen">
			<SiteHeader />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{children}
			</main>
		</section>
	);
}
