import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProducts, singleProduct } from "../../actions/admin/product";
import {
	fetchAllCartProducts,
	addProductToCart
} from "../../actions/cart/cart";
import Top from "./Top";
import swal from "sweetalert";

class ProductDescription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: "",
			color: "",
			productId: this.props.match.params.id,
			price: this.props.product.price[0]
		};
	}

	handleSize(e, size) {
		this.setState({
			size: size
		});
	}

	handleColor(e, color) {
		this.setState({
			color: color
		});
	}

	handleAddCart = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
		if (!this.state.size || !this.state.color) {
			swal("Please select the size and color");
		} else {
			this.props.addProductToCart(this.state, (cb) => {
				if (cb) {
					this.props.history.push("/product/cart");
				}
			});
		}
	};

	render() {
		const { product } = this.props;

		return (
			<div className='product_description'>
				<Top color='#1a8084' />
				<div>
					{product && (
						<div className='image-side'>
							<div className='product_image'>
								<div className='left-side-detail'>
									<div className='product-image'>
										<img src={product.image} />
									</div>
								</div>
								<div className='product_description'>
									<div className='info_product'>
										<div>
											<h2>description</h2>
											<p>{product.description}</p>
										</div>
										<div>
											<h2>price</h2>
											<p>{product.price} Rs</p>
										</div>
										<div>
											<h2>product size</h2>
											{product.size[0].split(",").map((size) => {
												return (
													<button
														key={size}
														name='size'
														className={
															this.state.size == size
																? "size-btn selected"
																: "size-btn"
														}
														onClick={(e) => this.handleSize(e, size)}>
														{size}
													</button>
												);
											})}
										</div>
										<div>
											<h2>product color</h2>
											{product.color[0].split(",").map((color) => (
												<button
													key={color}
													name='color'
													className={
														this.state.color == color
															? "clr-btn selected"
															: "clr-btn"
													}
													onClick={(e) => this.handleColor(e, color)}>
													{color}
												</button>
											))}
										</div>
										<div className='button'>
											<button
												className='addcart_btn detail-btn'
												onClick={this.handleAddCart}>
												addCart
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const product = state.Products.products.Product.find((val) => {
		return val._id === id;
	});

	return {
		product
	};
};

export default connect(
	mapStateToProps,
	{ singleProduct, fetchAllProducts, fetchAllCartProducts, addProductToCart }
)(ProductDescription);
