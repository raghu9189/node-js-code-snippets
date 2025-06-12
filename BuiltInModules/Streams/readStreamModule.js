const fs = require('fs');

const readStream = fs.createReadStream('countryNames.txt', 
    {
        encoding: 'utf8'
    }
)
// Read and display the file data on console
let countChunk = 0;
readStream.on('data', async (chunk) => {
    countChunk++;
    console.log(countChunk);
    
});
console.log(countChunk);

