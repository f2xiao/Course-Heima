// public/uploads/avatar
// const path = require("path");

// const finalPath = path.join("public", "uploads", "avatar");

// console.log(finalPath);

const path = require("path");
const fs = require("fs");
let content;

const readPath = path.join(".", "01.helloworld.js");
const writePath = path.join(".", "demo.txt");

fs.readFile(readPath, "utf8", (err, doc) => {
  if (err) {
    console.log(err);
    return;
  }
  content = doc; // doc只是一个地址
  fs.writeFile(writePath, content, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("writing is done");
  });
  console.log(doc);
});
console.log(content);
