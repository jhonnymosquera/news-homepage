import { Context } from './Context';
import news from '../data/news.json';
import popular from '../data/popular';
import trending from '../data/trending';
import logo from '../../public/logo.svg';
import routes from '../data/ruotes.json';
import menuClose from '../../public/icon-menu-close.svg';
import menu from '../../public/icon-menu.svg';
import buildingPage from '../assets/img/website-construction.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContexProvider({ children }) {
	const [menuState, setMenuState] = useState(false);
	const menuActive = menuState ? menuClose : menu;
	const menuDisplay = menuState ? 'menu-active' : '';

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const isMobile = windowWidth < 475;

	const handleButton = () => {
		setMenuState(!menuState);
	};

	useEffect(() => {
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
	}, []);

	return (
		<Context.Provider
			value={{
				news,
				popular,
				trending,
				logo,
				routes,
				menuActive,
				menuDisplay,
				handleButton,
				buildingPage,
				isMobile,
				Link,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export default ContexProvider;
