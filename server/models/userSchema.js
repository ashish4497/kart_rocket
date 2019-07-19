const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SALT_FACTOR = 10;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	userName: { type: String, unique: true, required: true },
	userEmail: { type: String, required: true, unique: true },
	userContactNo: { type: Number, unique: true, require: true },
	password: { type: String },
	isAdmin: { type: Boolean, default: false },
	cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cart" }]
});

userSchema.methods.verifyPassword = function(userPassword, cb) {
	bcrypt.compare(userPassword, this.password, function(err, res) {
		if (err) cb(err, false);
		cb(null, res);
	});
};

userSchema.pre("save", function(next) {
	var password = this.password;
	var self = this;
	if (!this.isModified("password")) return next();
	if (this.userName == process.env.userName) {
		this.isAdmin = true;
	}
	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {
			self.password = hash;
			next();
		});
	});

	// next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
