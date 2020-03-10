const Chat = require("../../models/chatModel");
const User = require("../../models/userModel");
const createChatRoomController = async (req, res, next) => {
  try {
    const { chatName, creatorName, creatorId } = req.body;

    const createdChatRoom = await new Chat({
      chatName,
      creatorName,
      creatorId,
      participants: [creatorId]
    }).save();

    await User.findOneAndUpdate(
      { googleId: creatorId },
      { $push: { participation: createdChatRoom._id } }
    );

    res.json(createdChatRoom);
  } catch (error) {
    console.log(error);
  }
};

const getChatRoomInfo = async (req, res, next) => {
  try {
    const { chatId } = req.query;

    const foundChat = await Chat.findOne({ _id: chatId }).populate(
      "participants"
    );

    res.json(foundChat);
  } catch (error) {
    console.log(error);
  }

  // const fondedChat = Chat.findOne({_id})
};

module.exports = {
  createChatRoomController,
  getChatRoomInfo
};
