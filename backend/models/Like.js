const mongoose =
require("mongoose");

const likeSchema =
new mongoose.Schema({

userId:String,

videoId:String

});

module.exports =
mongoose.model(
"Like",
likeSchema
);


