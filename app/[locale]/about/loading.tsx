const AboutMeLoading = () => {
	return (
		<div className="flex flex-col justify-center content-center w-3/4 md:max-w-3xl min-h-[70vh] md:min-h-[80vh] gap-5 mx-auto">
			<div className="flex flex-col justify-center content-center">
				<div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-5" />
				<div className="h-20 w-full bg-gray-200 rounded animate-pulse mb-4" />
				<div className="h-20 w-full bg-gray-200 rounded animate-pulse" />

				<div className="mt-8 grid grid-cols-4 gap-4">
					{[...Array(8)].map((_, i) => (
						<div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutMeLoading;
