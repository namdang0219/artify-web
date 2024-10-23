import { useModal } from "context/modal-context";
import Modal from "react-responsive-modal";

const ModalBase = () => {
    const {isOpen, closeModal, modalContent} = useModal()

	return (
		<Modal
			open={isOpen}
			onClose={closeModal}
			center
		>
			{modalContent}
		</Modal>
	);
};

export default ModalBase;
