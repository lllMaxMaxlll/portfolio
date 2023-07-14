import { aboutIcons } from "@/utils";

export const metadata = {
	title: "Max Herr | About",
	description: "About Max Herr",
};

export default function About() {
	return (
		<section className="flex flex-col md:flex-row justify-center content-center h-[80vh] gap-5 mx-auto w-3/4 md:max-w-3xl">
			<div className="flex flex-col justify-center content-center text-center">
				<h2 className="text-2xl sm:text-4xl font-bold text-center py-5">About Me</h2>
				<p>
					Hey, I&apos;m Maximiliano Herr, a coffee-addicted web developer based in Argentina, with a particular passion for creating
					exceptional digital experiences. Beyond my love for technology, I find joy in capturing special moments through photography and
					appreciating the beauty in simplicity. During my free time, you can find me behind the lens, spending quality time with my son and
					cat, or enjoying a good video game.
				</p>
				<br />
				<p className="hidden sm:block">
					Currently, I specialize in the following technologies, dedicating myself to mastering them while remaining open to learning new
					ones:
				</p>
				<div className="grid grid-cols-6 md:grid-cols-12 gap-6 mx-auto py-5">
					{aboutIcons.map((icon, i) => (
						<svg
							key={i}
							role="img"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className=" fill-neutral-900 dark:fill-neutral-200">
							<title>{icon.title}</title>
							<path d={icon.path} />
						</svg>
					))}
				</div>
			</div>
		</section>
	);
}
