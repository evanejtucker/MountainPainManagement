const express = require("express");
const html = express.Router();

html.get("/", function (req, res, next) {
  res.render("./pages/index", { user: req.user, title: "Mountain Pain Management" });
});

html.get("/login", function (req, res, next) {
  res.render("./pages/index", { user: req.user, title: "Login Page" });
});

html.get("/profile", function (req, res, next) {
  res.render("./pages/index", { user: req.user, title: "Profile Page" });
});

html.get("*", function (req, res, next) {
  res.render("./pages/index", { user: req.user, title: "404" });
});

module.exports = html;
