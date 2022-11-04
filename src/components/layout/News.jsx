import useAppContext from '../../context/useAppContext';
import NewI from './NewI';

function News() {
	const { news } = useAppContext();

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
