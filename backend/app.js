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

const app = express();

mongoose.connect(globalConfig.mongoDB.dbURI, () => {
  console.log("Connected to MongoDB");
});
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3030, () => {
  console.log("Server is running on port: 3030");
});
