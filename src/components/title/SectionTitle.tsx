import React from "react";

const SectionTitle = ({ children, className }: { children: string, className?: string }) => {
	return <h2 className={`${className} mt-7 mb-4 text-xl font-bold`}>{children}</h2>;
};

export default SectionTitle;
