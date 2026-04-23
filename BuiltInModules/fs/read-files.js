const { readFile } = require('fs/promises');
const { join } = require('path');

async function readSafe(path) {
  try {
    return await readFile(path, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('File not found');
    }
    throw err;
  }
}

const data = readSafe(join(__dirname, 'text.txt'))
    .then(data =>  data)
    .catch(error => null);
console.log(data);