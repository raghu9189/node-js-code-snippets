const fs = require('fs').promises;

fs.readFile('studentss.txt', {encoding:'utf8'})
    .then((data)=>{console.log("File content: ", data); // Handle Success
    })
    .catch((err)=>{console.log("Error reading file: ", err); // Handle error
    })