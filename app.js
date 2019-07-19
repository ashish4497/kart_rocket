const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
var webpack = require("webpack");
const port = process.env.PORT || 8000;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
	console.log(err);
	console.log("connected ? ", err ? false : true);
});

// mongoose.connect(
// 	"mongodb://localhost/shoppingSite",
// 	{ useNewUrlParser: true },
// 	function(err, connection) {
// 		if (err) throw err;
// 		else console.log("connected to mongodb");
// 	}
// );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "dist")));
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
