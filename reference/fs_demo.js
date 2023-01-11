const fs = require("fs");
const path = require("path");

//Createfolder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("FOLDER created....");
// });

// create and with to file

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello node",
//   (err) => {
//     if (err) throw err;
//     console.log("file written to.....");

    //File Append, i.e join file together
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " i love node js",
//       (err) => {
//         if (err) throw err;
//         console.log("file written to.....");
//       }
//     );

//   }
// );

//Read file

// fs.readFile(path.join(__dirname, "/test",'hello.txt'), 'utf8', (err,data) => {
//   if (err) throw err;
//   console.log(data);
// });


//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file rename");
  }
);
