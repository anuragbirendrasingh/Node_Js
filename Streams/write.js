const fs = require("fs");
const writableStream = fs.createWriteStream('Output.txt');
writableStream.write('writting the data using the nodejs fs module');
writableStream.write('writing chunk by chunk');
writableStream.end('done everything....');
