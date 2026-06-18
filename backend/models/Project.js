const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        default:""
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model(
"Project",
projectSchema
);



