import React, { Component, Fragment } from "react";
import Top from "./Top";
import { connect } from "react-redux";
import { fetchAllProducts, singleProduct } from "../../actions/admin/product";
import Footer from "./Footer";

class Shop extends Component {
	const;
	componentDidMount() {
		this.props.fetchAllProducts();
	}
	handleClick = (id) => {
		this.props.history.push(`/productdescription/${id}`);
	};

	//function to handle Search
	handleSearch = () => {};
	render() {
		const { products } = this.props;
		return (
			<Fragment>
				<div className='shop_component'>
					<Top color='#1a8084' />
					<div className='shop_section'>
						<section />
						{/* <section className='col1_filter'>
							<input
								className='search_product'
								type='text'
								placeholder='search product'
								onKeyUp={this.handleSearch}
							/>
						</section> */}
						<section className='col2_items_list'>
							<div className='display_products'>
								{products &&
									products.map((value, index) => {
										return (
											<div
												key={index}
												onClick={() => this.handleClick(value._id)}>
												<div className='shopping_card'>
													<div className='show_product'>
														<div className='image'>
															<img src={value.image} alt='product' />
														</div>
														<div className='product_detail'>
															<p className='product-name'>{value.name}</p>
															<p>{value.category}</p>
															<p className='product-price'>{value.price} Rs</p>
														</div>
													</div>
												</div>
											</div>
										);
									})}
							</div>
						</section>
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

export default connect(
	mapStateToProps,
	{ fetchAllProducts, singleProduct }
)(Shop);
