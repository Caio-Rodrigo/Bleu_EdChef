import Button from '../Events/Button/index';
import { ActionMode } from '../constants';
import './Item.css';

export default function Item({
	iten,
	quantitySelected,
	index,
	onAdd,
	onRemove,
	clickItem,
	mode,
}) {
	const badgeCounter = (canRender, index) =>
		Boolean(canRender) && <span className="menuItem__badge"> {quantitySelected} </span>;

	const removeButton = (canRender, index) =>
		Boolean(canRender) && (
			<Button
				disabled={mode !== ActionMode.NORMAL}
				clase="btn remove"
				nome="Remover"
				event={(e) => {
					e.stopPropagation();
					onRemove(index);
				}}
			/>
		);



	return (
		<div className="menuItem">
			{badgeCounter(quantitySelected, index)}
		

			<div>
				<div className="menuItem_name">{iten.name}</div>
				<div className="menuItem_img">
					<img src={iten.image} alt="" className="menuItem_iamgen" />
				</div>
				<div className="btn-container">
					<Button clase="btn" nome="Detalhes" event={() => clickItem(iten.id)} />
					<Button
						
						clase="btn add"
						nome="Comprar"
						event={(e) => {
							e.stopPropagation();
							onAdd(index);
						}}
					/>
					{removeButton(quantitySelected, index)}
				</div>
			</div>
		</div>
	);
}
