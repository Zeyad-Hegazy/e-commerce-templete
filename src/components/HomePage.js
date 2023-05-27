import { Fragment } from "react";
import Slider from "./Slider";
import ProductsList from "./ProductsList";

const HomePage = () => {
	return (
		<Fragment>
			<Slider />
			<ProductsList />
		</Fragment>
	);
};

export default HomePage;
