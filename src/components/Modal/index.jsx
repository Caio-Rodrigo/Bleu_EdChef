import './Modal.css';
import React from 'react';
import Button from 'components/Button';

export default function Modal(props) {
	const [Active, setActive] = React.useState(false);
	const ButtonOn = () => {
		setActive(true);
	};
	const ButtonOff = () => {
		setActive(false);
	};

	return (
		<>
			<Button nome="Leia-me" event={ButtonOn} />

			<div className={`${Active ? 'modal-ativo' : 'modal'}`}>
					<Button nome="X" event={ButtonOff} />
				<div className="modal-body">
					<div className="modal-title">
						<h1>{props.titulo}</h1>
					</div>
					<div className="modal-description">
						<p>{props.descricao}</p>
					</div>
				</div>
			</div>
		</>
	);
}
