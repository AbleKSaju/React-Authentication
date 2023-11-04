import express from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userCOntroller.js";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

 router.post('/',registerUser) 
 router.post("/auth", authUser);
 router.post('/logout',logoutUser)
 router.get('/profile',protect,getUserProfile)
 router.get('/sample',(req,res)=>{
  res.json({message:"Nop"})
 })
//  router.put('/profile',upload.single('file'),protect,updateUserProfile)

export default router;
