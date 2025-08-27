// task1 createa pgram that writes hello node.js into a file called hello txt then read the content of the file an print it in the console

const data = require('fs');

data.writeFileSync('hello.txt','hello');

const readData = data.readFileSync('hello.txt','utf-8');

console.log(readData)

data.appendFileSync('hello.txt',' practice makes man perfect!')
const NewReadData = data.readFileSync('hello.txt','utf-8');

console.log(NewReadData)