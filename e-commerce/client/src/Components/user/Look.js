import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchAllProducts, singleProduct } from "../../actions/admin/product";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";

class Look extends Component {
	componentDidMount = () => {
		this.props.fetchAllProducts();
	};
	handleClick = (id) => {
		this.props.history.push(`/productdescription/${id}`);
	};
	render() {
		const { products } = this.props;
		return (
			<Fragment>
				<div className='look_page_component' background-color='white'>
					<div className='product_list'>
						{products &&
							products.map((value, index) => {
								return (
									<div
										className='product_images'
										key={index}
										onClick={() => this.handleClick(value._id)}>
										<div className='product-img'>
											<img src={value.image} />
										</div>
										<div className='product_detail'>
											<p>{value.price} Rs</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.Products.products.Product
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchAllProducts, singleProduct }
	)(Look)
);
