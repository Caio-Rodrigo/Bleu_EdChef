import './Modal.css';
import React from 'react';
import Button from 'components/Button';

export default function Modal({ children }) {
	const [Active, setActive] = React.useState(false);
	 const ButtonActive = () => {
		setActive(true);
	};
	

		return (
			<>
				<Button id="btn-leiaMe" nome="Leia-me" event={ButtonActive} />
				<div className={`${Active ? 'modal-ativo' : 'modal'}`}>
					<div className="modal-name">
						<h1>{children}</h1>
						<div className="modal-description"></div>
					</div>
				</div>
			</>
		);
	};

