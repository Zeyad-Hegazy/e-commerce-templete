import { Fragment } from "react";

import image_1 from "../assets/image1.jpg";
import image_2 from "../assets/image2.jpeg";
import image_3 from "../assets/image3.jpg";

import "./Slider.css";

const Slider = () => {
	return (
		<Fragment>
			<div id="carouselExample" className="carousel slide">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src={image_1}
							className="d-block w-100 fixedHeight"
							alt="cart"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={image_2}
							className="d-block w-100 fixedHeight"
							alt="cart2"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={image_3}
							className="d-block w-100 fixedHeight"
							alt="cart3"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</Fragment>
	);
};

export default Slider;
