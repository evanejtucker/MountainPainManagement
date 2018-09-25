const express = require("express");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.get("/", function (req, res, next) {
  res.send("hello world");
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`app listening on port ${port}`);
});
