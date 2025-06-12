/*
Approach
To read the command line argument in Node we will be using process.argv method from the process module. It access the cli argument and returns them in the form of array.

Below are the examples that give a better understanding:

Example 1: The code captures and logs the command-line arguments passed to a Nodejs script using `process.argv`. It outputs the array, including the script name and additional arguments, with `console.log(arguments);`.
*/
const args = process.argv;
console.log(args);

/*
The process.argv contains an array where the 0th index contains the node executable path, 
1st index contains the path to your current file and then the rest index contains the passed arguments.
*/