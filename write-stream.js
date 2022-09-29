var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("./content/big.txt");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", () => {
      res.end(err);
    });
  })
  .listen(5000);
