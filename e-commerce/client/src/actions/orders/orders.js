const URL = "http://localhost:8000/product/api";

//function to add order oroduct detail
export function ordersInfo(state) {
	return (dispatch) => {
		fetch(URL + "/orderplaced/buy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: "ADD_ORDER",
					order: data
				});
			});
	};
}

//function to show the order list
export function seeOrdersDetail(state, cb) {
	return (dispatch) => {
		fetch(URL + "/orderdescription/see", {
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => {
				res.json();
			})
			.then((data) => {
				console.log(data);
			});
	};
}
