import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'


const protect = asyncHandler(async (req, res, next) => {
  console.log("Enter to token");
  let token;

  token = req.cookies.jwt;
console.log(token,"token");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userid).select('-password');
      console.log(req.user,"Userr");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };