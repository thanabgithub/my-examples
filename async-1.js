// This is an example to avoid callback hell when we deal with async function

const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    // efficient way
    const first = await getText("./content/first.txt", "utf-8");
    // inefficient way
    const second = await readFilePromise("./content/second.txt", "utf-8");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
