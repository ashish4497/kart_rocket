const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
	image: { type: String, require: true },
	name: { type: String, require: true },
	description: { type: String },
	size: [{ type: [String], require: true }],
	color: [{ type: [String], require: true }],
	price: [{ type: String, require: true }]
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
