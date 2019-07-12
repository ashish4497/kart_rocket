const Order = require("../models/ordersSchema");

module.exports = {
	customerDetail: (req, res) => {
		const orders = new Order(req.body);
		console.log(orders, "show the data");
		orders.save((err, order) => {
			console.log(order, "show the data in order schema");
			if (err) {
				return res.json({ message: err, success: true });
			} else {
				return res.status(200).send(order);
			}
		});
	},
	showOrderList: (req, res) => {
		Order.find(
			({},
			(err, order) => {
				if (err) {
					return res.json({
						message: err,
						success: false
					});
				} else {
					return res.status(200).send(order);
				}
			})
		);
	}
};
