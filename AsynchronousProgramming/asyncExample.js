const fs = require('fs').promises;


async function readFile() {
    try {
        const data = await fs.readFile('students.txt', {encoding: 'utf8'}); // pauses until resolved
        console.log("File content: ", data); // handle success`
    } catch (error) {
        console.log('Error reading file:', error); // handle error
    }
}
readFile()