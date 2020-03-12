const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  chatName: { type: String, required: true },
  creatorId: { type: String, required: true },
  creatorName: { type: String, required: true },
  participants: [{ type: Schema.Types.String, ref: "User" }],
  messages: [{ type: Schema.Types.Object }]
});

const Chat = mongoose.model("Chat", chatSchema, "participation");

module.exports = Chat;
