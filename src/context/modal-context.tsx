"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
	modalShow: boolean;
	modalContent: ReactNode;
	showModal: (modalContent: ReactNode) => void;
	closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modalShow, setModalShow] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<ReactNode>(<></>);

	function showModal(modalContent: ReactNode) {
		setModalShow(true);
		setModalContent(modalContent);
	}

	function closeModal() {
		setModalShow(false);
		setModalContent(<></>);
	}

	const values = { showModal, closeModal, modalShow, modalContent };
	return (
		<ModalContext.Provider value={values}>{children}</ModalContext.Provider>
	);
};

const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export { ModalProvider, useModal };
