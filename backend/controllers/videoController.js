const Video =
require("../models/Video");

exports.uploadVideo =
async(req,res)=>{

try{

const video =
await Video.create({

userId:req.user.id,

title:req.body.title,

videoUrl:req.file.path

});

res.status(201).json(video);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

