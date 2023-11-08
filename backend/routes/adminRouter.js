import express from "express";
import { adminAuth } from "../controllers/middleware/adminAuthMiddleware.js";
import {
  authAdmin,
  usersList,
  deleteUser,
  logoutUser
} from "../controllers/adminController.js";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/auth", authAdmin);

router.get("/usersList", adminAuth, usersList);

router.post("/deleteUser", adminAuth, deleteUser);

router.post("/logout", logoutUser);

router.post("/editUser", (req, res) => {
    console.log("Enter");
    console.log(req.body,'body');
  User.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    email: req.body.email,
  }).lean().then((data)=>{
  console.log(data,"newData");
  res.status(200).json({
    _id: data._id,
    name:data.name,
    email:data.email,
    profileImage: data.profileImage
  })
  })
})

export default router;
