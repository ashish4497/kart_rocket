const Cart = require("./../models/cartSchema");
const Product = require("../models/productSchema");

module.exports = {
	addProductToCart: (req, res) => {
		Product.findById(req.body.productId, (err, product) => {
			const cart = new Cart({
				price: product.price,
				image: product.image,
				description: product.description,
				size: req.body.size,
				color: req.body.color
			});
			cart.save((err, cartProduct) => {
				if (err) {
					return res.json({ message: err, success: false });
				} else {
					return res.status(200).send(cartProduct);
				}
			});
		});
	},

	showProductOfCart: (req, res) => {
		Cart.find({}, (err, product) => {
			if (err) {
				return res.json({
					message: err,
					success: false
				});
			} else {
				return res.status(200).send(product);
			}
		});
	},

	showSingleCartProduct: (req, res) => {
		const id = req.params.id;
		Cart.findById(id, (err, singleCartProduct) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res
					.status(200)
					.json({ singleCartProduct, success: true })
					.send(singleCartProduct);
			}
		});
	},

	deleteSingleProductCart: (req, res) => {
		const id = req.params.id;
		Cart.findByIdAndDelete(id, (err, SingleProductCart) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res.status(200).json({ SingleProductCart, success: true });
			}
		});
	}
};
