var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var burgerController = require("./controllers/burger_controllers.js");

var routes = require("./routes")
// app.use("/",routes)
app.use("/", burgerController);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

