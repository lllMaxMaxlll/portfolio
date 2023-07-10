function NavMobile() {
	return (
		<>
			<div className="absolute inset-y-0 right-4 flex items-center md:hidden">
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-md p-2 text-neutral-200  hover:text-neutral-400 focus:outline-none"
					data-collapse-toggle="mobile-menu"
					aria-controls="mobile-menu"
					aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
					<svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			{/* <nav aria-label="Global" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								{navigation.map((link) => {

									return (
										<Link
											key={link.href}
											href={link.href}
											className={`${isActive ? "text-neutral-200 cursor-default" : "text-neutral-500"} transition hover:text-neutral-300`}>
											{link.name}
										</Link>
									);
								})}
							</ul>
						</nav> */}
		</>
	);
}

export default NavMobile;
