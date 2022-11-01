import { useContext } from 'react';
import { Context } from '../context/Context';

function CategoriesPage() {
	const { buildingPage } = useContext(Context);

	return (
		<main className="categoriespage">
			<h1>Page in build</h1>
			<img src={buildingPage} alt="bulding Page" />
		</main>
	);
}

export default CategoriesPage;
