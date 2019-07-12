export default function User(
	state = {
		isLogged: false,
		isAdmin: false,
		user: {},
		token: localStorage.token || ""
	},
	action
) {
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
