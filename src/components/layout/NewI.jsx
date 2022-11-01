import { Link, useParams } from 'react-router-dom';

function NewI({ newI }) {
	const { title, description } = newI;

	return (
		<article className="new">
			<Link to="/new">{title}</Link>

			<p>{description} </p>
		</article>
	);
}

export default NewI;
