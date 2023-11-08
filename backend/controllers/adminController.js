

    import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateTokens.js";
import expressAsyncHandler from "express-async-handler";


const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    console.log(user,"user");
    if (user.isAdmin=='true') {
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
      res.status(400)
      throw new Error("You are Not Admin");
    }
  })
  
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

const deleteUser=asyncHandler(async(req,res)=>{
try {
  console.log("Delete");
  User.findOneAndDelete({createdAt:req.body.id}).lean().then((data)=>{
    console.log(data);
    res.status(200).json({data});
  })
} catch (err) {
  throw new Error("User Not Found");
}  
})

const editUser= asyncHandler(async(req, res) => {
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

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

export {
  authAdmin,
  usersList,
  deleteUser,
  editUser,
  logoutUser

};
