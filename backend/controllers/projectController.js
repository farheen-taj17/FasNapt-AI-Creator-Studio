const Project =
require("../models/Project");

exports.createProject =
async(req,res)=>{

try{

const project =
await Project.create({

userId:req.user.id,

title:req.body.title,

description:req.body.description

});

res.status(201).json(project);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.getProjects =
async(req,res)=>{

try{

const projects =
await Project.find({

userId:req.user.id

});

res.json(projects);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};


