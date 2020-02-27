const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const passport = require("passport");
const router = require("express").Router();

router.get("/secret", isAuthenticated, (req, res) => {
  res.json({ success: true });
});

module.exports = router;
