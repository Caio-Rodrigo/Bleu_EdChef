import './Button.css';



export default function Button(props) {
	return (
		<button className="btn" id={props.id} onClick={props.event}>
			{props.nome}
		</button>
	);
}
