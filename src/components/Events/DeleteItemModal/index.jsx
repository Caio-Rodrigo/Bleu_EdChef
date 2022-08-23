import './DeleteItemModal.css';
import Modal from '../Modal/index';
import { ItemService } from '../../service/Item.Service';
import { HiX, HiCheck } from 'react-icons/hi';
import Button from '../Button';

export default function DeleteItemModal({ closeModal, itemDelete, onDeleteItem }) {
	const handleDelete = async (item) => {
		await ItemService.deleteItem(item.id);
		onDeleteItem(item);
		closeModal();
	};

	return (
		<Modal closeModal={closeModal}>
			<div className="DeleteItemModal">
				<h2>Confirmação</h2>
				<p>Deseja deleter {itemDelete.name} ?</p>
				<Button className="btn btn-primary" nome={<HiX />} event={() => handleDelete} />
				<Button className="btn btn-primary" nome={<HiCheck />} event={closeModal} />
			</div>
		</Modal>
	);
}
