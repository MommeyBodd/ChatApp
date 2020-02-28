const { verifyGoogleAccessToken } = require("../api/verification");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    req.verification = await verifyGoogleAccessToken(token).then(
      response => response.data
    );

    next();
  } catch (error) {
    res.json({ message: "Invalid or expired Token" });
  }
};

module.exports = {
  isAuthenticated
};
