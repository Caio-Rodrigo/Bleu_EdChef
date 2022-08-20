import './Home.css';
import Menu from '../../Menu';
import Navigation from '../../Navigation';
import AddEditItemModal from '../../Events/AddEditItemModal';
import { useState } from 'react';
import { ActionMode } from '../../constants';

export default function Home() {
	const [canShowAddEditItemModal, setCanShowAddEditItemModal] = useState(false);

	const [itemAdd, setItemAdd] = useState();

	const [normalMode, setNormalMode] = useState(ActionMode.NORMAL);

	const handleActions = (action) => {
		const newAction = normalMode === action ? ActionMode.NORMAL : action;
		setNormalMode(newAction);
	};

	return (
		<div className="Home">
			<Navigation
				mode={normalMode}
				createItem={() => setCanShowAddEditItemModal(true)}
				updateItem={() => handleActions(ActionMode.UPDATE)}
			/>
			<div className="Home_container">
				<Menu mode={ActionMode} createdItem={itemAdd} />

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
