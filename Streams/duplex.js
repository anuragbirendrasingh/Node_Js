const {Duplex} = require("stream");


const duplexStream = new Duplex({
    read(size){
        this.push('data from read side')
        this.push(null)
    },

    write(chunk,encoding,callback){
        console.log('written: ',chunk.toString());
        callback();
    }
})

duplexStream.on('data',(data)=>{
    console.log(data.toString());
    
})

duplexStream.write('hello duplex jee !');