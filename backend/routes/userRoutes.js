const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const userControllers = require("../controllers/userControllers/index");
// const passport = require("passport");
const router = require("express").Router();

router.get("/getUserProfile", isAuthenticated, userControllers.getUserProfile);

module.exports = router;
