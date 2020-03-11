const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  authorId: { type: Schema.Types.String, required: true },
  authorName: { type: Schema.Types.String, required: true },
  authorAvatar: String,
  chatId: { type: Schema.Types.String, required: true },
  messageText: { type: Schema.Types.String, required: true }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
