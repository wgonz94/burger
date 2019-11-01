var express = require("express");
var burger = require("./models/burger.js");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var routes = require("./controllers/burgers_controller.js");
var app = express ();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});



app.use("/api/burgers", routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
