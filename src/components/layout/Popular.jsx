import useAppContext from '../../context/useAppContext';

function Popular() {
	const { popular, isMobile, Link } = useAppContext();
	const { title, description, image } = popular;

	const popularImage = isMobile ? image.mobil : image.desktop;

	return (
		<>
			<div className="popular-image">
				<img srcSet={popularImage} alt={image.alt} />
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
