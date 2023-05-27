import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = (props) => {
	const { product, isShowen } = props;

	return (
		<Fragment>
			<div className="card fix">
				<img src={product.image} className="card-img-top" alt={product.title} />
				<div className="card-body">
					<h5 className="card-title">{product.title}</h5>
					<div className="container-of-text">
						<p className="card-text">{product.description}</p>
					</div>
					{isShowen && (
						<Link
							to={`/products/${product.id}`}
							className="btn btn-primary button"
						>
							details
						</Link>
					)}
					{!isShowen && <div className="price">$ {product.price}</div>}
					{!isShowen && (
						<button className="btn btn-success font-bold buy">Buy now</button>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default Product;
