require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
var webpack = require("webpack");
const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

// mongoose.connect(
// 	"mongodb://ashish4497:Password1210@ds231501.mlab.com:31501/postblog",
// 	{ useNewUrlParser: true },
// 	function(err, connection) {
// 		if (err) throw err;
// 		else console.log("connected to mongodb");
// 	}
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

app.use(
	session({
		secret: "writer",
		resave: true,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "development") {
	var webpackConfig = require("./webpack.config");
	var compiler = webpack(webpackConfig);

	app.use(
		require("webpack-dev-middleware")(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath
		})
	);

	app.use(require("webpack-hot-middleware")(compiler));
}
// //else to production deployment
else {
	var webpackPro = require("./webpack.prod.config");
	var compiler = webpack(webpackPro);

	app.use(
		require("webpack-hot-middleware")(compiler, {
			noInfo: true,
			proPath: webpackPro.output.proPath
		})
	);
}

app.use(cors());
require("./server/modules/passport")(passport);

app.use("/user", require("./server/routes/userRoutes"));
app.use("/user", require("./server/routes/ordersRoutes"));
app.use("/product", require("./server/routes/productRoutes"));
app.use("/cart", require("./server/routes/cartRoutes"));
app.use("/order", require("./server/routes/ordersRoutes"));
app.use("/paystack", require("./server/routes/paymentRoutes"));

app.use(require("./server/routes/index"));

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
