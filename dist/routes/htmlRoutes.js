"use strict";

var express = require("express");
var html = express.Router();

html.get("/", function (req, res, next) {
  res.render("./pages/index", { title: "Mountain Pain Management" });
});

module.exports = html;