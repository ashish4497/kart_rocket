import React, { Component } from "react";
import { connect } from "react-redux";
import { seeOrdersDetail } from "../../actions/orders/orders";

class orderDetail extends Component {
	render() {
		// componentDidMount = () => {
		// 	this.props.seeOrdersDetail();
		// };

		// const { orders } = this.props;
		return (
			<div className='order_Product_Detail'>
				<section className='product_description'>
					<h1>order list</h1>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.Order.order
	};
};

export default connect(
	mapStateToProps,
	{ seeOrdersDetail }
)(orderDetail);
