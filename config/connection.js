const mongoose = require("mongoose");
const keys = require("./keys.js");

const mongoKey = process.env.mongooseURL || keys.mongooseURL;

mongoose.connect(mongoKey, { useNewUrlParser: true }, function (error) {
  if (error) {
    return console.log("the connection broke");
  } else {
    console.log("mongoose connection successful");
  }
});

module.exports = mongoose;
