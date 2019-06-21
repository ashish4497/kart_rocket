var User = require("../models/userSchema");
console.log(User, "show the user in admin component");
adminCreator = () => {
	var adminDetails = {
		username: "admin",
		email: "admin@shopping.com",
		isAdmin: true,
		password: "12345"
	};

	User.findOne({ username: "admin" }, (err, user) => {
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
