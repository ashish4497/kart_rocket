const URL = "http://localhost:8000/product/api";

export function ordersInfo(state, cb) {
	return (dispatch) => {
		fetch(URL + "/orderplaced/buy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((res) => res.json())
			.then((data) => console.log(data, "checking the info in order"));
	};
}

//function for paymentStack
export function paymentStack(state, cb) {
	return (dispatch) => {
		fetch(URL + "/paystack/pay", {
			method: "POST",
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
