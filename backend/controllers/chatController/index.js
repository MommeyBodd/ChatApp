const Chat = require("../../models/chatModel");
const createChatRoomController = async (req, res, next) => {
  try {
    const { chatName, creatorName, creatorId } = req.body;
    const createdChatRoom = await new Chat({
      chatName,
      creatorName,
      creatorId,
      participants: [creatorId],
      messages: []
    }).save();

    res.json(createdChatRoom);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createChatRoomController
};
