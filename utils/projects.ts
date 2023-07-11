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
	},
	{
		image: "/img/PetsAmerica.jpg",
		title: "Pets America",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste. Ipsam molestiae illo, quod dicta, amet atque repellat tempore deleniti expedita et blanditiis earum placeat dolores quis, soluta harum sit quae?",
	},
	{
		image: "/img/PixelVerse.jpg",
		title: "PixelVerse",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste. Ipsam molestiae illo, quod dicta, amet atque repellat tempore deleniti expedita et blanditiis earum placeat dolores quis, soluta harum sit quae?",
	},
];
