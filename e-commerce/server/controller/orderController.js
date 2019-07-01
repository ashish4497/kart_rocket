const Order = require("../models/ordersSchema");

module.exports = {
	customerDetail: (req, res) => {
		const orders = new Order(req.body);
		console.log(req.body, "show the data in order schema");
		orders.save((err, orders) => {
			if (err) {
				return res.json({ message: err, success: true });
			} else {
				return res.status(200).send(orders);
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
