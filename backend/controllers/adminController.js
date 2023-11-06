import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (user.isAdmin) {
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
  
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  }else{
    res.status(401);
    throw new Error('You are Not Admin');
  }
})
  
 
  export {
    authAdmin,
  }