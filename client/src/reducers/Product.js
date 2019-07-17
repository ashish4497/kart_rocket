export default function Products(
	state = { products: [], singleProduct: [] },
	action
) {
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, action.Product]
			};
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.products
			};
		case "SINGLE_PRODUCT":
			return {
				...state,
				singleProduct: action.Product
			};
		case "DELETE_PRODUCT":
			return {
				...state
			};
		case "EDIT_PRODUCT":
			return {
				...state,
				products: action.Product
			};
		default:
			return state;
	}
}
