const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const chatRoomController = require("../controllers/chatController/index");
const router = require("express").Router();

router.post(
  "/createChatRoom",
  isAuthenticated,
  chatRoomController.createChatRoomController
);

module.exports = router;
