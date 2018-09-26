"use strict";

var express = require("express");
var users = express.Router();
var passport = require("passport");
require("../config/passport")(passport);
require("../models/Users");
var auth = require("../config/middleware/isAuthenticated");

users.get("/profile", auth.isLoggedIn, function (req, res, next) {
  console.log("logged in successfully");
  res.send(req.user);
});

users.get("/logout", auth.logoutUser, function (req, res, next) {
  console.log("user logged out");
  res.redirect("/");
});

users.post("/login", passport.authenticate("local-login", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}));

users.post("/signup", passport.authenticate("local-signup", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}));

module.exports = users;