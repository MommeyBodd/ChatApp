const { createError } = require("../../services/errorHandling");
const User = require("../../models/userModel");
const Chat = require("../../models/chatModel");

const getUserProfile = async (req, res, next) => {
  try {
    const { user_id } = req.verification;

    const userProfile = await User.findOne({ _id: user_id }).populate(
      "participation"
    );

    res.json({ userProfile });
  } catch (error) {
    next(createError(error));
    res.json({ error: "Something Bad Happen" });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const { currentUserId } = req.params;

    const foundUsers = await User.find({ _id: { $nin: currentUserId } });

    res.json(foundUsers);
  } catch (error) {
    next(createError(error));
  }
};

module.exports = {
  getUserProfile,
  getAllUsers
};
