const Order = require("../models/ordersSchema");

module.exports = {
	customerDetail: (req, res) => {
		const orders = new Order(req.body);
		orders.save((err, order) => {
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
			(err, orderInfo) => {
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
