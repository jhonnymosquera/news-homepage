import { NavLink } from 'react-router-dom';

function NavBarLinks({ route }) {
	const { rute, name } = route;

	return (
		<li>
			<NavLink to={rute} end>
				{name}
			</NavLink>
		</li>
	);
}

export default NavBarLinks;
