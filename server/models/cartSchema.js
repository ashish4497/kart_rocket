const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
	id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	price: [{ type: Number, require: true }],
	quantity: [{ type: Number, require: true }],
	size: [{ type: String, require: true }],
	color: [{ type: String, require: true }],
	image: { type: String, require: true }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
