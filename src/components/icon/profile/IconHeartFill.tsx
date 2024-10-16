import React from "react";

const IconHeartFill = ({size = 28}: {size: number}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 48 48"
		>
			<path
				fill="currentColor"
				d="M21.263 10.179a10.77 10.77 0 0 0-12.575-.296c-5.65 3.865-6.308 11.953-1.357 16.68l15.806 15.092a1.25 1.25 0 0 0 1.726 0l15.803-15.09c4.952-4.729 4.293-12.817-1.358-16.682a10.77 10.77 0 0 0-12.577.299L24 12.247z"
			></path>
		</svg>
	);
};

export default IconHeartFill;
