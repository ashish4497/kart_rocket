import { combineReducers } from "redux";
import Products from "./Product";
import User from "./User";
import cartList from "./cart";
import { Order } from "./order";

export default combineReducers({
	Products,
	User,
	cartList,
	Order
});
