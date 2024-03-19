const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    
    b_Id: {
      type: String,
      required: true,
      unique: true
    },
    rank: {
        type: Number,
        required: true
    },
    streamer: {
        type: String,
        required: true
    },
    totalViews: {
        type: Number,
        required: true
    },
    subs: {
        type: String,
        required: true
    },
  
},
    { timestamps: true }
);

module.exports = mongoose.model("leaderboard", BoardSchema);