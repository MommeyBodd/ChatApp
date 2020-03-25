const { MongoClient } = require("mongodb");
const request = require("supertest");
const app = require("../app");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

describe("CHAT_CONTROLLER", () => {
  let connection;
  let user;
  let chat;

  beforeAll(async () => {
    connection = await MongoClient.connect(
      "mongodb+srv://Admin:admin@chatappdb-tytlu.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    );

    user = new User({
      _id: "123asd123",
      userName: "Vovchick",
      googleId: "123asd123",
      userEmail: "1998adrian98@gmail.com",
      sentMessages: [],
      participation: [],
      avatar: "asgasdg.com"
    });

    chat = new Chat({
      chatName: "Test Chat - 1",
      creatorId: user._id,
      creatorName: user.userName,
      participants: [user._id],
      messages: []
    });

    await user.save();
    await chat.save();
  });

  afterAll(async () => {
    await User.findOneAndRemove({ _id: user._id });
    await Chat.findOneAndRemove({ _id: chat._id });
    await connection.close();
  });

  describe("POST /chats", () => {
    test("should return created chat with containing fields provided in request body", async () => {
      const body = {
        chatName: "asd",
        creatorName: "qwe",
        creatorId: "1231231"
      };
      await request(app)
        .post("/chats")
        .send(body)
        .expect(200)
        .then(async response => {
          const { _id } = response.body;
          expect(response.body).toMatchObject({
            chatName: "asd",
            creatorName: "qwe",
            creatorId: "1231231"
          });

          await Chat.findOneAndRemove({ _id });
        });
    });

    test("should return 500 if one of request body fields is invalid", async () => {
      const body = {
        chatName: "",
        creatorName: "qwe",
        creatorId: "1231231"
      };
      await request(app)
        .post("/chats")
        .send(body)
        .expect(500);
    });
  });

  describe("GET /chats/:chatId", () => {
    test("should return chat by chat id", async () => {
      await request(app)
        .get(`/chats/${chat._id}`)
        .expect(200)
        .then(async response => {
          expect(response.body).toMatchObject({
            chatName: chat.chatName,
            creatorId: user._id
          });
        });
    });

    test("should return null when chat id doesn't exists", async () => {
      const fakeChatId = "5e6f36902a3dfb02e1585669";
      await request(app)
        .get(`/chats/${fakeChatId}`)
        .expect(200)
        .then(async response => {
          expect(response.body).toEqual(null);
        });
    });
  });
});
