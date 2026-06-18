const mongoose =
require("mongoose");

const commentSchema =
new mongoose.Schema({

userId:String,

videoId:String,

comment:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports =
mongoose.model(
"Comment",
commentSchema
);

