const express = require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { userModel } = require("../model/user.model");
const { tokenModel } = require("../model/blacklist.model");

const userRouter = express.Router();
app.post("/registration",async(req,res)=>{
  const{email,password,confirmPassword,name}=req.body
  console.log(req.body)
try {
  const user= await userModel.findOne({email})
  console.log(user)
  if(user){
      res.status(400).send({ message: "User already exists" });
  }
  else{
      if(password===confirmPassword){
           bcrypt.hash(password, 5,async(err,hash)=>{
          console.log(hash)
          if(hash){
          const User= new userModel({email,name,password:hash})
          await User.save()
          res.status(200).send({ message: "User created" });
          }
          if(err){
              res.send(err)
          }
          })
      }
      else{
      res.status(400).send({ message: 'Password does not match.' })
      }
     
  }
}
catch (error) {
   res.status(400).send(error)
}
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            res.status(400).send({ message: "Invalid credentials" });
          } else {
            if (!result) {
              res.status(401).send({ message: "Wrong password" });
            } else {
              const token = jwt.sign({ userID: user._id, userName: user.userName }, "Aspireo", { expiresIn: "1h" }); // Token expiration added
              res.status(200).send({ message: "Login successful", token });
            }
          }
        });
      } else {
        res.status(400).send({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  
  userRouter.get("/logout", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
      if (token) {
        const loggedOut= await tokenModel.updateOne({}, {$addToSet: {blackList: token}},{
          upsert:true
      });
        res.status(200).send({ message: "Logout successful" });
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
  

module.exports = { userRouter };
