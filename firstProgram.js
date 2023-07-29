// const secondProgram = require("./secondProgram");
const fs = require("fs").writeFileSync;

// console.log("hello world");
// console.warn("hello again");

// console.log(secondProgram.a);
// console.log(secondProgram.run());

// const arr = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const arr1 = arr.filter((item) => {
//   return item === 1;
// });

// console.log(arr1);

fs(
  "fsFileCrated",
  "file is created by fs with some changes and try to make new something"
);
console.log("dir name >>>>>>>>", __dirname);
console.log("file name >>>>>>>>", __filename);
