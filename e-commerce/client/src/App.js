import React, { Component } from "react";
import "./Style/App.scss";
import Header from "./Components/user/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Shop from "./Components/user/Shop";
import Register from "./Components/userAuth/Register";
import Login from "./Components/userAuth/Login";
import AddProduct from "./Components/admin/AddProduct";
import FrontLook from "./Components/user/FontLook";
import ProductDescription from "./Components/user/ProductDescription";
import ProductDetail from "./Components/admin/ProductDetail";
import addProductsCart from "./Components/cart/addProductsCart";
import PrivateRoutes from "./Components/privateRoutes";
import orderDetail from "./Components/admin/orderDetail";

class App extends Component {
	render() {
		let { isLogged, isAdmin } = this.props;
		return (
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Header} />
						<Route exact path='/shop' component={Shop} />
						<Route exact path='/look' component={FrontLook} />
						<Route exact path='/login' component={Login} />
						<Route
							exact
							path='/register'
							component={Register}
							auth={!isLogged}
						/>
						<PrivateRoutes
							exact
							path='/admin/addproduct'
							component={AddProduct}
							auth={isAdmin}
						/>
						<PrivateRoutes
							exact
							path='/admin/productdetail'
							component={ProductDetail}
							auth={isAdmin}
						/>
						<PrivateRoutes
							exact
							path='/admin/orders'
							component={orderDetail}
							auth={isAdmin}
						/>
						<PrivateRoutes
							exact
							path='/productdescription/:id'
							component={ProductDescription}
							auth={isLogged}
						/>
						<PrivateRoutes
							exact
							path='/product/cart'
							component={addProductsCart}
							auth={isLogged}
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: state.User.isLogged,
		isAdmin: state.User.isAdmin
	};
};

export default connect(mapStateToProps)(App);
