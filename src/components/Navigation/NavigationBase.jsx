import { BiAddToQueue, BiEdit, BiXCircle } from 'react-icons/bi';
import Button from '../Events/Button';
import './Navigation.css';
import { EditState } from '../constants';

export default function Navigation({ createItem, updateItem, mode,deleteItem }) {
	return (
		<nav id="nav">
			<ul id="list">
				<li>
					<a href="http://localhost:3000/">Home</a>
				</li>
				<li>
					<a href="http://localhost:3000/base">Edit</a>
				</li>
			</ul>
			<div className="carrinho">
				<Button clase="btn create" nome={<BiAddToQueue />} event={() => createItem()} />

				<Button
					clase={mode === EditState.ON ? 'btn btnOn ' : mode !== EditState.ON && 'btn up'}
					nome={<BiEdit />}
					event={() => updateItem()}
				/>
				<Button
					clase={mode === EditState.DEL ? 'btn btnDell' : mode !== EditState.DEL && 'btn up'}
					nome={<BiXCircle />}
					event={() => deleteItem()}
				/>
			</div>
		</nav>
	);
}
