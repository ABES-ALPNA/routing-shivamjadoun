// console.log("This is my first node js program")
// types of modules

/*1. core (built in) modules  fs,http,os etc
  2. local modules - created by programmer
  3. third party modules -> installed via npm (eg express, lodash)*/

//   **************************************************************************************************************************************

// CORE(BUILT IN) modules

// const data = require('fs')
// data.writeFileSync('abc.txt',"Hello how are you");

// const readData = data.readFileSync('abc.txt','utf-8');
// console.log(readData)

//   **************************************************************************************************************************************

// LOCAL MODULES

// function sum(a,b){
// return a+b;
// }

// function sub(a,b){
    // return a-b;
    // }
    
    // module.exports={
        //     sum,sub
        // }
        
//   **************************************************************************************************************************************

// THIRD PARTY MODULE

const data = require('chalk')
console.log(data.red("hellow how are you"))
console.log(data.bgBlue("hello how are you"))



        
        
        