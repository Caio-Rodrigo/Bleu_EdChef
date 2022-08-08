import Modal from '../Modal';
import Button from '../Button';
import './Item.css';

export default function Item({
	iten,
	quantitySelected,
	index,
	onAdd,
	onRemove,
}) {
	const badgeCounter = (canRender, index) =>
		Boolean(canRender) && (
			<span className="menuItem__badge"> {quantitySelected} </span>
		);

	const removeButton = (canRender, index) =>
		Boolean(canRender) && (
			<Button clase="btn remove" nome="Remover" event={() => onRemove(index)} />
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
					<Modal titulo={iten.name} descricao={iten.description} />
					<Button clase="btn add" nome="Comprar" event={() => onAdd(index)} />
					{removeButton(quantitySelected, index)}
				</div>
			</div>
		</div>
	);
}
