import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

function Popular() {
	const { popular, isMobile } = useContext(Context);
	const { title, description, image } = popular;

	return (
		<>
			<div className="popular-image">
				<picture>
					<img srcSet={isMobile ? image.mobil : image.desktop} alt={image.alt} />
				</picture>
			</div>

			<div className="popular">
				<div className="popular-info">
					<div className="h1">
						<h1>{title}</h1>
					</div>

					<div className="description">
						<p>{description} </p>

						<Link to="/popular" className="button-link">
							Read More
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Popular;
