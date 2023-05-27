import { Fragment, useEffect, useState } from "react";

import Product from "./Product";

const ProductsList = () => {
	const [prodcuts, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const api_url = "https://fakestoreapi.com/products";

	const getProductsByCategory = (categories) => {
		fetch(`${api_url}/category/${categories}`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	};

	const getProducts = () => {
		fetch(api_url)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	};
	const getCategories = () => {
		fetch(`${api_url}/categories`)
			.then((res) => res.json())
			.then((data) => setCategories(data));
	};

	useEffect(() => {
		getProducts();
		getCategories();
	}, []);

	return (
		<Fragment>
			<h1 className="text-center m-5">Products</h1>
			<div className="container">
				<button
					className="btn btn-info m-4"
					onClick={() => {
						getProducts();
					}}
				>
					All
				</button>
				{categories.map((category) => (
					<button
						key={category}
						className="btn btn-info m-2"
						onClick={() => {
							getProductsByCategory(category);
						}}
					>
						{category}
					</button>
				))}
			</div>
			<div className="container">
				<div className="row row-cols-2">
					{prodcuts.map((product) => (
						<div className="col-12 col-sm-6 col-lg-3" key={product.id}>
							<Product product={product} isShowen={true} />
						</div>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default ProductsList;
