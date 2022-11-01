import { useContext } from 'react';
import { Context } from '../../context/Context';
import NewI from './NewI';

function News() {
	const { news } = useContext(Context);

	return (
		<section className="news">
			<h2>New</h2>

			{news.map((newI) => (
				<NewI key={newI.id} newI={newI} />
			))}
		</section>
	);
}

export default News;
