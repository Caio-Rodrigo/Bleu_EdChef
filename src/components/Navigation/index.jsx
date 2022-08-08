/* eslint-disable jsx-a11y/anchor-is-valid */
import { TiShoppingCart } from 'react-icons/ti';
import Button from '../Button/index.jsx';
import './Navigation.css';





export default function Navigation() {
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
			
			</div>
		</nav>
	);
}
