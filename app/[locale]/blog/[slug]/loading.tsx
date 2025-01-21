const PostSkeleton = () => {
	return (
		<article className="px-4 py-6 md:px-6 md:py-12 lg:py-16 min-h-[100dvh]">
			<div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
				{/* Back button skeleton */}
				<div className="inline-flex items-center p-2 rounded-lg mb-4 bg-accent animate-pulse w-32">
					<span className="h-4 bg-accent rounded w-20"></span>
				</div>

				{/* Title skeleton */}
				<div className="h-8 bg-accent rounded w-3/4 mb-4 animate-pulse"></div>

				{/* Summary skeleton */}
				<div className="h-6 bg-accent rounded w-1/2 mb-2 animate-pulse"></div>

				{/* Date skeleton */}
				<div className="h-4 bg-accent rounded w-1/3 mb-8 animate-pulse"></div>

				{/* Tags skeleton */}
				<div className="flex flex-wrap gap-2 mb-4">
					{Array.from({ length: 3 }).map((_, index) => (
						<span key={index} className="h-6 bg-accent rounded px-4 animate-pulse"></span>
					))}
				</div>

				{/* Image skeleton */}
				<div className="w-full max-w-md mx-auto h-48 bg-accent rounded my-4 animate-pulse"></div>

				{/* Content skeleton */}
				<div className="space-y-4">
					{Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className="h-4 bg-accent rounded w-full animate-pulse"></div>
					))}
				</div>
			</div>
		</article>
	);
};

export default PostSkeleton;
