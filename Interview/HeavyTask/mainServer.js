const { Worker } = require("worker_threads");

console.log("Main thread start hua");

const worker = new Worker("./serverWorker.js"); // worker thread banaya

// jab worker result bheje
worker.on("message", (result) => {
  console.log("Worker ka result:", result);
});

// agar worker me error ho
worker.on("error", (err) => {
  console.error("Worker error:", err);
});

// jab worker exit kare
worker.on("exit", (code) => {
  console.log("Worker exit code:", code);
});

console.log("Main thread free hai, dusre kaam kar sakta hai...");
