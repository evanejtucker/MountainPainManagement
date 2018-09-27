const express = require("express");
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const logger = require("morgan");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
require("ejs");

const usersAPI = require("./routes/usersAPI");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

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
  console.log(`app listening on port ${port}`);
});
