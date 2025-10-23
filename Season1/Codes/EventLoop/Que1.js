const fs = require("fs");
const a  = 10 ;

setImmediate(()=>console.log("Set Immediate ")); //check pahse after poll phase

fs.readFile("./demo.txt","utf8",()=>{
    console.log("poll pahse after timer");
    
});

setTimeout(()=>console.log("Timer phase first"),0) ;

function printA(){
    console.log("value of a", a);
    
}
printA();
console.log("Last Line of The file");


// -->> Expectation 


// value of a 10
// Last Line of The file
// Timer phase first
// poll phase after timer
// Set Immediate

// -->>> Reality 

// value of a 10
// Last Line of The file
// Timer phase first
// Set Immediate
// poll pahse after timer

