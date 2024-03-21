import {
	CommandDialog as CommandDialogComp,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { siteNavigation } from "@/config/site-nav";
import { FileIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const CommandDialog = ({ open, setOpen, runCommand }) => {
	const router = useRouter();

	return (
		<CommandDialogComp open={open} onOpenChange={setOpen}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Links">
					{siteNavigation.mainNav
						.filter((navitem) => !navitem.external)
						.map((navItem) => (
							<CommandItem
								key={navItem.href}
								value={navItem.title}
								onSelect={() => {
									runCommand(() => router.push(navItem.href));
								}}
							>
								<FileIcon className="mr-2 h-4 w-4" />
								{navItem.title}
							</CommandItem>
						))}
				</CommandGroup>
			</CommandList>
		</CommandDialogComp>
	);
};
