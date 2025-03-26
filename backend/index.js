const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { chats } = require("./data/data");
dotenv.config();
const port = process.env.PORT;
console.log(port);

app.get("/", (req, res) => {
  res.send("Hello my friend! how are you? sanchoi hununcha??");
});
app.get("/chats", (req, res) => {
  res.send(chats);
});
app.get("/chats/:id", (req, res) => {
  // console.log(req);
  // res.send(req.params);
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
  // console.log(singleChat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
