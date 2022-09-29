const { createReadStream } = require("fs");

const readedStream = createReadStream(
  "./content/big.txt",
  (options = { highWaterMark: 90000, encoding: "utf-8" })
);

readedStream.on("data", (result) => {
  console.log(result);
});
