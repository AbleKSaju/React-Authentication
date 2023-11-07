

    import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateTokens.js";
import expressAsyncHandler from "express-async-handler";


const authAdmin = asyncHandler(async (req, res) => {
    console.log("Enter to admin");
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    console.log(user, "useree");
    if (user.isAdmin) {
      console.log("Enter to Admin");
      if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
  
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(401);
        throw new Error("Invalid email or password");
      }
    } else {
      res.status(401);
      throw new Error("You are Not Admin");
    }
  });
  
const usersList= asyncHandler(async(req,res)=>{
    try{
        console.log("Entered to USERSSSSS");
        const userData = await User.find({isAdmin:false});
        Object.freeze(userData);
        res.status(200).json({data:userData});
    }catch(err){
        throw new Error("Error");
    }

})

export {
  authAdmin,
  usersList

};
