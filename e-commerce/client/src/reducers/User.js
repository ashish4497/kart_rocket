export default function User(
	state = { isLogged: false, isAdmin: false, user: [] },
	action
) {
	switch (action.type) {
		case "REGISTER":
			return {
				...state
				// user: action.data
			};
		case "LOGIN":
			return {
				...state,
				isLogged: action.success,
				isAdmin: action.isAdmin
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
