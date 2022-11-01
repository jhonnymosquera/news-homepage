import { Link } from 'react-router-dom';

function Trend({ trend }) {
	const { id, title, description, image } = trend;

	return (
		<article className="trend">
			<div className="image">
				<picture>
					<img src={image.url} alt={image.alt} />
				</picture>
			</div>

			<div className="trend-info">
				<span>{`0${id}`}</span>

				<Link to="/trending">{title}</Link>

				<p>{description}</p>
			</div>
		</article>
	);
}

export default Trend;
