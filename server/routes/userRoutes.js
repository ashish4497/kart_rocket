const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/api/register", userController.registerUser);
router.post("/api/login", userController.loginUser);
router.get("/api/logout", userController.isLoggedIn, userController.logoutUser);

router.get("/register", (err, res) => {
	res.render("index");
});
router.get("/login", (err, res) => {
	res.render("index");
});
router.get("/logout", (err, res) => {
	res.render("index");
});

module.exports = router;
