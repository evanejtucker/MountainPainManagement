const express = require("express");
const html = express.Router();

html.get("/", function (req, res, next) {
  res.render("./pages/index", { title: "Mountain Pain Management" });
});

module.exports = html;
