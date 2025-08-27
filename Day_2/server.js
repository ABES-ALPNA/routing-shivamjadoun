const server = require("http")
server
  .createServer((req, res) => {
    res.write("<h1>this is my server</h1>")
    res.end("")
  })
  .listen(3000, () => {
    console.log("server is started")
  });
