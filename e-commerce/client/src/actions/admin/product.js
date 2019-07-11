const URL = "http://localhost:8000/product/api";

export function addProduct(state, cb) {
	return (dispatch) => {
		fetch(URL + "/admin/addproduc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => res.json())
			.then((product) => {
				dispatch({
					type: "ADD_PRODUCT",
					product
				});
				cb(true);
			});
	};
}

export function fetchAllProducts() {
	return (dispatch) => {
		fetch(URL + "/admin/products", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "SET_PRODUCTS",
					products: data
				});
			});
	};
}

export function deleteProduct(id, cb) {
	return (dispatch) => {
		fetch(URL + "/admin/products/remove/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "DELETE_PRODUCT", Product: data });
			});
		cb(true);
	};
}

export function editProduct(id) {
	return (dispatch) => {
		fetch(URL + "/admin/product/edit/" + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((res) => {
				res.json();
			})
			.then((data) => {
				dispatch({ type: "EDIT_PRODUCT", Product: data });
			});
	};
}

export function singleProduct(id) {
	// console.log(id, "show id in action product");
	return (dispatch) => {
		fetch(URL + "/product/" + id)
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "SINGLE_PRODUCT",
					Product: data
				});
			});
	};
}
