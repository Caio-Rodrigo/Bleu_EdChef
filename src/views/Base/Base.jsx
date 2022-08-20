import './Base.css';
import AddEditItemModal from '../../components/Events/AddEditItemModal';
import { EditState } from '../../components/constants';
import MenuBase from '../../components/Menu/MenuBase';
import NavigationBase from '../../components/Navigation/NavigationBase';
import { useState } from 'react';

export default function Base() {
	const [canShowAddEditItemModal, setCanShowAddEditItemModal] = useState(false);
	const [itemAdd, setItemAdd] = useState();
	const [editMod, setEditMod] = useState(EditState.OFF);
	const [updateItem, setUpdateItem] = useState();
	const [deleteItem, setDeleteItem] = useState();

	const handleEdit = (event) => {
		const modeActivity = editMod === event ? EditState.OFF : event;
		setEditMod(modeActivity);
	};
	const handleDelete = (itemToDelete) => {
		setDeleteItem(itemToDelete);
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
	};

	return (
		<div className="Home">
			<NavigationBase
				mode={editMod}
				createItem={() => setCanShowAddEditItemModal(true)}
				updateItem={() => handleEdit(EditState.ON)}
			/>
			<div className="Home_container">
				<MenuBase
					mode={editMod}
					createdItem={itemAdd}
					updateItem={handleUpdate}
					deleteItem={handleDelete}
				/>
				{canShowAddEditItemModal && (
					<AddEditItemModal
						mode={editMod}
						itemToUpdate={updateItem}
						closeModal={handleCloseModal}
						onCreateItem={(item) => setItemAdd(item)}
					/>
				)}
			</div>
		</div>
	);
}
