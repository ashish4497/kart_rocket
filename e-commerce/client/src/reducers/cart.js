const initialState = {
	cartProducts: []
};

export default function CartItems(state = initialState, action) {
	switch (action.type) {
		case "SHOW_DATA_TO_CART":
			return {
				...state,
				cartProducts: action.AllData
			};
		case "ADD_TO_CART":
			return {
				...state,
				cartProducts: action.addData
			};
		case "DELETE_CART_ITEM":
			return {
				...state
			};
		default:
			return state;
	}
}
