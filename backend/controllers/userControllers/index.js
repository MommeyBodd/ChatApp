const User = require("../../models/userModel");

const getUserProfile = async (req, res, next) => {
  try {
    const { user_id } = req.verification;

    const userProfile = await User.findOne({ googleId: user_id });

    res.json({ userProfile });
  } catch (error) {
    res.json({ error: "Something Bad Happen" });
  }
};

module.exports = {
  getUserProfile
};
