const { MongoClient } = require("mongodb");
const request = require("supertest");
const app = require("../app");

describe("CHAT_CONTROLLER", () => {
  let connection;

  beforeAll(async () => {
    connection = await MongoClient.connect(
      "mongodb+srv://Admin:admin@chatappdb-tytlu.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    );
    // db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    // await db.close();
  });

  describe("POST /chat/createChatRoom", () => {
    test("should return created room with containing fields provided in request body", async () => {
      const body = {
        chatName: "asd",
        creatorName: "qwe",
        creatorId: "1231231"
      };
      await request(app)
        .post("/chat/createChatRoom")
        .send(body)
        .expect(200)
        .then(response => {
          expect(response.body).toMatchObject({
            chatName: "asd",
            creatorName: "qwe",
            creatorId: "1231231"
          });
        });
    });

    test("should return error if one of request body fields is invalid", async () => {
      const body = {
        chatName: "",
        creatorName: "qwe",
        creatorId: "1231231"
      };
      await request(app)
        .post("/chat/createChatRoom")
        .send(body)
        .expect(500);
    });
  });

  // describe("GET /getChatRoomInfo/:chatId", () => {
  //   test("should return object with info about chat", async () => {
  //
  //   });
  // });
});
