import { useLoaderData } from "react-router-dom";
import Product from "./Product";

import "./Details.css";

const DetailsPage = () => {
	const productData = useLoaderData();

	return (
		<div className="detail container">
			<Product product={productData} isShowen={false} />;
		</div>
	);
};

export default DetailsPage;

export const loader = async ({ params }) => {
	const respone = await fetch(
		`https://fakestoreapi.com/products/${params.productId}`
	);
	const data = await respone.json();
	return data;
};
