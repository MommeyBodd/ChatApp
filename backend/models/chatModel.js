const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  chatName: { type: String, require: true },
  creatorId: String,
  creatorName: String,
  participants: [Object],
  messages: [Object]
});

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;
