import './Home.css';
import MenuHome from '../../components/Menu/MenuHome';
import Navigation from '../../components/Navigation/NavigationHome';
import AddEditItemModal from '../../components/Events/AddEditItemModal';
import { useState } from 'react';

export default function Home() {
	const [canShowAddEditItemModal, setCanShowAddEditItemModal] = useState(false);


	return (
		<div className="Home">
			<Navigation createItem={() => setCanShowAddEditItemModal(true)} />
			<div className="Home_container">
				<MenuHome />

				{canShowAddEditItemModal && (
					<AddEditItemModal
						closeModal={() => setCanShowAddEditItemModal(false)}
					
					/>
				)}
			</div>
		</div>
	);
}
