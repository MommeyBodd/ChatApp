const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const userControllers = require("../controllers/userControllers/index");
const router = require("express").Router();

router.get("/", userControllers.getAllUsers);
router.get("/profile", isAuthenticated, userControllers.getUserProfile);

module.exports = router;
