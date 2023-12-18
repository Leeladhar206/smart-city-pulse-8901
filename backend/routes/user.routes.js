const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.model");
const { BlackListModel } = require("../model/blacklist.model");

const userRouter = express.Router();
// <<<<<<< fp11_100-day_5
// userRouter.post("/registration",async(req,res)=>{
//   const{email,password,confirmPassword,userName}=req.body
//   console.log(req.body)
// try {
//   const user= await userModel.findOne({email})
//   console.log(user)
//   if(user){
//       res.status(400).send({ message: "User already exists" });
//   }
//   else{
//       if(password===confirmPassword){
//            bcrypt.hash(password, 5,async(err,hash)=>{
//           console.log(hash)
//           if(hash){
//           const User= new userModel({email,userName,password:hash})
//           await User.save()
//           res.status(200).send({ message: "User created" });
//           }
//           if(err){
//               res.send(err)
//           }
//           })
//       }
//       else{
//       res.status(400).send({ message: 'Password does not match.' })
//       }
// =======

// userRouter.post("/registration",async(req,res)=>{
//   const{email,password,confirmPassword,userName}=req.body
//   console.log(req.body)
// try {
//   const user= await userModel.findOne({email})
//   console.log(user)
//   if(user){
//       res.status(400).send({ message: "User already exists" });
//   }
//   else{
//       if(password===confirmPassword){
//            bcrypt.hash(password, 5,async(err,hash)=>{
//           console.log(hash)
//           if(hash){
//           const User= new userModel({email,userName,password:hash})
//           await User.save()
//           res.status(200).send({ message: "User created" });
//           }
//           if(err){
//               res.send(err)
//           }
//           })

//       }
//       else{
//       res.status(400).send({ message: 'Password does not match.' })
//       }

//   }
// }
// catch (error) {
//    res.status(400).send(error)
// }
// })

// userRouter.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const user = await userModel.findOne({ email });
//       if (user) {
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (err) {
//             res.status(400).send({ message: "Invalid credentials" });
//           } else {
//             if (!result) {
//               res.status(401).send({ message: "Wrong password" });
//             } else {
//               const token = jwt.sign({ userID: user._id, userName: user.userName }, "Aspireo", { expiresIn: "1d" }); // Token expiration added
//               res.status(200).send({ message: "Login successful", token, user });
//             }
//           }
//         });
//       } else {
//         res.status(400).send({ message: "Invalid credentials" });
//       }
//     } catch (error) {
//       res.status(500).send({ message: "Internal Server Error" });
//     }
//   });

// userRouter.post("/login", async (req, res) => {
//   // console.log(req.body)
//   const { email, password } = req.body;
//   try {
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(200).send({ message: "Invalid credentials" });
//     }
//     xonsole.log(user)
//     bcrypt.compare(password, user.password, (err, result) => {
// if (err) {
//   return res.status(200).send({ message: "Invalid credentials" });
// }

//       if (result) {
//         const token = jwt.sign({ userID: user._id, userName: user.userName }, "Aspireo", { expiresIn: "1d" });
//         return res.status(200).send({ message: "Login successful", token, user });
//       }
//       console.log(result)
//       return res.status(200).send({ message: "Wrong password" });
//     });
//   } catch (error) {
//     return res.status(400).send({ message: "Internal Server Error" });
//   }
// });

//   userRouter.get("/logout", async (req, res) => {
//     const token= req.headers.authorization?.split(' ')[1] || null;

//     try {

//         if(token){
//             const loggedOut= await BlackListModel.updateOne({}, {$addToSet: {blackList: token}},{
//                 upsert:true
//             });

//             res.status(200).send({"msg":"LoggedOut Successfully", loggedOut});
//         }

//     }catch(error){
//         res.status(400).send({"logout error":error.message});
//     }

//   });

require ("dotenv").config()

userRouter.post("/registration", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const existinguser = await userModel.findOne({ email });

    if (existinguser) {
      return res.status(200).send({ message: "User already exists" });
    }

    if (password === confirmPassword) {
      bcrypt.hash(password, 7, async (err, result) => {
        if (err) {
          return res.status(200).send({ message: "Internal Server Error" });
        }

        req.body.password = result;

        const newUser = new userModel(req.body);
        await newUser.save();

        return res.status(200).send({ message: "User created", newUser });
      });
    } else {
      return res.status(400).send({ message: "Password does not match." });
    }
  } catch (error) {
    res.status(400).send({ message: "Internal Server Error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {

    if(email==='admin@gmail.com' && password==="admin"){
      const token = jwt.sign({ userId: process.env.AdminId}, process.env.KEY, {
        expiresIn: "1d",
      });

      console.log(token,"adminlogin")


      if (token) {
        return res
          .status(200)
          .send({ message: "redirects to Admin", token });
      }
      // return res.status(200).send({ message: "redirects to Admin" });
    }

    const existinguser = await userModel.findOne({ email });

    if (!existinguser) {
      return res.status(200).send({ message: "Please register to login!" });
    }

    bcrypt.compare(password, existinguser.password, (err, result) => {
      if (!result) {
        return res.status(200).send({ message: "Enter correct credentials" });
      }

      const token = jwt.sign({ userId: existinguser._id }, process.env.KEY, {
        expiresIn: "1d",
      });

      if (token) {
        return res
          .status(200)
          .send({ message: "Login Successful", token, user: existinguser });
      }
    });
  } catch (error) {
    return res.status(400).send({ message: "Internal Server Error" });
  }
});

userRouter.get("/logout", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1] || null;

  try {
    if (token) {
      const loggedOut = await BlackListModel.updateOne(
        {},
        { $addToSet: { blackList: token } },
        {
          upsert: true,
        }
      );

      res.status(200).send({ message: "LoggedOut Successfully", loggedOut });
    }
  } catch (error) {
    res.status(400).send({ message: "Internal Server Error" });
  }
});

module.exports = { userRouter };
