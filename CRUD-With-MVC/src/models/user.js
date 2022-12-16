const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  employeeID: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  password: String,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
