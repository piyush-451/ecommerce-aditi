const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
    default:"user",
  },
  state: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  pincode: {
    type: String,
    default: ""
  }
}, {timestamps:true});

const User = mongoose.model("users", userSchema);
module.exports = User;
