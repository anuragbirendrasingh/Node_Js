const  mongoose  = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required : true ,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required :true ,
    },
    status: {
      type : String ,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status`,
      },
      required : true,
    },
  },
  { timestamps: true }
  
);

connectionRequestSchema.pre("save",function (next){
    const connectionRequest = this;
    // check if the fromUserId is same as the toUserId 
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
      throw new Error("cann't send request to yourself");
    }
    next();
})

module.exports = mongoose.model("ConnectionRequest", connectionRequestSchema);
