const fs = require('fs');

// fs.readFile('students.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log('error while fetching data from file'); // handles error
//         return;
//     }
//     console.log(data); // handles result
// })

fs.readFile('students.txt',{encoding:'utf-8', flag:'r+'}, (err, data)=>{
    if(err){
        console.log('error reading file: ', err); // handles error
        return;
    }
    console.log('File content: ', data); // handles result
})