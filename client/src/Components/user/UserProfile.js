import React, { Component, Fragment } from "react";

class UserProfile extends Component {
	render() {
		return (
			<Fragment>
				<div className='user_profile'>
					<div className='user_detail'>
						<div className='user_info'>
							<p>user_profile_IMG</p>
							<p>USER NAME</p>
						</div>
					</div>
					<div className='order_detail'>
						<h1>your order</h1>
						<div className='order_info'>
							<div className='product_detail'>
								<p>product img</p>
							</div>
							<div className='product_price'>
								<p>price</p>
							</div>
							<div className='product_quantity'>
								<p>Quantity</p>
							</div>
							<div className='product_subtotal'>
								<p>subtotal</p>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default UserProfile;
