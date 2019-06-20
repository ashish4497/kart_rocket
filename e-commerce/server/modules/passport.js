const Local = require("passport-local").Strategy;
var passport = require("passport");
const User = require("../models/userSchema");

// console.log(User, "show user in passport");
module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function(_id, done) {
		User.findById(_id, function(err, user) {
			return done(err, user);
		});
	});

	passport.use(
		new Local(
			{
				usernameField: "userName"
			},
			function(userName, password, done) {
				User.findOne({ userName: userName }, function(err, user) {
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false);
					}
					user.verifyPassword(password, function(err, isMatched) {
						if (!isMatched) {
							return done(null, false);
						}
						return done(null, user);
					});
				});
			}
		)
	);
};
