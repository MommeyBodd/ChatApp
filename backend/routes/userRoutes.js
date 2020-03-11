const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const userControllers = require("../controllers/userControllers/index");
const router = require("express").Router();

router.get("/getUserProfile", isAuthenticated, userControllers.getUserProfile);
router.get("/getAllUsers/:currentUserId", userControllers.getAllUsers);

module.exports = router;
