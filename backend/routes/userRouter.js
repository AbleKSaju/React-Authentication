import express from "express";
import { upload } from "../multer/multer.js";
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile, updateProfile} from "../controllers/userCOntroller.js";
import { protect } from "../controllers/middleware/authMiddleware.js";
import User from "../models/userModel.js";
const router = express.Router();


router.post("/", registerUser);

router.post("/auth", authUser);

router.post("/logoutUser", logoutUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

router.post("/updateProfile", upload.single("file"),updateProfile);

export default router;
