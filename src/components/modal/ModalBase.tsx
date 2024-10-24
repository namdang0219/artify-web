import { useModal } from "context/modal-context";
import Modal from "react-responsive-modal";

const ModalBase = () => {
	const { isOpen, closeModal, modalContent } = useModal();

	return (
		<Modal
			open={isOpen}
			onClose={closeModal}
			center
			showCloseIcon={false}
			styles={{
				modal: {
					backgroundColor: "white",
					borderRadius: 15,
				},
			}}
		>
			{modalContent}
		</Modal>
	);
};

export default ModalBase;
