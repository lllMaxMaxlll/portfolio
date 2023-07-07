"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "../utils";

export type Icons = {
	title: string;
	d: string;
	size: number;
	color: string;
};

function SvgIcon({ title = "test", d = "", size = 24, color }: Icons) {
	const [mounted, setMounted] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(0);

	const mousePosition = useMousePosition();

	useEffect(() => {
		const randomX = Math.round(Math.random() * window?.innerWidth);
		const randomY = Math.round(Math.random() * window?.innerHeight);
		setPosition({ x: randomX, y: randomY });
		if (!mounted) setMounted(true);
	}, [window.innerWidth]);

	useEffect(() => {
		const mouseX = mousePosition.x;
		const mouseY = mousePosition.y;

		setOffsetX(mouseX / 100);
		setOffsetY(mouseY / 100);
	}, [mousePosition]);

	if (!mounted) return null;

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="#404040"
			fillOpacity={0.3}
			className="animate-pulse"
			style={{
				transform: `translate3d(${offsetX}px, ${offsetY}px, ${offsetX / offsetY}px)`,
				position: "fixed",
				left: position.x,
				top: position.y,
			}}>
			<title>{title}</title>
			<path d={d} />
		</svg>
	);
}

export default SvgIcon;
