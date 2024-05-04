import { ExtraNav } from "@/components/navigation/extra-nav";
import SiteFooter from "@/components/navigation/site-footer";

export default function ExtraLayout({ children }) {
	return (
		<section>
			<ExtraNav />
			{children}
			<SiteFooter />
		</section>
	);
}
