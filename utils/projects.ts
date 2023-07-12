export type ProjectData = {
	image: string;
	title: string;
	description: string;
	github?: string;
	demo?: string;
	technologies: string[];
};

export const projects: ProjectData[] = [
	{
		image: "/img/CHServiciosJuridicos.jpg",
		title: "CH Servicios Juridicos",
		description:
			"Landing page showing information about a legal services firm. It incorporates a contact form powered by EmailJS. It also has light/dark mode.",
		github: "https://github.com/lllMaxMaxlll/herrera-portfolio.git",
		demo: "https://chserviciosjuridicos.vercel.app/",
		technologies: ["React", "Next.js", "Typescript", "Tailwind", "EmailJS", "PostgreSQL"],
	},
	{
		image: "/img/PetsAmerica.jpg",
		title: "Pets America",
		description:
			"E-commerce website that offers a wide range of products and services for pets. With features such as a shopping cart, PayPal integration, a chatbot, and user authentication through Google or email and password. It also has light/dark mode",
		github: "https://github.com/erikfille/PF-Henry.git",
		technologies: ["React", "Zustand", "Bootstrap", "Node.js", "Hapi", "Nodemailer", "Mongoose", "Mongodb", "Paypal"],
	},
	{
		image: "/img/PixelVerse.jpg",
		title: "PixelVerse",
		description:
			"Showcases information about video games sourced from the https://rawg.io/ API. It allows users to explore a collection of games while also enabling them to create and save their own personalized game lists in the database.",
		github: "https://github.com/lllMaxMaxlll/Pixelverse.git",
		technologies: ["React", "Redux", "Node.js", "Express.js", "Sequelize", "PostgreSQL"],
		demo: "https://pixelverse-max-app.netlify.app/",
	},
	{
		image: "/img/RickAndMorty.jpg",
		title: "Rick And Morty App",
		description:
			"Dynamic app that showing cards from the API https://rickandmortyapi.com/. Manage and store retrieved information using Redux state.It provides filtering, sorting and searching from API.",
		github: "https://github.com/lllMaxMaxlll/Pixelverse.git",
		demo: "https://rick-and-morty-max-app.netlify.app/",
		technologies: ["React", "Redux"],
	},
];
