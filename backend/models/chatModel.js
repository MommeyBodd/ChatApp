const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  chatName: String,
  creator: String,
  participants: [Object],
  messages: [Object]
});

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
