const mongoose = require("mongoose");
const MessageModel = require("./messageModel");

describe("USER_MODEL", () => {
  const messageMockData = {
    authorId: "123",
    authorName: "Adrik",
    chatId: "123",
    messageText: "asd@gmail.com"
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
    await MessageModel.findOneAndRemove({ _id: userMockData._id });
  });

  it("should return the user with findById", async () => {
    const validMessage = new MessageModel(messageMockData);
    const savedUser = await validMessage.save();

    expect(savedUser.authorId).toBe(messageMockData.authorId);
    expect(savedUser.authorName).toBe(messageMockData.authorName);
    expect(savedUser.chatId).toBe(messageMockData.chatId);
    expect(savedUser.messageText).toBe(messageMockData.messageText);
  });
});
