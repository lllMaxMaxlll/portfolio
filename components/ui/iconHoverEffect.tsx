"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const IconHoverEffect = ({
	items,
}: {
	items: {
		icon: React.ReactNode;
		link: string;
		color?: string;
		background?: string;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className="flex content-center justify-center">
			{items.map((item, idx) => (
				<Link
					href={item?.link}
					key={item?.link}
					target="_blank"
					className="relative group px-3"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className={cn("absolute inset-0 bg-neutral-300 dark:bg-neutral-800/[0.8] block rounded-3xl", item.background)}
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Icon color={item.color}>{item.icon}</Icon>
				</Link>
			))}
		</div>
	);
};

export const Icon = ({ color: className, children }: { color?: string; children: React.ReactNode }) => {
	return (
		<div className={cn("overflow-hidden relative z-20", className)}>
			<div className="relative z-50">
				<div className="py-2">{children}</div>
			</div>
		</div>
	);
};
