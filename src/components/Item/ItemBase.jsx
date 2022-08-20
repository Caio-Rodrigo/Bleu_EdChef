import Button from '../Events/Button/index';
import { EditState } from '../constants';
import { FcUpload, FcDeleteDatabase } from 'react-icons/fc';
import './Item.css';

export default function ItemBase({ iten, clickItem, mode }) {
	const upButton = (mode) => {
		if (mode === EditState.ON) return <Button clase="update" nome={<FcUpload />} />;
	};
	const deleteButton = (mode) => {
		if (mode === EditState.ON)
			return <Button clase="delete" nome={<FcDeleteDatabase />} />;
	};

	return (
		<div className="menuItem">
			{upButton(mode)}
			{deleteButton(mode)}
			<div>
				<div className="menuItem_name">{iten.name}</div>
				<div className="menuItem_img">
					<img src={iten.image} alt="" className="menuItem_iamgen" />
				</div>
				<div className="btn-container">
					<Button clase="btn" nome="Detalhes" event={() => clickItem(iten.id)} />
				</div>
			</div>
		</div>
	);
}
