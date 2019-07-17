const express = require("express");
const router = express.Router();
const payStackControler = require("../controller/payStackControler");

router.post("/api/paystack/pay", payStackControler.payStack);
router.get("/pay/callback", payStackControler.payStackCallback);
router.get("/recipt/id", payStackControler.payStackReceipt);
router.get("*", (err, res) => {
	res.render("index");
});

module.exports = router;
