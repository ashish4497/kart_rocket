const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const donnerSchema = new Schema({
	full_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	}
	// reference: {
	// 	type: String,
	// 	required: true
	// }
});
const Donner = mongoose.model("Donner", donnerSchema);
module.exports = Donner;
