import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/User";

class Top extends Component {
	handleLogout = () => {
		this.props.dispatch(logoutUser());
		this.props.history.push("/");
	};

	render() {
		const { cartProducts } = this.props;
		let { isLogged } = this.props;
		console.log(isLogged, "check user is logged");
		var divStyle = {
			backgroundColor: `${this.props.color}`
		};
		return (
			<div className='Header_Section' style={divStyle}>
				<div className='top-nav-bar'>
					<div className='col1-row1-left'>
						<ul>
							<Link to='/shop'>
								<li>Shop</li>
							</Link>
							<Link to='/look'>
								<li>look</li>
							</Link>
							{/* <Link to='/learn'>
								<li>learn</li>
							</Link> */}
						</ul>
					</div>
					<div className='col1-row2-center'>
						<Link to='/'>
							<div className='logo'>
								<p>shop good</p>
							</div>
						</Link>
					</div>
					{isLogged ? (
						<div className='col1-row3-right'>
							<ul>
								<Link to='/product/cart'>
									<li>Cart({cartProducts && cartProducts.length})</li>
								</Link>
								<Link to='/'>
									<li className='logout' onClick={this.handleLogout}>
										Logout
									</li>
								</Link>
							</ul>
						</div>
					) : (
						<div className='top-right'>
							<ul>
								<Link to='/login'>
									<li>Login</li>
								</Link>
								<Link to='/register'>
									<li>Sign-up</li>
								</Link>
							</ul>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartProducts: state.cartList.cartProducts,
		isLogged: state.User.isLogged
	};
};

export default connect(mapStateToProps)(Top);
