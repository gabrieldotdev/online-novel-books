"use client";

import { CommandDialog } from "@/components/search/command-dialog";
import { Button } from "@/components/ui/button";
import { useCommand } from "@/hooks/use-command";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export const CommandSearch = () => {
	const { open, setOpen, runCommand } = useCommand();
	return (
		<>
			<Button
				variant="flat"
				className={cn(
					"relative h-8 w-full justify-start rounded-xl backdrop-blur ring-1 ring-white/60 text-xs font-medium text-zinc-400 shadow-none sm:pr-12 md:w-40 lg:w-64",
				)}
				onClick={() => setOpen(true)}
			>
				<SearchIcon className="h-4 w-4 mr-2" />
				<span className="hidden lg:inline-flex">Quick Search...</span>
				<span className="inline-flex lg:hidden">Search...</span>
				<kbd className="pointer-events-none absolute right-[0.3rem] hidden h-5 select-none items-center gap-1 rounded px-1.5 text-[14px] opacity-100 sm:flex">
					<span>⌘</span>K
				</kbd>
			</Button>
			<CommandDialog open={open} setOpen={setOpen} runCommand={runCommand} />
		</>
	);
};
