"use client";

import Typewriter from "typewriter-effect";

function Landing() {
	return (
		<section className="flex justify-center content-center absolute h-screen w-screen">
			<div className="flex flex-col justify-center">
				<p className="mb-2 ps-2 text-start text-neutral-500 text-base md:text-xl">I AM</p>
				<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-center">MAX HERR</h1>
				<div className="text-end mt-2 text-neutral-500 text-base md:text-xl">
					<Typewriter
						options={{
							strings: ["A FRONT END DEVELOPER", "A BACK END DEVELOPER", "A PHOTOGRAPHER"],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>
		</section>
	);
}

export default Landing;
