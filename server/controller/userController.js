const User = require("../models/userSchema");
const passport = require("passport");
const jwt = require("jsonwebtoken");

module.exports = {
	createUser: (req, res) => {
		const newUser = new User({
			...req.body,
			isAdmin: false
		});

		User.find({ username: newUser.username }, function(err, user) {
			if (user.length) {
				return res.json({ message: "Username exists already", success: false });
			} else {
				User.find({ email: newUser.email }, function(err, user) {
					if (user.length) {
						return res.json({
							message: "Email exists already",
							success: false
						});
					} else {
						newUser.save((err, user) => {
							if (err) {
								return res.json({ message: err, success: false });
							}
							return res.status(201).json({
								user: user.username,
								success: true,
								message: "User Created Successfully"
							});
						});
					}
				});
			}
		});
	},
	//LOGIN USER
	loginUser: (req, res, next) => {
		passport.authenticate("local", function(err, user, info) {
			if (err) {
				return next(err);
			}
			if (!user) {
				return res.status(404).json({
					msg: "invalid input"
				});
			}
			const id = user._id;
			var token = jwt.sign({ id }, "writer");
			req.login(user, function(err) {
				if (err) {
					return next(err);
				}
				return res.status(200).json({
					user,
					token
				});
			});
		})(req, res, next);
	},
	//Check user is logged in or Not
	isLoggedIn: (req, res, next) => {
		// req.user
		if (req.session.passport) {
			return next();
		} else {
			return res.status(401).json({
				success: false,
				message: "Please login to get access"
			});
		}
	},
	//logout user
	logoutUser: (req, res) => {
		req.session.destroy();
		res.status(200).json({
			success: true,
			message: "Session is removed & User Is LoggedOut"
		});
	},

	//check is user or not
	isUser: (req, res) => {
		const user = req.session.passport;
		if (user) {
			User.findOne({ _id: user.user }, (err, user) =>
				res.status(200).json({
					login: "success",
					user: user.username
				})
			);
		} else
			return res.status(404).json({
				success: false,
				message: "user Not login"
			});
	},

	//check user is admin or not
	isAdmin: (req, res, next) => {
		const sessionUser = req.user;
		User.findOne({ _id: sessionUser }, (err, user) => {
			if (user.isAdmin === true) {
				return next();
			} else {
				return res.status(404).json({
					success: false,
					message: "User is not Admin"
				});
			}
		});
	},

	//REGISTER USER
	registerUser: (req, res) => {
		const username = req.body.userName;
		User.find({ username: username }, (err, user) => {
			if (err) throw err;
			else {
				if (user.length) {
					res.json({
						msg: "User already exist"
					});
				} else {
					const newUser = new User(req.body);
					newUser.save((err, user) => {
						if (err) throw err;
						res.json(user);
					});
				}
			}
		});
	}
};
