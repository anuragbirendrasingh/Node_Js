const file= require('fs');

file.readFile('./text1.txt','utf-8',(err,dataFrpmdisk)=>{
    if(err){
        console.log('error aa gya ',err.message);
        return ;
    }
    console.log('file meye hin ---->>> ',dataFrpmdisk);
    
})

