import { cls } from "@/utils";

export function IconNumber({ number, className, width = 32, height = 32 }) {
	return (
		<div
			className={cls(
				"shrink-0 text-center text-sm font-extrabold text-[#c6c4c4]",
				className,
			)}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				lineHeight: `${height}px`,
			}}
		>
			<span>{number}</span>
		</div>
	);
}
