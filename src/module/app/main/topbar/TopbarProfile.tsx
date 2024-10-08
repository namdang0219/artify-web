import Image from "next/image";
import React from "react";

const TopbarProfile = () => {
	return (
		<div className="flex items-center gap-4">
			{/* email icon  */}
			<button className="flex items-center justify-center w-10 h-10 transition-all rounded-full group bg-primary hover:bg-primaryHover">
				<span className="text-white opacity-80 group-hover:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={28}
						height={28}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
						></path>
					</svg>
				</span>
			</button>

			{/* notification icon  */}
			<button className="flex items-center justify-center w-10 h-10 transition-all rounded-full group bg-primary hover:bg-primaryHover">
				<span className="text-white opacity-80 group-hover:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={28}
						height={28}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22m7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A1 1 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a1 1 0 0 0-.293-.707z"
						></path>
					</svg>
				</span>
			</button>
			<div className="h-[46px] border border-white p-1 rounded-border10 flex items-center">
				<div>
					<span className="text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={22}
							height={22}
							viewBox="0 0 24 24"
						>
							<g fill="none" fillRule="evenodd">
								<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
								<path
									fill="currentColor"
									d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
								></path>
							</g>
						</svg>
					</span>
				</div>
				<div className="ml-4 text-right text-white">
					<p className="text-sm font-semibold">MeowCopter</p>
					<p className="text-xs opacity-80">meow.admin@gmail.com</p>
				</div>
				<div className="relative h-full ml-2 aspect-square">
					<Image
						src={
							"https://images.unsplash.com/photo-1546358321-2754954c3a43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="avatar"
						width={100}
						height={100}
						className="object-cover object-center w-full h-full rounded-full"
					></Image>
				</div>
			</div>
		</div>
	);
};

export default TopbarProfile;
