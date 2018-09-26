"use strict";

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "first name is required"],
    unique: false
  },
  lastname: {
    type: String,
    required: [true, "last name is required"],
    unique: false
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "password is required"],
    unique: false,
    validate: function validate(value) {
      if (value.length < 0 || value.length > 15) {
        return true;
      } else {
        return new Error("password must be less than 15 letters");
      }
    }
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true
  },
  photo: {
    type: String,
    required: false,
    unique: false
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  }
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
};

var User = mongoose.model("User", userSchema);

module.exports = User;