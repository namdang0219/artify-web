"use client";
import { useModal } from "@/context/modal-context";
import { RefObject, useRef } from "react";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "usehooks-ts";

const ModalBase = () => {
	const { modalShow, modalContent, closeModal } = useModal();
	const modalRef = useRef<HTMLDivElement>(null);
	useOnClickOutside(modalRef, handleClickOutside);

	function handleClickOutside() {
		closeModal();
	}

	if (!modalShow) return;

	return createPortal(
		<div ref={modalRef as RefObject<HTMLDivElement>}>{modalContent}</div>,
		document.body
	);
};

export default ModalBase;
