const Chat = require("../../models/chatModel");
const User = require("../../models/userModel");
const { createError } = require("../../services/errorHandling");

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
    next(createError(error));
  }
};

const getChatRoomInfo = async (req, res, next) => {
  try {
    const { chatId } = req.params;

    const foundChat = await Chat.findOne({ _id: chatId }).populate(
      "participants"
    );

    res.json(foundChat);
  } catch (error) {
    next(createError(error));
  }
};

const addUserToChat = async (req, res, next) => {
  try {
    const { usersToInvite, chatId } = req.body;

    const usersToInviteIds = usersToInvite.map(user => user._id);

    const updatedChat = await Chat.findOneAndUpdate(
      { _id: chatId },
      { $push: { participants: { $each: usersToInviteIds } } },
      { new: true }
    ).populate("participants");

    await User.updateMany(
      { _id: { $in: usersToInviteIds } },
      { $push: { participation: chatId } }
    );

    res.json(updatedChat);
  } catch (error) {
    next(createError(error));
  }
};

module.exports = {
  createChatRoomController,
  getChatRoomInfo,
  addUserToChat
};
