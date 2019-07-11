const Donor = require("./../models/payment_method");
// const { initializePayment,verifyPayment } = require("../config/payStack");

module.exports = {
	payStack: (req, res) => {
		const donor = new Donor(req.body);
		donor.save((err, data) => {
			if (err) {
				return res.json({ message: "err", success: false });
			} else {
				return res.status(200).send(data);
			}
		});
		// const form = _.pick(req.body, ["amount", "email", "full_name"]);
		// form.metadata = {
		// 	full_name: form.full_name
		// };
		// form.amount *= 100;
		// initializePayment(form, (error, body) => {
		// 	if (error) {
		// 		//handle errors
		// 		console.log(error);
		// 		return;
		// 	}
		// 	response = JSON.parse(body);
		// 	res.redirect(response.data.authorization_url);
		// });
	},
	payStackCallback: (req, res) => {
		const ref = req.query.reference;
		verifyPayment(ref, (error, body) => {
			if (error) {
				//handle errors appropriately
				console.log(error);
				return res.redirect("/error");
			}
			response = JSON.parse(body);
			const data = _.at(response.data, [
				"reference",
				"amount",
				"customer.email",
				"metadata.full_name"
			]);
			[reference, amount, email, full_name] = data;
			newDonor = { reference, amount, email, full_name };
			const donor = new Donor(newDonor);
			donor
				.save()
				.then((donor) => {
					if (!donor) {
						res.redirect("/error");
					}
					res.redirect("/receipt/" + donor._id);
				})
				.catch((e) => {
					res.redirect("/error");
				});
		});
	},
	payStackReceipt: (req, res) => {
		const id = req.params.id;
		Donor.findById(id)
			.then((donor) => {
				if (!donor) {
					//handle error when the donor is not found
					res.redirect("/error");
				}
				res.render("index.html", { donor });
			})
			.catch((e) => {
				res.redirect("/error");
			});
	}
};
