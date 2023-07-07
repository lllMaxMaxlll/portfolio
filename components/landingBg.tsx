import { iconsLanding } from "../utils";
import { SvgIcon } from "../components";

function LandingBg() {
	return (
		<div className="hidden lg:block absolute inset-0 -z-10 animate-fade-in overflow-hidden">
			{iconsLanding.map((icon, index) => (
				<SvgIcon key={index} title={icon.title} color={icon.color} d={icon.d} size={icon.size} />
			))}
		</div>
	);
}

export default LandingBg;
