import useAppContext from '../../context/useAppContext';
import Trend from './Trend';

function Trending() {
	const { trending } = useAppContext();

	return (
		<section className="trending">
			{trending.map((trend) => (
				<Trend key={trend.id} trend={trend} />
			))}
		</section>
	);
}

export default Trending;
