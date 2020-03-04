const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  googleId: String,
  userEmail: String,
  sentMessages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  participation: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
  avatar: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
