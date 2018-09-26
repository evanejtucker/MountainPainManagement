"use strict";

var express = require("express");
var port = process.env.PORT || 8080;
var bodyParser = require("body-parser");
var logger = require("morgan");
var passport = require("passport");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
require("ejs");

var usersAPI = require("./routes/usersAPI");
var htmlRoutes = require("./routes/htmlRoutes");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set("view engine", "ejs");

app.use("/users", usersAPI);
app.use(htmlRoutes);

// brings in mongo connection
require("./config/connection.js");

app.listen(port, function (err) {
  if (err) throw err;
  console.log("app listening on port " + port);
});