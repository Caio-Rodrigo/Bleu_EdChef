import ItemBase from '../Item/ItemBase';
import { useState, useEffect, useCallback } from 'react';
import { ItemService } from '../service/Item.Service';
import ItemDetalhesModal from '../Events/ItemModal';
import { EditState } from '../constants';
import './Menu.css';

export default function Menu({ createdItem, mode, updateItem, deleteItem, itemEditado, itemRemoved }) {
	const [menu, setMenu] = useState([]);

	const [itemModal, setItemModal] = useState(false);

	const getAll = async () => {
		const response = await ItemService.getAll();
		setMenu(response);
	};

	const getById = async (itemId) => {
		const response = await ItemService.getById(itemId);
		const mapper = {
			[EditState.OFF]: () => setItemModal(response),
			[EditState.ON]: () => updateItem(response),
			[EditState.DEL]: () => deleteItem(response),
		};
		mapper[mode]();
	};

	const addNewItem = useCallback(
		(item) => {
			const list = [...menu, item];
			setMenu(list);
		},
		[menu],
	);

	useEffect(() => {
		if (createdItem && !menu.map(({ id }) => id).includes(createdItem.id)) {
			addNewItem(createdItem);
		}
	}, [addNewItem, createdItem, menu]);

	useEffect(() => {
		getAll();
	}, [itemEditado,  itemRemoved ]);

	return (
		<div className="menuConteiner">
			
			{menu.map((iten, index) => (
				<ItemBase
					mode={mode}
					key={`menuIten-${index}`}
					iten={iten}
					index={index}
					clickItem={(itemId) => getById(itemId)}
					updateItem={(itemId) => getById(itemId)}
				/>
			))}

			{itemModal && (
				<ItemDetalhesModal item={itemModal} closeModal={() => setItemModal(false)} />
			)}
		</div>
	);
}
