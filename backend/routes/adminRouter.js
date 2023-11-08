import express from "express";
import { adminAuth } from "../controllers/middleware/adminAuthMiddleware.js";
import {
  authAdmin,
  usersList,
  deleteUser,
  logoutUser,
  editUser
} from "../controllers/adminController.js";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/auth", authAdmin);

router.get("/usersList", adminAuth, usersList);

router.post("/deleteUser", adminAuth, deleteUser);

router.post("/editUser", editUser)

router.post("/logout", logoutUser);


export default router;
