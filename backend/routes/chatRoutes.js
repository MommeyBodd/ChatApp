const { isAuthenticated } = require("../middlewares/isAuthenticatedMiddleware");
const chatRoomController = require("../controllers/chatController/index");
const router = require("express").Router();

router.get("/getChatRoomInfo/:chatId", chatRoomController.getChatRoomInfo);

router.post(
  "/createChatRoom",
  isAuthenticated,
  chatRoomController.createChatRoomController
);

router.post("/inviteUser", chatRoomController.addUserToChat);

module.exports = router;
