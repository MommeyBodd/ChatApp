const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  googleId: String,
  userEmail: String,
  avatar: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
