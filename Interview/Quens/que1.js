const  express  = require("express");
const  mongoose = require("mongoose");
const { transactionDb } = require("./transcationDb");  // assuming mongoose model
const app = express();

app.use(express.json());  //why this line ??


//assume db is connected

//or connect the db 
// Connect DB
mongoose.connect("mongodb://localhost:27017/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/users/:id/transactions", (req, res) => {
  try {
    const { userId } = req.params.id;
   const data =  transactionDb.select(userId);
    if(data.length > 0){
        res.send()
    }
    transactionDb.save();
    
  } catch (error) {}
});

app.listen(8000, () => {
  console.log("server is running");
});



// const express = require("express");
// const mongoose = require("mongoose");
// const Transaction = require("./transactionDb"); // assume mongoose model

// const app = express();
// app.use(express.json());

// // Connect DB
// mongoose.connect("mongodb://localhost:27017/mern", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Fetch transactions by userId
// app.get("/api/users/:id/transactions", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const transactions = await Transaction.find({ userId }).lean();

//     if (!transactions.length) {
//       return res.status(404).json({ message: "No transactions found" });
//     }

//     res.json({ transactions });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

