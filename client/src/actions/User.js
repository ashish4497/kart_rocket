const URL = "/user";

export function registerSubmit(state, cb) {
	return (dispatch) => {
		fetch(URL + "/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: "REGISTER",
					data
				});
				cb(true);
			});
	};
}

export function login(state, cb) {
	return (dispatch) => {
		fetch(URL + "/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(state)
		})
			.then((response) => {
				if (response.status === 200) {
					return response.json();
				}

				return null;
			})
			.then((data) => {
				if (data) {
					const { user, token } = data;
					const userInfo = {
						isAdmin: user.isAdmin,
						token
					};
					localStorage.setItem("userInfo", JSON.stringify(userInfo));
					dispatch({
						type: "LOGIN",
						success: true,
						isAdmin: user.isAdmin || false,
						user: data.user,
						token
					});
					cb(user);
				} else {
					cb(false);
				}
			});
	};
}

export function logoutUser() {
	return (dispatch) => {
		// fetch(URL + "/api/logout")
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		dispatch({ type: "LOGOUT", data });
		// });
		localStorage.clear();
	};
}

export function getUser(cb) {
	return (dispatch) => {
		fetch(URL + "api/v1/user")
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: GET_USER,
					user: data.user
				});
				cb(true);
			});
	};
}
