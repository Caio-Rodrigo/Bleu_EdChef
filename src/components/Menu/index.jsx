import Item from '../Item';
import { menu } from '../../mocks/menu';
import { useState } from 'react';
import './Menu.css';

export default function Menu() {
	
	const [itemSelected, setItemSelected] = useState({});

	const addItem = (itemIndex) => {
		const item = { [itemIndex]: Number(itemSelected[itemIndex] || 0) + 1 };
		setItemSelected({ ...itemSelected, ...item });
	};

	const removeItem = (itemIndex) => {
		const item = { [itemIndex]: Number(itemSelected[itemIndex] || 0) -1 }
		setItemSelected({...itemSelected, ...item});
	}

	return (
		<div className="menuConteiner">
			{menu.map((iten, index) => (
				<Item 
				key={`menuIten-${index}`} 
				iten={iten}
				quantitySelected={itemSelected[index]}
				index={index}
				onAdd={index => addItem(index)}
				onRemove={index => removeItem(index)}
				/>
			))}
		</div>
	);
}
