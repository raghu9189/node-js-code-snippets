const path = require('path')
const pathName = '/Users/Refsnes/demo_path.js';
const filename = path.basename(pathName);
console.log(filename);

const directories = path.dirname('/Users/Refsnes/demo_path.js');
console.log(directories);
const ext = path.extname(pathName);
console.log(ext);
const parced = path.parse(pathName)
console.log(parced);


