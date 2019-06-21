import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Top from "../user/Top";
import {
	fetchAllCartProducts,
	addProductToCart,
	removeProductToCart
} from "../../actions/cart/cart";
// import { customerDetail } from "../../actions/orders/orders";

class addProductsCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalAmount: this.props.cartItems.price,
			quantity: ""
		};
	}
	componentDidMount() {
		this.props.fetchAllCartProducts();
	}

	//add the quantity function handleChange
	//push the quantity of items to backend
	handleChange = (e) => {
		e.preventDefault();
		this.setState({ quantity: e.target.value });
	};

	//function to place the order
	// placeOrder = (e) => {
	// 	console.log(e, "show button");
	// 	console.log(this.state, "check the state data");
	// 	this.props.customerDetail(this.state);
	// };

	//delete item from cart
	handleDelete = (id) => {
		this.props.removeProductToCart(id, (succeed) => {
			if (succeed) {
				this.props.history.push("/product/cart");
			}
			this.props.fetchAllCartProducts();
		});
	};

	render() {
		const { cartItems } = this.props;
		return (
			<Fragment>
				<div className='cart_component'>
					<Top color='#1a8084' />
					<div className='added_product'>
						<section className='cart_card'>
							{cartItems &&
								cartItems.map((val, index) => {
									return (
										<div className='cart-item' key={index}>
											<div className='product-description'>
												<div>
													<img
														className='cart_image'
														src={val.image}
														alt='product'
													/>
												</div>
												<form className='product_quantity'>
													<h1>quantity</h1>
													<input
														className='quantity'
														type='number'
														name='quantity'
														onChange={this.handleChange}
													/>
												</form>
												<div className='color'>
													<h1>color</h1>
													<p>{val.color}</p>
												</div>
												<div className='size'>
													<h1>size</h1>
													<p>{val.size}</p>
												</div>
												<div className='price'>
													<h1>price</h1>
													<p>{val.price * this.state.quantity}</p>
												</div>
												<div className='button'>
													<Link to='/product/buy'>
														<button
															className='placeOrder_btn detail-btn'
															onClick={this.placeOrder}>
															placeOrder
														</button>
													</Link>
												</div>
												<span>
													<i
														className='fas fa-times'
														onClick={() => this.handleDelete(val._id)}
													/>
												</span>
											</div>
										</div>
									);
								})}
						</section>
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cartList.cartProducts
	};
};

export default connect(
	mapStateToProps,
	{
		fetchAllCartProducts,
		addProductToCart,
		removeProductToCart
	}
)(addProductsCart);
