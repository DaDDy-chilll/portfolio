/* eslint-disable no-undef */
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide username"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "please provide valid email",
      },
      unique: true,
    },
    comment: {
      type: String,
      required: [true, "please provide comment"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User',userSchema);