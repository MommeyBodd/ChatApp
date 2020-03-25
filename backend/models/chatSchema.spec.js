const mongoose = require("mongoose");
const ChatModel = require("./chatModel");

describe("CHAT_MODEL", () => {
  const chatMockData = {
    chatName: "CHAT",
    creatorId: "123",
    creatorName: "ADRIK"
  };

  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://Admin:admin@chatappdb-tytlu.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true, useCreateIndex: true },
      err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  afterAll(async () => {
    await ChatModel.findOneAndRemove({ creatorId: chatMockData.creatorId });
  });

  it("should return the chat with findById", async () => {
    const validChat = new ChatModel(chatMockData);
    const savedChat = await validChat.save();

    expect(savedChat.chatName).toBe(chatMockData.chatName);
    expect(savedChat.googleId).toBe(chatMockData.googleId);
    expect(savedChat.creatorName).toBe(chatMockData.creatorName);
  });
});
