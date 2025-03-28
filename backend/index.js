const express = require("express");
const app = express();
const dbConnect = require("./db");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

app.use(express.json());

dotenv.config();
const port = process.env.PORT;
console.log(port);
dbConnect();

app.get("/", (req, res) => {
  res.send("api is listening");
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

app.use("/api/auth", require("./routes/Auth"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
