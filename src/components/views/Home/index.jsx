import './Home.css';
import Menu from '../../Menu/index';
import Navigation from '../../Navigation/index'
import AddItemModal from '../../Events/AddItemModal/index'
import { useState } from "react";

export default function Home() {

	const [canShowAdicionaItemModal, setCanShowAdicionaItemModal] = useState(false);

	return (
		<div className="Home">
			<Navigation createItem={() => setCanShowAdicionaItemModal(true)} />
			<div className="Home_container">
				
				<Menu />

				{
                    canShowAdicionaItemModal &&
                    (<AddItemModal closeModal={() => setCanShowAdicionaItemModal(false)} />)
                }
								
			</div>
		</div>
	);
}
