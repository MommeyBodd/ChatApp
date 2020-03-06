const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  chatName: { type: String, require: true },
  creatorId: String,
  creatorName: String,
  participants: [{ type: Schema.Types.String, ref: "User" }],
  messages: [Object]
});

const Chat = mongoose.model("Chat", chatSchema, "participation");

module.exports = Chat;
