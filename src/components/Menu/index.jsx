import Item from '../Item';
import { useState, useEffect } from 'react';
import { ItemService } from '../service/Item.Service';
import ItemDetalhesModal from '../../components/ItemModal/index';
import './Menu.css';

export default function Menu() {
	const [menu, setMenu] = useState([]);

	const [itemSelected, setItemSelected] = useState({});

	const [itemModal, setItemModal] = useState(false);

	const addItem = (itemIndex) => {
		const item = { [itemIndex]: Number(itemSelected[itemIndex] || 0) + 1 };
		setItemSelected({ ...itemSelected, ...item });
	};

	const removeItem = (itemIndex) => {
		const item = { [itemIndex]: Number(itemSelected[itemIndex] || 0) - 1 };
		setItemSelected({ ...itemSelected, ...item });
	};

	const getAll = async () => {
		const response = await ItemService.getAll();
		setMenu(response);
	};

	const getById = async (itemId) => {
		const response = await ItemService.getById(itemId);
		setItemModal(response);
		console.log(itemId);
	};

	useEffect(() => {
		getAll();
	}, []);

	return (
		<div className="menuConteiner">
			{menu.map((iten, index) => (
				<Item
					key={`menuIten-${index}`}
					iten={iten}
					quantitySelected={itemSelected[index]}
					index={index}
					onAdd={(index) => addItem(index)}
					onRemove={(index) => removeItem(index)}
					clickItem={(itemId) => getById(itemId)}
				/>
			))}

			{itemModal && (
				<ItemDetalhesModal
					item={itemModal}
					closeModal={() => setItemModal(false)}
				/>
			)}
		</div>
	);
}
