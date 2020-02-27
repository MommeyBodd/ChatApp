const isAuthenticated = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(404).json({ error: "Unauthorized" });
  }
};

module.exports = {
  isAuthenticated
};
