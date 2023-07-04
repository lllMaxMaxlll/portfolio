"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "@/utils/mouse";

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
		const randomX = Math.random() * (window.innerWidth - 100);
		const randomY = Math.random() * (window.innerHeight - 100);
		setPosition({ x: randomX, y: randomY });
		if (!mounted) setMounted(true);
	}, [window.innerWidth]);

	useEffect(() => {
		const mouseX = mousePosition.x;
		const mouseY = mousePosition.y;

		setOffsetX((mouseX - position.x) / 6000);
		setOffsetY((mouseY - position.y) / 6000);

		setPosition((prevPosition) => ({
			x: prevPosition.x + offsetX,
			y: prevPosition.y + offsetY,
		}));
	}, [mousePosition]);

	if (!mounted) return null;

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="#404040"
			fillOpacity={0.34}
			style={{ transform: `translate(${position.x}px, ${position.y}px)`, position: "fixed" }}>
			<title>{title}</title>
			<path d={d} />
		</svg>
	);
}

export default SvgIcon;
