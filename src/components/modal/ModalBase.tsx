"use client";
import { useModal } from "@/context/modal-context";
import { createPortal } from "react-dom";

const ModalBase = () => {
	const { modalShow, modalContent } = useModal();

	if (!modalShow) return;

	return createPortal(<div>{modalContent}</div>, document.body);
};

export default ModalBase;
