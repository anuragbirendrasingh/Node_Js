const fs = require("fs");


setImmediate(()=>{
    console.log("SetImmediate_ 1")
})

setTimeout(()=>{
    console.log("SetTimeout_ 1");
    
})

Promise.resolve().then(()=>{
    console.log("Promise");
    
})

fs.readFile("./demo.txt","utf-8",()=>{
    setTimeout(()=>{
        console.log("setTimeout- 2");
        
    })

    process.nextTick(()=>{
        console.log("next tick 2");
        
    })

    setImmediate(()=>{
        console.log("set Immediate 2");
    })

    console.log("Reading File Cb");
    
})


process.nextTick(()=>{
    console.log("Next Tick  1");
    
})

console.log("lastline of code ");





// 100 % corect in firt attempt 😂😂
// lastline of code
// Next Tick  1
// Promise
// SetTimeout_ 1
// SetImmediate_ 1
// Reading File Cb
// next tick 2
// set Immediate 2
// setTimeout- 2
