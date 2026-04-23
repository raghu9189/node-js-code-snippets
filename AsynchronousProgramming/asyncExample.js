const fs = require('fs').promises;


async function readFile() {
    try {
        const data = await fs.readFile('AsynchronousProgramming/students.txt', {encoding: 'utf8'}); // pauses until resolved
        console.log("File content: ", data); // handle success`
        console.log("content printed");
    } catch (error) {
        console.log('Error reading file:', error); // handle error
    }
}
readFile()