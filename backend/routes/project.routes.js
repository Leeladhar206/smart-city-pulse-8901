const express = require("express");
const { ProjectModel } = require("../model/project.model");
const { userModel } = require("../model/user.model");
const { authMiddleware } = require("../middlewares/auth.middleware");

const projectRouter = express.Router();

projectRouter.use(authMiddleware);

projectRouter.get("/get", async (req, res) => {
  try {
    const userId = req.body.userId;
    // console.log(userId);

    const projects = await ProjectModel.find({ colleborators: userId });

    if (projects.length > 0) {
      return res.status(200).send({ msg: "colleborators", projects: projects });
    }
    return res.status(200).send({ msg: "Not Found" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});
projectRouter.get("/allusers", async (req, res) => {
  try {
    const users = await userModel.find({});

    if (users.length > 0) {
      return res.status(200).send({ msg: "colleborators", users: users });
    }
    return res.status(200).send({ msg: "Not Found" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

projectRouter.post("/searchCollab", async (req, res) => {
  try {
    const { emailQuery } = req.body;

    const users = await userModel.find(
      { email: { $regex: new RegExp(emailQuery, "i") } },
      { email: 1, _id: 1 }
    );

    if (users.length > 0) {
      return res
        .status(200)
        .send({ msg: "colleborators", Colleborators: users });
    }
    return res.status(200).send({ msg: "Not Found" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

// projectRouter.post('/addCollab/:projectId', async (req, res) => {

//   try {
//     const { projectId } = req.params;
//     const { collaboratorId } = req.body;

//     const updatedProject = await ProjectModel.findByIdAndUpdate(
//       projectId,
//       { $push: { collaborators: collaboratorId } },
//       { new: true }
//     );

//     if(updatedProject){
//         return res.status(200).send({"msg":"colleborators added","Colleborator":updatedProject});
//     }

//     return res.status(200).send({"msg":"colleborators Id not added"});

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

projectRouter.patch("/update/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;

    const { colleborators, tasks } = req.body;
    const updated = { colleborators, tasks };
    console.log(updated, req.body, projectId);

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.body._id,
      updated,
      { new: true }
    );

    if (updatedProject) {
      return res
        .status(200)
        .send({ msg: "Project Updated", Project: updatedProject });
    }

    return res.status(200).send({ msg: "Project not updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

projectRouter.patch("/updateChat/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;

    const { chats } = req.body;
    const updated = { chats };
    console.log(updated, req.body, projectId);

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.body._id,
      updated,
      { new: true }
    );

    if (updatedProject) {
      return res
        .status(200)
        .send({ msg: "Project Updated", Project: updatedProject });
    }

    return res.status(200).send({ msg: "Project not updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

projectRouter.post("/addProject", async (req, res) => {
  try {
    console.log(req.body);
    const newProject = new ProjectModel(req.body);

    const savedProject = await newProject.save();

    res
      .status(200)
      .send({ message: "Project added successfully", project: savedProject });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

module.exports = { projectRouter };

// const {projectModel}=require("../model/projectModel");

// const express=require("express");
// const projectRouter=express.Router();

// const {auth}=require("../middleware/auth")

// projectRouter.use(auth);

// projectRouter.post("/add",async(req,res)=>{
// console.log(req.body)
//     try{
//     const project=new projectModel(req.body);
//     await project.save();
//     res.status(200).send(project)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }

// })

// projectRouter.get("/",async(req,res)=>{
//     try{
//     const project=await projectModel.find();

//     res.status(200).send(project)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }

// })

// projectRouter.get("/:id",async(req,res)=>{
//     const {id}=req.params
//     try{
//      let project=await projectModel.findOne({_id:id})

//     res.status(200).send(project)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }

// })
// projectRouter.patch("/update/:id",async(req,res)=>{
//     const {id}=req.params
//     try{
//         console.log(id)
//     await projectModel.findByIdAndUpdate({_id:id},req.body)

//     res.status(200).send({msg:`project with ${id} updated`})
//     }
//     catch(err){
//         res.status(400).send(err)
//     }

// })

// module.exports={projectRouter}
