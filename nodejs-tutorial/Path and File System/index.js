// const path = require("path")

// const filePath = "C:/Users/mohit.sharma50/Desktop/Apps/Node-Express-Notes/nodejs-tutorial/Path and File System/sample.txt"


// fs.readFile(filePath, (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// const fs = require("fs") //fs means file system
// const path = require("path")
// try {
//     //sample file is at our project/index.js location
//     const data =  fs.readFileSync(path.join(__dirname, 'sample.txt'))
//     console.log(data.toString());
// } catch (error) {
//     console.log(error);
// }

//directory name
// console.log(path.dirname(filePath));
//basename
// console.log(path.basename(filePath));
//extension
// console.log(path.extname(filePath));

//Our project directory
// console.log(__dirname);
//Output: C:\Users\mohit.sharma50\Desktop\Apps\Node-Express-Notes\nodejs-tutorial\Path and File System

//Our file
// console.log(__filename);
//Output: C:\Users\mohit.sharma50\Desktop\Apps\Node-Express-Notes\nodejs-tutorial\Path and File System\index.js

// const sampleFile = "sample.txt"
// console.log(path.join(path.dirname(filePath), sampleFile));
