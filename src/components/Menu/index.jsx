import { menu } from '../../mocks/menu';
import Button from 'components/Button';
import './Menu.css';


export default function Menu() {
	return (
		<div className="menuConteiner">
			{menu.map((item, index) => (
				<div className="menuIten" key={`menuIten-${index}`}>
					<div>
						<div className="menuIten_name">{item.name}</div>
						{/* {console.log(item.key);} */}
						<div>
							<img src={item.image} alt="" className="menuIten_iamgen" />
						</div>
		
						<div className="btn-container">
							<Button type="button" item={item.description} >Leia-me</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

