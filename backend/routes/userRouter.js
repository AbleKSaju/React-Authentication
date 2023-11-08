import express from "express";
import { upload } from "../multer/multer.js";

import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userCOntroller.js";
const router = express.Router();
import { protect } from "../controllers/middleware/authMiddleware.js";
import User from "../models/userModel.js";



router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

  router.post("/updateProfile", upload.single("file"), (req, res) => {
    console.log(req.file,"file")
    User.findByIdAndUpdate(req.body.id, { profileImage: req.file.filename }).then(
      (data) => {
        console.log(data, "dataaa");
        res.status(200).json({
          _id: data._id,
          name: data.name,
          email: data.email,
          profileImage: req.file.filename,
        });
      }
    );
  });

export default router;
