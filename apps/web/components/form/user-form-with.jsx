import { Github } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function UserFormWith({ isLoading }) {
	return (
		<Button variant="outline" type="button" disabled={isLoading}>
			{isLoading ? (
				<LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
			) : (
				<Github className="mr-2 h-4 w-4" />
			)}{" "}
			GitHub
		</Button>
	);
}
