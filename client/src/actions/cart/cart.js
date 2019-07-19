const URL = "/cart/api";

export function fetchAllCartProducts(state) {
	return (dispatch) => {
		fetch(URL + "/showCartProducts", {
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "SHOW_DATA_TO_CART",
					AllData: data
				});
			});
	};
}

export function addProductToCart(state, cb) {
	return (dispatch) => {
		fetch(URL + "/addProductToCart", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "ADD_TO_CART",
					addData: [data]
				});
				cb(true);
			});
	};
}
export function removeProductToCart(id, cb) {
	return (dispatch) => {
		fetch(URL + "/deleteCartProduct/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		})
			.then((res) => res.json)
			.then((data) => {
				dispatch({
					type: "DELETE_CART_ITEM",
					deleteItem: data
				});
				cb(true);
			});
	};
}
