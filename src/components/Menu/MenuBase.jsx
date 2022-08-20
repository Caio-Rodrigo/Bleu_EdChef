import ItemBase from '../Item/ItemBase';
import { useState, useEffect, useCallback } from 'react';
import { ItemService } from '../service/Item.Service';
import ItemDetalhesModal from '../Events/ItemModal/index';
import './Menu.css';

export default function Menu({ createdItem, mode, updateItem, deleteItem }) {
	const [menu, setMenu] = useState([]);

	const [itemModal, setItemModal] = useState(false);

	const getAll = async () => {
		const response = await ItemService.getAll();
		setMenu(response);
	};

	const getById = async (itemId) => {
		const response = await ItemService.getById(itemId);
		setItemModal(response);
	};

	const addNewItem = (item) => {
		const list = [...menu, item];
		setMenu(list);
	};

	useEffect(() => {
		if (createdItem) addNewItem(createdItem);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [createdItem]);

	useEffect(() => {
		getAll();
	}, []);

	return (
		<div className="menuConteiner">
			{menu.map((iten, index) => (
				<ItemBase
					mode={mode}
					key={`menuIten-${index}`}
					iten={iten}
					index={index}
					clickItem={(itemId) => getById(itemId)}
				/>
			))}

			{itemModal && (
				<ItemDetalhesModal item={itemModal} closeModal={() => setItemModal(false)} />
			)}
		</div>
	);
}
