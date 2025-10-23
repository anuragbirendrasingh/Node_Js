const express = require("express");

const connectDb = require("../src/config/database");

const User = require("./models/User");
require("../src/config/database");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    // const user = new User
    // ({
    //   firstName: "Rohit",
    //   lastName: "Sharma",
    //   emailId: "sharma@123",
    //   password: "sharma123",
    //   age: 40,
    //   gender: "male",
    // });
    // await user.save();
    // res.send("User Addedd Successfully");
    // req.body(express.json)
    const user = new User(req.body);
    await user.save();
    res.send("User Added Successfully !");
  } catch {
    console.log("Error user not added");
  }
});



app.post("/find/user", async (req, res) => {
  try {
    const { emailId } = req.body;
    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      // res.send('user does not exits');
      res.status(400).json({ message: "user does not exist" });
    }

    res.status(200).json({
      message: "user found",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        age: user.age,
        gender: user.gender,
      },
    });
  } catch {
    res.status(500).json({ message: "user not exist" });
  }
});

app.get("/find/allusers", async (req, res) => {
  try {
    const user = await User.find();

    // res.send(user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err, "error");
  }
});


//this is not the good way of writting the delete routes
// app.delete("/delete",async (req,res)=>{
//   try{
//       const user = req.body.userkaid ;
//      await  User.findByIdAndDelete(user);
//      res.status(200).json({message : 'User deleted successfully!..'})
//   }catch (err){
//     console.log(err , 'error by deleting the user..');
    
//   }
// })

app.delete("/user/delete/:id",async (req,res)=>{
  try{
    const userid = req.params.id ;
    const user = await User.findByIdAndDelete(userid);
    if(!user){
      res.status(400).json({message : "user does not exist"});
    }
    res.status(200).json({message :"User deleted sussecuufully"})

  }catch(err){
    console.log(err,'error');
    res.status(500).json({message: "Serever error"})
    
  }
})

connectDb()
  .then(() => {
    console.log("database connection is established");
    app.listen(8888, () => {
      console.log("Server is running on port 8888");
    });
  })
  .catch(() => {
    console.log("Error");
    // throw new Error('data Base is not connected')
  });