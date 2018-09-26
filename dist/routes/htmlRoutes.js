"use strict";

var express = require("express");
var html = express.Router();

html.get("/", function (req, res, next) {
  res.render("./pages/index", { title: "Mountain Pain Management" });
});

html.get("/login", function (req, res, next) {
  res.render("./pages/index", { title: "Login Page" });
});

module.exports = html;