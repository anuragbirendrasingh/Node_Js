const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    
    callback(null, chunk.toString().toUpperCase());
  }
});

transformStream.on('data', (data) => {
  console.log('Transformed:', data.toString());
});

transformStream.write('hello nodejs streams');
transformStream.end();
