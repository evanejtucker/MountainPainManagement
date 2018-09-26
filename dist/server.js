"use strict";

var express = require("express");
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var logger = require("morgan");
var ejs = require("ejs");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res, next) {
  res.render("./pages/index", { title: "Mountain Pain Management" });
});

// brings in mongo connection
require("./config/connection.js");

app.listen(port, function (err) {
  if (err) throw err;
  console.log("app listening on port " + port);
});