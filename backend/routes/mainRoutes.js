const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");

const router = require("express").Router();

router.get("/secret", isAuthenticated, (req, res) => {
  res.json({ success: true });
});

module.exports = router;
