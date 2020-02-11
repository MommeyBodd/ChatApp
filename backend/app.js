// const WebSocket = require('ws');
//
// const server = new WebSocket.Server({ port: 3030 });
//
// server.on('connection', (ws) => {
//   server.on('message', (message) => {
//     server.clients.forEach((client) => {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });
// });
//
// console.log(`Server listening port: 3030`);

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const passportSetup = require("./config/passportSetup");
const mongoose = require("mongoose");
const globalConfig = require("./config/globalConfig");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
mongoose.connect(globalConfig.mongoDB.dbURI, () => {
  console.log("Connected to MongoDB");
});
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
