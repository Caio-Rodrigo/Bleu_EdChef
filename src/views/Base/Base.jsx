import './Base.css';
import AddEditItemModal from '../../components/Events/AddEditItemModal';
import { EditState } from '../../components/constants';
import MenuBase from '../../components/Menu/MenuBase';
import NavigationBase from '../../components/Navigation/NavigationBase';
import DeleteItemModal from '../../components/Events/DeleteItemModal';
import { useState } from 'react';

export default function Base() {
	const [itemEditado, setItemEditado] = useState();

	const [canShowAddEditItemModal, setCanShowAddEditItemModal] = useState(false);
	const [itemAdd, setItemAdd] = useState();

	const [updateItem, setUpdateItem] = useState();
	const [deleteItem, setDeleteItem] = useState();
	const [itemRemoved, setItemRemoved] = useState();

	const [modoAtual, setModoAtual] = useState(EditState.OFF);

	const handleAction = (action) => {
		const novaAcao = modoAtual === action ? EditState.OFF : action;
		setModoAtual(novaAcao);
	};

	const handleDelete = (action) => {
		const novaAcao = modoAtual === action ? EditState.DEL : action;
		setDeleteItem(novaAcao);
	};
	const handleUpdate = (itemToUpdate) => {
		setUpdateItem(itemToUpdate);
		setCanShowAddEditItemModal(true);
	};
	const handleCloseModal = () => {
		setCanShowAddEditItemModal(false);
		setItemAdd();
		setUpdateItem();
		setDeleteItem();
		setModoAtual(EditState.OFF);
	};

	return (
		<div className="Home">
			<NavigationBase
				mode={modoAtual}
				createItem={() => setCanShowAddEditItemModal(true)}
				updateItem={() => handleAction(EditState.ON)}
				deleteItem={() => handleAction(EditState.DEL)}
			/>
			<div className="Home_container">
				<MenuBase
					mode={modoAtual}
					createdItem={itemAdd}
					itemEditado={itemEditado}
					itemRemoved={ itemRemoved}
					updateItem={ handleUpdate}
					deleteItem={handleDelete}
				/>
				{canShowAddEditItemModal && (
					<AddEditItemModal
						mode={modoAtual}
						updateItem={updateItem}
						onUpdateItem={setItemEditado}
						closeModal={handleCloseModal}
						onCreateItem={(item) => setItemAdd(item)}
					/>
				)}
				{itemRemoved && 
					<DeleteItemModal
						itemDelete={itemRemoved}
						closeModal={handleCloseModal}
						onDeleteItem={(item) => setItemRemoved(item)}
					/>
				}
			</div>
		</div>
	);
}
