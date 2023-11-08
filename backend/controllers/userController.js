import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateTokens.js";
import expressAsyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profileImage:user.profileImage
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  console.log("ENter To Logout");
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  console.log("ENTER TO GET USER PROFILE");
  console.log(req.user,"USER");
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  console.log("ENTER TO UPDATE USER");
  const {  email } = req.body;
  const user = await User.findById(req.body._id);
  console.log(user,"userrr");
  const alreadyExist = await User.find({
    $and: [{ _id: { $ne: user._id } }, { $or: [ { email }] }],
  });
  if (alreadyExist.length == 0) {
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        profileImage: user.profileImage,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } else {
    res.status(404);
    throw new Error("User Exist");
  }
});
const updateProfile=asyncHandler(async(req, res) => {
  console.log(req.file,"file")
  await User.findByIdAndUpdate(req.body.id, { profileImage: req.file.filename }).then(
    (data) => {
      console.log(data, "dataaa");
      res.status(200).json({
        _id: data._id,
        name: data.name,
        email: data.email,
        profileImage: req.file.filename,
      });
    }
  )
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateProfile
};
