import { BiAddToQueue, BiEdit } from 'react-icons/bi';
import Button from '../Events/Button';
import './Navigation.css';
import { EditState } from '../constants';

export default function Navigation({ createItem, updateItem, mode }) {
	return (
		<nav id="nav">
			<ul id="list">
				<li>
					<a href="http://localhost:3000/">Home</a>
				</li>
				<li>
					<a href="http://localhost:3000/base">Sign up</a>
				</li>
			</ul>
			<div className="carrinho">
				<Button
					clase={mode === EditState.OFF ? 'btn up' : mode === EditState.ON && 'btn btnOn'}
					nome={<BiEdit />}
					event={() => updateItem()}
				/>
				<Button clase="btn create" nome={<BiAddToQueue />} event={() => createItem()} />
			</div>
		</nav>
	);
}
