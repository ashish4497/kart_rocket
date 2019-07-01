const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
	user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	address: { type: String, required: true },
	items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	totalAmount: { type: String, required: true },
	quantity: { type: Number, require: true }
	// isPaid: { type: Boolean, default: false },
	// isDelivered: { type: Boolean, default: false }
});
const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;
