import './Modal.css';
import Overlay from '../Overlay/index';

export default function Modal({ children, closeModal }) {
	const handleClick = (e, canClose) => {
		e.stopPropagation();
		if (canClose) closeModal();
	};

	return (
		<Overlay overlayClick={closeModal}>
			<div className="Modal" onClick={handleClick}>
				<span className="Modal__close" onClick={(e) => handleClick(e, true)}>
					x
				</span>
				<div className="Modal__body">{children}</div>
			</div>
		</Overlay>
	);
}
