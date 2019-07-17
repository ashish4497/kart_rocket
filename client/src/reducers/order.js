export function Order(state = { order: [] }, action) {
	switch (action.type) {
		case "ADD_ORDER":
			return {
				...state,
				order: action.order
			};
		default:
			return state;
	}
}
