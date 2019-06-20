const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.get("/api/showCartProducts", cartController.showProductOfCart);
router.post("/api/addProductToCart", cartController.addProductToCart);
router.get("/api/showOneProductOfCart", cartController.showSingleCartProduct);
router.delete(
	"/api/deleteCartProduct/:id",
	cartController.deleteSingleProductCart
);

router.get("*", (req, res) => {
	res.render("index");
});

module.exports = router;
