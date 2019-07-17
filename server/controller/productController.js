const Product = require("../models/productSchema");

module.exports = {
	addProduct: (req, res) => {
		const product = new Product(req.body);
		product.save((err, product) => {
			if (err) {
				return res.json({ message: err, success: true });
			} else {
				return res.status(200).send(product);
			}
		});
	},

	singleProduct: (req, res) => {
		const id = req.params.id;
		Product.findById(id, (err, singleProduct) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res.json({ singleProduct, success: true });
			}
		});
	},

	productList: (req, res) => {
		Product.find({}, (err, Product) => {
			if (err) {
				return res.json({ message: err, success: false });
			} else {
				return res.json({ Product, success: true });
			}
		});
	},

	removeProduct: (req, res) => {
		const id = req.params.id;
		Product.findByIdAndDelete(id, (err, Product) => {
			if (err) {
				return res.json({ message: err, success: true });
			} else {
				return res
					.status(200)
					.json({ message: "product removed", success: true });
			}
		});
	},

	editProduct: (req, res) => {
		const id = req.params.id;
		Product.findByIdAndUpdate(id, (err, Product) => {
			if (err) {
				res.json({ message: err, success: false });
			} else {
				res.status(200).json({
					message: "edit success",
					success: true
				});
			}
		});
	}
};
