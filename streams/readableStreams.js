const { createReadStream } = require("node:fs");

const readableStream = createReadStream(`${__dirname}/text.txt`,{ 
    encoding: "utf8", 
    highWaterMark: 1 * 1024
})

readableStream.on("data", (chunk)=>{
    console.log(chunk);
    console.log("Len "+chunk.length);
})

readableStream.on("end", ()=>{
    console.log("End of the file reached!");
})

readableStream.on("error", (err)=>{
    console.log("Error reading from stream", err);
})
