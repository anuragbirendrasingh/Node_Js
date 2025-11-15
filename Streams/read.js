const fs =  require("fs");
const readbleStram = fs.createReadStream("./Notes.md",'utf-8');
readbleStram.on('data',(chunk)=>{
    console.log("received chunk" , chunk);
    
})

readbleStram.on('end',()=>{
    console.log("No more data");
    
})