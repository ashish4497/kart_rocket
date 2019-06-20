import { combineReducers } from "redux";
import Products from "./Product";
import User from "./User";
import cartList from "./cart";

export default combineReducers({
	Products,
	User,
	cartList
});
