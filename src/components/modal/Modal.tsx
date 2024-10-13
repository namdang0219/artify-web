import { useModal } from "@/context/modal-context";
import React, { CSSProperties, ReactElement, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const Modal = ({
	children,
	modalPosition = {},
	overlay = false,
}: {
	children: ReactElement;
	modalPosition: CSSProperties;
	overlay?: boolean;
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const { closeModal } = useModal();

	const onClickOutside = () => {
		closeModal();
	};

	useOnClickOutside(modalRef, onClickOutside);

	return (
		<div
			className={`absolute inset-0 ${
				overlay && "bg-black bg-opacity-75"
			}`}
		>
			<div ref={modalRef} style={modalPosition} className="absolute z-50">
				{children}
			</div>
		</div>
	);
};

export default Modal;
