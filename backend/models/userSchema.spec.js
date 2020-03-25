const UserModel = require("./userModel");
const mongoose = require("mongoose");

describe("USER_MODEL", () => {
  const userMockData = {
    _id: "123",
    userName: "Adrik",
    googleId: "123",
    userEmail: "asd@gmail.com",
    avatar: "asdad2.com"
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
    await UserModel.findOneAndRemove({ _id: userMockData._id });
  });

  it("should return the user with findById", async () => {
    const validUser = new UserModel(userMockData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBe(userMockData._id);
    expect(savedUser.userName).toBe(userMockData.userName);
    expect(savedUser.googleId).toBe(userMockData.googleId);
    expect(savedUser.userEmail).toBe(userMockData.userEmail);
    expect(savedUser.avatar).toBe(userMockData.avatar);
  });
});
