const {parentPort} = require("worker_threads");

let sum = 0 ;

for(let i= 1 ; i< 10000000000 ; i++){
    sum+=i ;
}



//  returing the result at main thread
parentPort.postMessage(sum);