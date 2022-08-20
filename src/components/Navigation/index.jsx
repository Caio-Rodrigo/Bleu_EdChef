/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiShoppingBag, BiAddToQueue, BiEdit } from 'react-icons/bi';
import Button from '../Events/Button';
import { ActionMode } from '../constants';
import './Navigation.css';

export default function Navigation({ createItem, updateItem, mode }) {
	return (
		<nav id="nav">
			<ul id="list">
				<li>
					<a href="">Home</a>
				</li>
				<li>
					<a href="">Sign up</a>
				</li>
			</ul>
			<div className="carrinho">
				<Button
					clase={`btn ${mode === ActionMode.UPDATE ? 'btnOn' : 'up'}`}
					nome={<BiEdit />}
					event={() => updateItem()}
				/>
				<Button clase="btn buy" nome={<BiShoppingBag />} />
				<Button clase="btn create" nome={<BiAddToQueue />} event={() => createItem()} />
			
			</div>
		</nav>
	);
}
