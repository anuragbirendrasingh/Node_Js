const { parentPort } = require("worker_threads");

let sum = 0;
for (let i = 1; i <= 1_000_000_000; i++) { // 1 se 1 अरब tak sum
  sum += i;
}

// result wapas main thread ko bhejo
parentPort.postMessage(sum);
