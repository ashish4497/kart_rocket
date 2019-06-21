import React, { Component } from "react";
import "./Style/App.scss";
import Header from "./Components/user/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

class App extends Component {
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Header} />
						<Route exact path='/shop' component={Shop} />
						<Route exact path='/look' component={FrontLook} />
						<Route exact path='/learn' component={Learn} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/admin/add-product' component={AddProduct} />
						<Route
							exact
							path='/admin/productdetail'
							component={ProductDetail}
						/>
						<Route
							exact
							path='/productdescription/:id'
							component={ProductDescription}
						/>
						<Route exact path='/product/buy' component={ordergetInfo} />
						<Route exact path='/product/cart' component={addProductsCart} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
