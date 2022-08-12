import './Button.css';

export default function Button(props) {
	return (
		<button className={props.clase} onClick={props.event} type={props.type}>
			{props.nome} 
		</button>
	);
}
