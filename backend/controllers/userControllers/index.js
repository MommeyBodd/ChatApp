const { createError } = require("../../services/errorHandling");
const User = require("../../models/userModel");
const Chat = require("../../models/chatModel");

const getUserProfile = async (req, res, next) => {
  try {
    const { user_id } = req.verification;

    const [userProfile, userChatRooms] = await Promise.all([
      User.findOne({ googleId: user_id }),
      Chat.find({ participants: user_id })
    ]);

    res.json({ userProfile, userChatRooms });
  } catch (error) {
    next(createError(error));
    res.json({ error: "Something Bad Happen" });
  }
};

module.exports = {
  getUserProfile
};
