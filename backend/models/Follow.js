const mongoose =
require("mongoose");

const followSchema =
new mongoose.Schema({

follower:{
type:String,
required:true
},

following:{
type:String,
required:true
}

});

module.exports =
mongoose.model(
"Follow",
followSchema
);

