import { aboutIcons } from "@/utils";

export default function About() {
	return (
		<section className="flex flex-col md:flex-row justify-center content-center h-[80vh] gap-5 mx-auto w-3/4 md:max-w-3xl">
			<div className="flex flex-col justify-center content-center text-center">
				<h2 className="text-2xl sm:text-4xl font-bold text-center py-5">About Me</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor ipsam ipsa sequi officiis? Impedit corporis ab voluptate ex
					dolorum delectus suscipit laborum quod. Sapiente cupiditate eligendi rem, dolor itaque, ea consequuntur, fuga delectus quod
					architecto eius libero! Repellendus voluptatum sed suscipit libero illo doloribus amet soluta blanditiis quaerat nisi?
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
