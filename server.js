// dependencies
var express = require('express');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

// port
var PORT = process.env.PORT || 3000;

// express app instance
var app = express();

// routes
var routes = require('./routes');

// parse request body (JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make 'public' a static dir
app.use(express.static("public"));

// connect handlebars to express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// make routes dir our middleware
app.use(routes);

// deployed or local db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news-scraper";

// connect to db
mongoose.connect(MONGODB_URI);

// listen
app.listen(PORT, function () {
  console.log('Listening on port', PORT);
});