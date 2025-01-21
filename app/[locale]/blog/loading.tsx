const BlogLoading = () => {
	return (
		<div className="px-4 min-h-[70vh] md:min-h-[80vh]">
			<div className="max-w-4xl mx-auto py-8">
				{Array.from({ length: 5 }).map((_, index) => (
					<div key={index} className="mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700 animate-pulse">
						<div className="h-6 bg-accent rounded w-3/4 mb-4"></div>
						<div className="h-4 bg-accent rounded w-5/6 mb-2"></div>
						<div className="h-4 bg-accent rounded w-1/2 mb-6"></div>
						<div className="flex gap-2">
							<span className="h-6 w-16 bg-accent rounded"></span>
							<span className="h-6 w-12 bg-accent rounded"></span>
							<span className="h-6 w-20 bg-accent rounded"></span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogLoading;
