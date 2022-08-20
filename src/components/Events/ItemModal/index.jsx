import './ItemModal.css';
import Modal from '../Modal/index';

function ItemDetalhesModal({ item, closeModal }) {
	return (
		<Modal closeModal={closeModal}>
			<div className="ItemDetalhesModal">
				<div>
					<div className="ItemDetalhesModal__titulo"> {item.name} </div>
					<div className="ItemDetalhesModal__descricao">{item.description}</div>
				</div>
			</div>
		</Modal>
	);
}

export default ItemDetalhesModal;
