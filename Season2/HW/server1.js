//--->> thid much code is more enough to create a server
// const express = require("express") ;
// const app = express();
// app.listen(5050,()=>{
//     console.log("server is running on the 5050");
// })

const express = require("express");
const app = express();

// app.get('/api/kishan',(req,res)=>{
//     res.send("Kishan Is A Dumbeb Boy");
// });

app.get("/api/user", (req, res) => {
  res.send({
    id: 1,
    name: "Kishan",
    role: "Dumbeb Boy",
  });
});

app.get('/api/middleware',(req,res,next)=>{
    console.log("Welcome to middleWare");
    next();
},
    (req,res)=>{
     res.send("haa bhai middle ware se aa raha hunu")
    }
    
)
//app.get("ROUTE",()=>{} , ()=>{})
    //           ,next ka funct,phir response ka funct


    // (req,res)=>{
    //  res.send("haa bhai middle ware se aa raha hunu")
    // }       this is called a '"''Handler""";;


app.get("/api/middleware/route",(req,res,next)=>{
    console.log("First Middlewrae");
    next();
}, 

(req,res,next)=>{
    console.log("Second Middleware");
    next();
    
},

(req,res)=>{
    res.send('Middle ware at last satg')
    
}
)

app.get("/api/orders", (req, res) => {
  res.send(  
  {
    name: "Mouse",
  });
});



app.listen(5050, () => {
  console.log("server is running on the 5050");
});
