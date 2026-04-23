const {readFile} = require("node:fs/promises");
const {promisify, callbackify} = require("node:util");

// readFile("BuiltInModules/fs/text.txt", "utf8", function (err, data){
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// const readFileText = promisify(readFile);

// readFileText("BuiltInModules/fs/text.txt", "utf8")
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log(err)
//     })

readFile("BuiltInModules/fs/text.txt", "utf8")
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err)
    })
