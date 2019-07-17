const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/api/orderplaced/buy", orderController.customerDetail);
router.get("/api/orderdescription/see", orderController.showOrderList);
router.get("*", (req, res) => {
	res.render("index");
});
module.exports = router;
