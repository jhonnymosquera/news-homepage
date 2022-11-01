import News from '../components/layout/News';
import Popular from '../components/layout/Popular';
import Trending from '../components/layout/Trending';

function HomePage() {
	return (
		<main className="homepage">
			<Popular />
			<News />
			<Trending />
		</main>
	);
}

export default HomePage;
