const Chat = require("../../models/chatModel");
const User = require("../../models/userModel");
const createChatRoomController = async (req, res, next) => {
  try {
    const { chatName, creatorName, creatorId, _id } = req.body;

    const createdChatRoom = await new Chat({
      chatName,
      creatorName,
      creatorId,
      participants: [_id]
    }).save();

    await User.findOneAndUpdate(
      { googleId: creatorId },
      { $push: { participation: createdChatRoom._id } }
    );

    console.log(createdChatRoom);

    res.json(createdChatRoom);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createChatRoomController
};
