//server ko bannae ke liye express ko bulavo apne machine pr 
const express = require("express");
console.log(express);

//ab iss machine ko chalu karna hoga'
const app = express();

console.log(app);


app.get("/home",(req,res)=>{
    res.send("Hello World")
})

app.get("/",(req,res)=>{
    res.send("Hello Hello Hllo Helo Hello")
})

// app.listen(3000);
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})

