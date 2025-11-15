const fs = require("fs");
const a  = 10 ;

setImmediate(()=>console.log("Set Immediate ")); //check pahse after poll phase

Promise.resolve().then(()=>console.log("Promise"));


fs.readFile("./demo.txt","utf8",()=>{
    console.log("poll pahse after timer");
    
});

setTimeout(()=>console.log("Timer phase first"),0) ;

process.nextTick(()=>console.log("Process "));


function printA(){
    console.log("value of a", a);
    
}
printA();
console.log("Last Line of The file");



// value of a 10
// Last Line of The file
// Process
// Promise
// Timer phase first
// Set Immediate
// poll pahse after timer