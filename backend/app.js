const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const passportSetup = require("./config/passportSetup");
const mongoose = require("mongoose");
const globalConfig = require("./config/globalConfig");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const Message = require("./models/messageModle");
const Chat = require("./models/chatModel");
const User = require("./models/userModel");

const PORT = 3001;

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [globalConfig.session.cookieKey]
  })
);
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(globalConfig.mongoDB.dbURI, () => {
  console.log("Connected to MongoDB");
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", async data => {
    try {
      const { authorId, authorName, authorAvatar, chatId, message } = data;
      // console.log(authorId, chatId, message);

      const sendMessage = await new Message({
        authorId,
        authorName,
        authorAvatar,
        chatId,
        messageText: message
      }).save();

      await Chat.findOneAndUpdate(
        { _id: chatId },
        { $push: { messages: sendMessage } }
      );

      console.log(sendMessage);
      io.emit("RECEIVE_MESSAGE", sendMessage);

      // const foundedMessage = await Message.find({
      //   _id: sendMessage._id
      // });
    } catch (error) {
      console.log(error);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
