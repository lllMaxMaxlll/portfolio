const ChevronRight = ({ size = 28, color = "currentColor" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="2"
		strokeLinecap="square"
		strokeLinejoin="round">
		{/* strokeLinejoin="arcs"> */}
		<path d="M9 18l6-6-6-6" />
	</svg>
);
export default ChevronRight;
