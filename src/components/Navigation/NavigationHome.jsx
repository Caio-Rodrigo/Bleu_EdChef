/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiShoppingBag } from 'react-icons/bi';
import Button from '../Events/Button';
import './Navigation.css';

export default function Navigation() {
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
	
				<Button clase="btn buy" nome={<BiShoppingBag />} />
	
			</div>
		</nav>
	);
}
