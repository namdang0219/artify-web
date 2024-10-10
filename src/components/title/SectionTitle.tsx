import React from "react";

const SectionTitle = ({
	children,
	buttonContent = "",
	className = "",
}: {
	children: string;
	buttonContent?: string;
	className?: string;
}) => {
	return (
		<div
			className={`${className} mb-4 mt-7 flex items-center justify-between`}
		>
			<h2 className="text-xl font-bold tracking-wider">{children}</h2>
			{buttonContent && (
				<button className="text-base transition-all text-lightGray hover:text-secondary">
					{buttonContent}
				</button>
			)}
		</div>
	);
};

export default SectionTitle;
