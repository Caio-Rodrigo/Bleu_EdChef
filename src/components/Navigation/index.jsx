/* eslint-disable jsx-a11y/anchor-is-valid */
import { TiShoppingCart } from 'react-icons/ti';
import { BiAddToQueue } from "react-icons/bi";
import Button from '../Events/Button/index';
import './Navigation.css';





export default function Navigation({createItem}) {
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
				<Button clase="btn buy" nome={<TiShoppingCart />} />
			<Button  clase="btn buy" nome={<BiAddToQueue />} event={() => createItem()} />
			</div>
		</nav>
	);
}
