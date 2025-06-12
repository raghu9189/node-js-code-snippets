// Mathematical expression 1

const evaluatedValue = 10 + 22 - (3 * (3 ** 3)) + 1000;
console.log(evaluatedValue);

// Exptected: 951

const x = true
const y = '1'
console.log(x + y);

let k = new Boolean(true);
console.log(typeof k);
console.log(k.valueOf());

/*
Logical operators Features

Logical AND (&&)
expr1 && expr2	
Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, 
when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
----------------
Examples of expressions that can be converted to false are those that evaluate to null, 0, 0n, NaN, the empty string (""), or undefined.
*/

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
const a8 = false && false; // f && f returns false



