import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import NavBarLinks from './NavBarLinks';

function NavBar() {
	const { logo, routes, menuActive, menuDisplay, handleButton, isMobile } = useContext(Context);

	return (
		<header className="header">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
			</div>

			{isMobile && (
				<div className="menu-button" onClick={handleButton}>
					<img src={menuActive} alt="menu button" />
				</div>
			)}

			<nav
				className={`${isMobile ? 'navbar' : 'navbar-desk'} ${menuDisplay}`}
				onClick={handleButton}
			>
				<ul className="navbar-ul">
					{routes.map((route) => (
						<NavBarLinks key={route.id} route={route} />
					))}
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
