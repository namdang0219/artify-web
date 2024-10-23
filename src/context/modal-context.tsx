import { createContext, ReactNode, useContext, useState } from "react";

interface IModal {
	isOpen: boolean;
	modalContent: ReactNode;
	openModal: (content: ReactNode) => void;
	closeModal: () => void;
}

const ModalContext = createContext<IModal>({
	isOpen: false,
	modalContent: <></>,
	openModal: () => {},
	closeModal: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<ReactNode>(<></>);

	const openModal = (content: ReactNode) => {
		setModalContent(content);
		setIsOpen(true);
	};

	const closeModal = () => {
		setModalContent(<></>);
		setIsOpen(false);
	};

	const values = { modalContent, isOpen, openModal, closeModal };

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
