const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const chatRoomController = require("../controllers/chatController/index");
const router = require("express").Router();

router.get(
  "/:chatId",
  // isAuthenticated,
  chatRoomController.getChatRoomInfo
);

router.post("/", isAuthenticated, chatRoomController.createChatRoomController);

router.post("/invitation", chatRoomController.addUserToChat);

module.exports = router;
