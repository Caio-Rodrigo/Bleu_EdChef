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

	const handleEdit = (event) => {
		const modeActivity = editMod === event ? EditState.OFF : event;
		setEditMod(modeActivity);
	};

	return (
		<div className="Home">
			<NavigationBase
				mode={editMod}
				createItem={() => setCanShowAddEditItemModal(true)}
				updateItem={() => handleEdit(EditState.ON)}
			/>
			<div className="Home_container">
				<MenuBase mode={editMod} createdItem={itemAdd} />

				{canShowAddEditItemModal && (
					<AddEditItemModal
						closeModal={() => setCanShowAddEditItemModal(false)}
						onCreateItem={(item) => setItemAdd(item)}
					/>
				)}
			</div>
		</div>
	);
}
