const {createWriteStream} = require("fs")

const writableStream = createWriteStream(`${__dirname}/new.txt`);

writableStream.write("This is some text\n");
writableStream.write("This is some text\n");
writableStream.write("This is some text\n");
writableStream.write("This is some text\n");

writableStream.end();

writableStream.on("finish", ()=>{
    console.log("Data write finished");
})

writableStream.on("error", (err)=>{
    console.log("Error writing from stream", err);
})
