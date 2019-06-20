const Donor = require("./../models/payment_method");

const paystack = (request) => {
	const MySecretKey = "sk_test_c0f264803cbcec0ed1ec85da876f871b5bba6ffb";
	// sk_test_xxxx to be replaced by your own secret key
	const initializePayment = (donor, mycallback) => {
		const options = {
			url: "https://api.paystack.co/transaction/initialize",
			headers: {
				authorization: MySecretKey,
				"content-type": "application/json",
				"cache-control": "no-cache"
			},
			donor
		};
		const callback = (error, response, body) => {
			return mycallback(error, body);
		};
		request.post(options, callback);
	};
	const verifyPayment = (ref, mycallback) => {
		const options = {
			url:
				"https://api.paystack.co/transaction/verify/" + encodeURIComponent(ref),
			headers: {
				authorization: MySecretKey,
				"content-type": "application/json",
				"cache-control": "no-cache"
			}
		};
		const callback = (error, response, body) => {
			return mycallback(error, body);
		};
		request(options, callback);
	};
	return { initializePayment, verifyPayment };
};

module.exports = paystack;
