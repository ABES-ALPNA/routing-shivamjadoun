const express = require("express");
const App = express();
const user = require("./data");

App.get("/", (req, res) => {
  res.send("hello brother");
});

App.post("/post", (req, res) => {
  res.send(" kaisa h bhai tu");
});

App.listen(9000, () => {
  console.log("server started");
});

App.post("/about", (req, res) => {
  res.send("m post kr raha hu");
});

App.post("/hii", (req, res) => {
//   res.send("please open the user data");
  res.send(user[2]);
});
