import React, { CSSProperties, ReactElement } from "react";

const Modal = ({
	children,
	modalPosition = {},
}: {
	children: ReactElement;
	modalPosition: CSSProperties;
}) => {
	return (
		<div style={modalPosition} className="absolute z-50">
			{children}
		</div>
	);
};

export default Modal;
