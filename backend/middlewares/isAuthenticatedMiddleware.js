const { verifyGoogleAccessToken } = require("../api/verification");

const isAuthenticated = async (req, res, next) => {
  try {
    if (process.env.NODE_ENV === "test") {
      next();
      return;
    }

    const token = req.headers.authorization.split(" ")[1];

    req.verification = await verifyGoogleAccessToken(token).then(
      response => response.data
    );

    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired Token" });
  }
};

module.exports = {
  isAuthenticated
};
