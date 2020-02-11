const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  userEmail: String,
  googleId: String,
  token: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
