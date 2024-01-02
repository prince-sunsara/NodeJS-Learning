const fs = require("fs")


// // read file
// console.log("start reading file");

/// read file : async
// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     console.log(err, data);
// })
// /// read file : sync
// const f = fs.readFileSync('file.txt')
// console.log(f.toString())

// console.log("Finish reading file");


// /// write file
console.log("write file start")
// fs.writeFile("file.txt", 'This is Prince', () => {
//     console.log("data written in file.");
// })
const w = fs.writeFileSync("file.txt", "Hey ! Prince");
console.log();
console.log("write file end")