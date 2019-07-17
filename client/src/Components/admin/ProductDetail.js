import React, { Component } from "react";
import { connect } from "react-redux";
import Top from "../user/Top";
import {
	fetchAllProducts,
	deleteProduct,
	editProduct
} from "../../actions/admin/product";

class ProductDetail extends Component {
	componentDidMount() {
		this.props.fetchAllProducts();
	}

	//Delete the product
	handleDelete = (id) => {
		this.props.deleteProduct(id, (succeed) => {
			if (succeed) {
				this.props.history.push("/admin/productdetail");
			}
			this.props.fetchAllProducts();
		});
	};

	//Edit the product
	handleEdit = (id) => {
		this.Props.editProduct(id);
	};
	render() {
		const { Products } = this.props;
		return (
			<div className='product_detail'>
				<Top color='#1a8084' />
				<h1>Products list</h1>
				<div className='product_section'>
					{Products &&
						Products.map((value, index) => {
							return (
								<div key={index}>
									<div className='shopping_card'>
										<div className='show_product'>
											<div className='image'>
												<img src={value.image} alt='product' />
											</div>
											<div className='product_detail'>
												<p className='product-name'>{value.name}</p>
												<p>{value.category}</p>
												<span>
													<i
														className='fas fa-trash-alt'
														onClick={() => this.handleDelete(value._id)}
													/>
													<p className='product-price'>{value.price} Rs</p>
												</span>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		Products: state.Products.products.Product
	};
};

export default connect(
	mapStateToProps,
	{ fetchAllProducts, deleteProduct, editProduct }
)(ProductDetail);
