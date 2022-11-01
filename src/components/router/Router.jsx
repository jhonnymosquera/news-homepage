import { Route, Routes } from 'react-router-dom';
import CategoriesPage from '../../pages/CategoriesPage';
import HomePage from '../../pages/HomePage';
import NewPage from '../../pages/NewPage';
import NoFundPage from '../../pages/NoFundPage';
import PopularPage from '../../pages/PopularPage';
import TrendigPage from '../../pages/TrendigPage';

function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/new" element={<NewPage />}></Route>
				<Route path="/popular" element={<PopularPage />} />
				<Route path="/trending" element={<TrendigPage />} />
				<Route path="/categories" element={<CategoriesPage />} />
				<Route path="*" element={<NoFundPage />} />
			</Routes>
		</>
	);
}

export default Router;
