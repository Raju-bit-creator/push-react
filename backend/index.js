const express = require("express");
const app = express();
const port = process.env.PORT;
console.log(port);

app.get("/", (req, res) => {
  res.send("Hello my friend! how are you? sanchoi hununcha??");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
