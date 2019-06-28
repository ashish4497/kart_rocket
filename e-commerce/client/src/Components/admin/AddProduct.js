import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/admin/product";
import Top from "../user/Top";
import swal from "sweetalert";

class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productDetails: {
				image: "",
				name: "",
				description: "",
				size: "",
				color: "",
				price: ""
			}
		};
	}

	handleChange = (e) => {
		this.setState({
			productDetails: {
				...this.state.productDetails,
				[e.target.name]: e.target.value
			}
		});
	};

	handleImage = (e) => {
		const { files } = e.target;
		const fileVal = files[0];
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			this.setState({
				productDetails: {
					...this.state.productDetails,
					image: reader.result
				}
			});
		});
		reader.readAsDataURL(fileVal);
	};

	handleSubmit = (e) => {
		if (
			!this.state.productDetails.image ||
			!this.state.productDetails.name ||
			!this.state.productDetails.description ||
			!this.state.productDetails.color ||
			!this.state.productDetails.size ||
			!this.state.productDetails.price
		) {
			swal("Please enter the Product details");
		}
		e.preventDefault();
		this.props.dispatch(addProduct(this.state.productDetails), (success) => {
			if (success) {
				this.props.history.push("/");
			}
		});
	};
	render() {
		return (
			<Fragment>
				<div className='main'>
					<Top color='#1a8084' />
					<div className='product_details'>
						<form className='product_form' onSubmit={this.handleSubmit}>
							<h1>add product detail</h1>
							<label for='img'>Add product image</label>
							<input
								type='file'
								autocomplete='off'
								name='image'
								accept='image/*'
								onChange={this.handleImage}
							/>
							<label for='product'>Product name</label>
							<input
								type='text'
								autocomplete='off'
								name='name'
								onChange={this.handleChange}
							/>
							<label for='description'>product description</label>
							<input
								type='text'
								autocomplete='off'
								name='description'
								onChange={this.handleChange}
							/>
							<label for='size'>product size</label>
							<input
								type='text'
								autocomplete='off'
								name='size'
								onChange={this.handleChange}
							/>
							<label for='category'>product category</label>
							<input
								type='text'
								autocomplete='off'
								name='category'
								onChange={this.handleChange}
							/>
							<label for='color'>product color</label>
							<input
								type='text'
								autocomplete='off'
								name='color'
								onChange={this.handleChange}
							/>
							<label for='price'>product price</label>
							<input
								type='text'
								autocomplete='off'
								name='price'
								onChange={this.handleChange}
							/>
							<input type='submit' value='Submit' />
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default connect(null)(AddProduct);
