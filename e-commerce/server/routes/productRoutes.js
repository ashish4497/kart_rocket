const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const userController = require("../controller/userController");
router.post(
	"/api/admin/addproduct",
	// userController.isLoggedIn,
	// userController.isAdmin,
	productController.addProduct
);
router.get(
	"/api/admin/products",
	// userController.isLoggedIn,
	// userController.isAdmin,
	productController.productList
);
router.get(
	"/api/product/:id",
	userController.isLoggedIn,
	userController.isAdmin,
	productController.singleProduct
);
router.delete(
	"/api/admin/products/remove/:id",
	userController.isLoggedIn,
	userController.isAdmin,
	productController.removeProduct
);
router.put(
	"/api/admin/product/edit/:id",
	userController.isLoggedIn,
	userController.isAdmin,
	productController.editProduct
);
router.get("*", (err, res) => {
	if (err) {
		throw err;
	}
	res.render("index");
});

module.exports = router;
