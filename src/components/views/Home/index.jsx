import './Home.css';
import Menu from '../../Menu/index';
import Navigation from '../../Navigation/index'

export default function Home() {
	return (
		<div className="Home">
			<Navigation />
			<div className="Home_container">
				<Menu />
			</div>
		</div>
	);
}
