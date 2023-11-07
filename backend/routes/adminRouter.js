import express from "express";
import { upload } from "../multer/multer.js";
import { adminAuth } from "../controllers/middleware/adminAuthMiddleware.js";
import {
  authAdmin,
  usersList,
  deleteUser,
} from "../controllers/adminController.js";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/auth", authAdmin);

router.get("/usersList", adminAuth, usersList);

router.post("/deleteUser", adminAuth, deleteUser);

router.post("/updateProfile", upload.single("file"), (req, res) => {
  User.findByIdAndUpdate(req.body.id, { profileImage: req.file.filename }).then((data)=>{
    console.log(data,"dataaa");
    res.status(200).json({
        _id:data._id,
        name:data.name,
        email:data.email,
        profileImage:data.profileImage
    })
  })
});

export default router;
