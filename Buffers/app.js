let password = Buffer.alloc(10)
password.fill('raghu12312312')
console.log(password.toString('utf8'));
console.log(password.toJSON());
console.log(password.copy());


