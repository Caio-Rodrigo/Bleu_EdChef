import { useState } from 'react';
import Button from '../Button/index';
import Modal from '../Modal';
import { ItemService } from '../../service/Item.Service';
import './AddEditItemModal.css';

export default function AddEditItemModal({ closeModal, onCreateItem }) {
	const form = {
		name: '',
		description: '',
		image: '',
	};

	const createItem = async () => {
		const { name, description, image } = state;

		const item = {
			name,
			description,
			image,
		};

		const response = await ItemService.create(item);

		onCreateItem(response);

		closeModal();
	};

	const [state, setstate] = useState(form);

	const handleChenge = (e, nome) => {
		setstate({ ...state, [nome]: e.target.value });
	};

	return (
		<Modal closeModal={closeModal}>
			<div className="AdicionaItemModal">
				<form autoComplete="false">
					<h2> Adicionar ao Cardápio</h2>
					<div>
						<label className="AdicionaItemModal__text" htmlFor="name">
							Nome:
						</label>
						<input
							id="name"
							type="text"
							placeholder="Lasanha"
							value={state.name}
							onChange={(e) => handleChenge(e, 'name')}
						/>
					</div>
					<div>
						<label className="AdicionaItemModal__text" htmlFor="description">
							Descrição:
						</label>
						<input
							id="description"
							type="text"
							placeholder="Descreva o prato"
							value={state.description}
							onChange={(e) => handleChenge(e, 'description')}
						/>
					</div>
					<div>
						<label className="AdicionaItemModal__text" htmlFor="image">
							Url da imagen:
						</label>
						<input
							id="image"
							type="url"
							placeholder="foto do prato"
							value={state.image}
							onChange={(e) => handleChenge(e, 'image')}
						/>
					</div>
					<div className="btnCreate">
						<Button
							clase="btn create"
							nome="Cadastrar"
							type="submit"
							event={createItem}
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
}