const express = require("express");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const logger = require("morgan");
const ejs = require("ejs");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", htmlRoutes);

// brings in mongo connection
require("./config/connection.js");

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`app listening on port ${port}`);
});
