import { useState } from 'react';
import Button from '../Button/index';
import Modal from '../Modal';
import { ItemService } from '../../service/Item.Service';
import { EditState } from '../../constants';
import './AddEditItemModal.css';
import { useEffect } from 'react';

export default function AddEditItemModal({
	closeModal,
	onCreateItem,
	onUpdateItem,
	mode,
	updateItem,
}) {
	const form = {
		name: updateItem?.name ?? '',
		description: updateItem?.description ?? '',
		image: updateItem?.image ?? '',
	};

	useEffect(() => {
		console.log(form);
	}, [form]);

	const [state, setState] = useState(form);
	console.log('ok');
	const handleChenge = (e, nome) => {
		setState({ ...state, [nome]: e.target.value });
	};

	const handleSend = async (e) => {
		e.preventDefault();
		const { name, description, image } = state;
		const item = {
			...(updateItem && { id: updateItem?.id }),
			name,
			description,
			image,
		};

		const serviceCall = {
			[EditState.OFF]: async () => await ItemService.create(item),

			[EditState.ON]: async () => {
				await ItemService.updateById(updateItem?.id, item)
				window
			},

		};
		const response = await serviceCall[mode]();

		const actionResponse = {
			[EditState.OFF]: () => onCreateItem(response),
			[EditState.ON]: () => onUpdateItem(response),
		};

		actionResponse[mode]();

		const reset = {
			name: '',
			description: '',
			image: '',
		};

		setState(reset);

		closeModal();
	};
	return (
		<Modal closeModal={closeModal}>
			<div className="AdicionaItemModal">
				<form autoComplete="false">
					<h2>{EditState.ON === mode ? 'Atualizar' : 'Adicionar ao'} Cardapio</h2>
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
							nome={EditState.OFF === mode ? 'Enviar' : 'Atualizar'}
							type="submit"
							event={(e) => handleSend(e)}
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
}
