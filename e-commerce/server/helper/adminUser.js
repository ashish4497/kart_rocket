var User = require("../models/userSchema");

adminCreator = () => {
	var adminDetails = {
		username: "admin",
		email: "admin@shopping.com",
		isAdmin: true,
		password: "12345"
	};

	User.findOne({ email: "admin@shopping.com" }, (err, user) => {
		if (!user) {
			User.create(adminDetails, function() {
				console.log("Admin user created!");
			});
		} else {
			console.log("Admin already present!");
		}
	});
};

module.exports = adminCreator;
