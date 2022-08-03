import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ children, item},props) {
	return (
		<button className="btn" type={props.type} onClick={()=>(modal(item))} >
			{children}
		</button>
	);
}

Button.prototype = {
	type: (PropTypes.type = 'button' | 'submit' | 'reset' | undefined),
};
function modal(item) {
	return console.log(item);
}
