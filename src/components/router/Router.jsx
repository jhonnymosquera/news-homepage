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
				<Route path="/" end element={<HomePage />} />
				<Route path="new" end element={<NewPage />} />
				<Route path="popular" end element={<PopularPage />} />
				<Route path="trending" end element={<TrendigPage />} />
				<Route path="categories" end element={<CategoriesPage />} />
				<Route path="*" end element={<NoFundPage />} />
			</Routes>
		</>
	);
}

export default Router;
