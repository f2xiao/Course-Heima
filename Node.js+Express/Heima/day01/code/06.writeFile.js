const fs = require("fs");

// fs.writeFile("./demo.txt", "即将要写入的内容", (err) => {
//   if (err != null) {
//     console.log(err);
//     return;
//   }

//   console.log("文件内容写入成功");
// });
const content = "<h1>hi~~~~~</h1>";
fs.writeFile("./demo.txt", content, function (error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log("succeffully write in the demo file");
});
