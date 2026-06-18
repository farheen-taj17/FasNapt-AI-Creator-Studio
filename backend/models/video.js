const mongoose = require("mongoose");

const videoSchema =
new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },

    videoUrl:{
        type:String,
        required:true
    },

    uploadedAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model(
"Video",
videoSchema
);


