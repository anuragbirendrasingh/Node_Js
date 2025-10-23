const express = require("express");
const requestRouter = express.Router();
const { userAuth } = require("../middleware/auth");
const  connectionRequests  = require("../models/connectionsRequests");
const User = require('../models/User');

// requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
//   try {
//     const user = req.user;
//     if (!user) {
//       throw new Error("User not authorised");
//     }
//     res.send(user.firstName + "send the connection request");
//   } catch (error) {
//     res.send({ message: error.message });
//   }
// });

requestRouter.post(
  "/send/:status/:touserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id; // it is the logged in user which is sending the request
      const toUserId = req.params.touserId;
      const status = req.params.status;

      const allowedStatus = ["ignored", "interested"];
      const toUser = await User.findById(toUserId);
      if(!toUser){
        res.status(400).json({message : " User does not exist "})
      }

      
      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: " the request status is invalid" + status });
      }

      const existingConnectionRequest = await connectionRequests.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (existingConnectionRequest) {
        return res
          .status(400)
          .json({ message: "connection request already Exists!! " });
      }

      const newConnectionRequests = new connectionRequests({
        fromUserId,
        toUserId,
        status,
      });

      const connectionRequestData = await newConnectionRequests.save();

      res.json(
        { message: "connection request send successfuly" },
        connectionRequestData
      );
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

requestRouter.delete("/delete-my-account", userAuth, async (req, res) => {
  try {
    const loggedInUserToDelete = req.user._id;
    await User.findByIdAndDelete(loggedInUserToDelete);

    res.status(200).json({ message: "User deleted sussecuufully" });
  } catch (err) {
    console.log(err, "error");
    res.status(500).json({ message: "Serever error" });
  }
});

module.exports = requestRouter;
