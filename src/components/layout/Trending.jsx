import { useContext } from 'react';
import { Context } from '../../context/Context';
import Trend from './Trend';

function Trending() {
	const { trending } = useContext(Context);

	return (
		<section className="trending">
			{trending.map((trend) => (
				<Trend key={trend.id} trend={trend} />
			))}
		</section>
	);
}

export default Trending;
