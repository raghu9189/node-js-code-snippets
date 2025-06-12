// named exports in CommonJS
const Square = require('./square');
const {add, sub} = require('./calc');

const getSquare = new Square(20);

console.log(add(10,20));

console.log(getSquare.area());
