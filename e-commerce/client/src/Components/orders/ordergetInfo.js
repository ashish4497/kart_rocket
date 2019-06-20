import React, { Component } from "react";
import { connect } from "react-redux";
import { paymentStack } from "../../actions/orders/orders";

class ordergetInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: "",
			full_name: "",
			email: "",
			amount: ""
		};
	}
	//function to implement handleChange for paymentMethod
	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	};

	//function to implement handlePay
	handlePay = (e) => {
		this.props.ordergetInfo(this.state, (succeed) => {
			if (succeed) {
				console.log("success-fully entered");
			}
		});
	};
	render() {
		return (
			<div>
				<div className='user_orders_info'>
					<section className='ingo_section_one'>
						<form className='address_form'>
							<h1>Enter address</h1>
							<input
								type='text'
								name='address'
								placeholder='Enter Address'
								required
							/>
						</form>
						<section className='payment_stack'>
							<div className='payment_form'>
								<h1>payment form</h1>
								<form>
									<input
										type='text'
										name='full_name'
										placeholder='full name'
										onChange={this.handleChange}
									/>
									<input
										type='email'
										name='email'
										placeholder='enter email'
										onChange={this.handleChange}
									/>
									<input
										type='number'
										name='amount'
										placeholder='amount'
										onChange={this.handleChange}
									/>
									<button onChange={this.handlePay}>pay</button>
								</form>
							</div>
						</section>
					</section>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ paymentStack }
)(ordergetInfo);
