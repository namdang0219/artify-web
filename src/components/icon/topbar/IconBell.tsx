import React from "react";

const IconBell = () => {
	return (
		<span className="text-white opacity-70 group-hover:opacity-100">
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
	);
};

export default IconBell;
