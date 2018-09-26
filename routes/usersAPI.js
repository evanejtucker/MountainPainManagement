const express = require("express");
const users = express.Router();
const passport = require("passport");
require("../controller/passport")(passport);
require("../models/Users");

users.get("/profile", isLoggedIn, (req, res, next) => {
  console.log("logged in successfully");
  res.send(req.user);
});

users.get("/logout", logoutUser, (req, res, next) => {
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
