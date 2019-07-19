const express = require("express");
const router = express.Router();
const hash = "bundle";

// router.get("*", (req, res) => {
// 	res.render("index");
// });
router.get("*", function(req, res, next) {
	console.log("Comming here", process.env.NODE_ENV);
	const cssPath =
		process.env.NODE_ENV == "production"
			? `/bundle/${hash}.css`
			: "/static/bundle.css";
	const jsPath =
		process.env.NODE_ENV == "production"
			? `/bundle/${hash}.js`
			: "/static/bundle.js";
	console.log(process.env.NODE_ENV);
	res.render("index", { jsPath, cssPath });
});

module.exports = router;
