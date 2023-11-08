import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (token) {
    console.log(token, "tok");
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded, "code");

      req.user = await User.findById(decoded.userid)
        .select("-password")
        .lean()
        .then((data) => {
          if (data) {
            next();
          } else {
            res.status(401);
            throw new Error("UserNot Found");
          }
        });

    } catch (error) {
      console.log("ER!");
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    console.log("ER@");
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
