const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const passportSetup = require("./config/passportSetup");
const mongoose = require("mongoose");
const globalConfig = require("./config/globalConfig");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const server = require("http").createServer();

const PORT = 3001;
const app = express();
app.io = require("socket.io")();
const io = require("socket.io")(server);

io.on("connection", function(client) {
  client.on("register", () => console.log("register"));

  client.on("join", () => console.log("join"));

  client.on("leave", () => console.log("leave"));

  client.on("message", () => console.log("message"));

  client.on("chatrooms", () => console.log("chatrooms"));

  client.on("availableUsers", () => console.log("availableUsers"));

  client.on("disconnect", function() {
    console.log("client disconnect...", client.id);
  });

  client.on("error", function(err) {
    console.log("received error from client:", client.id);
    console.log(err);
  });
});

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

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
