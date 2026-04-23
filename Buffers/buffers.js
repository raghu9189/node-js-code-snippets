const myBuffer = Buffer.allocUnsafe(10);
console.log('Buffer:', myBuffer.toString('utf8'));

const stringBuffer = Buffer.from('MY NEW BUFFER', 'utf8');
console.log('String Buffer:', stringBuffer.toString('utf8'));

const intArray = new Uint8Array([1, 2, 3, 4, 5]);
const arrayBuffer = Buffer.from(intArray);
console.log('Array Buffer:', arrayBuffer);

const base64Buffer = Buffer.from('SGVsbG8gV29ybGQh', 'base64');
console.log('Base64 Buffer:', base64Buffer.toString('utf8'));