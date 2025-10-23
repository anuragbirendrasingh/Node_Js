const {Worker} = require("worker_threads");

console.log('Main Thread Has Been Started...');

const worker = new Worker('./worker.js');  // worker thread banya

//jab worker result bheje

worker.on("message" , (result)=>{
   console.log("the result by worker" , result);
   
});


//jab worker error bheje

worker.on("error" , (err)=>{
    console.log("the error by worker", err);
    
});



//jab worker kaam complete kar de main thread khali hai

worker.on("exit" ,(code)=>{
    console.log("worker exist code ", code);
    
});

console.log('main thread is free now ab koi dusra kaamkarva lo');




