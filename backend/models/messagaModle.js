const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
