"use strict";

module.exports = {
  isLoggedIn: function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      console.log("user authenticated");
      next();
    } else {
      console.log("user not authenticated");
      res.redirect("/login");
    }
  },

  logoutUser: function logoutUser(req, res, next) {
    if (req.isAuthenticated()) {
      console.log("logged out successfully");
      req.logout();
      next();
    } else {
      next();
    }
  },

  isAdmin: function isAdmin(req, res, next) {
    if (req.isAuthenticated()) {
      console.log("user confirmed");
      if (req.user.admin) {
        console.log("Administer Confirmed");
        next();
      } else {
        console.log("you must be an administer to continue");
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  }
};