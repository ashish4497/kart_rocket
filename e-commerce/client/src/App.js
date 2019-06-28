import React, { Component } from "react";
import "./Style/App.scss";
import Header from "./Components/user/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Shop from "./Components/user/Shop";
import Learn from "./Components/user/Learn";
import Register from "./Components/userAuth/Register";
import Login from "./Components/userAuth/Login";
import AddProduct from "./Components/admin/AddProduct";
import FrontLook from "./Components/user/FontLook";
import ProductDescription from "./Components/user/ProductDescription";
import ProductDetail from "./Components/admin/ProductDetail";
import addProductsCart from "./Components/cart/addProductsCart";
import ordergetInfo from "./Components/orders/ordergetInfo";
import PrivateRoutes from "./Components/privateRoutes";

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
						<Route exact path='/learn' component={Learn} />
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
						/>
						<PrivateRoutes
							exact
							path='/admin/productdetail'
							component={ProductDetail}
							// auth={isAdmin}
						/>

						<PrivateRoutes
							exact
							path='/productdescription/:id'
							component={ProductDescription}
							auth={isLogged}
						/>
						<PrivateRoutes
							exact
							path='/product/buy'
							component={ordergetInfo}
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
