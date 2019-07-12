function getInitialState() {
	const userInfoString = localStorage.getItem("userInfo");
	const userInfo = JSON.parse(userInfoString || "{}");

	return {
		isLogged: userInfo.token ? true : false,
		isAdmin: userInfo.isAdmin,
		user: {},
		token: userInfo.token
	};
}

export default function User(state = getInitialState(), action) {
	switch (action.type) {
		case "REGISTER":
			return {
				...state
			};
		case "LOGIN":
			return {
				...state,
				isLogged: action.success,
				isAdmin: action.isAdmin,
				user: action.user,
				token: action.token
			};

		case "LOGOUT":
			return {
				...state,
				isLogged: false,
				isAdmin: false
			};
		case "GET_USER":
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
}
