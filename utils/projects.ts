export type ProjectData = {
	image: string;
	title: string;
	description: string;
	github?: string;
	demo?: string;
	technologies?: string[];
};

export const projects: ProjectData[] = [
	{
		image: "/img/CHServiciosJuridicos.jpg",
		title: "CH Servicios Juridicos",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste. Ipsam molestiae illo, quod dicta, amet atque repellat tempore deleniti expedita et blanditiis earum placeat dolores quis, soluta harum sit quae?",
		github: "https://github.com/lllMaxMaxlll/herrera-portfolio.git",
		demo: "https://chserviciosjuridicos.vercel.app/",
	},
	{
		image: "/img/PetsAmerica.jpg",
		title: "Pets America",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste. Ipsam molestiae illo, quod dicta, amet atque repellat tempore deleniti expedita et blanditiis earum placeat dolores quis, soluta harum sit quae?",
		github: "https://github.com/erikfille/PF-Henry.git",
	},
	{
		image: "/img/PixelVerse.jpg",
		title: "PixelVerse",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste. Ipsam molestiae illo, quod dicta, amet atque repellat tempore deleniti expedita et blanditiis earum placeat dolores quis, soluta harum sit quae?",
		github: "https://github.com/lllMaxMaxlll/Pixelverse.git",
	},
	{
		image: "/img/RickAndMorty.jpg",
		title: "Rick And Morty App",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste. Ipsam molestiae illo, quod dicta, amet atque repellat tempore deleniti expedita et blanditiis earum placeat dolores quis, soluta harum sit quae?",
		github: "https://github.com/lllMaxMaxlll/Pixelverse.git",
		demo: "https://rick-and-morty-max-app.netlify.app/",
	},
];
